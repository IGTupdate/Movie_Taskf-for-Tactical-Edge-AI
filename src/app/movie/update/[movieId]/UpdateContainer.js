import FileInput from '@/app/component/common/FileInput'
import SelectInput from '@/app/component/common/SelectInput'
import TextInput from '@/app/component/common/TextInput'
import React from 'react'

const UpdateContainer = () => {
    return (
        <div className='w-full flex gap-20'>
            <div class="w-1/2 ">
                <FileInput />
            </div>
            <div className='w-1/2 px-10'>
                <TextInput type="text" placeholder="Title" name="title" />
                <SelectInput />

                <div className='mt-8 flex items-center gap-6 text-white'>
                    <button className='px-6 py-2 font-medium rounded-md border border-white hover:border-gray-400 hover:text-gray-400'>Cancel</button>
                    <button className='px-6 py-2 font-medium rounded-md bg-primary hover:bg-primary/75'>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default UpdateContainer