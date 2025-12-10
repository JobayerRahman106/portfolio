import React from 'react'
import PhoneImg from '../assets/image/call.png'
import MailImg from '../assets/image/mail.png'

const Contact = () => {
  return (
    <div className='px-10 py-20'>
      <h2 className='text-5xl font-semibold text-center text-transparent bg-clip-text bg-linear-to-r from-sky-400  to-sky-900 text-transform: uppercase'>Contact Me</h2>

      <div className='grid grid-cols-3 mt-16 gap-6'>
        <div className='border  p-10 '>
          <div className="flex flex-col items-center ">
            <img className='w-10' src={PhoneImg} alt="PhoneImg" />
            <h3 className='my-2 font-semibold text-transparent bg-clip-text bg-linear-to-r from-green-400 to-teal-700 text-transform: uppercase'>Phone</h3>
            <p className='text-gray-400'>+8801707-607518</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact