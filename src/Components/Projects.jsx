import React from 'react'
import Projectitem from "./Projectitem"
import IMG1 from '../assets/PIMG1.png';
import IMG2 from "../assets/PIMG2.png"
import IMG3 from "../assets/Project_3g.gif"
import IMG4 from "../assets/Project_1g.gif"

const Projects = () => {
  return (
  <div className="w-full h-full bg-[#242629]">
        
    <div id="mproject" className="max-w-[1040px]  m-auto  p-4 py-16">
    <h1 className="text-4xl text-center text-[#fffffe] font-bold" >
        Project
    </h1>
    <p className="text-center py-8 text-[#94a1b2]">
        Project that i've worked on.Each project showcases my skills and passion for creating innovative solutions. These endeavors reflect the diverse range of skills I possess. 
    </p>
    <div className="grid sm:grid-cols-2 gap-12">
        <Projectitem img={IMG1} title='Netflix Firebase' subtitle='Reactjs+firebase netflix clone with user auth and create/login account using firebase and hosted in firebase.' />
        <Projectitem img={IMG2} title='Kanala Resto' subtitle='Under development ReactJs company profile of an family restaurant located in salatiga jawa tengah' />
        <Projectitem img={IMG3} title='Collision Mitigation App' subtitle='Detect distance with vehicle ahead to  mitigate head on collision with android app using tensorflow as object detection model' />
        <Projectitem img={IMG4} title='Web Based Game' subtitle='Feeding Frenzy and Hangman style game built with javascirpt, HTML5, and phaser engine. ' />
    </div>
    </div>
  </div>
  )
}

export default Projects