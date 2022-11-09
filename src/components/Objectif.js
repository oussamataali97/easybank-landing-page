import React from 'react'
import img1 from './../assets/icon-online.svg'
import img2 from './../assets/icon-budgeting.svg'
import img3 from './../assets/icon-onboarding.svg'
import img4 from './../assets/icon-api.svg'

const Objectif = () => {
  return (
    <div className='padding  bg-verylightgray -z-50 text-center md:text-left'>
      <p className='mt-16 md:text-[43px] text-[33px] text-DarkBlue'>Why choose Easybank?</p>
      <p className='text-[20px]  max-w-[700px] text-GrayishBlue'>We leverage Open Banking to turn your bank account into your financial hub. Control
  your finances like never before.</p>
  <div className="contain grid md:grid-cols-4 grid-cols-1  mt-16 gap-10">
    <div className="box flex justify-center items-center flex-col lg:block">
      <img src={img1} alt="" />
      <p className='text-DarkBlue text-[20px] font-[500] py-6'>  Online Banking</p>
      <p className='text-GrayishBlue text-[18px] font-[400]'>  Our modern web and mobile applications allow you to keep track of your finances
  wherever you are in the world.</p>
    </div>
    <div className="box flex justify-center items-center flex-col lg:block">
      <img src={img2} alt="" />
      <p className='text-DarkBlue text-[20px] font-[500] py-6'>  Simple Budgeting</p>
      <p className='text-GrayishBlue text-[18px] font-[400]'> See exactly where your money goes each month. Receive notifications when you’re
  close to hitting your limits.</p>
    </div>
    <div className="box flex justify-center items-center flex-col lg:block">
      <img src={img3}  alt="" />
      <p className='text-DarkBlue text-[20px] font-[500] py-6'>  Fast Onboarding</p>
      <p className='text-GrayishBlue text-[18px] font-[400]'>  We don’t do branches. Open your account in minutes online and start taking control
  of your finances right away.</p>
    </div>
    <div className="box flex justify-center items-center flex-col lg:block">
      <img src={img4}  alt="" />
      <p className='text-DarkBlue text-[20px] font-[500] py-6'>  Open API</p>
      <p className='text-GrayishBlue text-[18px] font-[400]'>Manage your savings, investments, pension, and much more from one account. Tracking
  your money has never been easier.</p>
    </div>
  </div>
    </div>
  )
}

export default Objectif