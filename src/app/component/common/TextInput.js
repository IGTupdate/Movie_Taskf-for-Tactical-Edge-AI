import React from 'react'

const TextInput = (field) => {
    return (
        <div className='mb-5'>
            <input
                className="w-full shadow appearance-none  rounded py-2 bg-inputcolor px-3 text-white leading-tight focus:outline-none focus:shadow-outline placeholder-white"
                type={field.type }
                placeholder={field.placeholder}
                onChange={field.onChange}
                value={field.value}
            />
        </div>
    )
}

export default TextInput