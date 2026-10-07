const press = [
    {
        image: "/national-sales-conference-768x512.jpg",
        date: "September 19, 2025",
        title: "Hyundai Pakistan Hosts National Sales Conference 2025 at PC Bhurban",
    },
    {
        image: "/1480x980-min-768x509.jpg",
        date: "August 13, 2025",
        title: "Double honours for Hyundai at the Dragons of Pakistan 2025",
    },
    {
        image: "/progress-hymanity-min-768x509.jpeg",
        date: "July 29, 2025",
        title: "Hyundai Pakistan celebrates a historic milestone with 50,000 locally assembled units",
    },
];

export default function Press() {
    return (
        <section className="w-full bg-[#f5f4f3] py-14 sm:py-18 lg:py-20">
            <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-5">
                <h2 className="mb-8 text-center text-[30px] font-bold leading-tight text-black sm:mb-10 sm:text-[36px] lg:mb-12 lg:text-[42px]">
                    Press release
                </h2>
                <div className="grid w-full grid-cols-1 lg:grid-cols-[60%_40%]">
                    <div className="h-[280px] w-full overflow-hidden sm:h-[380px] md:h-[450px] lg:h-[520px]">
                        <img src="/ceo-message-2026-min.png" alt="CEO Message for Year 2026" className="h-full w-full object-fill object-center"/>
                    </div>
                    <div className="flex h-[280px] w-full flex-col justify-center bg-[#F8F8F8] px-7 sm:h-[380px] sm:px-10 md:h-[450px] md:px-12 lg:h-[520px] lg:px-14 xl:px-16">
                        <p className="mb-4 text-[13px] text-[#555] sm:mb-5 sm:text-[14px]">
                            January 1, 2026
                        </p>
                        <h3 className="max-w-[420px] text-[24px] font-medium leading-[1.25] text-black sm:text-[28px] lg:text-[30px] xl:text-[32px]">
                            CEO Message for Year 2026
                        </h3>
                        <a href="#" className="group mt-7 flex w-fit items-center gap-2 text-[15px] font-semibold text-[#003b7a] sm:mt-8 sm:text-[16px]">
                            <span>Read more</span>
                            <span className="text-[22px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                                ›
                            </span>
                        </a>
                    </div>
                </div>
                <div className="mt-9 grid w-full grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:mt-11 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
                    {press.map((item) => (
                        <div key={item.title} className="group cursor-pointer">
                            <div className="h-[230px] w-full overflow-hidden sm:h-[260px] lg:h-[280px]">
                                <img src={item.image} alt={item.title} className="h-full w-full object-cover object-center"/>
                            </div>
                            <p className="mt-4 text-[13px] leading-5 text-[#555] sm:text-[14px]">
                                {item.date}
                            </p>
                            <h3 className="mt-2 max-w-[390px] text-[18px] font-medium leading-[1.4] text-black sm:text-[19px]">
                                {item.title}
                            </h3>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}