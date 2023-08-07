import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import AllProducts from './pages/AllProducts';
import NewsPage from './pages/NewsPage';
import OperationRecord from './pages/OperationRecord';
import HistoricalOrder from './pages/HistoricalOrder';
import Cart from './pages/Cart';
import Sales from './pages/Sales';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/all-products",
    element: <AllProducts />
  },
  {
    path: "/latest-news",
    element: <NewsPage />
  },
  {
    path: "/operation-record",
    element: <OperationRecord />
  },
  {
    path: "/historical-order",
    element: <HistoricalOrder />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/sales",
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

