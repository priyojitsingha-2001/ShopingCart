import { useContext } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
//layout
import RootLayout from './layouts/RootLayout'
//pages
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
//context
import { cartContext } from './context/CartContext'

export default function App() {
  const cart = useContext(cartContext)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}
