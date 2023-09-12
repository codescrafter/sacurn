import cookies from 'js-cookie';
import { Fragment, ReactNode } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useCompanyStore } from '@/store/company';
import { AuthResult, COOKIE_AUTH_NAME } from '@/store/user';
import { CompanyStatus } from '@/type';

type ProtectedCompanyRegisteredRoute = {
  children: ReactNode;
};

export const ProtectedCompanyRegisteredRoute = ({ children }: ProtectedCompanyRegisteredRoute) => {
  const authResultString = cookies.get(COOKIE_AUTH_NAME);
  const company = useCompanyStore((state) => state.company);
  const getCompany = useCompanyStore((state) => state.getCompany);
  const navigate = useNavigate();

  if (!authResultString) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }

  const authResult = JSON.parse(authResultString) as AuthResult;

  const hasCompanyStatus = !(Object.entries(company).length === 0 || company.status === undefined);

  if (!hasCompanyStatus && authResult.companyId) {
    getCompany(authResult.companyId).then((company) => {
      console.log(company);
      if (company?.status !== CompanyStatus.PassReview) {
        navigate('/company-registration');
      }
    });
  }

  return <Fragment>{children}</Fragment>;
};
