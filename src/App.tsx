import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/**Home */
import Home from '@/pages/Home'

/**Admin */
import AdminLogin from './pages/admin/AdminLogin'
import AdminBoletas from './pages/admin/AdminBoletas'

/**Cajero */
import CajeroLayout from './layouts/CajeroLayout'
import CajeroHome from './pages/cajero/CajeroHome'
import CajeroPedidos from './pages/cajero/CajeroPedidos'
import CajeroProductos from './pages/cajero/CajeroProductos'
import CajeroCompras from './pages/cajero/CajeroCompras'

/**Mesero */
import MeseroLayout from './layouts/MeseroLayout'
import MeseroHome from './pages/mesero/MeseroHome'
import MeseroPedidos from './pages/mesero/MeseroPedidos'
import MeseroCompras from './pages/mesero/MeseroCompras'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/admin',
    element: <AdminLogin />,
  },
  {
    path: '/admin/boletas',
    element: <AdminBoletas />,
  },
  {
    path: '/cajero',
    element: <CajeroLayout />,
    children: [
      {
        path: '/cajero',
        element: <CajeroHome />,
      },
      {
        path: '/cajero/pedidos',
        element: <CajeroPedidos />,
      },
      {
        path: '/cajero/productos',
        element: <CajeroProductos />,
      },
      {
        path: '/cajero/compras',
        element: <CajeroCompras />,
      },
    ],
  },
  {
    path: '/mesero',
    element: <MeseroLayout />,
    children: [
      {
        path: '/mesero',
        element: <MeseroHome />,
      },
      {
        path: '/mesero/pedidos',
        element: <MeseroPedidos />,
      },
      {
        path: '/mesero/compras',
        element: <MeseroCompras />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
