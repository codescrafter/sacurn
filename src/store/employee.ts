import { create } from 'zustand';

import { Employee, PatchedEmployeesPatch } from '@/libs/api';
import apiClient from '@/libs/api/client';

import { runTask } from './modal';

type EmployeeState = {
  employeeList: Employee[];
  getEmployeeList: (...args: Parameters<typeof apiClient.company.companyEmployeeList>) => void;
  selectedEmployee?: Employee;
  getSelectedEmployee: (...args: Parameters<typeof apiClient.company.companyEmployeeRetrieve>) => void;
  updateEmployeeDetails: (id: number, companyData?: FormData) => void;
  deleteEmployeeAccount: (...args: Parameters<typeof apiClient.company.companyEmployeeDestroy>) => void;
};

export const useEmployeeStore = create<EmployeeState>((set) => ({
  employeeList: [],
  selectedEmployee: undefined,
  getEmployeeList: async (...args) => {
    await runTask(async () => {
      const response = await apiClient.company.companyEmployeeList(...args);
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
