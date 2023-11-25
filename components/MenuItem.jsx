import Link from 'next/link'
import React from 'react'

const MenuItem = ({ title, address, Icon }) => {
    return (
        <div>
            <Link className='mx-4 lg:mx-6 hover:text-amber-600' href={address}>
                <Icon className="text-2xl sm:hidden mx-4" />
                <p className='hidden text-sm sm:inline'>{title}</p>
            </Link>
        </div>
    )
}

export default MenuItem