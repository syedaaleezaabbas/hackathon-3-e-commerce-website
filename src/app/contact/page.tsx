import Link from "next/link"
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Footer from "@/components/Footer";
import MobileHeader from "@/components/MobileHeader";

export default function ContactPage() {
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



      {/* HERO SECTION */}
      <div className="bg-white">
        <section className="flex flex-wrap items-center justify-between md:px-20 pl-4 py-16 bg-white">
          <div className="max-w-md">
            <h5 className="text-[#252B42] text-lg mb-8 font-semibold">CONTACT US</h5>
            <h2 className="md:text-5xl text-3xl text-[#252B42] font-bold mb-6">Get in touch<br /> today!</h2>
            <p className="text-[#737373] mb-6">
              We know how large objects will act,<br /> but things on a small scale.
            </p>
            <p className="mb-2 font-bold text-[#252B42] text-lg"><strong className="font-bold text-[#252B42] text-lg">Phone:</strong> +451 215 215</p>
            <p className="mb-6 font-bold text-[#252B42] text-lg"><strong className="font-bold text-[#252B42] text-lg">Fax:</strong> +451 215 215</p>
            <div className="flex gap-4 text-xl md:mb-0 mb-20">
              <a href="#" className="text-[#252B42]">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-[#252B42]">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-[#252B42]">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-[#252B42]">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="max-w-md">
            <Image
              src="/contact-us.png"
              alt="Shopping Family"
              width={1000}
              height={1000}
            />
          </div>
        </section>



        {/* Visit Our Office */}
        <section className="text-center px-8 py-16">
          <h3 className="md:text-xl text-lg text-[#252B42] font-semibold uppercase mb-4">Visit our office</h3>
          <h2 className="md:text-4xl text-3xl font-bold text-[#252B42] mb-8">
            We help small businesses<br className="md:block hidden" /> with big ideas
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Support Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              {/* Card 1 */}
              <div className="p-6 text-center flex flex-col items-center justify-center">
                <Image
                  src="/phone.png"
                  alt="phone"
                  width={50}
                  height={50}
                  className="mt-16"
                />
                <p className="text-[#252B42] mt-4">georgia.young@example.com</p>
                <p className="text-[#252B42]">georgia.young@ple.com</p>
                <h5 className="mt-4 text-lg font-semibold">Get Support</h5>
                <button className="mt-4 border-2 border-[#23A6F0] text-[#23A6F0] py-3 px-8 rounded-full hover:bg-[#1d8bd1] hover:text-white mb-16">
                  Submit Request
                </button>
              </div>

              {/* Card 2 */}
              <div className="bg-[#252B42] text-white p-6 text-center flex flex-col items-center justify-center">
                <Image
                  src="/location.png"
                  alt="location"
                  width={50}
                  height={50}
                  className="mt-16"
                />
                <p className="text-white mt-4">georgia.young@example.com</p>
                <p className="text-white">georgia.young@ple.com</p>
                <h5 className="mt-4 text-lg font-semibold">Get Support</h5>
                <button className="mt-4 border-2 border-[#23A6F0] text-[#23A6F0] py-3 px-8 rounded-full hover:bg-[#1d8bd1] hover:text-white mb-16">
                  Submit Request
                </button>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 text-center flex flex-col items-center justify-center">
                <Image
                  src="/email.png"
                  alt="email"
                  width={50}
                  height={50}
                  className="mt-16"
                />
                <p className="text-[#252B42] mt-4">georgia.young@example.com</p>
                <p className="text-[#252B42]">georgia.young@ple.com</p>
                <h5 className="mt-4 text-lg font-semibold">Get Support</h5>
                <button className="mt-4 border-2 border-[#23A6F0] text-[#23A6F0] py-3 px-8 rounded-full hover:bg-[#1d8bd1] hover:text-white mb-16">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </section>



        {/* Let's Talk */}
        <section className="text-center px-8 py-16 flex flex-col items-center justify-center">
          <Image
            src="/arrow.png"
            alt="arrow"
            width={50}
            height={50}
            className="mb-8"
          />
          <p className="text-[#252B42] font-semibold uppercase mb-6">We can’t wait to meet you</p>
          <h2 className="text-5xl text-[#252B42] font-bold mb-6">Let’s Talk</h2>
          <button className="bg-[#23A6F0] hover:bg-[#1d8bd1] text-white px-8 py-3 rounded-lg">
            Try it free now
          </button>
        </section>
      </div>

      <Footer />
    </div>
  );
}
