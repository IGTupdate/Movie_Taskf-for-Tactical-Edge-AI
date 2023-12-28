import Image from 'next/image'
import React from 'react'

const MovieCard = ({ movie }) => {
    return (
        <div className='w-full p-2 bg-cardcolor rounded'>
            <div className='w-full' style={{ aspectRatio: "0.8" }}>
                <img src={`/uploads/${movie.banner}`} className='w-full h-full overflow-hidden object-cover rounded' />
            </div>
            <div className='mt-3'>
                <h2 className='text-md font-medium'>{movie.title}</h2>
                <h3 className='text-sm font-normal text-gray-400'>{movie.publish_year}</h3>
            </div>
        </div>
    )
}

export default MovieCard