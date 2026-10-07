"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

export default function Hero() {
    const swiperRef = useRef(null);

    return (
        <div className="relative mx-10 pb-12">
             <div
                className="hidden absolute left-[-20] top-[42%] text-2xl z-20 cursor-pointer md:flex">
                <h1>❮</h1>
            </div>
            <Swiper
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper sm:h-[50%]"
            >
                <SwiperSlide>
                    <img src="/elantra-main-nation-banner.webp" alt="Hyundai Elantra 1.6"/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/palisade-banner-min.png" alt="Hyundai Palisade"/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/hn-desktop-banner.webp" alt="Hyundai ICC partnership"/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/hyundai-promise-1920x630-1.jpg" alt="Hyundai Promise"/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/monthly-installment-banner-notext.jpg" alt="Hyundai Cars Available on instalments" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/tucson-hybrid-desktop-1920x630-min.jpg" alt="Hyundai Tucson" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/sonata-n-line-banner-img.jpg" alt="Hyundai Sonata N-Line" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/Elantra-Hybrid-1920x630-min.jpg" alt="Hyundai Elantra Hybrid" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/IONIQ-5-Website-Desktop-1920x630-min.jpg" alt="Hyundai IONIQ 5" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/IONIQ-6-main-banner.webp" alt="Hyundai IONIQ 6"/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/TM-Website-Desktop.webp" alt="Hyundai SantaFe"/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/home-banner-sonata-scaled.webp" alt="Hyundai Sonata"/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/home-banner-porter.webp" alt="Hyundai Porter H-100"/>
                </SwiperSlide>
            </Swiper>
            <div className="hidden absolute right-[-20] top-[42%] text-2xl z-20 cursor-pointer md:flex">
                <h1>❯</h1>
            </div>

        </div>
    );
}