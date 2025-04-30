import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Home } from './pages/app/Home/home'
import { ResetSenha } from './pages/app/ResetSenha/reset-senha'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      {/* path: '/orders', element: <Orders /> */},
    ],
  },
  {
    path: '/reset',
    element: <ResetSenha />
  },
  {/*
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
    */
  },
])
