import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProductDetail from '@/components/ProductDetail';
import AllProducts from '@/pages/AllProducts';
import Cart from '@/pages/Cart';
import CompanyRegistration from '@/pages/CompanyRegistration';
import Dashboard from '@/pages/Dashboard';
import HistoricalOrder from '@/pages/HistoricalOrder';
import Login from '@/pages/Login';
import NewsPage from '@/pages/NewsPage';
import OperationRecord from '@/pages/OperationRecord';
import OperatorSignUp from '@/pages/OperatorSignup';
import Sales from '@/pages/Sales';
import WishList from '@/pages/Wishlist';

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
    element: <AllProducts />
  },
  {
    path: '/product-detail/id',
    element: <ProductDetail />
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
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
