import cookies from 'js-cookie';
import { ReactNode, useCallback, useRef, useState } from 'react';
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
  const [isCheckedCompanyStatus, setIsCheckCompanyStatus] = useState(false);
  const isUpdatingCompany = useRef<boolean>(false);

  const onCheckCompanyStatus = useCallback((companyStatus: number | undefined) => {
    if (companyStatus !== CompanyStatus.PassReview) {
      navigate('/company-registration');
    } else {
      setIsCheckCompanyStatus(true);
    }
  }, []);

  if (!isCheckedCompanyStatus) {
    if (company && company.status && company.status in CompanyStatus) {
      onCheckCompanyStatus(company.status);
    }

    if (!authResultString) {
      // user is not authenticated
      return <Navigate to="/login" />;
    }

    const authResult = JSON.parse(authResultString) as AuthResult;
    if (!authResult.companyId) {
      return <Navigate to="/company-registration" />;
    } else {
      if (!isUpdatingCompany.current) {
        isUpdatingCompany.current = true;
        getCompany(authResult.companyId).then((company) => {
          onCheckCompanyStatus(company?.status);
        });
      }
    }
  } else {
    return children;
  }
};
