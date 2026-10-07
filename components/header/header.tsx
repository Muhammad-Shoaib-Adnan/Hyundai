"use client";

import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white">
            <div className="hidden h-[47px] border-b border-[#e5e5e5] md:block">
                <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-end py-2.5 lg:px-0">
                    <nav className="flex items-center text-[12px] font-medium text-[#333]">
                        <a href="#" className="px-[16px] transition-colors hover:text-[#002c5f]" >
                            Worldwide
                        </a>
                        <span className="h-[16px] w-px bg-[#777]" />

                        <a href="#" className="px-[16px] transition-colors hover:text-[#002c5f]" >
                            Career
                        </a>
                        <span className="h-[16px] w-px bg-[#777]" />

                        <a href="#" className="px-[16px] transition-colors hover:text-[#002c5f]" >
                            Contact Us
                        </a>
                        <span className="h-[16px] w-px bg-[#777]" />

                        <a href="#" className="px-[16px] transition-colors hover:text-[#002c5f]" >
                            Search
                        </a>

                    </nav>

                </div>
            </div>

            <div className="border-b border-[#eeeeee] md:h-[64px]">
                <div className="mx-auto flex h-full w-full gap-[25px] xl:gap-[39px] max-w-[1280px] justify-between md:justify-start items-center md:px-3 md:py-5">
                    <a href="#" className="flex shrink-0 items-center lg:mr-[37px]" >
                        <svg width="150" height="22" viewBox="0 0 150 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[125px] sm:w-[140px] lg:w-[150px]" >
                            <g clipPath="url(#p50v2k8jra)" fill="#002C5F" >
                                <path d="M57.619 3.46v5.762h-6.402V3.461h-3.545v15.077h3.545v-6.085h6.402v6.085h3.492V3.46h-3.492zM74.02 3.46l-3.65 5.978-3.704-5.977h-4.127l6.085 9.854v5.223h3.492v-5.223L78.2 3.46h-4.179zM89.525 3.46V14.5a.73.73 0 0 1-.74.753h-5.662V3.461h-3.545v15.077h10.423c.953 0 1.694-.27 2.223-.808.529-.538.793-1.292.793-2.261V3.46h-3.492zM106.771 3.46H96.348v15.078h3.545V6.746h5.661c.476 0 .741.376.741.753v11.039h3.545V6.53c0-.97-.265-1.723-.794-2.261-.635-.539-1.376-.808-2.275-.808zM123.439 3.46h-10.423v15.078h10.423c.899 0 1.64-.27 2.222-.808.529-.538.794-1.292.794-2.261V6.53c0-.97-.265-1.723-.794-2.261-.529-.539-1.27-.808-2.222-.808zm-.476 4.04v7a.73.73 0 0 1-.741.753h-5.661V6.746h5.608c.476 0 .794.323.794.753zM132.594 3.46c-.899 0-1.693.27-2.222.809-.529.538-.794 1.292-.794 2.261v12.008h3.492v-4.685h6.402v4.685h3.545V3.46h-10.423zm6.931 3.286v3.877h-6.402V7.498c0-.377.265-.753.741-.753h5.661zM149.998 3.46h-3.545v15.078h3.545V3.46zM20.159 21.5c11.11 0 20.159-4.685 20.159-10.5C40.265 5.185 31.27.5 20.158.5 8.996.5 0 5.185 0 11s8.995 10.5 20.159 10.5zm3.756-5.17c-.317.809-.9 2.478-2.222 3.178a2.99 2.99 0 0 1-1.323.323h-.211c-3.704 0-7.196-.539-10.053-1.4L10 18.377c-.265-.108-.423-.215-.423-.377s.053-.215.158-.323l.16-.162c.687-.592 2.698-2.1 6.507-3.554 1.323-.538 3.016-1.184 4.762-1.561.952-.215 4.762-.808 2.751 3.93zM34.127 5.778a.545.545 0 0 1 .317-.27c.106 0 .212 0 .424.162 2.38 1.508 3.756 3.339 3.756 5.331 0 3.608-4.55 6.73-11.11 8.077-.424.108-.689.108-.794 0-.053-.054-.106-.162 0-.323.053-.054.105-.162.158-.27 3.545-4.253 6.297-10.553 7.037-12.384.106-.108.16-.27.212-.323zm-17.725-.162c.318-.807.9-2.477 2.222-3.177A4.16 4.16 0 0 1 20 2.17h.212c3.703 0 7.195.539 10.053 1.4l.105.054c.265.108.424.215.424.377 0 .108-.053.215-.16.323l-.158.162c-.688.592-2.698 2.046-6.455 3.553-1.323.539-3.016 1.185-4.762 1.562-1.058.162-4.867.754-2.857-3.985zm-3.65-2.692c.423-.108.687-.108.793 0 .053.054.053.162 0 .323-.053.054-.106.162-.159.27C9.841 7.768 7.09 14.068 6.35 15.9c-.053.108-.106.27-.159.323a.544.544 0 0 1-.317.27c-.106 0-.212 0-.423-.162C3.069 14.823 1.693 12.992 1.693 11c-.053-3.608 4.55-6.73 11.058-8.077z" />
                            </g>

                            <defs>
                                <clipPath id="p50v2k8jra">
                                    <path fill="#fff" transform="translate(0 .5)" d="M0 0h150v21H0z" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <nav className="hidden h-full items-center gap-[25px] lg:flex">
                        <a href="#" className="text-[14px] font-medium text-[#333] transition-colors hover:text-[#002c5f]" >
                            Find a Car
                        </a>
                        <a href="#" className="text-[14px] font-medium text-[#333] transition-colors hover:text-[#002c5f]" >
                            After Sales
                        </a>
                        <a href="#" className="text-[14px] font-medium text-[#333] transition-colors hover:text-[#002c5f]" >
                            Hyundai Pakistan
                        </a>
                        <a href="#" className="text-[14px] font-medium text-[#333] transition-colors hover:text-[#002c5f]" >
                            Press Release
                        </a>
                        <a href="#" className="text-[14px] font-medium text-[#333] transition-colors hover:text-[#002c5f]" >
                            Find a Dealer
                        </a>
                        <a href="#" className="flex shrink-0 items-center" >
                            <img src="/HyundaiPromise_Logo.png" alt="Hyundai Promise" className="h-auto w-[120px] object-contain xl:w-[145px]" />
                        </a>

                    </nav>
                    <button type="button" className="flex h-[42px] w-[42px] flex-col items-center justify-center gap-[5px] lg:hidden">
                        <span
                            className={`h-[2px] w-[21px] bg-[#002c5f] transition-transform duration-300`}
                        />
                        <span
                            className={`h-[2px] w-[21px] bg-[#002c5f] transition-opacity duration-300`}
                        />
                        <span
                            className={`h-[2px] w-[21px] bg-[#002c5f] transition-transform duration-300`}
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}