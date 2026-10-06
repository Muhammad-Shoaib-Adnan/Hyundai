const press = [
    {
        image: "/national-sales-conference-768x512.jpg",
        date: "September 19, 2025",
        title:
            "Hyundai Pakistan Hosts National Sales Conference 2025 at PC Bhurban",
    },
    {
        image: "/1480x980-min-768x509.jpg",
        date: "August 13, 2025",
        title:
            "Double honours for Hyundai at the Dragons of Pakistan 2025",
    },
    {
        image: "/progress-hymanity-min-768x509.jpeg",
        date: "July 29, 2025",
        title:
            "Hyundai Pakistan celebrates a historic milestone with 50,000 locally assembled units",
    },
];

export default function Press() {
    return (
        <section className="w-full bg-[#f5f4f3] py-16 sm:py-20 lg:py-24">
            <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-0">
                <h2 className="mb-10 text-center text-[32px] font-bold leading-tight text-black sm:mb-12 sm:text-[38px] lg:mb-14 lg:text-[42px]">
                    Press release
                </h2>
                <div className="grid w-full grid-cols-1 lg:grid-cols-[60%_40%]">
                    <div className="flex h-[300px] w-full items-center justify-center overflow-hidden sm:h-[400px] lg:h-[550px]">
                        <img src="/ceo-message-2026-min.png" alt="CEO Message for Year 2026" className="w-full h-full object-contain object-center" />
                    </div>
                    <div className="flex min-h-[300px] flex-col justify-center bg-[#f8f8f8] px-7 py-10 sm:min-h-[400px] sm:px-10 lg:h-[550px] lg:px-14">
                        <p className="mb-5 text-[14px] text-[#333] sm:mb-6">
                            January 1, 2026
                        </p>
                        <h3 className="mb-7 text-[26px] font-medium leading-[1.2] text-black sm:text-[28px] lg:mb-9 lg:text-[30px]">
                            CEO Message for Year 2026
                        </h3>
                        <a href="#" className="group flex w-fit items-center gap-1 text-[16px] font-semibold text-[#003b7a]">
                            <span>Read more</span>
                            <span className="text-[22px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                                ›
                            </span>
                        </a>
                    </div>
                </div>
                <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:pt-12">
                    {press.map((item, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="h-[250px] w-full overflow-hidden sm:h-[280px] lg:h-[300px]">
                                <img src={item.image} alt={item.title} className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <p className="mt-4 text-[14px] leading-5 text-[#444]">
                                {item.date}
                            </p>
                            <h3 className="mt-3 text-[19px] font-medium leading-[1.35] text-black sm:text-[20px]">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}