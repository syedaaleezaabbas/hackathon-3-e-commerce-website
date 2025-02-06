import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';
import HeaderMain from '@/components/HeaderMain';
import { urlFor } from '@/sanity/lib/image';
import Footer from '@/components/Footer';

interface Params {
    params: {
        id: string;
    }
}

const page = async ({ params }: Params) => {

    const query = `
    *[_type == "product" && _id == $id] {
   _id,
   title,
   description,
   "productImage":productImage.asset._ref,
   price,
   tags,
   dicountPercentage,
   isNew
}[0]
`
    const product: Products | null = await client.fetch(query, { id: params.id })
    console.log(product)
    if (!product) {
        return (
            <div>
                <h1 className='md:text-4xl text-2xl font-bold text-[#252B42] p-10 text-center'>Product Not Found</h1>
            </div>
        )
    }

    return (
        <div key={product._id}>
            {/* header */}
            <HeaderMain />



            <div className="flex flex-col lg:flex-row md:px-20 px-8 py-20 bg-gray-100 md:gap-14 gap-7">
                {/* Product Images */}
                <div className="flex-1">
                    <Image
                        src={urlFor(product.productImage).url()}
                        alt={product.title}
                        width={250}
                        height={350}
                        className="w-full md:h-[500px] h-[400px] object-cover rounded-lg" />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                    <h3 className="text-lg font-bold mt-12">{product.title}</h3>
                    <p className="text-base text-[#737373] mt-3 line-clamp-5">{product.description}</p>
                    <div className="mt-3 flex items-center text-lg">
                        <p className="text-[#BDBDBD] font-semibold line-through mr-2">${product.price}</p>
                        <p className="text-[#23856D] font-bold">${product.dicountPercentage}</p>
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                        {product.tags?.map((tag, index) => (
                            <span key={index} className="text-base bg-gray-200 px-2 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <hr className='my-8 border-t border-gray-300' />

                    {/* Buttons */}
                    <div className='flex md:flex-row flex-col md:items-center items-start gap-4'>
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
            <Footer />
        </div>
    )
}

export default page


