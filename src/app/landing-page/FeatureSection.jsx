import React from 'react'

const items = [
     {
       type:"card",
       title: "Instant Storefront Creation",
       hoverTitle: "Go live in minutes with just an Excel sheet.",
       imageSrc: "/assets/creation.svg"
     },
     {
       type:"card",
       title: "Drag & Drop Builder",
       hoverTitle: "Easily design pages—no coding needed",
       imageSrc: "/assets/drag.svg"
     },
     {
       type:"card",
       title: "AI Powered Chatbot",
       hoverTitle: "Smart, built-in AI for sales & support.",
       imageSrc: "/assets/chatbot.svg"
     },
     {
       type:"card",
       title: "3D Product Viewer",
       hoverTitle: "Let customers explore products in 3D.",
       imageSrc: "/assets/3d.svg"
     },
     {
       type:"text",
       text:"FEATURES",
     },
     {
       type:"card",
       title: "Industry-Specific Dashboards",
       hoverTitle: "Tailored analytics for your business type.",
       imageSrc: "/assets/dashboard.svg"
     },
     {
       type:"card",
       title: "Role-Based Access",
       hoverTitle: "Control what each user can view or edit.",
       imageSrc: "/assets/role.svg"
     },
     {
       type:"card",
       title: "Visual Commerce Tools",
       hoverTitle: "Reels, video, and popup banners included.",
       imageSrc: "/assets/visual.svg"
     },
     {
       type:"card",
       title: "Bulk Excel Upload",
       hoverTitle: "Add thousands of products instantly",
       imageSrc: "/assets/bulk.svg"
     },
     {
       type:"card",
       title: "Auto-Price Engine",
       hoverTitle: "Real-time price logic for metals, grades.",
       imageSrc: "/assets/autoprice.svg"
     },
     {
       type:"card",
       title: "Built-In SEO Management",
       hoverTitle: "Boost visibility with native SEO tools.",
       imageSrc: "/assets/seo.svg"
     }
   ];

const FeatureSection = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-4  py-5 px-5 border rounded-3xl bg-black text-white relative">
      {items.map((item, index) => {
        if (item.type === 'card') {
          return (
             <div
              key={index}
              className="group p-4 rounded-xl border flex flex-col gap-7 items-center justify-center text-center hover:scale-105 duration-200 transition-all"
            >
              <h1>{item.title}</h1>
              
              <img className='group-hover:scale-75 w-8 lg:w-14 lg:self-end duration-200 transition-all' src={item.imageSrc}/>
            </div>
          );
        }
        if (item.type === 'text') {
          return (
            <>
            <div
              key={index}
              className="border flex items-center justify-center text-xs font-bold
                row-span-2 lg:col-span-2 lg:row-span-1 "
            >
              <h1 className='rotate-90 lg:rotate-0 text-4xl lg:text-6xl tracking-wider'>
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