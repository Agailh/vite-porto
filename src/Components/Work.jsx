//import React from 'react'
import Workitem from "./Workitem"

const data = [
    {
        year : 2019,
        title : 'frelance',
        duration : '6 months',
        details : 'Dolore non in ut irure tempor esse tempor ullamco incididunt est. Et ipsum labore nisi mollit eu sunt. Ut cupidatat officia dolore dolor mollit pariatur ad eiusmod aute incididunt pariatur. Sint anim cupidatat duis occaecat tempor culpa irure duis laborum do exercitation. Aliqua culpa deserunt voluptate sit cupidatat et et ipsum ut aliquip elit. In non reprehenderit aute aliquip reprehenderit elit veniam ad aliquip minim deserunt tempor do. Aliqua fugiat ea pariatur in reprehenderit velit ex duis anim.'
    },
    {
        year : 2019,
        title : 'frelance',
        duration : '6 months',
        details : 'Dolore non in ut irure tempor esse tempor ullamco incididunt est. Et ipsum labore nisi mollit eu sunt. Ut cupidatat officia dolore dolor mollit pariatur ad eiusmod aute incididunt pariatur. Sint anim cupidatat duis occaecat tempor culpa irure duis laborum do exercitation. Aliqua culpa deserunt voluptate sit cupidatat et et ipsum ut aliquip elit. In non reprehenderit aute aliquip reprehenderit elit veniam ad aliquip minim deserunt tempor do. Aliqua fugiat ea pariatur in reprehenderit velit ex duis anim.'
    },
    {
        year : 2019,
        title : 'frelance',
        duration : '6 months',
        details : 'Dolore non in ut irure tempor esse tempor ullamco incididunt est. Et ipsum labore nisi mollit eu sunt. Ut cupidatat officia dolore dolor mollit pariatur ad eiusmod aute incididunt pariatur. Sint anim cupidatat duis occaecat tempor culpa irure duis laborum do exercitation. Aliqua culpa deserunt voluptate sit cupidatat et et ipsum ut aliquip elit. In non reprehenderit aute aliquip reprehenderit elit veniam ad aliquip minim deserunt tempor do. Aliqua fugiat ea pariatur in reprehenderit velit ex duis anim.'
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