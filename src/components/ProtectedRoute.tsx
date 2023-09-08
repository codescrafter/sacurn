import cookies from 'js-cookie';
import { ReactNode, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useCompanyStore } from '@/store/company';
// import { ModalType, useModalStore } from '@/store/modal';
import { AuthResult, COOKIE_AUTH_NAME } from '@/store/user';
// import { CompanyStatus } from '@/type';

type ProtectedRoute = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRoute) => {
  const authResultString = cookies.get(COOKIE_AUTH_NAME);
  const company = useCompanyStore((state) => state.company);
  const getCompany = useCompanyStore((state) => state.getCompany);

  if (!authResultString) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }

  const authResult = JSON.parse(authResultString) as AuthResult;

  if (!authResult.isSuccess) {
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    if (company === null && authResult.companyId) {
      getCompany(authResult.companyId);
    }
  }, []);

  return children;
};
