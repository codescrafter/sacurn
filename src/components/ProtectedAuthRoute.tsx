import cookies from 'js-cookie';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthResult, COOKIE_AUTH_NAME } from '@/store/user';

type ProtectedAuthRoute = {
  children: ReactNode;
};

export const ProtectedAuthRoute = ({ children }: ProtectedAuthRoute) => {
  const authResultString = cookies.get(COOKIE_AUTH_NAME);

  if (!authResultString) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }

  const authResult = JSON.parse(authResultString) as AuthResult;

  if (!authResult.isSuccess) {
    return <Navigate to="/login" />;
  }

  return children;
};
