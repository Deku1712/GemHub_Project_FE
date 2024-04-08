
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductDetailPage'
import Banner from './components/Banner'
import BreadcrumbsJewery from './components/Breadcrumbs'

function App() {

  return (
    <div className=' bg-white max-w-[1920px] h-[200vh] mx-auto '>
      <Header/>
      <Banner/>
      <BreadcrumbsJewery/>
      <ProductPage/>
    </div>
  )
}

export default App
