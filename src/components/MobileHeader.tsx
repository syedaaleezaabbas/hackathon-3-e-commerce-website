import React from 'react'
import Link from 'next/link'
import { IoSearchSharp } from "react-icons/io5"
import { TbShoppingCart } from "react-icons/tb";
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const MobileHeader = () => {
    return (
        <Sheet>
            <div className='flex items-center justify-between py-4 px-4 md:hidden'>
                <h1 className='text-[28px] font-bold text-[#252b42]'>Bandage</h1>
                <div className='flex items-center gap-x-6'>
                    <p className='text-xl flex items-center'><a href="#"><IoSearchSharp /></a></p>
                    <p className='text-xl flex items-center'><Link href="/cart"><TbShoppingCart /></Link></p>

                    <SheetTrigger className='md:hidden'>
                        <Menu />
                    </SheetTrigger>
                </div>
            </div>
            <SheetContent>
                <ul className='flex flex-col text-center text-[#737373] font-semibold text-[18px] pt-20 space-y-4'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/product">Products</Link></li>
                    <li><Link href="/shop">Shop</Link></li>
                    <li><Link href="/pages">Pages</Link></li>
                    <li><Link href="/pricing">Pricing</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </SheetContent>
        </Sheet>
    )
}

export default MobileHeader