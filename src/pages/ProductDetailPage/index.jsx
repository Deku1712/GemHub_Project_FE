import Product from '../../components/ProductDetails'
import ProductSupport from '../../components/ProductDetails/ProductSupport'
import BestSeller from '../../components/BestSeller'
import Banner from '../../components/Banner'

const ProductPage = (props) => {
  return (
    <div className="container mx-auto sm:px-4 text-sm text-[#42210b] max-w-[1170px] leading-[1.7]">
      <Product />
      <div className="sm:w-full pr-4 pl-4">
        <ProductSupport/>
        <BestSeller/>
      </div>
    </div>
  )
}

export default ProductPage