/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnnouncementBar } from "./components/AnnouncementBar";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { VolumeSearch } from "./components/VolumeSearch";
import { Reviews } from "./components/Reviews";
import { BrandTrust } from "./components/BrandTrust";
import { TrustBadge } from "./components/TrustBadge";
import { FeaturedCategories } from "./components/FeaturedCategories";
import { SelfDiagnosis } from "./components/SelfDiagnosis";
import { SizeFinder } from "./components/SizeFinder";
import { ThemeActivities } from "./components/ThemeActivities";
import { CommunityRecruitment } from "./components/CommunityRecruitment";
import { BestSellers } from "./components/BestSellers";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-peach">
      <AnnouncementBar />
      <Header />
      <main>
        {/* 首屏轮播（情感主视觉） */}
        <Hero />
        
        {/* 人気爆売れアイテム */}
        <BestSellers />
        
        {/* ボリュームサーチ */}
        <VolumeSearch />
        
        {/* 我的巴士站/社区标签 (引导参与胸部肯定，下方UGC) */}
        <Reviews />
        
        {/* 品牌信赖与免费退货展示区 */}
        <BrandTrust />
        
        {/* 场景选购区 */}
        <FeaturedCategories />
        
        {/* 解决我的烦恼 / 痛点解决导向分类 */}
        <SelfDiagnosis />
        <SizeFinder />
        
        {/* 主题活动 */}
        <ThemeActivities />
        
        {/* 社区参与招募 */}
        <CommunityRecruitment />
      </main>
      
      {/* 品牌信赖徽章+免费退货 (固定胶囊栏) */}
      <TrustBadge />
      
      <Footer />
    </div>
  );
}
