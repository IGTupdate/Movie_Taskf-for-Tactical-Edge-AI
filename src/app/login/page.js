import React from 'react'
import LogInContainer from './LogInContainer'

const page = () => {
  return (
    <div className='w-full bg-bgcolor'>
        <div className='w-full h-[100vh]'>
            <div className='w-full h-full flex items-center justify-center'>
                    <LogInContainer />
            </div>
        </div>
        
    </div>
  )
}

export default page