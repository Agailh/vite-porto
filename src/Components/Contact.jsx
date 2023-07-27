//import React from 'react'

const Contact = () => {
  return (
        <div className="w-full h-full bg-[#242629]">
        <div id='mail' className='max-w-[1040px] m-auto md:py-2 p-4 py-16 bg-[#242629]'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#fffffe]'>Contact</h1>
        <form action="https://getform.io/f/b749825a-af53-4264-9f25-c82b095448fa" method='post' encType='multipart/from-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-[#fffffe]'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-black bg-[#16161a] text-[#fffffe]' type="text" name='name'/>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-[#fffffe]'>Phone </label>
                    <input className='border-2 rounded-lg p-3 flex border-black bg-[#16161a] text-[#fffffe]' type="text" name='Phone' />
                </div>
            </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 text-[#fffffe]'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-black bg-[#16161a] text-[#fffffe]' type="email" name='Email' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 text-[#fffffe]'>Subject</label>
                    <input className='uppercase border-2 rounded-lg p-3 flex border-black bg-[#16161a] text-[#fffffe]' type="text" name='Subject' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 text-[#fffffe]'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-black bg-[#16161a] text-[#fffffe]' rows='10' type="text" name='Message' />
                </div>
                <button className='bg-[#2cb67d] text-[#fffffe] w-full p-4 rounded-lg mt-4'>
                    Send Massage
                </button>
        </form>
    </div>
    </div>
  )
}

export default Contact