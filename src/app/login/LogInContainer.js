"use client";
import React, { useState } from 'react';
import Heading from '../component/common/Heading';
import TextInput from '../component/common/TextInput';


const logInInput = [
    {
        name: "email",
        placeholder: "Email",
        type: "text"
    },
    {
        name: "password",
        placeholder: "Password",
        type: "password"
    }
]

const LogInContainer = () => {

    const [inputValues, setInputValues] = useState({
        email:"",
        password:"",
    })

    const handleInputOnChange = (e)=>{
        setInputValues((prv)=>{
            return {
                ...prv,
                [e.target.name] : e.target.value
            }
        })
    }

    return (
        <div className='min-w-[300px]'>

            <div className='text-center'>
                <Heading text={"SignIn"} />
            </div>

            <div>
                {
                    logInInput.map((field, index) => {
                        return <TextInput
                            key={index}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={inputValues.email}
                            onChange={handleInputOnChange}
                        />
                    })
                }
            </div>

            <button className='text-center w-full py-2 bg-primary rounded hover:bg-primary/70 mt-4'>
                LogIn
            </button>


        </div>
    )
}

export default LogInContainer