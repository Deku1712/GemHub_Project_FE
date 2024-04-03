import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import ItemMenu from './ItemMenu';

export default function Header() {

    const [scrollY, setScrollY] = useState(0);
    const [mobileMenu, setMoblieMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className=' w-full sticky top-0 bg-white   '>
            <div className={`header-top flex justify-around overflow-hidden max-w-screen-xl mx-auto px-[15px] animate-transheader border-b-[1px]  border-black lg:border-none  ${scrollY > 0 ? 'hidden' : ''}`}>
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
                <div className=' flex justify-start  gap-3 text-xl'>
                    <FontAwesomeIcon icon={faSearch} className=' p-1 cursor-pointer' />
                    <FontAwesomeIcon icon={faPerson} className=' p-1 cursor-pointer' />
                </div>
            </div>
            <div className={`header-bot w-full  lg:block  ${scrollY == 0 ? 'border-y-[1px]  border-black' : '' } ${mobileMenu ? 'block': 'hidden'}`}>
                <ul className={` relative flex flex-col lg:flex-row justify-center items-center gap-2  py-2  px-[15px]   ${scrollY > 0 ? ' py-4 animate-transheader' : 'max-w-screen-xl mx-auto '}`}>
                    <li className=' w-full flex-grow   text-center'>
                        <a href="#" className='  text-sm font-SFUFuturaBold text-brown uppercase px-1 py-1 cursor-pointer'>Trang chủ</a>
                    </li>
                    <ItemMenu/>
                    <li className='w-full flex-grow   text-center'>
                        <a href="#" className='  text-sm font-SFUFuturaBold text-brown uppercase px-1 py-1 cursor-pointer'>Trang Sức</a>
                    </li>
                    {/* <li className='flex-grow  text-center'>
                        <a href="#" className=' text-sm font-SFUFuturaBold text-brown uppercase px-1 py-1 cursor-pointer'>Trang Sức</a>
                    </li> */}
                    
                    <li className='w-full flex-grow  text-center'>
                        <a href="#" className=' text-sm font-SFUFuturaBold text-brown uppercase px-1 py-1 cursor-pointer'>Trang Sức</a>
                    </li>
                    <li className='w-full flex-grow  text-center'>
                        <a href="#" className=' text-sm font-SFUFuturaBold text-brown uppercase px-1 py-1 cursor-pointer'>Trang Sức</a>
                    </li>
                    <li className='w-full  flex-grow text-center'>
                        <a href="#" className=' text-sm font-SFUFuturaBold text-brown uppercase px-1 py-1 cursor-pointer'>Trang Sức</a>
                    </li>

                </ul>
            </div>
        </div>
    )
}
