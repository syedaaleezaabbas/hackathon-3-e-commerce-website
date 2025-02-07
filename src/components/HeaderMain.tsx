import React from 'react'
import Link from 'next/link';
import { FaChevronDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5"
import { TbShoppingCart } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import MobileHeader from './MobileHeader';

const HeaderMain = () => {
    return (
        <>
            <div className='md:flex hidden items-center justify-between py-6 px-8 space-x-2 max-w-screen-2xl mx-auto'>
                <h1 className='text-[28px] font-bold text-[#252b42]'>Bandage</h1>
                <ul className='flex flex-row items-center text-[#737373] font-semibold text-[18px] gap-x-5 overflow-x-hidden'>
                    <li><Link href="/">Home</Link></li>
                    <li className='flex flex-row items-center text-[#252b42] font-medium gap-x-3'><Link href="/shop">Shop</Link><FaChevronDown className='text-lg' /></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/pages">Pages</Link></li>
                    <li><Link href="/product">Products</Link></li>
                </ul>
                <div className='flex items-center gap-x-2 text-[#23A6F0] font-bold text-[18px]'>
                    <FaRegUser /> <a href="#">Login/Register</a>
                    <div className='flex items-center gap-x-4 ml-2'>
                        <p className='text-xl'><a href="#"><IoSearchSharp /></a></p>
                        <p className='text-xl'><Link href="/cart"><TbShoppingCart /></Link></p>
                        <p className='text-xl'><a href="#"><FaRegHeart /></a></p>
                    </div>
                </div>
            </div>

            <MobileHeader />
        </>
    )
}

export default HeaderMain;