import Image from "next/image"

import React from 'react'

const ShopProductCategories = () => {
    return (
        <div className="w-full md:px-4 px-8 pb-10 bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-5 md:gap-2 gap-4">
                {/* Category 1 */}
                <div className="relative">
                    <Image
                        src="/shop1.png"
                        alt="Cloths Category"
                        width={300}
                        height={300}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                        CLOTHS <br /> 5 Items
                    </div>
                </div>

                {/* Category 2 */}
                <div className="relative">
                    <Image
                        src="/shop2.png"
                        alt="Cloths Category"
                        width={300}
                        height={300}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                        CLOTHS <br /> 5 Items
                    </div>
                </div>

                {/* Category 3 */}
                <div className="relative">
                    <Image
                        src="/shop3.png"
                        alt="Cloths Category"
                        width={300}
                        height={300}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                        CLOTHS <br /> 5 Items
                    </div>
                </div>

                {/* Category 4 */}
                <div className="relative">
                    <Image
                        src="/shop4.png"
                        alt="Cloths Category"
                        width={300}
                        height={400}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                        CLOTHS <br /> 5 Items
                    </div>
                </div>

                {/* Category 5 */}
                <div className="relative">
                    <Image
                        src="/shop5.png"
                        alt="Cloths Category"
                        width={300}
                        height={300}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                        CLOTHS <br /> 5 Items
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopProductCategories;