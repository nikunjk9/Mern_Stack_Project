import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p> <span className='text-gray-700 font-semibold'>ABOUT US</span></p>
      </div>

      <div className=' my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className=' flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to HealthEase, your trusted partner in managing your healthcare needs conveniently and efficiently. At HealthEase, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>HealthEase is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, HealthEase is here to support you every step of the way.</p>
          <b className='text-gray-800 text-xl '>Our Vision</b>
          <p className='italic hover:not-italic'>"Our vision at HealthEase is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it."</p>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

      

      {/*----------Banner---------- */}

      <div className= 'flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg-px-12 my-20 md:mx-10'>
      {/*-----------Left Side--------- */}
      <div className= 'flex-1 py-8 sm:py-16 lg:py-24 lg:pl-5' >
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
            <p>Book Appointment</p>
            <p className='mt-4'>With 100+ Trusted Doctors</p>
        </div >
        <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='bg-white text:sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create Account</button>

      </div>
      {/*-----------Right Side--------- */}
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img className='w-full absolute bottom-0 right-0 max-w-md'src={assets.doc13}alt=""/>

      </div>
    </div>
    </div>

    
  )
}

export default About