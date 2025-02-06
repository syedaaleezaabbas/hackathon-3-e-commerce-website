import React from 'react';
import Image from 'next/image';

// Sample product data
const products = [
    {
        id: 1,
        image: '/bestsellerproductpic1.jpg',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
    {
        id: 2,
        image: '/bestsellerproductpic2.jpg',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
    {
        id: 3,
        image: '/bestsellerproductpic3.jpg',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
    {
        id: 4,
        image: '/bestsellerproductpic4.jpg',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
    {
        id: 5,
        image: '/bestsellerproductpic5.jpg',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
    {
        id: 6,
        image: '/bestsellerproductpic6.jpg',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
    {
        id: 7,
        image: '/bestsellerproductpic7.jpg',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
    {
        id: 8,
        image: '/bestsellerproductpic8.jpg',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
];

const BestSellerProducts = () => {
    return (
        <div className="bg-white py-14 max-w-screen-2xl mx-auto">
            {/* Section Title */}
            <h5 className="text-lg text-[#252b42] text-center mb-4">Featured Products</h5>
            <h2 className="text-center md:text-3xl text-2xl font-bold mb-2">
                BESTSELLER PRODUCTS
            </h2>
            <p className="md:px-0 px-2 text-center text-gray-500 mb-6">
                Problems trying to resolve the conflict between
            </p>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:px-32 px-16 md:space-y-0 space-y-14">
                {products.map((product) => (
                    <div key={product.id} className="text-center">
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={250}
                            height={350}
                            className="w-[250px] h-[350px]"
                        />
                        <h3 className="mt-3 text-lg font-medium">{product.title}</h3>
                        <p className="text-gray-500 text-sm">{product.department}</p>

                        {/* Color Options */}
                        <div className="flex justify-center gap-2 mt-2">
                            <span className="h-3 w-3 rounded-full bg-[#23a6f0]"></span>
                            <span className="h-3 w-3 rounded-full bg-[#23856d]"></span>
                            <span className="h-3 w-3 rounded-full bg-[#e77c40]"></span>
                            <span className="h-3 w-3 rounded-full bg-[#252b42]"></span>
                        </div>

                        {/* Pricing */}
                        <div className="flex justify-center gap-2 mt-2">
                            <p className="text-gray-500 line-through">${product.oldPrice}</p>
                            <p className="text-teal-500 font-bold">${product.newPrice}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSellerProducts;