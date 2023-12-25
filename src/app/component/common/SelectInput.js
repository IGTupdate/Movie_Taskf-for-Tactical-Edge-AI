import React from 'react'

const SelectInput = () => {
    return (
        <div className='mb-5 text-gray-100'>
            <select className="w-[350px] shadow appearance-none rounded py-2 px-3 bg-inputcolor text-white  leading-tight focus:outline-none focus:shadow-outline">
                <option value={""} >Select Publishing Year</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </div>
    )
}

export default SelectInput