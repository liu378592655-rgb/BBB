import { ShieldCheck, ArrowRightLeft, Clock, CheckCircle } from 'lucide-react';

export function BrandTrust() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-brand-dark mb-4">
              あなたの「ぴったり」を<br />
              安心してお探しください
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              オンラインでの下着選びには不安がつきもの。奶糖派は、お客様一人ひとりに最適なバストメイクをお届けするため、万全のサポート体制を整えています。
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="bg-white p-6 flex flex-col items-center text-center rounded-sm shadow-sm">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-4">
                <ArrowRightLeft className="w-6 h-6" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">初回交換・返品送料無料</h4>
              <p className="text-xs text-gray-500">
                サイズが合わなかった場合も、初回は無料で交換・返品を承ります。ご自宅でじっくりご試着いただけます。
              </p>
            </div>
            
            <div className="bg-white p-6 flex flex-col items-center text-center rounded-sm shadow-sm">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">専門フィッターのサポート</h4>
              <p className="text-xs text-gray-500">
                サイズ選びや着用感について、LINEで専門のフィッターに無料でご相談いただけます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
