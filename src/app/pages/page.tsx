import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import MeetOurTeamSecond from '@/components/MeetOurTeamSecond';
import MobileHeader from '@/components/MobileHeader';
import Footer from '@/components/Footer';

const Pages = () => {
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
            <button className='font-bold md:text-[16px] text-white bg-[#23A6F0] hover:bg-[#1d8bd1] px-6 py-2 rounded flex items-center gap-x-3'>Become a member<FaLongArrowAltRight className='text-lg' /></button>
          </div>
        </div>
      </header>

      <MobileHeader />


      <div className='pt-20 pb-4'>
        <h5 className='text-[#737373] text-lg font-semibold mb-4 text-center'>What we do</h5>
        <h2 className='text-[##252B42] md:text-3xl text-2xl font-bold mb-4 text-center'>Inovation tailored for you</h2>
      </div>
      {/* Breadcrumb */}
      <nav className='text-lg text-[#737373] mb-8 flex items-center justify-center'>
        <Link href="/" className='text-[#252B42]'>Home</Link>
        <span className='text-2xl text-[#737373] mx-3'>&gt;</span>
        <span className='font-medium text-[#737373]'>Team</span>
      </nav>


      {/* innovation pics */}
      <div className="md:flex flex-column items-center justify-center mb-6">
        <div className="max-w-7xl grid md:grid-cols-4 grid-cols-2 md:px-2 px-4 md:gap-2 gap-1">
          {/* Large Left Image */}
          <div className="col-span-2 row-span-2">
            <Image
              src="/innovation1.png"
              alt="Large Fashion Model"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Right Images */}
          <div>
            <Image
              src="/innovation2.png"
              alt="Fashion Item 1"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              src="/innovation3.png"
              alt="Fashion Item 2"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Right Images */}
          <div>
            <Image
              src="/innovation4.png"
              alt="Fashion Item 3"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              src="/innovation5.png"
              alt="Fashion Item 4"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* meet our team code */}
      <MeetOurTeamSecond />


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

  )
}

export default Pages;
