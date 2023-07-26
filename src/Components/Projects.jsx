//import React from 'react'
import Projectitem from "./Projectitem"
import IMG1 from '../assets/Project1.png';
import IMG2 from "../assets/Project1.png"
import IMG3 from "../assets/Project1.png"
import IMG4 from "../assets/Project1.png"

const Projects = () => {
  return (
    <div id="mproject" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
    <h1 className="text-4xl text-center text-black font-bold" >
        Project
    </h1>
    <p className="text-center py-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse recusandae veniam delectus ratione quos laborum repudiandae inventore aperiam, architecto, impedit reprehenderit ex aspernatur assumenda, voluptatum explicabo quibusdam doloribus iusto ducimus!
    </p>
    <div className="grid sm:grid-cols-2 gap-12">
        <Projectitem img={IMG1} title='Projects1' />
        <Projectitem img={IMG2} title='Projects2' />
        <Projectitem img={IMG3} title='Projects3' />
        <Projectitem img={IMG4} title='Projects4' />
    </div>
    </div>
  )
}

export default Projects