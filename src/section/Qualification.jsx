import React from 'react'
import GraduationImg from '../assets/image/graduation.png'
import DiplomaImg from '../assets/image/diploma.png'

const Qualification = () => {
  return (
    <div className='py-20'>
        <div>
            <h2 className='text-5xl font-semibold text-center text-transparent bg-clip-text bg-linear-to-r from-sky-400  to-sky-900 uppercase'>Educational Qualifications</h2>
            <p className='max-w-3xl mx-auto text-center text-white mt-6 leading-7'>My educational background reflects a commitment to growth and learning, building a strong foundation for future opportunities. This journey has equipped me with knowledge, skills, and the drive to excel.</p>
        </div>


        <div className="flex flex-row items-center justify-between gap-6 mt-16 ">

            <div className='p-6 bg-bg-primary rounded-none text-white border border-gray-700' >
                <figure>
                    <img src={GraduationImg} alt="" />
                </figure>

                <div>
                    <h3 className='text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-green-400  to-teal-700'>Bachelor of Science in Computer Science and Engineering</h3>
                    <h4 className='text-xl font-medium text-[#38bcf7] mt-2'>Dhaka International University</h4>
                    <h5 className='text-sm text-gray-400 py-2'>Satarkul, Badda, Dhaka-1212, Bangladesh.</h5>
                    <h6 className='text-sm text-gray-400'>2023 - Present</h6>
                </div>
            </div>
            <div className='p-6 bg-bg-primary rounded-none text-white border border-gray-700' >
                <figure>
                    <img src={DiplomaImg} alt="DiplomaImg" />
                </figure>

                <div>
                    <h3 className='text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-green-400  to-teal-700'>Diploma in Computer Science and Technology</h3>
                    <h4 className='text-xl font-medium text-[#38bcf7]  mt-2'> Dinajpur Polytechnic Institute </h4>
                    <h5 className='text-sm text-gray-400 py-2'>Dinajpur Sadar, Dinajpur</h5>
                    <h6 className='text-sm text-gray-400'>2018 - 2022</h6>
                </div>
            </div>


        </div>

    </div>
    
  )
}

export default Qualification