import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full bg-brand-sand overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://github.com/liu378592655-rgb/BBB/releases/download/BBB/banner-1920DOUBLE.jpg" 
          alt="Elegant lingerie" 
          className="w-full h-full object-cover object-top opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-24 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-sm md:text-base tracking-[0.2em] mb-4 uppercase text-brand-peach/90">Naitangpai Japan Presents</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif leading-tight mb-6">
            その悩み、<br/>文胸のせいかも。
          </h1>
          <p className="text-sm md:text-base text-gray-200 mb-8 max-w-md leading-relaxed">
            「大きいから太って見える」「肩が凝る」「形が崩れてきた」<br/>
            グラマーサイズ特有の悩み、私たちが解決します。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-gray-900 px-8 py-3.5 text-sm tracking-wider hover:bg-brand-peach transition-colors w-full sm:w-auto">
              悩みを解決する一枚を探す
            </button>
            <button className="bg-transparent border border-white/80 text-white px-8 py-3.5 text-sm tracking-wider hover:bg-white/10 transition-colors w-full sm:w-auto">
              新作を見る
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
