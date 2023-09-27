import React from 'react'
import logo from '../assets/logo.png'


const Navbar = () => {

    const navItems = [
            {link: "Home", path: "home"},
            {link: "About", path: "about"},
            {link: "Features", path: "features"},
            {link: "Services", path: "services"},
            {link: "Pricing", path: "pricing"},
            {link: "Team", path: "team"},
    ]

    return (
        <>
            <nav className='bg-white md:px-14 max-w-screen-2xl border-b mx-auto text-iris'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                    <div className='flex space-x-14 items-center' style={{ margin: '0 16px' }}>
                        <a href="/" style={{ position: 'relative' }}>
                        <img src={logo} alt="" style={{ width: '200px', height: 'auto' }} />
                        </a>

                        <ul className='md:flex space-x-12 hidden'>
                            {
                                navItems.map(({link,path}) => <a key={link} href={path} className='block hover:text-purple-500'>{link}</a>)
                            }
                        </ul>
                    </div>

                    <div className='space-x-12 ml-4 hidden md:flex items-center hover:text-purple-500'>
                        <a href="/">Contact</a>
                        <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Login</button>
                    </div>
                </div>
            </nav>

        </>
  )
}


export default Navbar

