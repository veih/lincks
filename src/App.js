
import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Error />
  }
])

export {router};
