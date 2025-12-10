import React from 'react'
import AboutImg from '../assets/image/about.png'

const About = () => {
  return (
    <div className='flex justify-between items-center mt-24 py-20'>
        <div >
            <img className='w-xs mx-auto rounded-xl ' src={AboutImg} alt="aboutimg" />
        </div>
        <div className='max-w-[650px]'>
            <h2 className='text-5xl font-extrabold text-transform: uppercase leading-12 text-[#1b719c]'>About Me</h2>
            <p className='text-base leading-6 text-white text-justify  mt-6'>Hi, I’m Jobayer Rahman — a Front-End Developer and WordPress & Shopify Expert. I build fast, responsive, and user-friendly websites that help businesses grow online. I focus on clean code, modern design, and seamless user experience.</p>

            <p className='text-base leading-6 text-white text-justify  mt-6'>I specialize in Front-End Development,focusing on creating responsive, high-performance applications in React.js. I also WordPress and Shopify website development</p>
            <div className='mt-8'> 
            <button className='border-none py-2 px-6 text-white bg-linear-to-r from-green-400 to-teal-700 hover:bg-gradient-to-l cursor-pointer'>Download Resume</button> 
          </div>

        </div>

        
    </div>
  )
}

export default About