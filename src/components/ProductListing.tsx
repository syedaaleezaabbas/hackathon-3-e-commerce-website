import React from 'react'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

const ProductListing = ({ product, isShopPage }: { product: Products, isShopPage: boolean }) => {
    return (
        <>
            <div className="bg-white shadow-lg rounded-lg relative">
                <Link href={isShopPage ? `/shop/${product._id}` : `/product/${product._id}`}>
                    {/* isNew Badge */}
                    {product.isNew && (
                        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                            New
                        </span>
                    )}
                    <Image
                        src={urlFor(product.productImage).url()}
                        alt={product.title}
                        width={250}
                        height={350}
                        className="w-full h-[300px]" />
                    <div className="pb-4 px-4">
                        <h3 className="text-lg font-bold mt-4">{product.title}</h3>

                        <div className="mt-3 flex items-center text-base">
                            <p className="text-[#BDBDBD] font-semibold mr-3 line-through">${product.price}</p>
                            <p className="text-[#23856D] font-bold">{product.dicountPercentage}%<span className='text-sm'>OFF</span></p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductListing
