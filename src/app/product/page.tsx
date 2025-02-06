"use client";

import React, { useState, useEffect } from "react";
import HeaderMain from '@/components/HeaderMain';
import HeaderTop from '@/components/HeaderTop';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';
import { client } from '@/sanity/lib/client';
import Footer from '@/components/Footer';
import ProductListing from '@/components/ProductListing';
import SearchComponent from "@/components/SearchComponent";
import { HiViewGrid } from "react-icons/hi";
import { MdViewList } from "react-icons/md";

const Page = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] { 
        _id, title, description, "productImage":productImage.asset._ref, 
        price, tags, dicountPercentage, isNew 
      }[0..11]`;

      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className='bg-white '>


      {/* header */}
      <HeaderTop />
      <HeaderMain />


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




      {/* Showing Results and Views */}
      <div className="container mx-auto px-2 my-10 flex flex-col md:flex-row justify-between items-center">
        <div className="text-[#737373] text-lg font-semibold">
          <span>Showing {filteredProducts.length} results</span>
        </div>

        {/* Search Component */}
        <SearchComponent onSearch={handleSearch} />

        {/* Views Dropdown */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg text-[#737373] font-semibold">Views:</span>
            <button className="p-2 border rounded border-gray-600 hover:bg-gray-200 transition">
              <HiViewGrid className="h-6 w-6 text-gray-500" />
            </button>
            <button className="p-2 border rounded border-gray-600 hover:bg-gray-200 transition">
              <MdViewList className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Popularity Dropdown */}
        <div className="flex space-x-4 md:mt-0 mt-4">
          <select className="py-2 px-2 text-lg border border-gray-600 rounded text-gray-600">
            <option value="popular">Popularity</option>
            <option value="newest">Newest</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
          </select>
          <button className="bg-blue-500 text-white px-6 text-lg py-2 rounded hover:bg-blue-600">
            Filter
          </button>
        </div>
      </div>



      {/* dynamic pages */}
      <section className="py-8 bg-gray-100">
        <h2 className="text-3xl text-[#252B42] font-bold md:text-start text-center md:pl-16 pl-0">Bestseller Products</h2>
        <hr className='my-8 border-t border-gray-300' />
        <div className="py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:px-28 px-16 md:space-y-0 space-y-14">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductListing product={product} key={product._id} isShopPage={true} />
              ))
            ) : (
              <p className="text-center text-gray-500 font-bold md:text-xl text-lg">No products found.</p>
            )}
          </div>
        </div>


        <div className="mt-16 mb-12">
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
      </section >
      <Footer />
    </div >
  )
}

export default Page
