import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

const Card = ({ result }) => {
    return (
        <div className='p-2 rounded-lg border border-slate-400 group cursor-pointer shadow-slate-400 dark:shadow-slate-100 hover:shadow-md transition-shadow duration-200'>
            <Link href={`/movie/${result.id}`} >
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${result.poster_path || result.backdrop_path}`}
                    alt="image not available"
                    width={500}
                    height={300}
                    className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 h-64 mx-auto"
                    placeholder='blur'
                    blurDataURL='/images/Eclipse-0.4s-200px.svg'
                />
                <div>
                    <p className='line-clamp-2 mt-1'>{result.overview}</p>
                    <h2 className='text-xl truncate py-2'>{result.title || result.name}</h2>
                    <p className="flex items-center justify-between text-sm">
                        {result.release_date || result.first_air_date}
                        <span className='flex'>
                            <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
                        </span>
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Card