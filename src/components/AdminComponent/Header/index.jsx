import { faBars, faBell, faGear, faHouse, faList, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Header() {
  return (
    <div className=' px-4 py-1 flex items-center justify-between mb-6'>
      <div className=' w-2/12 flex gap-x-4 justify-between items-center'>
        <div className='  flex flex-col gap-y-2'>
          <div className=' flex gap-x-2 items-center text-white'>
            <FontAwesomeIcon icon={faHouse}/>
            <span>/</span>
            <span className=' font-semibold'>DashBoard</span>
          </div>
          <span className=' text-start text-lg font-SFUFuturaBold text-white '>
                    DashBoard
          </span>
        </div>
        <FontAwesomeIcon className=' text-xl text-white' icon={faBars}/>
      </div>
      <div className=' flex items-center gap-x-3  justify-between'>
        <div className=' flex items-center justify-around px-2 py-1 bg-white gap-x-2 rounded-lg'>
          <FontAwesomeIcon icon={faSearch}/>
          <input className=' border-none' type='text' placeholder='Type here'/>
        </div>
        <FontAwesomeIcon className=' text-white' icon={faGear}/>
        <FontAwesomeIcon className=' text-white' icon={faBell}/>
      </div>
    </div>
  )
}

export default Header