import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';

const ProductPage = () => {
    return (
        <>
            {/* Breadcrumb */}
            <nav className='text-lg text-[#737373] flex items-center justify-start pl-4 bg-gray-100 py-8'>
                <Link href="/" className='text-[#252B42]'>Home</Link>
                <span className='text-2xl text-[#737373] mx-3'>&gt;</span>
                <span className='font-medium text-[#737373]'>Shop</span>
            </nav>

            <div className="flex flex-col lg:flex-row px-4 pb-20 bg-gray-100 gap-14">
                {/* Product Images */}
                <div className="flex-1">
                    <img
                        src="/product1.jpg"
                        alt="Main Product"
                        className="w-full"
                    />
                    <div className="flex gap-4 mt-4">
                        <img src="/product2.jpg" alt="Thumbnail" className="w-25 h-30" />
                        <img src="/product3.jpg" alt="Thumbnail" className="w-25 h-30" />
                    </div>
                </div>

                {/* Product Details */}
                <div className="flex-1">
                    <h1 className="text-2xl font-semibold mt-14 mb-4">Floating Phone</h1>
                    <div className="flex items-center mb-4">
                        <span className="text-yellow-500 text-xl">★★★★★</span>
                        <span className="ml-2 text-[#737373] font-semibold text-sm">10 Reviews</span>
                    </div>
                    <p className="text-xl font-bold text-black mb-2">$1,139.33</p>
                    <p className='text-lg font-medium text-gray-600 mb-8'>Availability: <span className='text-green-600 font-semibold'>In stock</span></p>
                    <p className="max-w-lg text-sm text-gray-600 mb-4">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. Relit official consequent door enim relit mollie. Excitation venial consequent sent nostrum set.
                    </p>

                    <hr className='my-8 border-t border-gray-300' />

                    {/* Color Options */}
                    <div className="flex items-center gap-2 mb-14">
                        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-black rounded-full"></div>
                    </div>

                    {/* Buttons */}
                    <div className='flex items-center gap-4'>
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                            Select Options
                        </button>
                        <div className="flex gap-4 ">
                            <div className='border-2 border-gray-300 rounded-full p-2'>
                                <FaHeart className="text-xl text-gray-500 cursor-pointer" /></div>{/* Wishlist Icon */}
                            <div className='border-2 border-gray-300 rounded-full p-2'>
                                <FaShoppingCart className="text-xl text-gray-500 cursor-pointer" /></div>{/* Cart Icon */}
                            <div className='border-2 border-gray-300 rounded-full p-2'>
                                <FaEye className="text-xl text-gray-500 cursor-pointer" /></div> {/* Eye Icon */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="my-8 bg-white ">
                <div className="flex md:flex-row flex-col justify-center md:gap-14 gap-4 md:text-lg">
                    <button className=" text-gray-600">Description</button>
                    <button className=" text-gray-600">Additional Information</button>
                    <button className=" text-gray-600">Reviews (0)</button>
                </div>
            </div>

            <hr className='my-8 border-t border-gray-300' />



            <div className="flex flex-wrap gap-8 px-12 mb-16">
                {/* Image Section */}
                <div className="md:flex-shrink-0">
                    <Image
                        src="/product4.png"
                        alt="Product picture"
                        width={350}
                        height={400}
                        className="w-full h-[400px]"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col space-y-4 max-w-md">
                    <h1 className="font-bold text-black text-2xl mb-4">
                        The quick fox jumps over
                    </h1>
                    <p className='text-lg text'>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. Relit
                        official consequent door enim relit mollie. Excitation venial consequent
                        sent nostrum set.
                    </p>
                    <p className='text-lg'>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. Relit
                        official consequent door enim relit mollie. Excitation venial consequent
                        sent nostrum set.
                    </p>
                    <p className='text-lg'>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. Relit
                        official consequent door enim relit mollie. Excitation venial consequent
                        sent nostrum set.
                    </p>
                </div>

                {/* List Section */}
                <div className="flex flex-col space-y-6">
                    <h2 className="font-bold text-black text-2xl">
                        The quick fox jumps over
                    </h2>
                    <ul className="space-y-2">
                        <li className="flex items-center text-lg">
                            <span className="mr-2 text-blue-500">➤</span> The quick fox jumps over the lazy dog
                        </li>
                        <li className="flex items-center text-lg">
                            <span className="mr-2 text-blue-500">➤</span> The quick fox jumps over the lazy dog
                        </li>
                        <li className="flex items-center text-lg">
                            <span className="mr-2 text-blue-500">➤</span> The quick fox jumps over the lazy dog
                        </li>
                        <li className="flex items-center text-lg">
                            <span className="mr-2 text-blue-500">➤</span> The quick fox jumps over the lazy dog
                        </li>
                    </ul>
                    <h2 className="font-bold text-black text-2xl">
                        The quick fox jumps over
                    </h2>
                    <ul className="space-y-2">
                        <li className="flex items-center text-lg">
                            <span className="mr-2 text-blue-500">➤</span> The quick fox jumps over the lazy dog
                        </li>
                        <li className="flex items-center text-lg">
                            <span className="mr-2 text-blue-500">➤</span> The quick fox jumps over the lazy dog
                        </li>
                        <li className="flex items-center text-lg">
                            <span className="mr-2 text-blue-500">➤</span> The quick fox jumps over the lazy dog
                        </li>
                        <li className="flex items-center text-lg">
                            <span className="mr-2 text-blue-500">➤</span> The quick fox jumps over the lazy dog
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProductPage
