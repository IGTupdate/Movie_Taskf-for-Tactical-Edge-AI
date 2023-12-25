import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full'>
      <div className='w-full h-[100vh] flex justify-center items-center'>
        <div className='flex flex-col items-center'>
          <h2 className='text-4xl mb-4'>Your Movie List is Empty</h2>
          <Link href={"movie/create"} className='px-4 py-2 rounded bg-green-800'>Add a new movie</Link>
        </div>
      </div>
    </div>
  )
}
