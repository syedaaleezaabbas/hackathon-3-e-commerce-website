"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderMain from "@/components/HeaderMain";
import HeaderTop from "@/components/HeaderTop";
import Footer from "@/components/Footer";
import ProductListing from "@/components/ProductListing";
import SearchComponent from "@/components/SearchComponent";
import { HiViewGrid } from "react-icons/hi";
import { MdViewList } from "react-icons/md";
import ShopProductCategories from "@/components/ShopProductCategories";
import Pagination from "@/components/Pagination";
import { client } from "@/sanity/lib/client";

const Shop = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4; // Show 8 products per page after pagination

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] { 
        _id, title, description, "productImage":productImage.asset._ref, 
        price, tags, dicountPercentage, isNew 
      }[12..23]`;

      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts); // Initially show all 24 products
    };

    fetchProducts();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset pagination on search
  };

  // Get products for current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts =
    currentPage === 1 ? filteredProducts : filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white max-w-screen-2xl mx-auto">
      <HeaderTop />
      <HeaderMain />

      {/* Breadcrumb */}
      <nav className="text-lg text-[#737373] py-5 px-8 flex items-center justify-between bg-gray-100">
        <span className="font-medium text-[#252B42]">Shop</span>
        <div className="flex items-center">
          <Link href="/" className="text-[#252B42]">Home</Link>
          <span className="text-2xl text-[#737373] mx-3">&gt;</span>
          <span className="font-medium text-[#737373]">Shop</span>
        </div>
      </nav>

      {/* Product Categories */}
      <ShopProductCategories />

      {/* Search and Filters */}
      <div className="container mx-auto px-2 my-10 flex flex-col md:flex-row justify-between items-center">
        <div className="text-[#737373] text-lg font-semibold">
          <span>Showing {currentProducts.length} results</span>
        </div>

        <SearchComponent onSearch={handleSearch} />

        <div className="flex items-center space-x-4">
          <span className="text-lg text-[#737373] font-semibold">Views:</span>
          <button className="p-2 border rounded border-gray-600 hover:bg-gray-200 transition">
            <HiViewGrid className="h-6 w-6 text-gray-500" />
          </button>
          <button className="p-2 border rounded border-gray-600 hover:bg-gray-200 transition">
            <MdViewList className="h-6 w-6 text-gray-500" />
          </button>
        </div>

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

      {/* Products Section */}
      <div className="bg-white py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:px-28 px-16 md:space-y-0 space-y-14">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <ProductListing product={product} key={product._id} isShopPage={true} />
            ))
          ) : (
            <p className="text-center text-gray-500 font-bold md:text-xl text-lg">No products found.</p>
          )}
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
        onPageChange={handlePageChange}
      />

      {/* Logos */}
      <div className='flex flex-wrap justify-center py-5 bg-gray-100 items-center gap-20 md:px-0 px-6'>
        <Image src={'/logo1.png'} alt='vector1' height={200} width={100} />
        <Image src={'/logo2.png'} alt='Lyft logo' height={200} width={100} />
        <Image src={'/logo3.png'} alt='vector 3' height={200} width={100} />
        <Image src={'/logo4.png'} alt='vector 4' height={200} width={100} />
        <Image src={'/logo5.png'} alt='vector5' height={200} width={100} />
        <Image src={'/logo6.png'} alt='vector6' height={200} width={100} />
      </div>

      <Footer />
    </div>
  );
};

export default Shop;