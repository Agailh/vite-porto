import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-with-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-black'>Contact</h1>
        <form action="https://getform.io/f/b749825a-af53-4264-9f25-c82b095448fa" method='post' encType='multipart/from-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name'/>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone </label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='Phone' />
                </div>
            </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='Email' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input className='uppercase border-2 rounded-lg p-3 flex border-gray-300' type="text" name='Subject' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' type="text" name='Message' />
                </div>
                <button className='bg-black text-gray-200 w-full p-4 rounded-lg mt-4'>
                    Send Massage
                </button>
        </form>
    </div>
  )
}

export default Contact