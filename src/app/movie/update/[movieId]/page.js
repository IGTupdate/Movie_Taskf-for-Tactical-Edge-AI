import React from 'react'
import UpdateContainer from './UpdateContainer'
import Heading from '@/app/component/common/Heading'
import axios from 'axios'


const getMovie = async (movieId) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/movie/get?movieId=${movieId}`);
        return response.data.movie
    } catch (err) {
        return {};
    }
}


export default async function ({ params }) {
    const movie = await getMovie(params.movieId)
    return (
        <div className='w-full'>
            <div className='w-full h-[100vh] pt-16'>
                <div className='lg:w-4/5 md:w-[90%] w-full mx-auto'>
                    <div>
                        <Heading text={"Update Movie"} />
                        <UpdateContainer movie={movie}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
