import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col gap-5 p-6 lg:px-20 bg-emerald-500 text-white'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10 w-full'>
          <div className='w-full md:w-auto flex-shrink-0 mb-2 md:mb-0'>
            <h1 className='text-xl font-bold w-full text-center md:text-left'>Hello@NoCodeNest.IO</h1>
          </div>
          <div className='w-full md:w-auto relative flex grow items-center'>
            <input className='rounded-4xl bg-white px-5 py-5 text-black w-full pr-32' placeholder='Enter your email' type='email' />
            <button className='absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-500 text-white rounded-4xl h-14 px-6'>Subscribe</button>
          </div>
        </div>
        <ul className='flex gap-10'>
          <li className='list-none'>Features</li>
          <li className='list-none'>Why US</li>
          <li className='list-none'>Testimonials</li>
        </ul>
      </div>
      <div className='flex flex-col gap-4 items-center'>
        <div className='flex gap-6 py-6'>
          <span>Instagram</span>
          <span>X</span>
          <span>Youtube</span>
          {/* a line here */}
        </div>
        <h1 className='text-8xl font-extrabold'>No Code Nest</h1>
        <span>Copyright: @2025 NoCodeNest. All Rights Reserved</span>
      </div>
    </footer>
  )
}

export default Footer
