import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HeaderTop = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className="bg-blue-950 text-white py-4 px-8 md:flex hidden space-x-8 text-left justify-between items-center">
                <div className="flex items-center gap-x-4">
                    <p className='text-[16px] flex items-center gap-x-1'><LuPhone className='text-lg' />(225) 1 555-0118</p>
                    <p className='text-[16px] flex items-center gap-x-1'><TfiEmail className='text-lg' />micelle.rizvera@example.com</p>
                </div>
                <div className="text-[16px]">Follow us and get a chance to win 80% off</div>
                <div className="text-[16px] flex items-center gap-x-3">Follow Us :
                    <a href="#" className="text-white">
                        <FaInstagram /></a>
                    <a href="#" className="text-white">
                        <FaYoutube /></a>
                    <a href="#" className="text-white">
                        <FaFacebook /></a>
                    <a href="#" className="text-white">
                        <FaTwitter /></a>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;