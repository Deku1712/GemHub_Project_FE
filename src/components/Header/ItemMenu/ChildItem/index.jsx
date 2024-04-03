import React, { useState } from 'react'
import { faAngleDown, faAngleRight, faAngleUp, faArrowRight, faDiamond, faIcons } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function ChildItem() {

    const [showMore, setShowMore] = useState(false);
    return (
        <div className=' w-full  pl-4 pr-8 py-2 flex flex-col justify-center border-l-[1px] border-black '>
            <div className=' flex justify-between gap-2 items-center ' >
                <a href='#' className=' basis-10/12 text-start transition ease-in-out  text-[12px] font-SFUFuturaBold text-brown uppercase px-1 py-1 cursor-pointer' >
                    What's new
                </a>
                <span className=' basis-2/12 lg:hidden px-1 text-center font-SFUFuturaBold group-hover:font-SFUFuturaLight cursor-pointer ' onClick={() => setShowMore(!showMore)}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </span>

            </div>

            <ul className={` w-full  lg:flex flex-col gap-y-1   pl-2 ${showMore ? '' : 'hidden'}`}>
                <li className=' flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faDiamond} className=' text-[4px]' />
                    <a href="#" className=' text-sm font-SFUFuturaLight hover:cursor-pointer hover:font-SFUFuturaHeavy transition ease-in-out'>New Collections</a>
                </li>
                <li className=' flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faDiamond} className=' text-[4px]' />
                    <a href="#" className=' text-sm font-SFUFuturaLight hover:cursor-pointer hover:font-SFUFuturaHeavy transition ease-in-out'>New Collections</a>
                </li>
                <li className=' flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faDiamond} className=' text-[4px]' />
                    <a href="#" className=' text-sm font-SFUFuturaLight hover:cursor-pointer hover:font-SFUFuturaHeavy transition ease-in-out'>New Collections</a>
                </li>
            </ul>
        </div>
    )
}
