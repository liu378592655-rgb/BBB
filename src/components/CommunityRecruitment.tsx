import { Users, Heart } from 'lucide-react';

export function CommunityRecruitment() {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-brand-gold/10 blur-3xl opacity-50 point-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/20 text-brand-gold mb-8">
          <Heart className="w-8 h-8" />
        </div>
        
        <h2 className="text-brand-gold text-xs tracking-[0.2em] font-medium uppercase mb-4">NTP Community</h2>
        <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
          あなたも、奶糖派の<br/>
          専用コミュニティに参加しませんか？
        </h3>
        
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
          商品の先行予約、メンバー限定のイベントや割引情報、そして同じ悩みを持つ仲間たちとの意見交換。
          私たちと一緒に、バストポジティブなコミュニティを作り上げていきましょう。
        </p>
        
        <button className="bg-brand-gold text-white px-10 py-4 text-sm tracking-[0.2em] hover:bg-white hover:text-brand-dark transition-all flex items-center justify-center gap-3 mx-auto">
          <Users className="w-4 h-4" />
          コミュニティに参加する
        </button>
      </div>
    </section>
  );
}
