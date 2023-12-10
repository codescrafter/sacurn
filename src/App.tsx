import ModalContainer from 'react-modal-promise';
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
import PasswordRecoveryForm from './pages/PasswordRecoveryForm';
// import AllProducts from './pages/AllProducts';
import PaymentInformation from './pages/PaymentInformation';
import AccountCredit from './pages/v2/AccountCredit';
import AccountInformation from './pages/v2/AccountInformation';
import CardReIssue from './pages/v2/CardReIssue';
import CardRenewal from './pages/v2/CardRenewal';
import CardRevoked from './pages/v2/CardRevoked';
import CartV2 from './pages/v2/CartV2';
import EnterpriseAccount from './pages/v2/EnterpriseAccount';
import MemberCenter from './pages/v2/MemberCenter';
import MemberProfile from './pages/v2/MemberProfile';
import MembershipUpgrade from './pages/v2/MembershipUpgrade';
import PasswordResetNewPass from './pages/v2/PasswordResetNewPass';
import PlatformUsage from './pages/v2/PlatformUsage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  // routes for v2
  {
    path: '/v2',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <MemberCenter />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/v2/operating-instruction',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <PlatformUsage />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/v2/enterprise-account',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <EnterpriseAccount />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/v2/card-renewal',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <CardRenewal />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/v2/cart',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <CartV2 />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/v2/membership-upgrade',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <MembershipUpgrade />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/v2/card-reissue',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <CardReIssue />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/v2/card-revoked',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <CardRevoked />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/v2/account-information',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <AccountInformation />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/v2/profile-update/:id',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <MemberProfile />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
  },
  {
    path: '/v2/account-carbon-credit',
    element: (
      <ProtectedAuthRoute>
        <ProtectedCompanyRegisteredRoute>
          <AccountCredit />
        </ProtectedCompanyRegisteredRoute>
      </ProtectedAuthRoute>
    )
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
    path: '/password-recovery',
    element: <PasswordRecoveryForm />
  },
  {
    path: '/password-recovery/new-password',
    element: <PasswordResetNewPass />
  }
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Modal />
      <ModalContainer />
    </div>
  );
}
