import './App.css';

import { useEffect } from 'react';
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
import { ProtectedRoute } from './components/ProtectedRoute';
// import AllProducts from './pages/AllProducts';
import PaymentInformation from './pages/PaymentInformation';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Products />
      </ProtectedRoute>
    ) //<Dashboard />
  },
  // {
  //   path: '/product-list',
  //   element: <AllProducts />
  // },
  {
    path: '/product-carbon/:carbonId',
    element: (
      <ProtectedRoute>
        <ProductDetail />
      </ProtectedRoute>
    )
  },
  {
    path: '/product-list',
    element: <AllProducts />
  },
  {
    path: '/carbon-product-cart',
    element: <ProductDetail />
  },
  {
    path: '/product-detail/:id',
    element: (
      <ProtectedRoute>
        <ProductDetails />
      </ProtectedRoute>
    )
  },
  // {
  //   path: '/latest-news',
  //   element: <NewsPage />
  // },
  {
    path: '/operation-record',
    element: (
      <ProtectedRoute>
        <OperationRecord />
      </ProtectedRoute>
    )
  },
  {
    path: '/historical-order',
    element: (
      <ProtectedRoute>
        <HistoricalOrder />
      </ProtectedRoute>
    )
  },
  {
    path: '/cart',
    element: (
      <ProtectedRoute>
        <Cart />
      </ProtectedRoute>
    )
  },
  {
    path: '/sales',
    element: (
      <ProtectedRoute>
        <Sales />
      </ProtectedRoute>
    )
  },
  {
    path: '/sign-up',
    element: (
      <ProtectedRoute>
        <OperatorSignUp />
      </ProtectedRoute>
    )
  },
  {
    path: '/company-registration',
    element: (
      <ProtectedRoute>
        <CompanyRegistration />
      </ProtectedRoute>
    )
  },
  {
    path: '/wishlist',
    element: (
      <ProtectedRoute>
        <WishList />
      </ProtectedRoute>
    )
  },
  {
    path: '/certificate/:carbonId',
    element: (
      <ProtectedRoute>
        <Certificate />
      </ProtectedRoute>
    )
  },
  {
    path: '/payment-information',
    element: (
      <ProtectedRoute>
        <PaymentInformation />
      </ProtectedRoute>
    )
  }
]);

export default function App() {
  useEffect(() => {
    console.log('Starting');
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
      <Modal />
    </div>
  );
}