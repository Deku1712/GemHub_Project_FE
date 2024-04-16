import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const BreadcrumbsJewery = () => {
  return (
    <div className='container mx-auto max-w-[1170px] uppercase text-[#42210b] bg-transparent py-2.5 border-[none] px-[15px]'>
      <div className="flex flex-wrap mr-[-15px] ml-[-15px]">
        <div className="sm:w-full px-[30px] font-SVNFutura text-[14px] leading-[17px] font-bold">
          <ul className='text-[0.92857em] bg-transparent m-0 p-0 rounded-none'>
            <li className='inline align-middle'>
              <a href="/">
                <span>
                  <FontAwesomeIcon icon={faHome} className='text-[14px] m-[3px] align-[-4px]'/>
                    Trang chủ
                </span>
              </a>
              <span className='mx-[3px] text-[20px] align-[-2px]'>/</span>
            </li>
            <li className='inline align-middle'>
              <a href="/">
                <span>
                    New Collections
                </span>
              </a>
              <span className='mx-[3px] text-[20px] align-[-2px]'>/</span>
            </li>
            <li className='inline align-middle'>
              <a href="/">
                <span>
                R MIDI BUBBLE HEART
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default BreadcrumbsJewery