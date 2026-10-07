export default function Footer() {
    return (
        <footer className="w-full bg-black px-5 py-[30px] sm:px-6 sm:py-[35px]">
            <div className="mx-auto max-w-[1280px]">

                <div className="flex flex-col gap-[25px] md:flex-row md:items-center md:justify-between">

                    <div className="flex flex-col items-center gap-[12px] text-[14px] text-[#777] sm:text-[15px] md:flex-row md:gap-0 md:text-[17px]">

                        <a href="#" className="hover:text-white">
                            Worldwide
                        </a>

                        <span className="hidden h-[18px] w-px bg-[#666] md:mx-[20px] md:block" />

                        <a href="#" className="hover:text-white">
                            Contact Us
                        </a>

                        <span className="hidden h-[18px] w-px bg-[#666] md:mx-[20px] md:block" />

                        <a href="#" className="hover:text-white">
                            Legal Disclaimer
                        </a>

                        <span className="hidden h-[18px] w-px bg-[#666] md:mx-[20px] md:block" />

                        <a href="#" className="hover:text-white">
                            Cookie Policy
                        </a>

                        <span className="hidden h-[18px] w-px bg-[#666] md:mx-[20px] md:block" />

                        <a href="#" className="hover:text-white">
                            Sitemap
                        </a>

                        <span className="hidden h-[18px] w-px bg-[#666] md:mx-[20px] md:block" />

                        <a href="#" className="hover:text-white">
                            myHyundai
                        </a>

                    </div>

                    <div className="flex items-center justify-center gap-[20px] sm:gap-[25px]">
                        <a href="#" aria-label="Facebook">
                            <img src="/facebook.png" alt="Facebook" className="h-[18px] w-[18px] object-contain" />
                        </a>

                        <a href="#" aria-label="YouTube">
                            <img src="/youtube.png" alt="YouTube" className="h-[18px] w-[18px] object-contain" />
                        </a>

                        <a href="#" aria-label="LinkedIn">
                            <img src="/linkedin.png" alt="LinkedIn" className="h-[18px] w-[18px] object-contain" />
                        </a>

                        <a href="#" aria-label="Instagram">
                            <img src="/instagram.png" alt="Instagram" className="h-[18px] w-[18px] object-contain" />
                        </a>
                    </div>
                </div>

                <p className="mt-[18px] text-center text-[12px] text-[#666] sm:mt-[20px] md:text-left">
                    Copyright 2026 Hyundai Nishat Motor (Private) Limited. All rights reserved.
                </p>

            </div>
        </footer>
    )
}