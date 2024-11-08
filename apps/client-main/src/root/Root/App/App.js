import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import Home from '../../../pages/Home/Home.js';
import Hotel from '../../../pages/Hotel/Hotel.js';
import MyReservations from '../../../pages/MyReservations/MyReservations.js';
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
        path: '/hotels/:hotelId?',
        element: <Hotel />
      },
      {
        path: '/profile/reservations',
        element: <MyReservations />
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
