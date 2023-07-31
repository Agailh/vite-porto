//import React from 'react'
import Workitem from "./Workitem"

const data = [
  
    {
        year : 2020,
        title : 'Programmer Internship at PT. Educa Sisfomedia Indonesia',
        duration : '6 months',
        details : 'Remote Internship, responsible for completing training and project given by supervisor in accordance within the specified time period. Project technologies used : Javascript, HTML5, Phaser Engine'
    },
 
]
const Work = () => {
  return (
    
    <div className="w-full h full bg-[#242629]">
    <div id="work" className="max-w-[1040px] m-auto md:pl-10 p-4 py-16 bg-[#16161a]  ">
        <h1 className="text-4xl font-bold text-center text-[#fffffe] pb-16">Work</h1>
        {data.map((item, idx) => {
            return  <Workitem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
        })}
    </div>
    </div>
  )
}

export default Work