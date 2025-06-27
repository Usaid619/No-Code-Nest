
import CtaButton from '@/components/ui/CtaButton'
import React from 'react'

const Hero = () => { 
  return (
    <div className='escape hero min-h-screen  bg-gray-50 px-2 flex justify-center items-center'>
      <div className='flex flex-col gap-4 md:gap-6 justify-center items-center text-center translate-y-[6%]'>
        <div className='flex text-[33px] md:text-[40px] xl:text-5xl font-extrabold flex-col leading-[1.5] text-balance px-2 text-[#1F2937] '>
          <h1>Launch Your Website or Online Store</h1>
      <span className='text-[#10B981]'>In One Minute</span>
      <div className='flex justify-center items-center  gap-2'>
        <h1>
          <span className='relative z-50 bg-contain bg-no-repeat bg-center bg-[url(/assets/LandingPage/Hero/paint-stroke.png)]'>No Code,</span> Infinite Power
        </h1>
        </div>
      </div>
      
      <p className='text-base md:text-lg max-w-[85%] md:max-w-1/2 text-[#6B7280]'>Build custom tools effortlessly for any industry - fast, flexbile, scalable, and beautifully simple.</p>
    
    <CtaButton text={"Start free trial"} icon={true}/>
      </div>
      
    </div>
  )
}

export default Hero