import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p> <span className='text-gray-700 font-semibold'>CONTACT US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>Bharat colony <br /> Suite 350, Banglore, India</p>
          <p className=' text-gray-500'>Tel: 7888404757 <br /> Email: nikunjkumar6379@gmail.com</p>
          </div>
          
          <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600 '>CAREERS AT PRESCRIPTO</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500'>Explore Jobs</button>
          
        </div>
      </div>

    <br></br>
    <br></br>

    </div>
  )
}

export default Contact