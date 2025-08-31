"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay';


const navLinks = [

    {
        title: "About",
        href: "#about"
    },
    {
        title: "Projects",
        href: "#projects"
    },
    {
        title: "Contact",
        href: "#contact"
    }
]

const Navbar = () => {
    const [NavbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-4 pr-8'>
                <Link href="/" className='text-2xl md:text-5xl text-white font-semibold self-center'>
                    LOGO
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {!NavbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-white hover:bg-white hover:text-black text-white'>
                            <Bars3Icon className='h-5 w-5' />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-white hover:bg-white hover:text-black text-white'>
                            <XMarkIcon className='h-5 w-5' />
                        </button>
                    )}
                </div>
                <div className='menu hidden md:block md:w-auto self-center' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <NavLink key={index} href={link.href} title={link.title} />
                        ))}
                    </ul>
                </div>
            </div>
            {NavbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar
