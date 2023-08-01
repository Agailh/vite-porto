//import React from 'react'

const Projectitem = ({img, title, subtitle}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-black  group hover:bg-gradient-to-r from-[#242629] to bg-[#16161a] ">
      <div className="py-5 px-5">
        <img src={img} className="rounded-sm group group-hover:opacity-10" alt='/' />
        <div className="hidden group-hover:block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                {title}
            </h3>
            <p className="pb-4 pt-2 text-white text-center text-sm">{subtitle}</p>
            {/* <a href="/">
                <p className="text-center p-3 rounded-lg bg-[#7f5af0] text-[#fffffe] font-bold cursor-pointer text-lg" >More Info</p>
            </a> */}
            
        </div>

      </div>
    </div>
  )
}

export default Projectitem