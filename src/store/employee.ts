import { create } from 'zustand';

import { Employee, Group } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { PatchedEmployeesPatch } from '../libs/api';
import { runTask } from './modal';

type EmployeeState = {
  roleList: Group[];
  employeeList: Employee[];
  getRoleList: (page?: number) => void;
  createEmployee: (...args: Parameters<typeof apiClient.company.companyEmployeeCreate>) => void;
  getEmployeeList: (page?: number) => void;
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
    await runTask(async () => {
      const response = await apiClient.company.companyGroupList(page);
      set({ roleList: response.results });
    });
  },
  createEmployee: async (...args) => {
    await runTask(async () => {
      await apiClient.company.companyEmployeeCreate(...args);
      await get().getEmployeeList();
    });
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
      set({ selectedEmployee: response });
    });
  },
  deleteEmployeeAccount: async (...args) => {
    await runTask(async () => {
      await apiClient.company.companyEmployeeDestroy(...args);
    });
  }
}));
