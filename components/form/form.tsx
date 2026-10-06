export default function Form() {
    return (
        <div className="w-full">
            <div className="bg-[#002C5F] px-5 py-[70px] sm:px-6 sm:py-[80px] md:py-[95px] lg:py-[115px]">
                <div className="mx-auto max-w-[1200px] text-center">
                    <h2 className="mx-auto max-w-[1100px] text-[28px] font-bold leading-[1.25] text-white sm:text-[34px] md:text-[42px] lg:text-[52px]">
                        Sign up with your email and get the latest
                        <br className="hidden md:block" />
                        updates and news
                    </h2>
                    <div className="mx-auto mt-[45px] flex max-w-[1135px] flex-col gap-[12px] sm:mt-[55px] md:mt-[65px] md:flex-row md:gap-[15px] lg:mt-[78px]">
                        <input type="text" placeholder="Name" className="h-[55px] w-full bg-white px-[20px] text-[16px] text-gray-700 outline-none placeholder:text-[#777] sm:h-[58px] sm:px-[25px] sm:text-[18px] md:flex-1" />
                        <input type="email" placeholder="Email" className="h-[55px] w-full bg-white px-[20px] text-[16px] text-gray-700 outline-none placeholder:text-[#777] sm:h-[58px] sm:px-[25px] sm:text-[18px] md:flex-1" />
                        <button type="button" className="h-[55px] w-full whitespace-nowrap bg-[#777] px-[20px] text-[16px] text-white transition hover:bg-[#666] sm:h-[58px] sm:text-[18px] md:w-auto" >
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}