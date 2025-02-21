import React from 'react'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between  p-4'>
        <h1 className='font-semibold text-xl'>Clerk</h1>
        <div className=' flex items-center   gap-4'>
        <Link href="">Home</Link>
        <Link href="">About</Link>
            <Link href="">Contact</Link>
        </div>
      <div className='flex '>
      <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
      </div>
    </div>
  )
}

export default Navbar
