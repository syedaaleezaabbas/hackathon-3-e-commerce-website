import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div className="relative w-full h-[600px] md:h-[716px] max-w-screen-2xl mx-auto">
            {/* Background Image */}
            <Image
                src="/hero.jpg"
                alt="maingirl"
                height={716}
                width={1440}
                className="w-full h-full object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start p-8 md:p-12">
                <div className="w-full md:w-[599px] h-auto gap-[25px] text-center md:text-left md:ml-20">
                    <h5 className="font-bold md:text-[16px] text-[14px] leading-[20px] md:leading-[24px] tracking-[0.1px] text-white mb-10">
                        SUMMER 2020
                    </h5>
                    <h1 className="font-bold text-[30px] md:text-[58px] leading-[56px] md:leading-[80px] tracking-[0.2px] text-white mb-10">
                        NEW COLLECTION
                    </h1>
                    <h4 className="font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-[0.2px] text-white w-full md:w-[376px] mb-6">
                        We know how large objects will act,
                        but things on a small scale.
                    </h4>
                    <button className=" bg-[#2DC071] py-[12px] px-[40px] rounded-[5px] gap-[10px] hover:bg-[#1c9c59] text-white">
                        SHOP NOW
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;