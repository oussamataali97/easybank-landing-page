import React from 'react'
import mockup from '../assets/image-mockups.png'
const Hero = () => {
  return (
    <div className="padding hero  w-full -z-40 max-h-[600px] bg-gradient-to-t from-verylightgray  to-white flex flex-col-reverse md:flex-row items-center relative py-16 ">
      <div className="flex-1 text-center md:text-left">
          <p className=' mt-16 md:text-[63px] text-[33px] md:leading-[70px] text-DarkBlue '> Next generation digital banking</p>
          <p className='text-[20px] leading-[30px] py-4 md:py-8 text-GrayishBlue '>  Take your financial life online. Your Easybank account will be a one-stop-shop
  for spending, saving, budgeting, investing, and much more.</p>
  <button className='bg-gradient-to-r hidden lg:block from-LimeGreen to-BrightCyan px-5 py-2 text-white rounded-full'>
        Request Invite
      </button>
      </div>
        <div className="flex-1 mb-32 z-50">
        <img src={mockup} alt="" className=' img1 md:max-w-[640px] relative top-[70px] md:-right-[200px] object-contain  ' />
        </div>
    </div>
  )
}

export default Hero