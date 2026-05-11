import React from 'react';

const VOLUMES = [
  {
    letter: 'A',
    title: '小胸さん',
    cup: 'A-B CUP',
    desc: 'バストにボリュームを。',
    img: 'https://github.com/liu378592655-rgb/BBB/releases/download/BBB/A.-.1.jpg'
  },
  {
    letter: 'C',
    title: '普通胸さん',
    cup: 'C-D CUP',
    desc: '自然な形、綺麗に。',
    img: 'https://github.com/liu378592655-rgb/BBB/releases/download/BBB/c.jpg'
  },
  {
    letter: 'E',
    title: 'グラマーさん',
    cup: 'E-G CUP',
    desc: 'すっきり、コンパクトに。',
    img: 'https://github.com/liu378592655-rgb/BBB/releases/download/BBB/A.jpg'
  }
];

export function VolumeSearch() {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#cca052] text-xs tracking-[0.25em] font-medium uppercase mb-4 font-serif">VOLUME SEARCH</h2>
          <h3 className="text-3xl font-serif text-[#1e293b] tracking-wider mb-4">
            バストのボリュームで探す
          </h3>
          <p className="text-gray-400 text-sm italic font-serif">
            Find the perfect fit for your silhouette.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          {VOLUMES.map((vol, idx) => (
            <div key={idx} className="bg-white flex flex-col justify-center items-center relative border border-gray-100/50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all cursor-pointer group overflow-hidden">
                <img 
                  src={vol.img} 
                  alt={vol.title} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
