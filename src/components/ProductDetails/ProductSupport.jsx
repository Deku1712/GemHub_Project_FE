import { useState } from 'react'

const FormatText = (text) => {
  return text.split('-').filter(item => item).map((item, index) => (
    <span key={index}> -{item} </span>
  ));
}
// eslint-disable-next-line react/prop-types
function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li className="border border-b-[none] border-solid border-[#e1e1e1]">
      <a
        className={`cursor-pointer block leading-[35px] text-lg uppercase font-SFUFuturaExtraBold relative px-5 py-0 hover:bg-[#e0d8d3] hover:text-brown ${isOpen ? 'bg-[#e0d8d3] text-brown' : 'bg-[#42210b] text-white'}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        {title}
      </a>
      <div className={`p-[20px] border-t-[#ebebeb] border-t border-solid opacity-1 ${isOpen ? '' : 'hidden'}`} role="tabpanel">
        {content}
      </div>
    </li>
  )
}


const ProductSupport = (props) => {
  const product = props.product

  console.log(product)
  return (
    <div className="flex flex-wrap xs:mt-[15px] mr-[-15px] ml-[-15px]">
      <div className="sm:w-full pr-4 pl-4">
        <ul className="mb-[30px] list-none pl-0">
          {product != null && <AccordionItem
            title="Thông tin thêm"
            content={<div className=" w-full flex flex-col gap-y-4">
              <div className=' text-start'>
                <h2 className=' text-lg font-semibold'> 
                  Thông tin chi tiết
                </h2>
                <span>
                  {product.productDescription}
                </span>
              </div>
              <div className=' text-start'>
                <h2 className=' text-lg font-semibold'> 
                  Khu Vực Khai Thác
                </h2>
                <span>
                  {product.theOrigin}
                </span>
              </div>
              <div className=' text-start'>
                <h2 className=' text-lg font-semibold'> 
                  Độ cứng
                </h2>
                <span>
                  {product.stiffness}
                </span>
              </div>
              <div className=' text-start'>
                <h2 className=' text-lg font-semibold'> 
                  Thành Phần
                </h2>
                <span>
                  {product.component}
                </span>
              </div>
              <div className=' text-start'>
                <h2 className=' text-lg font-semibold'> 
                  Mệnh Phù Hợp
                </h2>
                <span>
                  {product.matchingDestiny}
                </span>
              </div>
              <div className=' flex flex-col justify-start items-start text-start'>
                <h2 className=' text-lg font-semibold'> 
                  Tác dụng sức khỏe
                </h2>
                {FormatText(product.healthEffects)}
              </div>
              <div className=' flex flex-col justify-start items-start'>
                <h2 className=' text-lg font-semibold'> 
                  Bảo quản
                </h2>
                {FormatText(product.preserve)}
              </div>
            </div>}
          />}

        </ul>
      </div>
    </div>

  )
}

export default ProductSupport