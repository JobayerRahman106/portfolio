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
    <div className='flex justify-between items-center py-20'>
        <div>
            <h4 className='text-[18px] leading-7 font-semibold text-transform: uppercase text-[#e8ba13]'>I'm expert on</h4>
            <h2 className='text-[48px] leading-15 font-bold text-transform: uppercase text-[#38bcf7] mt-3 tracking-widest '>lets work <br /> togethter</h2>
            <p className='max-w-2xl text-white text-base leading-7 font-normal my-10'> Are you looking for a passionate and skilled MERN stack developer to turn your ideas into reality? Let's collaborate to create something extraordinary! Whether you need a modern web application, a robust backend solution, or a full-stack project from scratch, I'm here to assist you.
            Let’s connect and transform your vision into a digital reality. Reach out to kick off our journey of building something remarkable together!</p>
            <div> 
                <button className='border-none py-2 px-6 text-white bg-gradient-to-r from-green-400 to-teal-700 hover:bg-gradient-to-l cursor-pointer'>Hire Me Now</button>
            </div>
        </div>

        <div className='space-y-5' >
            <div >
                <div className='grid grid-cols-4 gap-5'>
                    <div className='bg-[#2c3441a2] border border-gray-700'><img className="w-24 mx-auto px-3 py-6" src={HtmlImg} alt="" /></div>
                    <div className='bg-[#2c3441a2] border border-gray-700'><img className="w-24 mx-auto px-3 py-6" src={CsslImg} alt="" /></div>
                    <div className='bg-[#2c3441a2] border border-gray-700'><img className="w-24 mx-auto px-3 py-6" src={TailwindImg} alt="" /></div>
                    <div className='bg-[#2c3441a2] border border-gray-700'><img className="w-24 mx-auto px-3 py-6" src={JSImg} alt="" /></div>
                </div>
            </div>

            <div>
                <div className='grid grid-cols-4 gap-5'>
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