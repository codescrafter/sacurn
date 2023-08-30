import './App.css';

import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Cart from '@/pages/Cart';
import CompanyRegistration from '@/pages/CompanyRegistration';
import Dashboard from '@/pages/Dashboard';
import HistoricalOrder from '@/pages/HistoricalOrder';
import Login from '@/pages/Login';
import NewsPage from '@/pages/NewsPage';
import OperationRecord from '@/pages/OperationRecord';
import OperatorSignUp from '@/pages/OperatorSignup';
import ProductDetails from '@/pages/ProductDetails';
import Products from '@/pages/Products';
import Sales from '@/pages/Sales';
import WishList from '@/pages/Wishlist';

import apiClient from './libs/api/client';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/all-products',
    element: <Products />
  },
  {
    path: '/product-detail/:id',
    element: <ProductDetails />
  },
  {
    path: '/latest-news',
    element: <NewsPage />
  },
  {
    path: '/operation-record',
    element: <OperationRecord />
  },
  {
    path: '/historical-order',
    element: <HistoricalOrder />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/sales',
    element: <Sales />
  },
  {
    path: '/sign-up',
    element: <OperatorSignUp />
  },
  {
    path: '/company-registration',
    element: <CompanyRegistration />
  },
  {
    path: '/wishlist',
    element: <WishList />
  }
]);

export default function App() {
  useEffect(() => {
    apiClient.trade.tradeCartDestroy(123);
  }, []);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
