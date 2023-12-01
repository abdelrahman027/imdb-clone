'use client';
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation';


const NavbarItem = ({ title, param }) => {
    const searchParam = useSearchParams();
    const genre = searchParam.get('genre')

    return (
        <Link className={`lg:text-lg hover:text-amber-600 font-semibold ${genre && genre == param && 'border-b-4 border-amber-500 rounded'}`} href={`?genre=${param}`}>{title}</Link>
    )
}

export default NavbarItem