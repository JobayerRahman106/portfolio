import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import BannerImg from "../assets/image/banner.png"



const Banner = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row justify-center items-center lg:justify-between lg:items-end mt-5 lg:mt-12'>
        <div className='px-4'>
            <h1 className='font-extrabold text-3xl lg:text-6xl text-transform: uppercase leading-10 lg:leading-16 text-[#1b719c]'>
                I'm Jobayer <br /> Rahman
            </h1>
            <p className='font-normal text-base leading-7 text-white mt-10 mb-14'>I am a <span className='text-transform: capitalize font-semibold text-[18px] text-[#0d9488]'>Frontend Developer and WordPress & Shopify Expert</span> <br /> I’m very passionate and dedicated to my work.</p>
            <h3 className='font-medium text-transform: uppercase tracking-wide text-base leading-6 text-white mb-4'>find with me</h3>
            <div className='flex gap-5 text-[#1b719c] text-2xl'>
                <Link to="https://www.facebook.com/jobayerrahman.official"> <FaFacebookSquare /> </Link>
                <Link to="https://github.com/JobayerRahman106"> <FaGithubSquare /> </Link>
                <Link to="https://www.linkedin.com/in/jobayerrahmanofficial/"> <FaLinkedin /> </Link>
            </div>
        </div>
        <div>
            <img className='w-3xs mb-10 lg:w-sm mx-auto rounded-full' src={BannerImg} alt="bannerimg" />
        </div>
        
    </div>
  )
}

export default Banner