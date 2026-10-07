'use client'

export default function Carlineup() {
    const vehicles = [
        {
            image: "/Elantra-Side_profile.webp",
            alt: "Hyundai Elantra 1.6",
            name: "ELANTRA 1.6 SPECIAL EDITION",
        },
        {
            image: "/CN7.png",
            alt: "Hyundai Elantra Hybrid",
            name: "ELANTRA HYBRID",
        },
        {
            image: "/Sonata-Side-Transparent.webp",
            alt: "Hyundai Sonata",
            name: "SONATA",
        },
        {
            image: "/Sonata-Nline-Right-Side.webp",
            alt: "Hyundai Sonata N Line",
            name: "SONATA N LINE",
        },
        {
            image: "/Side_TUCSON.webp",
            alt: "Hyundai Tucson Hybrid",
            name: "TUCSON HYBRID",
        },
        {
            image: "/Santa-Fe-Right-Side.webp",
            alt: "Hyundai Santa Fe Hybrid",
            name: "SANTA FE HYBRID",
        },
        {
            image: "/512x280-1.png",
            alt: "Hyundai Palisade Hybrid",
            name: "PALISADE HYBRID",
        },
        {
            image: "/IONIQ-5-PE_DRIVER.webp",
            alt: "Hyundai IONIQ 5",
            name: "IONIQ 5",
        },
        {
            image: "/IONIQ-6-Right-Side.webp",
            alt: "Hyundai IONIQ 6",
            name: "IONIQ 6",
        },
        {
            image: "/Porter-Side-Transparent.webp",
            alt: "Hyundai Porter H-100",
            name: "PORTER H-100",
        },
    ]

    return (
        <section className="w-full bg-[#F6F3F2] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
            <h2 className="text-center text-[32px] font-medium sm:text-[38px] md:text-[44px]">
                Vehicles
            </h2>
            <div className="mx-auto mt-10 grid w-full max-w-[1200px] grid-cols-1 gap-x-6 gap-y-10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
                {vehicles.map((vehicle, index) => (
                    <div key={index} className="px-2 sm:text-center">
                        <img src={vehicle.image} alt={vehicle.alt} className="mx-auto w-full object-contain"/>
                        <h4 className="mt-3 text-[17px] font-bold uppercase">
                            {vehicle.name}
                        </h4>
                    </div>
                ))}
            </div>
        </section>
    )
}