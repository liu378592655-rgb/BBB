export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="text-2xl font-serif text-white tracking-wider block mb-6">
              NAITANGPAI
            </a>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              大阪府河内長野市から世界へ。<br />
              すべての女性の「理想」と「悩み」に寄り添う、補整下着のパイオニア。
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>0120-123-456 (9:00 - 18:00)</p>
              <p className="hover:text-white transition-colors cursor-pointer">SUPPORT@HEAVEN-JP.COM</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest text-brand-gold mb-6 uppercase">ショッピング</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">ブラジャー一覧</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ショーツ・ガードル</a></li>
              <li><a href="#" className="hover:text-white transition-colors">セットアイテム</a></li>
              <li><a href="#" className="hover:text-white transition-colors">新着情報</a></li>
              <li><a href="#" className="hover:text-white transition-colors">セール</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest text-brand-gold mb-6 uppercase">ガイド & サポート</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">フィッティング相談</a></li>
              <li><a href="#" className="hover:text-white transition-colors">サイズ相談・診断</a></li>
              <li><a href="#" className="hover:text-white transition-colors">返品・交換について</a></li>
              <li><a href="#" className="hover:text-white transition-colors">送料・お届け</a></li>
              <li><a href="#" className="hover:text-white transition-colors">お支払い方法</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest text-brand-gold mb-6 uppercase">特別なサービス</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">アゲちゃって委員会</a></li>
              <li><a href="#" className="hover:text-white transition-colors">試着サービス</a></li>
              <li><a href="#" className="hover:text-white transition-colors">会員限定特典</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SNSコミュニティ</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-white transition-colors">企業情報</a>
            <a href="#" className="hover:text-white transition-colors">奶糖派について</a>
            <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors">利用規約</a>
            <a href="#" className="hover:text-white transition-colors">特定商取引法表記</a>
          </div>
          <p className="text-xs text-gray-500">
            © 2026 NAITANGPAI JAPAN CO., LTD. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
