import { faLaptop, faPeopleArrows, faPerson, faTable, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/imgs/LogoGemHub.png'

function NavBar() {
  return (
    <div className='  mt-4 pl-4  pt-4 h-[800px] sticky top-0 left-4 rounded-xl bg-white overflow-hidden'>
        <div className=' w-full p-4 flex gap-x-1 justify-start items-cente border-b '>
            <img className='w-10 h-10 object-cover' src={logo} alt="" />
            <h2 className=' text-xl font-SFUFuturaBoldOblique'>Gemhub</h2>
        </div>
      <div className=' mt-4 w-full flex flex-col gap-y-2'>
        <NavLink to='dashBoard'
          className={({ isActive }) => isActive ? 'px-4 py-2 mx-3 flex justify-start items-center gap-4 bg-brown bg-opacity-20 cursor-pointer rounded-lg' : 'px-4 py-2 ml-3 flex justify-start items-center gap-4 cursor-pointer'}>
          <FontAwesomeIcon icon={faLaptop} />
          <span>DashBoard</span>
        </NavLink>
        <NavLink to='tables'
          className={({ isActive }) => isActive ? 'px-4 py-2 mx-3 flex justify-start items-center gap-4 bg-brown bg-opacity-20 cursor-pointer rounded-lg' : 'px-4 py-2 ml-3 flex justify-start items-center gap-4 cursor-pointer'}>
          <FontAwesomeIcon icon={faTable} />
          <span>Tables</span>
        </NavLink>
        <NavLink to='profile'
          className={({ isActive }) => isActive ? 'px-4 py-2 mx-3 flex justify-start items-center gap-4 bg-brown bg-opacity-20 cursor-pointer rounded-lg' : 'px-4 py-2 ml-3 flex justify-start items-center gap-4 cursor-pointer'}>
          <FontAwesomeIcon icon={faUser} />
          <span>Profile</span>
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar