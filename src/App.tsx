import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Cart from '@/pages/Cart';
import Certificate from '@/pages/Certificate';
import CompanyRegistration from '@/pages/CompanyRegistration';
// import Dashboard from '@/pages/Dashboard';
import HistoricalOrder from '@/pages/HistoricalOrder';
import Login from '@/pages/Login';
// import NewsPage from '@/pages/NewsPage';
import OperationRecord from '@/pages/OperationRecord';
import OperatorSignUp from '@/pages/OperatorSignup';
import ProductDetails from '@/pages/ProductDetails';
import Products from '@/pages/Products';
import Sales from '@/pages/Sales';
import WishList from '@/pages/Wishlist';

import Modal from './components/Modal/UniversalModal';
import ProductDetail from './components/ProductDetail';
import { ProtectedAuthRoute } from './components/ProtectedAuthRoute';
import { ProtectedCompanyRegisteredRoute } from './components/ProtectedCompanyRegisteredRoute';
import PasswordReset from './pages/PasswordReset';
// import AllProducts from './pages/AllProducts';
import PaymentInformation from './pages/PaymentInformation';
import AccountCredit from './pages/v2/AccountCredit';
import AccountInformation from './pages/v2/AccountInformation';
import CardConfirmationPage from './pages/v2/CardConfirmationPage';
import CardReIssue from './pages/v2/CardReIssue';
import CardRenewal from './pages/v2/CardRenewal';
import CardRevoked from './pages/v2/CardRevoked';
import CartV2 from './pages/v2/CartV2';
import EnterpriseAccount from './pages/v2/EnterpriseAccount';
import MemberCenter from './pages/v2/MemberCenter';
import MemberProfile from './pages/v2/MemberProfile';
import MembershipUpgrade from './pages/v2/MembershipUpgrade';
import Permission from './pages/v2/Permission';
import PlatformUsage from './pages/v2/PlatformUsage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  // routes for v2
  {
    path: '/v2',
    element: <MemberCenter />
  },
  {
    path: '/v2/permission-setting',
    element: <Permission />
  },
  {
    path: '/v2/platform-use',
    element: <PlatformUsage />
  },
  {
    path: '/v2/enterprise-account',
    element: <EnterpriseAccount />
  },
  {
    path: '/v2/card-renewal',
    element: <CardRenewal />
  },
  {
    path: '/v2/cart',
    element: <CartV2 />
  },
  {
    path: '/v2/membership-upgrade',
    element: <MembershipUpgrade />
  },
  {
    path: '/v2/card-reissue',
    element: <CardReIssue />
  },
  {
    path: '/v2/card-revoked',
    element: <CardRevoked />
  },
  {
    path: '/v2/account-information',
    element: <AccountInformation />
  },
  {
    path: '/v2/profile-update',
    element: <MemberProfile />
  },
  {
    path: '/v2/account-credit',
    element: <AccountCredit />
  },
  {
    path: '/v2/card-confirmation-page',
    element: <CardConfirmationPage />
  },
  {
    path: '/',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <Products />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    ) //<Dashboard />
  },
  // {
  //   path: '/product-list',
  //   element: <AllProducts />
  // },
  {
    path: '/product-carbon/:carbonId',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <ProductDetail />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/product-detail/:id',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <ProductDetails />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  // {
  //   path: '/latest-news',
  //   element: <NewsPage />
  // },
  {
    path: '/operation-record',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <OperationRecord />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/historical-order',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <HistoricalOrder />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/cart',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <Cart />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/sales',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <Sales />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/sign-up',
    element: <OperatorSignUp />
  },
  {
    path: '/company-registration',
    element: (
      <ProtectedAuthRoute>
        <CompanyRegistration />
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/wishlist',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <WishList />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/certificate/:carbonId',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <Certificate />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/payment-information',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <PaymentInformation />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/password-reset',
    element: <PasswordReset />
  }
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Modal />
    </div>
  );
}
