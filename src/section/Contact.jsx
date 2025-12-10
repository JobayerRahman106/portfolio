import React from 'react'
import PhoneImg from '../assets/image/call.png'
import MailImg from '../assets/image/mail.png'
import LocationImg from '../assets/image/location.png'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='px-10 py-20'>
      <h2 className='text-5xl font-semibold text-center text-transparent bg-clip-text bg-linear-to-r from-sky-400  to-sky-900 text-transform: uppercase'>Contact Me</h2>

      <div className='grid grid-cols-3 mt-16 gap-6'>

        <div className='border  p-12 border-none  bg-[#232b36]'>
          <div className="flex flex-col items-center ">
            <img className='w-10' src={PhoneImg} alt="PhoneImg" />
            <h3 className='my-2  font-semibold text-transparent bg-clip-text bg-linear-to-r from-green-400 to-teal-700 text-transform: uppercase'>Phone</h3>
            <Link to="tel:+8801707-607518" className='text-gray-400'>+8801707-607518</Link>
          </div>
        </div>
        <div className='border  p-12 border-none  bg-[#232b36]'>
          <div className="flex flex-col items-center ">
            <img className='w-10' src={MailImg} alt="PhoneImg" />
            <h3 className='my-2  font-semibold text-transparent bg-clip-text bg-linear-to-r from-green-400 to-teal-700 text-transform: uppercase'>e-mail</h3>
            <Link to="mailto:jobayerrahman.diu@gmail.com" className='text-gray-400'>jobayerrahman.diu@gmail.com</Link>
          </div>
        </div>
        <div className='border  p-12 border-none  bg-[#232b36]'>
          <div className="flex flex-col items-center ">
            <img className='w-10' src={LocationImg} alt="PhoneImg" />
            <h3 className='my-2  font-semibold text-transparent bg-clip-text bg-linear-to-r from-green-400 to-teal-700 text-transform: uppercase'>address</h3>
            <Link  className='text-gray-400'>Nutun Bazar, Badda, Dhaka</Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact