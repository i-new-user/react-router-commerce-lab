import './App.css'
import { Navigate, Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CatalogPage } from './pages/CatalogPage'
import { DeliveryPage } from './pages/DeliveryPage'
import { AboutPage } from './pages/AboutPage'
import { ContactsPage } from './pages/ContactsPage'
import { CartPage } from './pages/CartPage'

import { ProductPage } from './pages/ProductPage'

import { ShopLayout } from './layouts/ShopLayout'

import { NotFoundPage } from './pages/NotFoundPage'


function App() {

  return (
      <Routes>
        <Route element={<ShopLayout/>}>
          <Route index element={<HomePage/>} />

          <Route path='catalog'>
            <Route index element={<CatalogPage/>} />
            <Route path=':productId' element={<ProductPage/>} />
          </Route>

          <Route path="shop" element={ <Navigate to="/catalog" replace/>}/>

          <Route path='delivery' element={<DeliveryPage/>} />
          <Route path='about' element={<AboutPage />}/>
          <Route path='contacts' element={<ContactsPage/>} />
          <Route path='cart' element={<CartPage/>} />

          <Route path='*' element={<NotFoundPage/>} />
        </Route>
      </Routes>
  )
}

export default App
