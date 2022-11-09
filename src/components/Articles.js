import React from 'react'
import img1 from './../assets/image-currency.jpg'
import img2 from './../assets/image-restaurant.jpg'
import img3 from './../assets/image-plane.jpg'
import img4 from './../assets/image-confetti.jpg'

const Articles = () => {
  return (

      <div className='padding  bg-verylightgray -z-50'>
      <p className='mt-16 md:text-[43px] text-[33px] text-DarkBlue'>Latest Articles</p>

  <div className="contain grid md:grid-cols-4 grid-cols-1  mt-16 gap-10">
    <div className="box flex justify-center items-center flex-col lg:block bg-white">
      <img src={img1} alt="" className='min-h-[200px]' />
      <p className='text-DarkBlue text-[17px] font-[300] pt-6 px-3'>       By Claire Robinson</p>
      <p className='text-DarkBlue text-[20px] font-[500] py-2 px-3'>    Receive money in any currency with no fees</p>
      <p className='text-GrayishBlue text-[18px] font-[400] px-3 pb-5'>  Our modern web and mobile applications allow you to keep track of your finances
  wherever you are in the world.</p>
    </div>
    <div className="box flex justify-center items-center flex-col lg:block bg-white">
      <img src={img2} alt="" className='min-h-[200px]' />
      <p className='text-DarkBlue text-[17px] font-[300] pt-6 px-3'>      By Wilson Hutton</p>
      <p className='text-DarkBlue text-[20px] font-[500] py-2 px-3'>    Treat yourself without worrying about money</p>
      <p className='text-GrayishBlue text-[18px] font-[400] px-3 pb-5'> See exactly where your money goes each month. Receive notifications when you’re
  close to hitting your limits.</p>
    </div>
    <div className="box flex justify-center items-center flex-col lg:block bg-white">
      <img src={img3}  alt="" className='min-h-[200px]' />
      <p className='text-DarkBlue text-[17px] font-[300] pt-6 px-3'>      By Wilson Hutton</p>
      <p className='text-DarkBlue text-[20px] font-[500] py-2 px-3'>    Take your Easybank card wherever you go</p>
      <p className='text-GrayishBlue text-[18px] font-[400] px-3 pb-5'>  We don’t do branches. Open your account in minutes online and start taking control
  of your finances right away.</p>
    </div>
    <div className="box flex justify-center items-center flex-col lg:block bg-white">
      <img src={img4}  alt="" className='min-h-[200px]' />
      <p className='text-DarkBlue text-[17px] font-[300] pt-6 px-3'>       By Claire Robinson</p>
      <p className='text-DarkBlue text-[20px] font-[500] py-2 px-3'>    Our invite-only Beta accounts are now live!</p>
      <p className='text-GrayishBlue text-[18px] font-[400] px-3 pb-5'>Manage your savings, investments, pension, and much more from one account. Tracking
  your money has never been easier.</p>
    </div>
  </div>
    </div>

  )
}

export default Articles