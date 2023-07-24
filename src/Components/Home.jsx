// import React from "react"
import BG from "../assets/BG.jpg"
import { TypeAnimation } from "react-type-animation"
import {FaLinkedinIn, FaGithub} from "react-icons/fa"


const Home = () => {
  return (
    <div id="main">
        <img className="w-full h-screen object-cover object-left scale-x-[-1]" src={BG} alt="bg" />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Aga Ilham</h1>
                <h2 className="flex sm:3xl text-2xl pt-4 text-gray-800">
                    I'm a 
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Front End Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'UI/UX Designer',
        2000,
      
      ]}
      wrapper="div"
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
      repeat={Infinity}
    />
                </h2>
                <div className="flex justify-between pt-6 max-w-[50px] w-full">
                   <FaLinkedinIn size={20} className="cursor-pointer"/>
                   <FaGithub size={20} className="cursor-pointer" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home