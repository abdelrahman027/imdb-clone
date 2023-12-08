import { metadata } from '@/app/layout';
import Image from 'next/image';
import React from 'react';
import { IoIosStar } from "react-icons/io";

const getMovie = async (movieId) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    return await res.json();
}

const MoviePage = async ({ params }) => {
    const movieId = params.id
    const movie = await getMovie(movieId)
    console.log(movie)
    return (
        <div className='p-20 flex flex-col md:flex-row items-center gap-4 content-center'>
            {/* Image div */}
            <div className='basis-[50%]'>
                <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} alt='image not available' width={500} height={300} className='rounded-lg'
                    placeholder="blur"
                    blurDataURL='/images/Eclipse-0.4s-200px.svg'
                    style={{ maxWidth: "100%", height: "100%" }}
                />
            </div>
            {/* Content div */}
            <div className='basis-[50%]'>
                <div className='flex items-center justify-between py-3'>
                    <div>
                        <p className='flex gap-1 items-center'><IoIosStar className='text-amber-400 w-5 h-5' /> {movie.vote_average.toFixed(1)} <span className='text-xs opacity-50'>{movie.vote_count} voted </span></p>

                    </div>

                    <p className='text-sm opacity-50'>
                        {movie.adult ? 'Adult Content' : 'Family Friendly'}

                    </p>
                </div>
                <h2 className='text-2xl pb-2 font-semibold'>{movie.title || movie.name}</h2>
                <p className='py-2 leading-8 text-lg'><span className='font-semibold'>Overview: </span> {movie.overview}</p>
                <p><span className='font-semibold'>Data Released: </span> {movie.release_date || movie.first_air_date}</p>

            </div>
        </div>
    )
}

export default MoviePage