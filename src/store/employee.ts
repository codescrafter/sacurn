import { create } from 'zustand';

import { Employee, ExtendEmployee, Group } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { PatchedEmployeesPatch } from '../libs/api';
import { runTask } from './modal';

type EmployeeState = {
  roleList: Group[];
  employeeList: Employee[];
  getRoleList: (page?: number) => void;
  createEmployee: (data: FormData) => Promise<boolean>;
  getEmployeeList: (page?: number) => Promise<void>;
  selectedEmployee?: Employee;
  getSelectedEmployee: (...args: Parameters<typeof apiClient.company.companyEmployeeRetrieve>) => void;
  updateEmployeeDetails: (id: number, companyData?: FormData) => void;
  deleteEmployeeAccount: (...args: Parameters<typeof apiClient.company.companyEmployeeDestroy>) => void;
};

export const useEmployeeStore = create<EmployeeState>((set, get) => ({
  roleList: [],
  employeeList: [],
  selectedEmployee: undefined,
  getRoleList: async (page?: number) => {
    console.log('getRoleList');
    await runTask(async () => {
      const response = await apiClient.company.companyGroupList(page);
      set({ roleList: response.results });
    });
  },
  createEmployee: async (data) => {
    let isSuccess = false;
    await runTask(async () => {
      await apiClient.company.companyEmployeeCreate(data as unknown as ExtendEmployee);
      await get().getEmployeeList();
      isSuccess = true;
    });
    return isSuccess;
  },
  getEmployeeList: async (page?: number) => {
    await runTask(async () => {
      const response = await apiClient.company.companyEmployeeList(page);
      set({ employeeList: response.results });
    });
  },
  getSelectedEmployee: async (...args) => {
    await runTask(async () => {
      const response = await apiClient.company.companyEmployeeRetrieve(...args);
      set({ selectedEmployee: response });
    });
  },
  updateEmployeeDetails: async (id, employeeData) => {
    await runTask(async () => {
      const response = await apiClient.company.companyEmployeePartialUpdate(id, employeeData as PatchedEmployeesPatch);
      await get().getEmployeeList();
      set({ selectedEmployee: response });
    });
  },
  deleteEmployeeAccount: async (...args) => {
    await runTask(async () => {
      await apiClient.company.companyEmployeeDestroy(...args);
    });
  }
}));
