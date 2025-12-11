import React from 'react'
import GraduationImg from '../assets/image/graduation.png'
import DiplomaImg from '../assets/image/diploma.png'

const Qualification = () => {
  return (
    <div className='py-16'>
        <div>
            <h2 className='text-3xl leading-12 lg:text-5xl font-semibold text-center text-transparent bg-clip-text bg-linear-to-r from-sky-400  to-sky-900 uppercase'>Educational Qualifications</h2>
            <p className='px-4 max-w-3xl mx-auto  text-white mt-6 leading-7 text-sm lg:text-base text-justify lg:text-center'>I’m currently studying Computer Science & Engineering (CSE) , where I'm developing a solid base in programming, problem-solving, and modern technologies. My academic journey inspires me to keep learning, improving, and preparing for exciting opportunities in the tech world.</p>
        </div>


        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-3 lg:gap-6 mt-16 ">

            <div className=' p-3 lg:p-6 bg-bg-primary rounded-none text-white border border-gray-700' >
                <figure>
                    <img src={GraduationImg} alt="" />
                </figure>

                <div>
                    <h3 className=' text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-green-400  to-teal-700'>Bachelor of Science in Computer Science and Engineering</h3>
                    <h4 className='text-lg lg:text-xl font-medium text-[#38bcf7] mt-2'>Dhaka International University</h4>
                    <h5 className='text-sm text-gray-400 py-2'>Satarkul, Badda, Dhaka-1212, Bangladesh.</h5>
                    <h6 className='text-sm text-gray-400'>2023 - Present</h6>
                </div>
            </div>
            <div className=' p-3 lg:p-6 bg-bg-primary rounded-none text-white border border-gray-700' >
                <figure>
                    <img src={DiplomaImg} alt="DiplomaImg" />
                </figure>

                <div>
                    <h3 className='text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-green-400  to-teal-700'>Diploma in Computer Science and Technology</h3>
                    <h4 className=' text-lg lg:text-xl font-medium text-[#38bcf7]  mt-2'> Dinajpur Polytechnic Institute </h4>
                    <h5 className='text-sm text-gray-400 py-2'>Dinajpur Sadar, Dinajpur</h5>
                    <h6 className='text-sm text-gray-400'>2018 - 2022</h6>
                </div>
            </div>


        </div>

    </div>
    
  )
}

export default Qualification