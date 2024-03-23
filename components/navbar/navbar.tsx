import Image from 'next/image'
import React from 'react'
import logo from '@/public/blacktag-logo.jpg'
export  function Navbar() {
  return (
    <div>
        <nav className='flex items-center justify-center bg-black h-20 shadow-md'>
            <Image src={logo} alt="Blacktag" height={50} width={70}/>
        </nav>
    </div>
  )
}
