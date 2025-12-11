import React from 'react'
import AboutImg from '../assets/image/about.png'

const About = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row justify-between items-center mt-16 px-4 lg:mt-24 lg:py-20'>
        <div >
            <img className=' w-sm lg:w-xs mx-auto rounded-xl ' src={AboutImg} alt="aboutimg" />
        </div>
        <div className='mt-10 mb-10 lg:max-w-[650px]'>
            <h2 className=' text-4xl lg:text-5xl font-extrabold text-transform: uppercase text-[#1b719c]'>About Me</h2>
            <p className='text-sm lg:text-base leading-6 lg:leading-7 text-white text-justify  mt-6'>Hi, I’m Jobayer Rahman — a <span className='text-transform: capitalize font-semibold text-[18px] text-[#0d9488]'>Front-End Developer and WordPress & Shopify Expert.</span> I build fast, responsive, and user-friendly websites. I focus on clean code, modern design, and seamless user experience. My goal is to turn ideas into polished digital experiences with modern UI, fast performance, and scalable solutions.</p>

            <p className='text-sm lg:text-base leading-6 lg:leading-7 text-white text-justify  mt-6'>I specialize in Front-End Development,focusing on creating responsive, high-performance applications in React.js. I also do WordPress and Shopify website development.</p>
            <div className='mt-8'> 
            <button className='border-none py-1 px-3 lg:py-2 lg:px-6 text-white bg-linear-to-r from-green-400 to-teal-700 hover:bg-gradient-to-l cursor-pointer'>Download Resume</button> 
          </div>

        </div>

        
    </div>
  )
}

export default About