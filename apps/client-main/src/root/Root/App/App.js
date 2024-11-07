import Home from '@pages/Home/Home.js';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import MainLayout from './MainLayout/MainLayout.js';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '*',
        element: <Navigate to="/" replace />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
