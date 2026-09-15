import './App.css'
import { Routes, Route } from 'react-router'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { CatalogPage } from './pages/CatalogPage'
import { DeliveryPage } from './pages/DeliveryPage'
import { AboutPage } from './pages/AboutPage'
import { ContactsPage } from './pages/ContactsPage'
import { CartPage } from './pages/CartPage'
import { NotFoundPage } from './pages/NotFoundPage'


function App() {
 
  return (
    <>
     <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/delivery' element={<DeliveryPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
