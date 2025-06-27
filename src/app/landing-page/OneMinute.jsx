import PhotoLoop from '@/components/ui/PhotoLoop'
import React from 'react'

const OneMinute = () => {
    const images = ['/assets/hero1.png',
  '/assets/hero2.png',
  '/assets/hero3.png',
  '/assets/hero4.png',
  '/assets/hero5.png',
  '/assets/hero6.png',
  '/assets/hero7.png',]
  return (
    
         <PhotoLoop className={"border-2 border-gray-300"} photos={images} bgColor={"#D3FFB9"}/>
   
  )
}

export default OneMinute
