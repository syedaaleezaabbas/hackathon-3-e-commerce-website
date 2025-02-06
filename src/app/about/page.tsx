import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { FaLongArrowAltRight } from "react-icons/fa";
import MeetOurTeam from '@/components/MeetOurTeam';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';

const page = () => {
    return (
        <div className='bg-white max-w-screen-2xl mx-auto'>
            {/* header */}
            <header className='bg-white md:block hidden'>
                <div className='px-20 py-4 space-x-8 flex items-center justify-between'>
                    <h1 className='font-bold text-[28px] text-[#252B42]'>Bandage</h1>
                    <nav>
                        <ul className='flex space-x-4 font-bold text-[16px] text-[#737373]'>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/product">Product</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                    <div className='flex space-x-6'>
                        <button className="font-bold text-[16px] text-[#23A6F0]">Login</button>
                        <button className='font-bold text-[16px] text-white bg-[#23A6F0] hover:bg-[#1d8bd1] px-6 py-2 rounded flex items-center gap-x-3'>Become a member<FaLongArrowAltRight className='text-lg' /></button>
                    </div>
                </div>
            </header>

            <MobileHeader />



            {/* about us */}
            <section className="md:pl-20 pl-0
             px-10 pb-20 md:pt-0 pt-8 flex justify-between flex-col md:flex-row items-center bg-white">
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <h5 className='text-[#252B42] text-lg text-left  font-bold mb-6'>About Company</h5>
                    <h2 className="md:text-6xl text-4xl text-left  text-[#252B42] font-bold mb-6">About Us</h2>
                    <p className="text-[#737373] mb-6 text-left">
                        We know how large objects will act,<br /> but things on a small scale.
                    </p>
                    <button className="bg-[#23A6F0] hover:bg-[#1d8bd1] text-white font-bold py-2 md:px-10 px-8 rounded">
                        Get Quote Now
                    </button>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="/about1.png"
                        alt="About Us Image"
                        width={800}
                        height={800}
                    />
                </div>
            </section>



            {/* problems trying code */}
            <div className='md:pl-20 pl-10 md:pr-60 mr-0 bg-white mb-20'>
                <div className="font-bold text-lg text-[#E74040] mb-6">
                    Problems trying
                </div>
                <div className="md:flex items-center justify-between">
                    <p className="font-bold text-xl max-w-sm text-[#252B42] md:mb-0 mb-4">
                        Met minim Mollie non desert
                        Alamo est sit cliquey dolor do
                        met sent.
                    </p>
                    <p className='text-lg mx-w-sm text-[#737373] md:ml-10'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
            </div>



            {/* happy customers code */}
            <div className="md:flex justify-between items-center md:px-40 px-20 bg-white">
                <div className="text-center md:mb-0 mb-20">
                    <h2 className="md:text-5xl text-4xl font-bold text-[#252B42]">15K</h2>
                    <p className="text-[#737373] mt-2">Happy Customers</p>
                </div>
                <div className="text-center md:mb-0 mb-20">
                    <h2 className="md:text-5xl text-4xl font-bold text-[#252B42]">150K</h2>
                    <p className="text-[#737373] mt-2">Monthly Visitors</p>
                </div>
                <div className="text-center md:mb-0 mb-20">
                    <h2 className="md:text-5xl text-4xl font-bold text-[#252B42]">15</h2>
                    <p className="text-[#737373] mt-2">Countries Worldwide</p>
                </div>
                <div className="text-center md:mb-0 mb-20">
                    <h2 className="md:text-5xl text-4xl font-bold text-[#252B42]">100+</h2>
                    <p className="text-[#737373] mt-2">Top Partners</p>
                </div>
            </div>



            {/* image */}
            <div className='md:mt-40 mt-20 md:px-0 px-5'>
                <Image
                    src="/Video card.png"
                    alt="video card pic"
                    width={1000}
                    height={800}
                    className='rounded-lg mx-auto'
                />
            </div>



            {/* meet our team code */}
            <MeetOurTeam />



            {/* big companies code */}
            <div className="mb-12">
                <div className='flex flex-wrap justify-center items-center gap-20 md:px-0 px-6'>
                    <Image
                        src={'/logo1.png'}
                        alt='vector1'
                        height={200}
                        width={100}
                    />
                    <Image
                        src={'/logo2.png'}
                        alt='Lyft logo'
                        height={200}
                        width={100}
                    />
                    <Image
                        src={'/logo3.png'}
                        alt='vector 3'
                        height={200}
                        width={100}
                    />
                    <Image
                        src={'/logo4.png'}
                        alt='vector 4'
                        height={200}
                        width={100}
                    />
                    <Image
                        src={'/logo5.png'}
                        alt='vector5'
                        height={200}
                        width={100}
                    />
                    <Image
                        src={'/logo6.png'}
                        alt='vector6'
                        height={200}
                        width={100}
                    />
                </div>
            </div>



            {/* work with us */}
            <section className="flex flex-col md:flex-row items-center justify-between bg-[#2A7CC7] md:py-16 py-12 md:pl-40 pl-10 text-white">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h5 className='text-lg text-white mb-6'>WORK WITH US</h5>
                    <h2 className="md:text-5xl text-4xl text-white font-bold mb-4 ">Now Let’s Grow Yours</h2>
                    <p className="text-white mb-6">
                        The gradual accumulation of information about atomic and small-scale behaviour during the first quarter of the 20th century.
                    </p>
                    <button className="border-2 border-white text-white px-10 py-3 font-semibold rounded-md">
                        Button
                    </button>
                </div>
                <div className="md:w-1/2 flex justify-center md:pr-0 pr-10">
                    <Image
                        src="/work.png"
                        alt="Model image"
                        width={500}
                        height={600}
                        className="object-cover"
                    />
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default page;
