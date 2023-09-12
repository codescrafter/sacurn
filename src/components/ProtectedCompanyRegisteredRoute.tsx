import cookies from 'js-cookie';
import { Fragment, ReactNode, useRef, useState } from 'react';
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
  const [isValidFinished, setInValidFinished] = useState(false);
  const isUpdatingCompany = useRef<boolean>(false);

  if (!authResultString) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }

  const authResult = JSON.parse(authResultString) as AuthResult;

  const hasCompanyStatus = company && company.status && company.status in CompanyStatus;

  if (!hasCompanyStatus && authResult.companyId && !isUpdatingCompany.current) {
    isUpdatingCompany.current = true;
    getCompany(authResult.companyId).then((company) => {
      if (company?.status !== CompanyStatus.PassReview) {
        navigate('/company-registration');
      }
      setInValidFinished(true);
    });
  }

  if (isValidFinished) {
    return <Fragment>{children}</Fragment>;
  }
};
