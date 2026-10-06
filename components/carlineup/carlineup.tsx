'use client'

export default function Carlineup() {
    return (
        <>
            <div className="relative w-full bg-[#F6F3F2] px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-24 md:px-8 md:pt-24 md:pb-28 lg:pb-32">
                <h2 className="text-center text-[32px] font-medium sm:text-[38px] md:text-[44px]">
                    Vehicles
                </h2>
                <div className="mx-auto mt-10 grid w-full max-w-[1400px] grid-cols-1 gap-x-4 sm:mt-12 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                    <div className="mb-10 px-2">
                        <img src="/Elantra-Side_profile.webp" alt="Hyundai Elantra 1.6" className="w-full" />
                        <h4 className="mt-3 text-[17px] font-medium uppercase sm:text-[18px] md:text-[20px]">
                            ELANTRA 1.6 Special Edition
                        </h4>
                    </div>
                    <div className="mb-10 px-2">
                        <img src="/CN7.png" alt="Hyundai Elantra Hybrid" className="w-full" />
                        <h4 className="mt-3 text-[17px] font-medium uppercase sm:text-[18px] md:text-[20px]">
                            Elantra Hybrid
                        </h4>
                    </div>
                    <div className="mb-10 px-2">
                        <img src="/Sonata-Side-Transparent.webp" alt="Hyundai Sonata" className="w-full" />
                        <h4 className="mt-3 text-[17px] font-medium uppercase sm:text-[18px] md:text-[20px]">
                            SONATA
                        </h4>
                    </div>
                    <div className="mb-10 px-2">
                        <img src="/Sonata-Nline-Right-Side.webp" alt="Hyundai Sonata N-Line" className="w-full" />
                        <h4 className="mt-3 text-[17px] font-medium uppercase sm:text-[18px] md:text-[20px]">
                            Sonata N Line
                        </h4>
                    </div>
                    <div className="mb-10 px-2">
                        <img src="/Side_TUCSON.webp" alt="Hyundai Tucson" className="w-full" />
                        <h4 className="mt-3 text-[17px] font-medium uppercase sm:text-[18px] md:text-[20px]">
                            TUCSON HYBRID
                        </h4>
                    </div>
                    <div className="mb-10 px-2">
                        <img src="/Santa-Fe-Right-Side.webp" alt="Hyundai Santa Fe" className="w-full" />
                        <h4 className="mt-3 text-[17px] font-medium uppercase sm:text-[18px] md:text-[20px]">
                            SANTA FE HYBRID
                        </h4>
                    </div>
                    <div className="mb-10 px-2">
                        <img src="/512x280-1.png" alt="Hyundai Palisade" className="w-full" />
                        <h4 className="mt-3 text-[17px] font-medium uppercase sm:text-[18px] md:text-[20px]">
                            PALISADE HYBRID
                        </h4>
                    </div>
                    <div className="mb-10 px-2">
                        <img src="/IONIQ-5-PE_DRIVER.webp" alt="Hyundai IONIQ 5" className="w-full" />
                        <h4 className="mt-3 text-[17px] font-medium uppercase sm:text-[18px] md:text-[20px]">
                            IONIQ 5
                        </h4>
                    </div>
                    <div className="mb-10 px-2">
                        <img src="/IONIQ-6-Right-Side.webp" alt="Hyundai IONIQ 6" className="w-full" />
                        <h4 className="mt-3 text-[17px] font-medium uppercase sm:text-[18px] md:text-[20px]">
                            IONIQ 6
                        </h4>
                    </div>
                    <div className="mb-10 px-2">
                        <img src="/Porter-Side-Transparent.webp" alt="Hyundai Porter H-100" className="w-full" />
                        <h4 className="mt-3 text-[17px] font-medium uppercase sm:text-[18px] md:text-[20px]">
                            PORTER H-100
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
}