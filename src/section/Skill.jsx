import React from 'react'
import HtmlImg from '../assets/image/html.png'
import CsslImg from '../assets/image/css.png'
import TailwindImg from '../assets/image/tailwind.png'
import JSImg from '../assets/image/js.png'
import ReactImg from '../assets/image/react.png'
import WordpressImg from '../assets/image/wordpress.png'
import ElementorImg from '../assets/image/elementor.png'
import ShopifyImg from '../assets/image/shopify.png'

const Skill = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center py-20'>
        <div className='px-4'>
            <h4 className='text-[18px] leading-7 font-semibold text-transform: uppercase text-[#e8ba13]'>I'm expert on</h4>
            <h2 className='text-3xl lg:text-5xl leading-12 lg:leading-16 font-bold text-transform: uppercase text-[#38bcf7] mt-3 tracking-widest '>lets work <br /> together</h2>
            <p className='w-full lg:max-w-2xl text-white text-sm leading-6 lg:text-base lg:leading-7 font-normal my-6 lg:my-10'> Are you looking for a dedicated Front-End Developer who specializes in React.js, Elementor, and Shopify to bring your ideas to life? Let’s work together to build clean, responsive, and high-performance digital experiences. Whether you need a modern website, a custom Shopify store, or a dynamic React application, I’m here to help.</p>
            <div> 
                <button className='border-none py-1 px-3 lg:py-2 lg:px-6 text-white bg-linear-to-r from-green-400 to-teal-700 hover:bg-gradient-to-l cursor-pointer'>Hire Me Now</button>
            </div>
        </div>

        <div className=' space-y-5 mt-8' >
            <div >
                <div className='grid grid-cols-4 gap-3 lg:gap-5 px-4'>
                    <div className='bg-[#2c3441a2] border border-gray-700'><img className=" lg:w-24 mx-auto px-3 py-6" src={HtmlImg} alt="" /></div>
                    <div className='bg-[#2c3441a2] border border-gray-700'><img className=" lg:w-24 mx-auto px-3 py-6" src={CsslImg} alt="" /></div>
                    <div className='bg-[#2c3441a2] border border-gray-700'><img className=" lg:w-24 mx-auto px-3 py-6" src={TailwindImg} alt="" /></div>
                    <div className='bg-[#2c3441a2] border border-gray-700'><img className=" lg:w-24 mx-auto px-3 py-6" src={JSImg} alt="" /></div>
                </div>
            </div>

            <div>
                <div className='grid grid-cols-4 gap-3 lg:gap-5 px-4'>
                    <div className='bg-[#2c3441a2] border border-gray-700'><img className="w-24 mx-auto px-3 py-6" src={ReactImg} alt="" /></div>
                    <div className='bg-[#2c3441a2] border border-gray-700'><img className="w-24 mx-auto px-3 py-6" src={WordpressImg} alt="" /></div>
                    <div className='bg-[#2c3441a2] border border-gray-700'><img className="w-24 mx-auto px-3 py-6" src={ElementorImg} alt="" /></div>
                    <div className='bg-[#2c3441a2] border border-gray-700'><img className="w-24 mx-auto px-3 py-6" src={ShopifyImg} alt="" /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill