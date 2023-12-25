import React from 'react'
import UpdateContainer from './UpdateContainer'
import Heading from '@/app/component/common/Heading'

const page = () => {
    return (
        <div className='w-full'>
            <div className='w-full h-[100vh] pt-16'>
                <div className='w-4/5 mx-auto'>
                    <div>
                        <Heading text={"Edit"} />
                        <UpdateContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page