import React from 'react'

const FileInput = () => {
    return (
        <div className='w-full'>
            <label
                className="flex items-center justify-center w-full h-[480px] px-4 transition bg-inputcolor border-[3px] border-white border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                <div className="flex flex-col items-center space-x-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 block text-white" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                    </span>
                    <span className="font-medium text-gray-400">
                        Drop An Image Here
                        <span class="text-blue-600 underline">browse</span>
                    </span>
                    <input type="file" name="file_upload" className="hidden" />
                </div>
            </label>
        </div>
    )
}

export default FileInput