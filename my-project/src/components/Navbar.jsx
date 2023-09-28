import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-scroll';


const Navbar = () => {

    const navItems = [
            {link: "Home", path: "home"},
            {link: "About", path: "about"},
            {link: "Features", path: "features"},
            {link: "Pricing", path: "pricing"},
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
                                navItems.map(({link,path}) => <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-purple-500 cursor-pointer'>{link}</Link>)
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

