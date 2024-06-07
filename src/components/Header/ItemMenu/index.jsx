import { faAngleDown, faAngleRight, faAngleUp, faArrowRight, faDiamond, faIcons } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import ChildItem from './ChildItem'
import { Link } from 'react-router-dom'

export default function ItemMenu() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <li className=' w-full lg:flex-grow text-center group  ' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

      <Link to="/shop" className='  group-hover:font-SFUFuturaLight  transition ease-in-out  text-sm font-SFUFuturaBold text-brown uppercase px-1 py-1 cursor-pointer'
      >Sản phẩm</Link>
      <span className=' px-1 text-center font-SFUFuturaBold group-hover:font-SFUFuturaLight'>
        {!isHovered ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />}
      </span>

      <div className={`relative lg:absolute animate-transheader px-2 pt-2 pb-3 w-full  left-0 rounded-b-md bg-white lg:shadow-md ${isHovered ? 'block' : 'hidden'} `} >
        <div className=' px-3 flex flex-col lg:flex-row justify-around pt-2  '>

          <ChildItem/>
          <ChildItem/>
          <ChildItem/>
          

        </div>

      </div>
    </li>
  )
}
