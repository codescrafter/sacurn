import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Cart from '@/pages/Cart';
import Dashboard from '@/pages/Dashboard';
import HistoricalOrder from '@/pages/HistoricalOrder';
import Login from '@/pages/Login';
import NewsPage from '@/pages/NewsPage';
import OperationRecord from '@/pages/OperationRecord';
import ProductDetails from '@/pages/ProductDetails';
import Products from '@/pages/Products';
import Sales from '@/pages/Sales';

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
  }
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
