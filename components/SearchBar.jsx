'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SearchBar = () => {
    const [search, setSearch] = useState("")
    const router = useRouter();
    console.log(router)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        router.push(`/search/${search}`);
        console.log(router)
    }
    return (
        <form onSubmit={handleSubmit} className='flex max-w-6xl mx-auto justify-between items-center px-5'>
            <input type="text"
                placeholder='Search Keywords...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='w-full h-12 bg-transparent focus:outline-none p-2' />
            <button disabled={!search} className='text-amber-600 disabled:text-gray-400' type='submit'>Search</button>
        </form>
    )
}

export default SearchBar