import React from 'react'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between '>
        <ul className='bg-red-500 flex items-center w-full'>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
      <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
    </div>
  )
}

export default Navbar
