/* eslint-disable no-inner-declarations */
/* eslint-disable no-console */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Item from '../Item'
import ComponentBreadCum from '../Breadcrumb'
import { useEffect, useState } from 'react'
import manage from '../../service/manage'
import { Spinner } from '@material-tailwind/react'
import { useLocation } from 'react-router-dom'

const Shop = () => {
  const location = useLocation()
  const [products, setProducts] = useState(location.state?.products || [])

  useEffect(() => {
    if (!location.state?.products) {
      fetchData()
    }
  }, [location.state?.products])

  useEffect(() => {
    // Thực hiện bất kỳ logic nào mà bạn muốn khi location.state.products thay đổi
    setProducts(location.state?.products || [])
  }, [location.state?.products])

  const fetchData = async () => {
    try {
      const response = await manage.getProduct()
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching product:', error)
    }
  }

  const sortBy = (criteria) => {
    // Implement sorting logic based on criteria
    console.log(`Sorting by ${criteria}`)
    // Example: Sorting products array based on criteria
    const sortedProducts = [...products].sort((a, b) => {
      switch (criteria) {
      case 'alpha-asc':
        return a.productName.localeCompare(b.productName)
      case 'alpha-desc':
        return b.productName.localeCompare(a.productName)
      case 'price-asc':
        return a.productPrice - b.productPrice
      case 'price-desc':
        return b.productPrice - a.productPrice
      case 'created-desc':
        return new Date(b.createTime) - new Date(a.createTime)
      case 'created-asc':
        return new Date(a.createTime) - new Date(b.createTime)
      default:
        return 0
      }
    })
    setProducts(sortedProducts)
  }

  return (
    <div className="container mx-auto sm:px-4 text-sm text-brown max-w-[1170px] leading-[1.7] pt-4 min-h-[900px]">
      <ComponentBreadCum />
      <section className="main_container collection lg:w-full md:w-full">
        <div className="category-products products style">
          <div className="pb-3 border-b-[#ebebeb] border-b border-solid mb-[30px] relative">
            <div className="flex flex-wrap px-[-15px]">
              <div className="xs:w-3/5 sm:w-4/5 lg:w-5/6 hidden-xs">
                <div className="view-mode px-3">
                  <h1 className="tracking-[0.01em] inline-block text-[0.92857em] uppercase font-bold m-0">
                    NEW COLLECTION
                  </h1>
                  <div className="text-[0.92857em] inline-block ml-[4px]">
                    <span className="text-[14px]">({products.length})</span>
                  </div>
                </div>
              </div>
              <div className="xs:w-full pr-4 pl-4 sm:w-1/5 lg:w-1/6 xs:text-left sm:text-right">
                <div id="sort-by">
                  <label className="left hidden hidden-xs" />
                  <ul>
                    <li className="cursor-pointer group">
                      <span className="px-[12px] w-full inline-block font-semibold">
                        Sắp xếp theo
                        <FontAwesomeIcon icon={faChevronDown} className="ml-[20px] size-3 pb-[1px]" />
                      </span>
                      <ul className="z-20 hidden group-hover:block absolute">
                        <li className="w-full mt-0 border-t-[none] border-x-[none] cursor-pointer float-left relative text-[#333] border text-sm mx-auto my-0 px-5 py-[5px] border-solid border-[#ebebeb] bg-white">
                          <button onClick={() => sortBy('default')} className="float-left font-semibold">
                            Mặc định
                          </button>
                        </li>
                        <li className="w-full mt-0 border-t-[none] border-x-[none] cursor-pointer relative float-left text-[#333] border text-sm mx-auto my-0 px-5 py-[5px] border-solid border-[#ebebeb] bg-white">
                          <button onClick={() => sortBy('alpha-asc')} className="float-left font-semibold">
                            A → Z
                          </button>
                        </li>
                        <li className="w-full mt-0 border-t-[none] border-x-[none] cursor-pointer relative float-left text-[#333] border text-sm mx-auto my-0 px-5 py-[5px] border-solid border-[#ebebeb] bg-white">
                          <button onClick={() => sortBy('alpha-desc')} className="float-left font-semibold">
                            Z → A
                          </button>
                        </li>
                        <li className="w-full mt-0 border-t-[none] border-x-[none] cursor-pointer relative float-left text-[#333] border text-sm mx-auto my-0 px-5 py-[5px] border-solid border-[#ebebeb] bg-white">
                          <button onClick={() => sortBy('price-asc')} className="float-left font-semibold">
                            Giá tăng dần
                          </button>
                        </li>
                        <li className="w-full mt-0 border-t-[none] border-x-[none] cursor-pointer relative float-left text-[#333] border text-sm mx-auto my-0 px-5 py-[5px] border-solid border-[#ebebeb] bg-white">
                          <button onClick={() => sortBy('price-desc')} className="float-left font-semibold">
                            Giá giảm dần
                          </button>
                        </li>
                        <li className="w-full mt-0 border-t-[none] border-x-[none] cursor-pointer relative float-left text-[#333] border text-sm mx-auto my-0 px-5 py-[5px] border-solid border-[#ebebeb] bg-white">
                          <button onClick={() => sortBy('created-desc')} className="float-left font-semibold">
                            Hàng mới nhất
                          </button>
                        </li>
                        <li className="w-full mt-0 border-t-[none] border-x-[none] cursor-pointer relative float-left text-[#333] border text-sm mx-auto my-0 px-5 py-[5px] border-solid border-[#ebebeb] bg-white">
                          <button onClick={() => sortBy('created-asc')} className="float-left font-semibold">
                            Hàng cũ nhất
                          </button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <section className="products-view products-view-grid test1">
            <div className="flex flex-wrap px-[-15px]">
              {products.length > 0 ? products.map((item, index) => {
                return (
                  <div className="xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4" key={index}>
                    <Item product={item} />
                  </div>
                )
              }) : <Spinner className="h-10 w-10 m-auto mt-6" />}
            </div>
            <div style={{}}></div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Shop
