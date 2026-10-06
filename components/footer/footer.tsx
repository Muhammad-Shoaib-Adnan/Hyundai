export default function Footer() {
    return (
        <div className="w-full">
            <div className="bg-black px-5 py-[30px] sm:px-6 sm:py-[35px]">
                <div className="mx-auto max-w-[1280px]">
                    <div className="flex flex-col gap-[25px] md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-wrap items-center gap-y-[10px] text-[14px] text-[#777] sm:text-[15px] md:text-[17px]">
                            <a href="#" className="hover:text-white" >
                                Worldwide
                            </a>
                            <span className="mx-[12px] hidden h-[18px] w-px bg-[#666] sm:mx-[16px] sm:block md:mx-[20px]" />

                            <a href="#" className="hover:text-white" >
                                Contact Us
                            </a>
                            <span className="mx-[12px] hidden h-[18px] w-px bg-[#666] sm:mx-[16px] sm:block md:mx-[20px]" />

                            <a href="#" className="hover:text-white" >
                                Legal Disclaimer
                            </a>
                            <span className="mx-[12px] hidden h-[18px] w-px bg-[#666] sm:mx-[16px] sm:block md:mx-[20px]" />

                            <a href="#" className="hover:text-white" >
                                Cookie Policy
                            </a>
                            <span className="mx-[12px] hidden h-[18px] w-px bg-[#666] sm:mx-[16px] sm:block md:mx-[20px]" />

                            <a href="#" className="hover:text-white" >
                                Sitemap
                            </a>
                            <span className="mx-[12px] hidden h-[18px] w-px bg-[#666] sm:mx-[16px] sm:block md:mx-[20px]" />

                            <a href="#" className="hover:text-white" >
                                myHyundai
                            </a>

                        </div>

                        <div className="flex items-center gap-[20px] sm:gap-[25px]">

                            <a href="#" aria-label="Facebook" className="flex h-[20px] w-[20px] items-center justify-center" >
                                <img src="/facebook.png" alt="Facebook" className="h-[18px] w-[18px] object-contain" />
                            </a>

                            <a href="#" aria-label="YouTube" className="flex h-[20px] w-[20px] items-center justify-center" >
                                <img src="/youtube.png" alt="YouTube" className="h-[18px] w-[18px] object-contain" />
                            </a>

                            <a href="#" aria-label="LinkedIn" className="flex h-[20px] w-[20px] items-center justify-center" >
                                <img src="/linkedin.png" alt="LinkedIn" className="h-[18px] w-[18px] object-contain" />
                            </a>

                            <a href="#" aria-label="Instagram" className="flex h-[20px] w-[20px] items-center justify-center" >
                                <img src="/instagram.png" alt="Instagram" className="h-[18px] w-[18px] object-contain" />
                            </a>
                        </div>
                    </div>
                    <p className="mt-[18px] text-[12px] text-[#666] sm:mt-[20px] sm:text-[14px]">
                        Copyright 2026 Hyundai Nishat Motor (Private) Limited . All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}