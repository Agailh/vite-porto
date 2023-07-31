import React from 'react'
import Phaser from '../assets/phaser.png'
import HTML from '../assets/HTML5.png'
import CSS from '../assets/css-icon.png'
import Javascript from '../assets/javascript.png'
import Tailwind from '../assets/tailwind-css-icon.png'
import TFL from '../assets/TFL.png'
import Rjs from '../assets/pngwing.com.png'
import Vicn from '../assets/vite.svg'

const Skill = () => {
  return (
    <div id="skills" className="w-full h-full bg-[#242629]">
        <div className="max-w-[1040px] py-16 mx-auto p-4 flex flex-col justify-center w-full h-full">
        <h1 className="text-4xl font-bold text-center text-[#fffffe]">Skills</h1>
            <div className="lassName='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className='shadow-md shadow-black hover:scale-110 duration-500 bg-[#16161a]'>
            <img className='w-20 mx-auto pt-7' src={Phaser} alt='Phaser Icon' />
            <p className='my-4 text-white'>Phaser</p>
          </div>
          <div className='shadow-md shadow-black bg-[#16161a] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-5' src={HTML} alt='Html Icon' />
            <p className='my-4 text-white'>HTML</p>
          </div>
          <div className='shadow-md shadow-black bg-[#16161a] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-5' src={CSS} alt='CSS Icon' />
            <p className='my-4 text-white'>CSS</p>
          </div>
          <div className='shadow-md shadow-black bg-[#16161a] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-5' src={Javascript} alt='Javascript Icon' />
            <p className='my-4 text-white'>Javascript</p>
          </div>
          <div className='shadow-md shadow-black bg-[#16161a] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-9' src={Tailwind} alt='Tailwind Icon' />
            <p className='my-4 text-white pt-5'>Tailwind</p>
          </div>
          <div className='shadow-md shadow-black bg-[#16161a] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-5' src={TFL} alt='TFL Icon' />
            <p className='my-4 text-white'>TFL</p>
          </div>
          <div className='shadow-md shadow-black bg-[#16161a] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-5' src={Rjs} alt='TFL Icon' />
            <p className='my-4 text-white'>ReactJS</p>
          </div>
          <div className='shadow-md shadow-black bg-[#16161a] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-5' src={Vicn} alt='TFL Icon' />
            <p className='my-4 text-white'>vite</p>
          </div>
            </div>
        </div>

    </div>
  )
}

export default Skill