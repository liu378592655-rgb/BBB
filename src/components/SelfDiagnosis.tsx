import { Ruler, CheckCircle2 } from 'lucide-react';

export function SelfDiagnosis() {
  return (
    <section className="py-24 bg-brand-peach/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-16 rounded-sm shadow-sm border border-brand-gold/10 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-brand-gold text-xs tracking-[0.2em] font-medium uppercase">Self Diagnosis</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
              わたしのサイズ、<br/>
              本当に合ってる？
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              3〜5問の簡単な質問に答えるだけ。あなたの胸型を判定し、おすすめのシリーズとぴったりのサイズを秒速で導き出します。
            </p>
            
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-brand-dark" />
                <span>スマホで簡単、約1分で完了</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-brand-dark" />
                <span>骨格や肉質に合わせたシリーズ提案</span>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-gold text-white px-8 py-3.5 text-sm tracking-wider hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                診断を開始する
              </button>
              <button className="border border-gray-200 text-gray-600 px-8 py-3.5 text-sm tracking-wider hover:border-gray-800 transition-all flex items-center justify-center gap-2">
                <Ruler className="w-4 h-4" />
                正しい測り方を見る
              </button>
            </div>
          </div>

          <div className="relative aspect-[4/3] bg-gray-50 flex items-center justify-center overflow-hidden">
             <img 
              src="https://github.com/liu378592655-rgb/BBB/releases/download/BBB/30.jpg" 
              alt="Measurement" 
              className="w-full h-full object-cover opacity-80 mix-blend-multiply"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
