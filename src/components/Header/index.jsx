import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCartShopping, faPerson, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import ItemMenu from './ItemMenu'
import { Link, useNavigate } from 'react-router-dom'
import { Badge, useSelect } from '@material-tailwind/react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart, getStateError, getStateItems, getStateStatus } from '../../redux/cartSlice'
import { Tooltip } from 'flowbite-react'
import { Dropdown } from 'flowbite-react'
import { getStatus, userLogout } from '../../redux/userSlice'
import SearchComponent from './ItemMenu/ChildItem/searchItem'
import Logo from '../../assets/imgs/LogoGemHub.png'
import { removeTokenFromLocalStorage } from '../../api/localStorage'

export default function Header() {

  const [scrollY, setScrollY] = useState(0)
  const [mobileMenu, setMoblieMenu] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartItems = useSelector(getStateItems)
  const cartStatus = useSelector(getStateStatus)
  const cartError = useSelector(getStateError)
  const userStatus = useSelector(getStatus)
  

  const checkAuthen = () => {
    if(userStatus === 'authenticated') navigate('/cart')
    else navigate('/login')
  }


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])
  const logOut = () => {
    removeTokenFromLocalStorage()
    dispatch(userLogout())
    navigate('/home')
  }

  return (
    <div className='w-full lg:sticky top-0 bg-white z-50 pt-2'>
      <div className={`header-top flex justify-between gap-x-10 overflow-hidden max-w-screen-xl mx-auto px-[15px] animate-transheader    ${scrollY > 0 ? 'hidden' : ''}`}>
        <div className=' w-3/12 hidden lg:flex justify-start items-center gap-3 text-xl'>
          <FontAwesomeIcon icon={faFacebookF} className=' p-1 cursor-pointer' />

          <FontAwesomeIcon icon={faInstagram} className=' p-1 cursor-pointer' />
        </div>
        <div className=' text-xl block lg:hidden cursor-pointer' onClick={() => setMoblieMenu(!mobileMenu)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className=' w-6/12 flex justify-center items-center  p-2 '>
          <img src={Logo} alt="" className=' w-20 h-20 object-cover ' />
        </div>
        <div className=' flex justify-end items-center gap-3 text-xl   '>
          <SearchComponent/>
          <div >
            {userStatus !== 'authenticated' ? <Dropdown className=' p-2' label={<FontAwesomeIcon icon={faUser} className=' py-3 cursor-pointer' />} inline>
              <Dropdown.Item>
                <Link to='/login'>Đăng nhập</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to='/signup'>Đăng ký</Link>
              </Dropdown.Item>
            </Dropdown>:<Dropdown className=' p-2' label={<FontAwesomeIcon icon={faUser} className=' py-3 cursor-pointer' />} inline>
              <Dropdown.Item>
                <Link to='/cart'>Giỏ hàng</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to='/historyOrder'>Lịch Sử mua hàng</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <div onClick={logOut}>Đăng xuất</div>
              </Dropdown.Item>
            </Dropdown>}
            {/* <Dropdown className=' p-2' label={<FontAwesomeIcon icon={faUser} className=' py-3 cursor-pointer' />} inline>
              <Dropdown.Item>
                <Link to='/login'>Đăng nhập</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to='/signup'>Đăng ký</Link>
              </Dropdown.Item>
            </Dropdown> */}
          </div>
          <div onClick={checkAuthen} >
            <Tooltip content='your cart' style='light' arrow={false} placement='top'>
              <Badge content='' color='green' placement='top end' withBorder >
                <FontAwesomeIcon icon={faCartShopping} className=' p-3 cursor-pointer' />
              </Badge>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className={`header-bot w-full   lg:block animate-transheader z-50  ${scrollY == 0 ? 'border-y-[1px]  border-black' : ' shadow-md'} ${mobileMenu ? 'block absolute bg-white' : 'hidden'}`}>
        <ul className={` relative flex flex-col lg:flex-row justify-center items-center gap-2  py-1  px-[15px]   ${scrollY > 0 ? ' py-4 animate-transheader' : 'max-w-screen-xl mx-auto '}`}>
          <li className=' w-full flex-grow   text-center'>
            <Link to="/home" className='  text-sm font-SFUFuturaBold text-brown uppercase px-1 py-1 hover:font-SFUFuturaLight  transition ease-in-out cursor-pointer'>Trang chủ</Link>
          </li>
          <ItemMenu />
          
          {/* <li className='flex-grow  text-center'>
                        <a href="#" className=' text-sm font-SFUFuturaBold text-brown uppercase px-1 py-1 cursor-pointer'>Trang Sức</a>
                    </li> */}

          <li className='w-full flex-grow  text-center'>
            <Link to="/posts" className=' text-sm font-SFUFuturaBold text-brown uppercase px-1 py-1 hover:font-SFUFuturaLight  transition ease-in-out cursor-pointer'>Bài viết</Link>
          </li>
          


        </ul>
      </div>
    </div>
  )
}
