import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Footer from '@/components/Footer';
import PricingFAQs from '@/components/Faqs';
import MobileHeader from '@/components/MobileHeader';

const Pricing = () => {
  return (
    <div className="bg-white max-w-screen-2xl mx-auto overflow-x-hidden">
      {/* Header */}
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
            <button className='font-bold text-[16px] text-white bg-[#23A6F0] hover:bg-[#1d8bd1] px-6 py-2 rounded flex items-center gap-x-3'>
              Become a member<FaLongArrowAltRight className='text-lg' />
            </button>
          </div>
        </div>
      </header>

      <MobileHeader />


      {/* Pricing Header */}
      <div className='text-center mb-6 mt-20'>
        <h4 className='text-lg font-semibold text-[#737373] mb-6'>PRICING</h4>
        <h1 className='md:text-4xl text-3xl font-bold text-[#252B42]'>SIMPLE PRICING</h1>
      </div>


      {/* Breadcrumb */}
      <nav className='text-lg text-[#737373] mb-20 flex items-center justify-center'>
        <Link href="/" className='text-[#252B42]'>Home</Link>
        <span className='text-2xl text-[#737373] mx-3'>&gt;</span>
        <span className='font-medium text-[#737373]'>Pricing</span>
      </nav>


      {/* Pricing Section */}
      <div className='bg-gray-100 pb-24'>
        <div className="text-center py-16">
          <h2 className="text-3xl text-[#252B42] font-bold mb-4">Pricing</h2>
          <p className="md:px-0 px-2 text-[#737373]">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian Mechanics
          </p>
        </div>


        {/* Toggle Section */}
        <div className='flex items-center justify-center mb-10 bg-gray-100'>
          <span className='pr-2 text-lg font-medium'>Monthly</span>
          <div className='bg-white rounded-full border-2 border-blue-500 flex items-center justify-start p-1 w-14 cursor-pointer'>
            <button className="h-4 w-4 rounded-full bg-[#737373]"></button>
          </div>
          <span className='px-2 text-lg font-medium'>Yearly</span>
          <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Save 25%</div>
        </div>


        {/* Pricing Cards */}
        <div className="flex md:flex-row flex-col justify-center items-center md:gap-1 gap-3 max-w-7xl mx-auto px-4 lg:px-0 bg-gray-100">
          {/* Free Plan */}
          <div className="bg-white border-t border-l border-r border-blue-500 rounded-t-lg shadow-t-lg p-6 text-center w-80">
            <h3 className="font-bold text-[#252B42] text-lg">FREE</h3>
            <p className="text-[#737373] font-extrabold mt-6">Organize across all<br /> apps by hand</p>
            <p className="text-4xl font-bold mt-6 text-blue-500">0<sup className='pl-2'>$</sup></p>
            <p className="pl-24 text-blue-300 font-bold">Per Month</p>
            <div className='flex items-center justify-center mt-6'>
              <span className='text-green-600 text-2xl'><FaCircleCheck /></span>
              <p className="text-[#252B42] font-medium ml-2">Unlimited product updates</p>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="bg-[#252B42] border-t border-l border-r border-blue-500 rounded-t-lg text-white shadow-t-lg px-6 py-8 text-center w-80">
            <h3 className="font-bold text-lg">STANDARD</h3>
            <p className="mt-6">Organize across all<br /> apps by hand</p>
            <p className="text-4xl font-bold mt-6">9.99<sup className='ml-2'>$</sup></p>
            <p className='pl-36'>Per Month</p>
            <div className='flex items-center justify-center mt-6'>
              <span className='text-green-600 text-2xl'><FaCircleCheck /></span>
              <p className="font-medium ml-2">Unlimited product updates</p>
            </div>
            <div className='flex items-center justify-center mt-2'>
              <span className='text-green-600 text-2xl'><FaCircleCheck /></span>
              <p className="font-medium ml-2">Additional features</p>
            </div>
          </div>

          {/* Free Plan */}
          <div className="bg-white border-t border-l border-r border-blue-500 rounded-t-lg shadow-t-lg p-6 text-center w-80">
            <h3 className="font-bold text-[#252B42] text-lg">FREE</h3>
            <p className="text-[#737373] font-extrabold mt-6">Organize across all<br /> apps by hand</p>
            <p className="text-4xl font-bold mt-6 text-blue-500">0<sup className='pl-2'>$</sup></p>
            <p className="pl-24 text-blue-300 font-bold">Per Month</p>
            <div className='flex items-center justify-center mt-6'>
              <span className='text-green-600 text-2xl'><FaCircleCheck /></span>
              <p className="text-[#252B42] font-medium ml-2">Unlimited product updates</p>
            </div>
          </div>
        </div>


        {/* Trusted By Section */}
        <div className="mt-16 text-center bg-gray-100">
          <p className="text-[#737373] font-bold mb-6">Trusted By Over 4000 Big Companies</p>
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
      </div>



      {/* FAQs */}
      <PricingFAQs />



      {/* Call To Action */}
      <div className="mt-16 text-center py-10 bg-white">
        <h3 className="text-3xl text-[#252B42] font-bold">Start your 14 days free trial</h3>
        <p className="text-[#737373] mt-6 mb-6">Met minim Mollie non desert Alamo est sit cliquey dolor<br /> do met sent. RELIT official conseuent.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mb-4">
          Try It Free Now
        </button>
        <div className="flex justify-center mt-4 gap-5">
          <a href="#" className="text-blue-950 text-3xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-blue-400 text-3xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-black text-3xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-800 text-3xl">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;