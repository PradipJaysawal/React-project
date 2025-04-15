import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Contact from './Pages/Contact.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import CategoryProducts from './Pages/CategoryProducts.jsx'
import MyCart from './Pages/MyCart.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer/>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:id' element={<SingleProduct/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/categoryproducts/:id' element={<CategoryProducts/>} />
        <Route path='/mycart' element={<MyCart />}/>
      </Routes>
    </Router>
  </StrictMode>,
)
