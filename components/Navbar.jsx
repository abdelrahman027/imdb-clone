
import React from 'react';
import NavbarItem from './NavbarItem';

const Navbar = () => {
    return (
        <div className='flex justify-center p-4 gap-10 items-center dark:bg-gray-600 bg-amber-100'>
            <NavbarItem title={'Trending'} param={'fetchTrending'} />
            <NavbarItem title={'Top Rated'} param={'fetchTopRated'} />
        </div>
    )
}

export default Navbar