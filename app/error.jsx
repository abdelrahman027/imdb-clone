"use client";

import React, { useEffect } from 'react'

const Error = ({ error, reset }) => {
    useEffect(() => {
        console.error(error)
    }, [error])
    return (
        <div className='text-center mt-12'>
            <h2 className='font-semibold text-xl'>Sorry, something went wrong !</h2>
            <button
                className='hover:text-amber-600 mt-8 border p-2'
                onClick={() => reset()}
            >
                Try Again
            </button>
        </div>
    )
}

export default Error