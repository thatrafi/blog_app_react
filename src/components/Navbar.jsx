import React,{useState} from 'react'

import { Link } from 'react-router-dom'

import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'


const NavbarItem = ({title,link,classProps}) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            <Link to={link}>{title}</Link>
        </li>
    )
}

const Navbar = () => {
    const navItems = [{ navName : "Home", link: "/"},{ navName : "New Post", link: "/NewPost"}]
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='w-full flex items-center justify-between md:justify-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <h1 className="text-white text-3xl sm:text-5xl py-1 font-bold">BLOG APP</h1> 
            </div>
            <ul className='text-white md:flex flex-initial flex-row hidden list-none  justify-between items-center '>
                {navItems.map((item,index) => (
                    <NavbarItem key={item.navName+index} title={item.navName} link={item.link}/>
                ))}
            </ul>
            <div className='flex relative'>
                    {toggleMenu
                        ? <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer ' onClick={()=> setToggleMenu(false)} /> 
                        : <HiMenuAlt4  fontSize={28} className='text-white md:hidden cursor-pointer ' onClick={()=> setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                        flex flex-col justify-start border-none items-end rounded-md blue-glassmorphism text-white animate-slide-in
                        '>
                            <li className='text-xl w-full my-2'>
                                <AiOutlineClose onClick={() => setToggleMenu(false)}/>
                            </li>
                            {navItems.map((item,index) => (
                                <NavbarItem key={item.navName+index} title={item.navName} link={item.link}/>
                            ))}
                        </ul>
                    )}
            </div>
        </nav>
  )
}

export default Navbar