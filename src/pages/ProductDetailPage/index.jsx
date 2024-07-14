import Product from '../../components/ProductDetails'
import ProductSupport from '../../components/ProductDetails/ProductSupport'
import BestSeller from '../../components/BestSeller'
import Banner from '../../components/Banner'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import manage from '../../service/manage'
import { useSelector } from 'react-redux'
import { getStateStatus } from '../../redux/cartSlice'

const ProductPage = (props) => {

  const {id} = useParams()
  

  const [product, setProduct] = useState();
  const fetchProduct = async () => {
    try {
      const response = await manage.getProductById(id)
      if (response != null) {
        setProduct(response.data);
        console.log(response.data)
      }
    } catch (error) {
      
      console.error('Error fetching product:', error)
    }
  };
  
  useEffect(() => {
    fetchProduct()
  }, [id])

  return (
    <div className="container mx-auto mt-8 sm:px-4 text-sm text-[#42210b] max-w-[1170px] leading-[1.7]">
      <Product product = {product} />
      <div className="sm:w-full pr-4 pl-4">
        <ProductSupport product = {product} />
        <BestSeller/>
      </div>
    </div>
  )
}

export default ProductPage