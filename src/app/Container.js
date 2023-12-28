import React from 'react'
import MovieListHeader from './MovieListHeader'
import MovieCard from './MovieCard'

const Container = ({ movies }) => {
    return (
        <div className='lg:w-4/5 md:w-[90%] w-full mx-auto h-full py-12'>
            <MovieListHeader />

            <div className='mt-12'>
                <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-8 md:gap-6 gap-4'>
                    {
                        movies.map((movie, index) => {
                            return <MovieCard movie={movie} />
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Container