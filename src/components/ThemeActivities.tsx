import { ArrowRight } from 'lucide-react';

const THEMES = [
  {
    title: '春季焕新文胸',
    description: '春らしい軽やかな付け心地と、華やかなカラーリング。新しい季節を、新しいバストメイクで始めませんか。',
    image: 'https://github.com/liu378592655-rgb/NTP/releases/download/V1/12.jpg',
    color: 'bg-brand-peach/30'
  },
  {
    title: '冬季暖心文胸',
    description: '寒い季節も快適に。肌触りの良い起毛素材と、しっかりとしたホールド力で、心も体も温かく包み込みます。',
    image: 'https://github.com/liu378592655-rgb/NTP/releases/download/V1/13.jpg',
    color: 'bg-brand-sand'
  }
];

export function ThemeActivities() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold text-xs tracking-[0.2em] font-medium uppercase mb-4">Seasonal Theme</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
            テーマで選ぶ、季節のコレクション
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {THEMES.map((theme, idx) => (
            <div key={idx} className={`group flex flex-col sm:flex-row rounded-sm overflow-hidden border border-gray-100 ${theme.color}`}>
              <div className="sm:w-1/2 aspect-square sm:aspect-auto relative overflow-hidden bg-white">
                {/* Fallback image if 12/13 doesn't exist, let's use 05/06 or 07/08 */}
                <img 
                  src={idx === 0 ? "https://github.com/liu378592655-rgb/NTP/releases/download/V1/07.jpg" : "https://github.com/liu378592655-rgb/NTP/releases/download/V1/08.jpg"} 
                  alt={theme.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="sm:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
                <h4 className="text-xl font-serif text-gray-900 mb-4">{theme.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-grow">
                  {theme.description}
                </p>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-brand-dark group-hover:text-brand-gold transition-colors cursor-pointer w-fit">
                  <span className="heading-underline">もっと見る</span>
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
