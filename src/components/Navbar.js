import React from 'react'
import logo from '../assets/logo.svg'
import {AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react'

const Navbar = () =>{

const [toggle,setToggle]=useState(false)

  return (
    <nav className='  padding bg-white flex font-public justify-between items-center z-50 '>
      <div className="logo">
        <a href="#"><img src={logo} alt="" className='' /></a>
      </div>
      <ul className='md:flex space-x-6 text-GrayishBlue font-normal text-[18px] hidden '>
        <a href=""><li>Home</li></a>
        <a href=""><li>About</li></a>
        <a href=""><li>Contact</li></a>
        <a href=""><li>Blog</li></a>
        <a href=""><li>Careers</li></a>
      </ul>
      <button className='bg-gradient-to-r hidden lg:block from-LimeGreen to-BrightCyan px-5 py-2 text-white rounded-full'>
        Request Invite
      </button>
      <div className="relative menu cursor-pointer text-[24px] md:text-[32px]  block md:hidden   " onClick={()=>setToggle(!toggle)}>
        { toggle ? <AiOutlineClose /> : <AiOutlineMenu  />}
         </div>
         { toggle &&
      <ul className='md:hidden justify-self-end bg-gray-50 leading-10 flex flex-col animate-spin-slow justify-center items-center  w-full mx-auto   absolute top-[70px] left-0 right-0 p-5 z-[10]   text-GrayishBlue font-normal text-[18px]  '>
        <a href=""><li>Home</li></a>
        <a href=""><li>About</li></a>
        <a href=""><li>Contact</li></a>
        <a href=""><li>Blog</li></a>
        <a href=""><li>Careers</li></a>
      </ul>
}


    </nav>
  )

}

export default Navbar