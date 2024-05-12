import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import Shop from './components/Shop'
import ProductPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
function Mainlayout() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path='/posts' element={<PostPage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/products/:id' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  )
}

export default Mainlayout