
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


function App() {


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


  return (
    <div className=' relative bg-white max-w-[1920px]  mx-auto '>
      <Header />
      {/* <HomePage /> */}
      {/* <PostPage/> */}

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path='/posts' element={<PostPage/>} />
      </Routes>


      <Footer />


      {scrollY > 400 && <button className=' fixed animate-transheader bottom-3 right-3 px-3 py-2 rounded-md bg-white text-brown hover:bg-slate-200 transition ease-in-out' onClick={scrollToTop}>
        <FontAwesomeIcon icon={faAngleUp}/>
      </button>}

    </div>
  )
}

export default App
