
import CtaButton from '@/components/ui/CtaButton';
import AnimatedText from '@/components/ui/AnimatedText';
import React from 'react';

const Hero = () => {
  return (
    <div className='escape hero min-h-screen bg-gray-50 px-2 flex justify-center items-center'>
      <div className='flex flex-col gap-4 md:gap-6 justify-center items-center text-center translate-y-[6%]'>
        
        
        <AnimatedText />

        <p className='text-base md:text-lg max-w-[85%] md:max-w-1/2 text-[#6B7280]'>
          Build custom tools effortlessly for any industry - fast, flexible, scalable, and beautifully simple.
        </p>

        <CtaButton text={"Start free trial"} icon={true} />
      </div>
    </div>
  );
};

export default Hero;
