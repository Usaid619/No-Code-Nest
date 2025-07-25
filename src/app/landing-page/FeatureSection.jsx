import React from 'react'
import { featureItems } from '@/utils/constants';


const FeatureSection = () => {
  return (
    <div className="grid grid-cols-3 lg:[grid-template-columns:minmax(0,1fr)_minmax(0,1.5fr)_minmax(0,1.5fr)_minmax(0,1fr)] gap-5 py-5 px-5 border rounded-3xl bg-black text-white relative">
      {featureItems.map((item, index) => {
        if (item.type === 'card') {
          return (
             <div
              key={index}
              className="group p-4 rounded-xl border flex flex-col gap-8 items-center justify-between text-center lg:text-start hover:scale-105 duration-200 transition-all relative hover:shadow-[0_6px_12px_0_rgba(16,185,129,1)]"
            >
              <div className="relative h-14 flex items-center justify-center w-full text-balance text-xs lg:text-base">
                <span className='absolute left-0 right-0 top-0 transition-all duration-300 opacity-100 group-hover:opacity-0'>{item.title}</span>
                <span className='absolute left-0 right-0 top-0 transition-all duration-300 opacity-0 group-hover:opacity-100'>{item.hoverTitle}</span>
              </div>
              <img className='group-hover:scale-[.82] w-12 md:w-[72px] lg:w-14 lg:self-end duration-200 transition-all' src={item.imageSrc}/>
            </div>
          );
        }
        if (item.type === 'text') {
          return (
            <>
            <div
              key={index}
              className={`${index === 6 && "hidden lg:flex"} ${index === 4 && "lg:hidden"} flex items-center justify-center text-xs font-bold
                row-span-2 lg:col-span-2 lg:row-span-1`}
            >
              <h1 className='animate-gradient rotate-90 lg:rotate-0 text-5xl lg:text-[80px] bg-gradient-to-r from-transparent via-emerald-600 to-emerald-800 tracking-wider text-transparent bg-clip-text'
                style={{ WebkitTextStroke: '1px white' }}>
                {item.text}
              </h1>
            </div>
            </>
          );
        }
        return null;
      })}
    </div>
  );
}

export default FeatureSection