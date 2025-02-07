import React from 'react'
import Image from 'next/image'

const ProductPageLogos = () => {
    return (
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
    )
}

export default ProductPageLogos
