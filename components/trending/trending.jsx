'use client'

const cards = [
    {
        id: 1,
        title: "A new look for business",
        description: "Built to make every journey better.",
        button: "EXPLORE NOW",
        image: "/Porter1.jpg",
    },
    {
        id: 2,
        title: "For everyday, hybrid-powered.",
        description: "More efficiency. More freedom.",
        button: "LEARN MORE",
        image: "/palisade2.png",
    },
    {
        id: 3,
        title: "Premium. Powerful. Refined.",
        description: "Designed around your journey.",
        button: "DISCOVER",
        image: "/Tucson3.jpg",
    },
    {
        id: 4,
        title: "When life calls for more.",
        description: "Experience confidence on every road.",
        button: "EXPLORE",
        image: "/elantra4.jpg",
    },
    {
        id: 5,
        title: "Power. Performance. Presence.",
        description: "Built for those who expect more.",
        button: "VIEW MODEL",
        image: "/palisade5.jpg",
    },
    {
        id: 6,
        title: "Find your nearest dealership",
        description: "Visit us and experience MG for yourself.",
        button: "FIND A DEALER",
        image: "/expo6.jpg",
    },
];

export default function Trending() {
    return (
        <>
            <div className="relative w-full bg-white">
                <div className="px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
                    <h2 className="text-center text-[32px] font-medium text-black sm:text-[38px] md:text-[44px]">
                        Trending around you
                    </h2>
                </div>
                <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 md:gap-5 lg:grid-cols-3 lg:px-8">
                    {cards.map((card) => (
                        <div key={card.id} className="group relative h-[380px] overflow-hidden sm:h-[400px] md:h-[420px]" >
                            <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/95" />
                            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white sm:p-7 md:p-8 lg:p-10">
                                <h3 className="mb-2 text-[22px] font-semibold leading-tight sm:text-2xl lg:text-3xl">
                                    {card.title}
                                </h3>
                                <p className="mb-5 max-w-[350px] text-sm leading-relaxed sm:mb-6 sm:text-base">
                                    {card.description}
                                </p>
                                <button
                                    className="flex w-fit items-center gap-3 border border-white px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black sm:px-6 sm:py-3">
                                    {card.button}
                                    <span className="text-lg">
                                        →
                                    </span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}