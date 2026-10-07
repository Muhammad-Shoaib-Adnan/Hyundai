'use client';

const cards = [
  { id: 1, image: '/Porter1.jpg', title: 'Porter' },
  { id: 2, image: '/palisade2.png', title: 'Palisade' },
  { id: 3, image: '/Tucson3.jpg', title: 'Tucson' },
  { id: 4, image: '/elantra4.jpg', title: 'Elantra' },
  { id: 5, image: '/palisade5.jpg', title: 'Palisade' },
  { id: 6, image: '/expo6.jpg', title: 'Expo' },
];

export default function Trending() {
  return (
    <div className="relative w-full bg-white">
      <div className="px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
        <h2 className="text-center text-[32px] font-medium text-black sm:text-[38px] md:text-[44px]">
          Trending around you
        </h2>
      </div>
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 md:gap-5 lg:grid-cols-3 lg:px-8">
        {cards.map((card) => (
          <div key={card.id} className="group relative h-[380px] overflow-hidden sm:h-[400px] md:h-[420px] bg-black">
            <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-0"/>
          </div>
        ))}
      </div>
    </div>
  );
}
