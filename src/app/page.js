// "use client"
import Container from './Container'
import axios from "axios";
import EmptyState from './EmptyState';
// import { useEffect, useState } from 'react';


export async function getServerSideProps() {
  try {
    const response = await axios.get('/api/movie/all');
    console.log(response);
    return { movies: response.data.movies };
  } catch (err) {
    console.error('Error fetching movies:');
    return { movies: [] };
  }

};


export default async function Home({ movies }) {
  console.log(movies)
  return (
    <div className='w-full bg-bgcolor'>
      <div className='w-full min-h-[100vh]'>
        {
          movies.length === 0 ? <EmptyState /> : <Container movies={movies} />
        }
      </div>
    </div>
  )
}
