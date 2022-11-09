import React from 'react'
import logo from './../assets/logo.svg'
import {BsYoutube,BsFacebook,BsTwitter,BsInstagram,BsPinterest} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='padding flex md:flex-row flex-col justify-between items-stretch w-full bg-DarkBlue text-white md:py-16'>
      <div className='flex flex-col md:justify-between items-center p py-4  md:text-left md:space-y-10'>
        <img src={logo} alt="" className=' p-2 w-64'  />
        <ul className='flex py-4 justify-center space-x-6 md:text-left  text-[20px]'>
          <li><a href="" className='hover:text-LimeGreen'> <BsYoutube/></a></li>
          <li><a href="" className='hover:text-LimeGreen'><BsFacebook/></a></li>
          <li><a href="" className='hover:text-LimeGreen'><BsPinterest/></a></li>
          <li><a href="" className='hover:text-LimeGreen'><BsInstagram/></a></li>
          <li><a href="" className='hover:text-LimeGreen'><BsTwitter/></a></li>
        </ul>
      </div>
      <div>
        <ul className='md:py-4 text-center md:text-left md:space-y-5'>
          <li className='py-3 md:py-0'><a href="#" className='hover:text-LimeGreen'>About Us</a></li>
          <li className='py-3 md:py-0'><a href="#" className='hover:text-LimeGreen'>Contact</a></li>
          <li className='py-3 md:py-0'><a href="#" className='hover:text-LimeGreen'>Blog</a></li>
        </ul>
      </div>
      <div>
      <ul className='md:py-4 text-center md:text-left md:space-y-5'>
          <li className='py-3 md:py-0'><a href="#" className='hover:text-LimeGreen'>Carrers</a></li>
          <li className='py-3 md:py-0'><a href="#" className='hover:text-LimeGreen'>Support</a></li>
          <li className='py-3 md:py-0'><a href="#" className='hover:text-LimeGreen'>Privacy Policy</a></li>
        </ul>
      </div>
      <div className='flex flex-col justify-between items-center '>
      <button className='my-5 md:my-0 bg-gradient-to-r  from-LimeGreen to-BrightCyan px-5 py-2 text-white rounded-full'>
        Request Invite
      </button>
      <p>  © Easybank. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer