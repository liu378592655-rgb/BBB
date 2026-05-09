import { motion } from 'motion/react';

export function AnnouncementBar() {
  const text = "【送料無料】5,500円（税込）以上お買い上げで全国送料無料　　【返品交換0円】サイズが合わなくても安心！初回交換は送料無料　　【新登場】スポーツブラ「アゲちゃって委員会」コラボアイテム発売中！　　";
  
  return (
    <div className="bg-brand-gold text-white text-xs py-2 overflow-hidden flex whitespace-nowrap">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        className="flex"
      >
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
      </motion.div>
    </div>
  );
}
