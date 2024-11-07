import Home from '@pages/Home/Home.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './MainLayout/MainLayout.js';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
