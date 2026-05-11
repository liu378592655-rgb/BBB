import { Star, Instagram } from 'lucide-react';

const REVIEWS = [
  {
    cup: "G75",
    name: "@sakura_daily",
    product: "脇肉キャッチャー",
    text: "「大きい胸だと太って見えがちですが、これに変えてから着痩せして見えると言われます！サイドがスッキリするのが嬉しい。」",
    image: "https://github.com/liu378592655-rgb/BBB/releases/download/BBB/07.jpg"
  },
  {
    cup: "I80",
    name: "@kana_bodypositive",
    product: "ハリジェンヌ",
    text: "「カップの形がしっかりしていて、重い胸もしっかり支えてくれます。補整感が全然なくて、ナチュラルに綺麗に見えます。」",
    image: "https://github.com/liu378592655-rgb/BBB/releases/download/BBB/08.jpg"
  },
  {
    cup: "F70",
    name: "@miki_lifestyle",
    product: "夜寄るブラ",
    text: "「産後のバスト崩れが悩みでしたが、苦しくないのに朝まで形をキープしてくれます。毎晩欠かせません。」",
    image: "https://github.com/liu378592655-rgb/BBB/releases/download/BBB/20.jpg"
  }
];

export function Reviews() {
  return (
    <section className="py-24 bg-brand-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-white px-4 py-1.5 rounded-full border border-brand-gold/20 mb-6">
            <span className="text-brand-dark text-xs font-medium tracking-widest uppercase">My Bus Stop / Community</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">
            私のバス停
          </h3>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
            そのままの自分を愛する旅へ。バストへの肯定的なメッセージをシェアしましょう。<br/>
            Instagramで話題の #奶糖派女子 #胸部肯定 のリアルな声をご紹介します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div key={i} className="flex flex-col group cursor-pointer bg-white p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-dark">
                  <Instagram className="w-4 h-4" />
                </div>
                <h4 className="font-medium text-gray-900 text-sm">{review.name}</h4>
              </div>
              <div className="aspect-[4/5] overflow-hidden bg-gray-50 mb-6 relative">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium tracking-widest text-gray-900">
                  CUP: {review.cup}
                </div>
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs text-brand-dark px-2 py-1 bg-brand-gold/5">{review.product}</span>
                <span className="text-xs text-gray-500 px-2 py-1 bg-gray-50">#着痩せ</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                {review.text}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="border border-brand-dark text-brand-dark px-8 py-3.5 text-sm tracking-wider hover:bg-brand-dark hover:text-white transition-all flex items-center justify-center gap-2 mx-auto">
            <Instagram className="w-4 h-4" />
            もっとInstagramで見る
          </button>
        </div>
      </div>
    </section>
  );
}
