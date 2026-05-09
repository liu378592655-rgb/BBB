import { Heart } from 'lucide-react';

export function BestSellers() {
  const PRODUCTS = [
    {
      rank: 1,
      title: "ビスチェリーナ (B-Kカップ)",
      category: "ビスチェ風ブラ",
      price: "¥13,200",
      features: ["ウエスト補正", "姿勢サポート"],
      image: "https://github.com/liu378592655-rgb/NTP/releases/download/V1/01.jpg",
      colors: ["#111827", "#f3f4f6", "#e5e7eb"], // black, white, pinkish
      rankBg: "bg-[#8c7a4e]",
      rankText: "text-white"
    },
    {
      rank: 2,
      title: "夜寄るブラ+plus (B-Mカップ)",
      category: "ナイトブラ",
      price: "¥3,300",
      features: ["重力対策", "型崩れ防止"],
      image: "https://github.com/liu378592655-rgb/NTP/releases/download/V1/02.jpg",
      colors: ["#111827", "#f3f4f6", "#e5e7eb"],
      rankBg: "bg-[#c1c4c8]",
      rankText: "text-gray-900"
    },
    {
      rank: 3,
      title: "特上脇肉キャッチャー (B-Kカップ)",
      category: "脇高サポートブラ",
      price: "¥6,820",
      features: ["脇肉スッキリ", "肩こり軽減"],
      image: "https://github.com/liu378592655-rgb/NTP/releases/download/V1/03.jpg",
      colors: ["#111827", "#f3f4f6", "#e5e7eb"],
      rankBg: "bg-[#c58448]",
      rankText: "text-white"
    },
    {
      rank: 4,
      title: "ハリジェンヌ (B-Kカップ)",
      category: "補整ブラジャー",
      price: "¥6,820",
      features: ["高さ出し", "デコルテケア"],
      image: "https://github.com/liu378592655-rgb/NTP/releases/download/V1/04.jpg",
      colors: ["#111827", "#f3f4f6", "#e5e7eb"],
      rankBg: "bg-[#2f323a]",
      rankText: "text-white"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#cca052] text-[10px] tracking-[0.25em] font-medium uppercase mb-4 font-serif">
            BEST SELLERS
          </h2>
          <div className="inline-flex flex-col items-center">
            <h3 className="text-3xl font-serif text-[#1e293b] tracking-widest pb-4">
              人気爆売れアイテム
            </h3>
            <div className="w-[120%] h-[1px] bg-[#cca052]"></div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {PRODUCTS.map((product) => (
            <div key={product.rank} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                
                {/* Rank Badge */}
                <div className={`absolute top-0 left-0 w-12 h-12 ${product.rankBg} ${product.rankText} flex items-center justify-center font-serif text-xl italic bg-opacity-90`}>
                  {product.rank}
                </div>
                
                {/* Heart Button */}
                <button className="absolute top-4 right-4 w-[38px] h-[38px] bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-gray-500 hover:text-[#cca052] hover:bg-white transition-all shadow-sm">
                  <Heart className="w-[18px] h-[18px] font-light" strokeWidth={1.5} />
                </button>
              </div>
              
              <div className="px-1 text-left">
                <p className="text-[11px] text-gray-400 mb-1 tracking-widest font-medium">{product.category}</p>
                <h4 className="font-medium text-gray-900 mb-4 text-sm tracking-widest">{product.title}</h4>
                
                <div className="flex justify-between items-center mb-4">
                  <p className="font-sans font-bold text-lg text-gray-900 tracking-wider">{product.price}</p>
                  <div className="flex items-center gap-1.5">
                    {product.colors.map((color, i) => (
                      <div key={i} className="w-2.5 h-2.5 rounded-full border border-gray-200/50 shadow-sm" style={{ backgroundColor: color }}></div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {product.features.map(f => (
                    <span key={f} className="text-[10px] text-[#cca052] border border-[#f0e6d2] px-2.5 py-1 tracking-widest rounded-[2px] bg-white">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
