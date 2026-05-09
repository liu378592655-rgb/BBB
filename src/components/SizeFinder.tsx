import { ReactNode } from 'react';

const braRows = ['F', 'G', 'H', 'I', 'J', 'K', 'L'];
const unders = ['65', '70', '75', '80', '85', '90', '95', '100'];
const shortsSizes = ['M', 'L', 'LL', '3L', '4L', '5L'];

const cupTypes = [
  '3/4カップ・寄せ上げ', '3/4カップ・谷間', '3/4カップ・丸胸',
  '4/5カップ・丸胸', 'フルカップ'
];

const colorCategories = [
  { name: '白・ベージュ・クリーム・黄色系', colors: ['#FFFFF0', '#FFF8DC', '#F5DEB3', '#F0E68C'] },
  { name: 'ピンク・パープル系', colors: ['#FFE4E1', '#FFB6C1', '#DDA0DD', '#663399'] },
  { name: 'ブルー・グリーン系', colors: ['#E0FFFF', '#87CEEB', '#90EE90', '#3CB371'] },
  { name: 'オレンジ・赤系', colors: ['#FFE4B5', '#FF8C00', '#FF4500', '#DC143C'] },
  { name: 'グレー・黒・ブラウン系', colors: ['#A9A9A9', '#000000', '#696969', '#8B4513'] },
];

const designs = [
  'レース', 'プリント', '刺繍', 'フロントホック', '脇高・バックU',
  'バッククロス', 'ストラップ付け替え対応'
];

const ColorSwatch = ({ colors }: { colors: string[] }) => (
  <div className="flex h-10 w-12 mr-3 border border-gray-100 shrink-0">
    {colors.map((c, i) => (
      <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
    ))}
  </div>
);

export function SizeFinder() {
  return (
    <section className="py-24 bg-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold text-xs tracking-[0.2em] font-medium uppercase mb-4">Size & Category</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
            商品を探す
          </h3>
          <p className="text-gray-500 text-sm">
            目的やサイズから、あなたにぴったりのアイテムを見つけましょう。
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          {/* Left Column: Sizes */}
          <div className="md:w-[55%]">
            <h3 className="font-bold text-gray-900 text-lg mb-4">ブラをサイズ別で探す</h3>
            <div className="space-y-4 mb-10">
              {braRows.map(row => (
                <div key={row} className="grid grid-cols-8 gap-px bg-gray-200">
                  {unders.map(under => (
                    <button 
                      key={under} 
                      className="bg-white py-3 text-[13px] sm:text-sm text-center text-gray-800 hover:bg-gray-50 hover:text-brand-dark transition-colors whitespace-nowrap"
                    >
                      {row}{under}
                    </button>
                  ))}
                </div>
              ))}
            </div>

            <h3 className="font-bold text-gray-900 text-lg mb-4">ショーツをサイズ別で探す</h3>
            <div className="grid grid-cols-8 gap-px bg-gray-200 w-full sm:w-3/4">
              {shortsSizes.map(s => (
                <button 
                  key={s} 
                  className="bg-white py-3 text-[13px] sm:text-sm text-center text-gray-800 hover:bg-gray-50 hover:text-brand-dark transition-colors whitespace-nowrap"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Categories */}
          <div className="md:w-[45%]">
            <h3 className="font-bold text-gray-900 text-lg mb-4">カップタイプ</h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {cupTypes.map(c => (
                <button 
                  key={c} 
                  className="bg-white px-5 py-2.5 text-sm text-gray-800 hover:bg-gray-50 hover:text-brand-dark transition-colors"
                >
                  {c}
                </button>
              ))}
            </div>

            <h3 className="font-bold text-gray-900 text-lg mb-4">カラー</h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {colorCategories.map(c => (
                <button 
                  key={c.name} 
                  className="bg-white pr-5 py-0 text-sm text-gray-800 hover:bg-gray-50 hover:text-brand-dark flex items-center transition-colors"
                >
                  <ColorSwatch colors={c.colors} />
                  {c.name}
                </button>
              ))}
            </div>

            <h3 className="font-bold text-gray-900 text-lg mb-4">デザイン・機能</h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {designs.map(d => (
                <button 
                  key={d} 
                  className="bg-white px-5 py-2.5 text-sm text-gray-800 hover:bg-gray-50 hover:text-brand-dark transition-colors"
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
