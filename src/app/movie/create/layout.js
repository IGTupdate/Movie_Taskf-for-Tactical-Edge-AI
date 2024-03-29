import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function layout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className='bg-bgcolor'>
                {children}
                </div>
            </body>
        </html>
    )
}
