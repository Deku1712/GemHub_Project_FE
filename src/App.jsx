
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductDetailPage'
import Banner from './components/Banner'
import BreadcrumbsJewery from './components/Breadcrumbs'
import ShopPage from './pages/ShopPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { animateScroll as scroll } from 'react-scroll'
import { Button, Tooltip } from 'flowbite-react'
import { useEffect, useState } from 'react'
import PostPage from './pages/PostPage'
import ComponentBreadCum from './components/Breadcrumb'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './components/Shop'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Mainlayout from './mainlayout'
import AddressPage from './pages/AddressPage'

import PostDetailPage from './pages/PostDetailPage'
import { getTokenFromLocalStorage } from './api/localStorage'
import { useDispatch } from 'react-redux'
import { loginUser, userLogin } from './redux/userSlice'
import MainLayout from './MainLayout copy'
import CheckoutPage from './pages/CheckoutPage'
import Result from './pages/Result'
import AdminPage from './pages/AdminPage'
import DashBoard from './pages/AdminPage/DashBoard'


function App() {

  const dispatch = useDispatch()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop(50, {
      duration: 1000,
      smooth: true
    })
  }

  useEffect(() => {
    const checkLogin = getTokenFromLocalStorage()
    if (checkLogin) {
      dispatch(userLogin(checkLogin))
    }
  }, [])


  return (

    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path='/posts' element={<PostPage />} />
        <Route path='/postDetail/:id' element={<PostDetailPage/>} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/products/:id' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/address' element={<AddressPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path='/checkout' element ={<CheckoutPage/>}/>
      <Route path='/result' element={<Result/>}/>
      <Route path='/admin/*' element={<AdminPage/>}>
        <Route path='dashBoard' element={<DashBoard/>} />
      </Route>
    </Routes>


  )
}

export default App
