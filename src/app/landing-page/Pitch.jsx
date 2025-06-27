import CtaButton from '@/components/ui/CtaButton'
import React from 'react'
import PhotoLoop from '../../components/ui/PhotoLoop'

const content = {
    sections:[
         {
            bgColor:"#FFF4AC",
title:"Drag And Drop",
features:[
    {
         title:"",
         description:["Simply, Drag Sections Like Banners, Products, Or Videos Where You Want Them - No Code Needed.", "Instantly See Changes Live As You Move Blocks Around The Page."]
    },
],
images:[ '/assets/drag1.png',
  '/assets/drag2.png',
  '/assets/drag3.png',
  '/assets/drag4.png',
  '/assets/drag5.png',]
         },
         {
             bgColor:"#D3FFB9",
title:"Built-In Automation",
features:[
    {
         title:"",
         description:["Chatbot Replies To Customers For You - Automatically.", "WhatsApp Messages Are Sent Without You Lifting A Finger.","Product Price Update On Their Own When Gold Rates Change."]
    },
],
images:['/assets/automation1.png',
  '/assets/automation2.png',
  '/assets/automation3.png',
  '/assets/automation4.png',
  '/assets/automation5.png',
  '/assets/automation6.png',
  '/assets/automation7.png',]
         },
         {
            bgColor:"#CCA6FF",
title:"Less Effort More Power",
features:[
    {
         title:"SEO Management",
         description:["Helps your store show up on Google. Add titles, descriptions, and keywords — no expert needed. More visibility, more traffic."]
    },
    {
         title:"Bulk Product Uplad",
         description:["Upload Hundreds Of Products At Once Using Excel. Add Details Like Price, Size, Color And Discounts - All in One Go."]
    },
    {
         title:"Role-Based Access Control",
         description:["Give The Right Access To The Right Team Members. Control Who Can Edit Products, View Orders, Or Manage Settings - Secure And Simple."]
    },
   

],
images:['/assets/seo1.png',
  '/assets/seo2.png',
  '/assets/seo3.png',
  '/assets/seo4.png',
  '/assets/seo5.png',
  '/assets/seo6.png',
  '/assets/seo7.png',]
         },
    ]
}

const Pitch = () => {
  return ( 
    <div className='escape flex flex-col gap-20 pt-2 px-2'>
      <h1 className=' text-3xl lg:text-4xl text-center font-bold text-emerald-500 leading-[1.4]'> Why Choose No Code Nest? </h1>
     
     <div className='-mt-14 flex flex-col gap-20'>
      {content?.sections?.map((section,index)=>(
    <div className={`restrict flex flex-col gap-10 md:gap-20 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : 'md:flex-row'}`} key={index}>
        {/* Texts */}
     <div className='w-full flex flex-col gap-5 lg:gap-6 md:grow'>
       <h1 className='text-gray-900 text-3xl md:text-4xl font-bold text-center md:text-start leading-[1.4] text-balance'>{section?.title}</h1>
       
       {section?.features?.map((feature,featureIndex)=>(
        <div className='flex flex-col gap-1'>
            <h1 className='text-center md:text-start text-3xl text-balance text-emerald-500 font-bold'>{feature?.title}</h1>
        <ul className={`flex flex-col gap-3`}>
        {feature?.description?.map((desc,index)=>(
            <li key={index} className={`${feature?.description?.length > 1 ? "list-disc " : "text-center md:text-start"} text-gray-700 leading-[1.7]`}>{desc}</li>
        ))}
       </ul>
            </div>
       ))}
       
      </div>

{/* Images */}

    <PhotoLoop index={index} photos={section?.images} bgColor={section?.bgColor}/>
</div>
     ))}
     </div>
     

     <CtaButton className="self-center" text={"Compare With Other Platforms"}/>
    </div>
  )
}

export default Pitch
