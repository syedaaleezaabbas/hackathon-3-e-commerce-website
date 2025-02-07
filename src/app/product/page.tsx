"use client";

import React, { useState, useEffect } from "react";
import HeaderMain from '@/components/HeaderMain';
import HeaderTop from '@/components/HeaderTop';
import { client } from '@/sanity/lib/client';
import Footer from '@/components/Footer';
import ProductListing from '@/components/ProductListing';
import SearchComponent from "@/components/SearchComponent";
import { HiViewGrid } from "react-icons/hi";
import { MdViewList } from "react-icons/md";
import ProductPage from "@/components/ProductPage";
import ProductPageLogos from "@/components/ProductPageLogos";

const Page = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] { 
        _id, title, description, "productImage":productImage.asset._ref, 
        price, tags, dicountPercentage, isNew, inventory
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


      <ProductPage />


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
                <ProductListing product={product} key={product._id} isShopPage={false} />
              ))
            ) : (
              <p className="text-center text-gray-500 font-bold md:text-xl text-lg">No products found.</p>
            )}
          </div>
        </div>


        <ProductPageLogos />
      </section >
      <Footer />
    </div >
  )
}

export default Page

