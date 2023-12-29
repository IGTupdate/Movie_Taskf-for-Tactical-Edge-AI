// "use client"
import Container from './Container'
import axios from "axios";
import EmptyState from './EmptyState';
import { cookies } from 'next/headers'


export async function getMovies(token, page) {

  try {
    const response = await axios.get(`http://localhost:3000/api/movie/all?page=${page}`, {
      withCredentials: true,
      headers: {
        Cookie: `token=${token}`
      }
    });

    console.log(response.data);
    return response.data.movies
  } catch (err) {
    console.error('Error fetching movies:');
    return []
  }

};


export default async function Home({ searchParams }) {

  const token = cookies().get("token")?.value || "-";
  const page = searchParams?.page || 1;
  let movies = await getMovies(token, page);

  // movies = []
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
