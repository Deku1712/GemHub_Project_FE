import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCartShopping, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import ItemMenu from './ItemMenu'
import { Link } from 'react-router-dom'
import { Badge, useSelect } from '@material-tailwind/react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart, getStateError, getStateItems, getStateStatus } from '../../redux/cartSlice'

export default function Header() {

  const [scrollY, setScrollY] = useState(0)
  const [mobileMenu, setMoblieMenu] = useState(false)
  const dispatch = useDispatch()

  const cartItems = useSelector(getStateItems)
  const cartStatus = useSelector(getStateStatus)
  const cartError = useSelector(getStateError)


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  useEffect(() => {
    dispatch(fetchCart())
  }, [])

  

  return (
    <div className=' w-full  lg:sticky top-0 bg-white z-50  '>
      <div className={`header-top flex justify-around overflow-hidden max-w-screen-xl mx-auto px-[15px] animate-transheader    ${scrollY > 0 ? 'hidden' : ''}`}>
        <div className=' hidden lg:flex justify-start  gap-3 text-xl'>
          <FontAwesomeIcon icon={faFacebookF} className=' p-1 cursor-pointer' />

          <FontAwesomeIcon icon={faInstagram} className=' p-1 cursor-pointer' />
        </div>
        <div className=' text-xl block lg:hidden cursor-pointer' onClick={() => setMoblieMenu(!mobileMenu)}>
          <FontAwesomeIcon icon={faBars}/>
        </div>
        <div className=' w-[100px] h-[100px] p-2'>
          <img src="src\assets\imgs\LogoGemHub.png" alt="" className=' scale-150 w-full h-full object-cover ' />
        </div>
        <div className=' flex justify-start  gap-3 text-xl   '>
          <FontAwesomeIcon icon={faSearch} className=' p-3 cursor-pointer' />
          <FontAwesomeIcon icon={faPerson} className=' p-3 cursor-pointer' />
          <Link to='/cart'>
            <Badge content='5' color='green' placement='top end' withBorder >
              <FontAwesomeIcon icon={faCartShopping} className=' p-3 cursor-pointer'/>
            </Badge>
          </Link>
        </div>
      </div>
      <div className={`header-bot w-full   lg:block animate-transheader z-50  ${scrollY == 0 ? 'border-y-[1px]  border-black' : ' shadow-md' } ${mobileMenu ? 'block absolute bg-white': 'hidden'}`}>
        <ul className={` relative flex flex-col lg:flex-row justify-center items-center gap-2  py-1  px-[15px]   ${scrollY > 0 ? ' py-4 animate-transheader' : 'max-w-screen-xl mx-auto '}`}>
          <li className=' w-full flex-grow   text-center'>
            <Link to="/home" className='  text-sm font-SFUFuturaBold text-brown uppercase px-1 py-1 hover:font-SFUFuturaLight  transition ease-in-out cursor-pointer'>Trang chủ</Link>
          </li>
          <ItemMenu/>
          <li className='w-full flex-grow   text-center'>
            <a href="#" className='  text-sm font-SFUFuturaBold text-brown uppercase px-1 py-1 hover:font-SFUFuturaLight  transition ease-in-out cursor-pointer'>Trang Sức</a>
          </li>
          {/* <li className='flex-grow  text-center'>
                        <a href="#" className=' text-sm font-SFUFuturaBold text-brown uppercase px-1 py-1 cursor-pointer'>Trang Sức</a>
                    </li> */}

          <li className='w-full flex-grow  text-center'>
            <Link to="/posts" className=' text-sm font-SFUFuturaBold text-brown uppercase px-1 py-1 hover:font-SFUFuturaLight  transition ease-in-out cursor-pointer'>Bài viết</Link>
          </li>
          <li className='w-full flex-grow  text-center'>
            <a href="#" className=' text-sm font-SFUFuturaBold text-brown hover:font-SFUFuturaLight  transition ease-in-out uppercase px-1 py-1 cursor-pointer'>Trang Sức</a>
          </li>
          <li className='w-full  flex-grow text-center'>
            <a href="#" className=' text-sm font-SFUFuturaBold text-brown hover:font-SFUFuturaLight  transition ease-in-out uppercase px-1 py-1 cursor-pointer'>Trang Sức</a>
          </li>
          

        </ul>
      </div>
    </div>
  )
}
