import Link from 'next/link';
import React from 'react'
import { IoMdSunny } from "react-icons/io";

const Header = () => {
    return (
        <>
            {/* MAIN NAV */}
            <div className='p-6 text-darktxt flex justify-between items-center max-w-6xl mx-auto'>
                {/* NAVIGATION */}
                <nav>
                    <ul className='flex gap-10 text-sm'>
                        <li className='hov_bg px-2 py-1 rounded-lg'><Link href='/'>HOME</Link></li>
                        <li className='hov_bg hover:text-white px-2 py-1 rounded-lg'><Link href='/about'>ABOUT</Link></li>
                    </ul>
                </nav>
                {/* LOGO AND THEME TOGGLER */}
                <div className='flex gap-4 items-center text-darktxt'>
                    <IoMdSunny className='w-7 h-7' />
                    <h2 className='text-2xl text-darktxt font font-semibold'><span className='px-2 py-1 text-darktxt bg-primary rounded-lg'>IMDb</span> Clone</h2>
                </div>
            </div>
            {/* TRENDING BAR */}
            <div className='bg-amber-100 w-full p-4'>
                <div className='flex item-center justify-center gap-16 font-semibold capitalize'>
                    <h2 className='hov_text border-b-4 border-primary pb-1 text-darktxt text-lg'>trending</h2>
                    <h2 className='hov_text border-b-4 border-primary pb-1 text-darktxt text-lg'>top rated</h2>
                </div>
            </div>
            {/* SEARCH FORM */}
            <form className="relative  max-w-6xl mx-auto">
                <input type="search" placeholder='Search Keywords...' id="" className="w-full p-3 focus:outline-none" />
                <button className='absolute top-[25%] text-gray-300 right-10'>Search</button>
            </form>
        </>
    )
}

export default Header