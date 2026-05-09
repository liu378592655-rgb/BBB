import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'wakiniku',
    title: '脇肉キャッチャー',
    subtitle: 'WAKINIKU CATCHER',
    description: '背中・脇、はみ肉スッキリ。',
    image: 'https://github.com/liu378592655-rgb/NTP/releases/download/V1/05.jpg',
    color: 'bg-brand-gold'
  },
  {
    id: 'yoru',
    title: '夜寄るブラ',
    subtitle: 'YORU YORU BRA',
    description: '寝ている間も、理想の形を。',
    image: 'https://github.com/liu378592655-rgb/NTP-JANPAN-B/releases/download/NTP-B/banner2.jpg',
    color: 'bg-brand-gold'
  }
];

export function FeaturedCategories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="group relative aspect-square sm:aspect-[4/3] overflow-hidden bg-gray-50 cursor-pointer">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 text-white">
                <span className="text-[10px] tracking-widest uppercase text-brand-peach mb-2 block font-medium">
                  {cat.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif mb-3">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-200 mb-6 font-light">
                  {cat.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm uppercase tracking-wider font-medium group-hover:text-brand-gold transition-colors">
                  <span className="heading-underline">詳しく見る</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
