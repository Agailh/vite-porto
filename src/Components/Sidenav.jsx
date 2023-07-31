import  React ,{ useState } from 'react'
import {AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject, AiFillCode} from "react-icons/ai"
import {MdWork} from 'react-icons/md'


const Sidenav = () => {
    const [nav, setNav] =useState(false);
    const handleNav = () => {
        setNav(!nav);
        
    }
  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
        {
            nav ? (
                <div className='fixed w-full h-screen bg-[#16161a]/90 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} href='#main' className='w-[75%] flex justify-center items-center rounded-lg bg-[#7f5af0]  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 text-[#fffffe]'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                        
                    </a>
                    <a onClick={handleNav} href='#work' className='w-[75%] flex justify-center items-center rounded-lg bg-[#7f5af0]  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 text-[#fffffe]'>
                        <MdWork size={20} />
                        <span className='pl-4'>Work</span>
                    </a>
                    <a onClick={handleNav} href='#skills' className='w-[75%] flex justify-center items-center rounded-lg bg-[#7f5af0]  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 text-[#fffffe]'>
                        <AiFillCode size={20} />
                        <span className='pl-4'>Skills</span>
                    </a>
                    <a onClick={handleNav} href='#project' className='w-[75%] flex justify-center items-center rounded-lg bg-[#7f5af0]  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 text-[#fffffe]'>
                        <AiOutlineProject size={20} />
                        <span className='pl-4'>Project</span>
                    </a>
                    <a onClick={handleNav} href='#mail' className='w-[75%] flex justify-center items-center rounded-lg bg-[#7f5af0]  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 text-[#fffffe]'>
                        <AiOutlineMail size={20} />
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>
            )
            : (
                ''
            )}
        
        <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>
                <a href='#main' className='rounded-full text-[#fffffe] bg-[#7f5af0]  m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                    <AiOutlineHome />
                </a>
                <a href='#work' className='rounded-full text-[#fffffe] bg-[#7f5af0]  m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                    <MdWork />
                </a>
                <a href='#skills' className='rounded-full text-[#fffffe] bg-[#7f5af0]  m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                    <AiFillCode />
                </a>
                <a href='#mproject' className='rounded-full text-[#fffffe] bg-[#7f5af0]  m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                    <AiOutlineProject />
                </a>
                <a href='#mail' className='rounded-full text-[#fffffe] bg-[#7f5af0]  m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                    <AiOutlineMail />
                </a>
            </div>
        </div>

    </div>
  )
}

export default Sidenav