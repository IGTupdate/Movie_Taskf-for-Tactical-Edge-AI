import FileInput from '@/app/component/common/FileInput'
import SelectInput from '@/app/component/common/SelectInput'
import TextInput from '@/app/component/common/TextInput'
import React from 'react'
import CreateContainer from './CreateContainer'
import Heading from '@/app/component/common/Heading'

const page = () => {
    return (
        <div className='w-full'>
            <div className='w-full h-[100vh] pt-16'>
                <div className='w-4/5 mx-auto'>
                    <div>
                        <Heading text={"Create A Movie"} />
                        <CreateContainer />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default page