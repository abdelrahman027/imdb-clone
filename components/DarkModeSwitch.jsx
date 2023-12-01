'use client'
import React, { useEffect, useState } from 'react'
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from 'next-themes';

const DarkModeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    useEffect(() => { setMounted(true) }, [])

    return (
        <>
            {mounted && (currentTheme === 'dark' ? <MdLightMode onClick={() => setTheme('light')} className='text-xl hover:text-amber-500 cursor-pointer' /> : <BsFillMoonFill onClick={() => setTheme('dark')} className='text-xl hover:text-amber-500 cursor-pointer' />)}


        </>
    )
}

export default DarkModeSwitch