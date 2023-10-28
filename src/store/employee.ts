import { create } from 'zustand';

import { Employee, Group } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { runTask } from './modal';

type EmployeeState = {
  roleList: Group[];
  employeeList: Employee[];
  getRoleList: (page?: number) => void;
  createEmployee: (...args: Parameters<typeof apiClient.company.companyEmployeeCreate>) => void;
  getEmployeeList: (page?: number) => void;
};

export const useEmployeeStore = create<EmployeeState>((set, get) => ({
  roleList: [],
  employeeList: [],
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
  }
}));
