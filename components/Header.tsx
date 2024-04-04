import Link from 'next/link'
import Image from 'next/image'
import BoxIcon from '../public/box-icon.png'; 
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs";
import { ThemeToggler } from './ThemeToggler';

function Header() {
  return (
    <header className='flex items-center justify-between'>
        <Link href="/" className='flex items-center space-x-2'>
            <div className='w-fit p-2'>
                <Image 
                src={BoxIcon}
                alt='logo'
                className='invert'
                height={50}
                />
            </div>
            <h1 className='oswald font-bold text-xl'>BondBox</h1>
        </Link>

        <div className='px-5 flex space-x-2 items-center'>
            <ThemeToggler/>

            <UserButton afterSignOutUrl='/' />
            <SignedOut>
                <SignInButton afterSignInUrl='/dashboard' mode='modal'/>
            </SignedOut>
        </div>
    </header>
  )
}

export default Header