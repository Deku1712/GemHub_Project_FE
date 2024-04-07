
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductDetailPage'
import Banner from './components/Banner'

function App() {

  return (
    <div className=' bg-white max-w-[1920px] h-[200vh] mx-auto '>
      <Header/>
      <Banner/>
      <ProductPage/>
    </div>
  )
}

export default App
