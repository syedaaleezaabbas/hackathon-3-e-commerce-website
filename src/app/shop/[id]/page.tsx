import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import HeaderMain from '@/components/HeaderMain';
import { urlFor } from '@/sanity/lib/image';
import Footer from '@/components/Footer';
import AddToCartButton from '@/components/AddToCartButton';

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
   isNew,
   inventory
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
                    <p className="text-[#BDBDBD] font-semibold text-lg mt-3">${product.price}</p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                        {product.tags?.map((tag, index) => (
                            <span key={index} className="text-base bg-gray-200 px-2 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <hr className='my-8 border-t border-gray-300' />

                    {/* Replace button with client component */}
                    <AddToCartButton product={product} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page


