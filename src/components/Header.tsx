import { useState, useRef, useEffect } from 'react';
import { Heart, Search, ShoppingBag, User, ChevronDown } from 'lucide-react';

const NAVIGATION = [
  {
    title: '商品を探す',
    items: ['すべての商品', '新着アイテム', 'ベストセラー', '限定コレクション']
  },
  {
    title: 'バストシェイプ診断',
    items: ['診断を始める', '私のバストタイプ', 'おすすめアイテム']
  },
  {
    title: 'サイズガイド',
    items: ['正しい測り方', 'サイズ表', 'フィット感について']
  },
  {
    title: 'シチュエーションで選ぶ',
    items: ['お仕事・デイリー', 'お出かけ・デート', 'リラックス・おうち', 'スポーツ']
  },
  {
    title: 'ブランドストーリー',
    items: ['奶糖派について', '私たちの想い', '素材へのこだわり']
  },
  {
    title: 'お問い合わせ',
    items: ['よくある質問', 'LINE相談', '返品・交換について']
  }
];

export function Header() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100" ref={menuRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <div className="flex items-center gap-4 flex-1 lg:hidden">
            <button className="p-2 -ml-2 text-gray-600 hover:text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button className="text-gray-600 hover:text-brand-dark transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center lg:flex-1 lg:justify-start">
            <a href="/" className="block">
              <img 
                src="https://github.com/liu378592655-rgb/BBB/releases/download/BBB/NTP.logo.png" 
                alt="NAITANGPAI" 
                className="h-5 lg:h-6 w-auto object-contain transition-opacity hover:opacity-80" 
                style={{
                  filter: 'brightness(0) saturate(100%) invert(83%) sepia(25%) saturate(452%) hue-rotate(343deg) brightness(87%) contrast(84%)'
                }}
              />
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center justify-end gap-5 flex-1">
            <button className="text-gray-600 hover:text-brand-dark transition-colors hidden lg:block">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-brand-dark transition-colors hidden sm:block">
              <User className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-brand-dark transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-brand-dark transition-colors relative">
              <ShoppingCartIcon />
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-center items-center h-12 gap-8 relative">
          {NAVIGATION.map((nav, idx) => (
            <div key={idx} className="relative h-full flex items-center">
              <button
                onClick={() => setActiveMenu(activeMenu === idx ? null : idx)}
                className={`text-sm tracking-wide font-medium flex items-center gap-1 transition-colors h-full ${
                  activeMenu === idx ? 'text-brand-gold' : 'text-gray-700 hover:text-brand-gold'
                }`}
              >
                {nav.title}
                <ChevronDown className={`w-3 h-3 transition-transform ${activeMenu === idx ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {activeMenu === idx && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white border border-gray-100 shadow-xl rounded-sm py-2 mt-0.5 animate-fade-in-up z-50">
                  {nav.items.map((item, itemIdx) => (
                    <a
                      key={itemIdx}
                      href="#"
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-brand-sand hover:text-brand-dark transition-colors"
                      onClick={() => setActiveMenu(null)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

function ShoppingCartIcon() {
  return (
    <div className="relative">
      <ShoppingBag className="w-5 h-5" />
      <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
        0
      </span>
    </div>
  );
}
