export default function DestinyHomePage() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] font-sans selection:bg-[#0071e3]/10">
      {/* 頂部蘋果標誌性毛玻璃導航欄 */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-[#e8e8ed] transition-all">
        <div className="max-w-4xl mx-auto px-6 h-12 flex items-center justify-between text-[12px] font-medium tracking-wide">
          <span className="font-semibold cursor-pointer hover:opacity-70 transition-opacity">命運對號室</span>
          <div className="space-x-8 text-[#86868b]">
            <span className="hover:text-[#1d1d1f] cursor-pointer transition-colors">檔案庫</span>
            <span className="hover:text-[#1d1d1f] cursor-pointer transition-colors">留言板</span>
            <span className="text-[#1d1d1f]/40 hover:text-[#1d1d1f] cursor-pointer transition-colors">工作台</span>
          </div>
        </div>
      </nav>

      {/* Hero 核心視覺大氣大頭 */}
      <header className="max-w-3xl mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="text-[42px] sm:text-[56px] font-semibold tracking-tight leading-[1.1] mb-6 text-[#1d1d1f]">
          在潛意識的象限裡
          <br />
          <span className="bg-gradient-to-r from-[#1d1d1f] via-[#86868b] to-[#1d1d1f] bg-clip-text text-transparent">
            給你的命運對個號。
          </span>
        </h1>
        <p className="text-[16px] sm:text-[19px] text-[#86868b] max-w-lg mx-auto leading-relaxed font-light">
          這裡不是迷信的溫床，是一處用極簡設計與現代心理學搭建的命運解構空間。
        </p>
      </header>

      {/* 文章卡片展示區 */}
      <main className="max-w-2xl mx-auto px-6 pb-32">
        <div className="h-[1px] bg-[#e8e8ed] w-full mb-12"></div>
        <h2 className="text-[16px] font-semibold mb-8 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1d1d1f]"></span>
          深度檔案切片
        </h2>

        <div className="space-y-16">
          {/* 卡片 1 */}
          <article className="group cursor-pointer">
            <p className="text-[11px] text-[#86868b] font-medium tracking-wider mb-2">2026.05.19</p>
            <h3 className="text-[20px] font-semibold group-hover:text-[#0071e3] text-[#1d1d1f] transition-colors duration-300 mb-2">
              潛意識的暗號：如何看穿命中注定的戀愛心理模式
            </h3>
            <p className="text-[14px] text-[#86868b] leading-relaxed group-hover:text-[#1d1d1f]/80 transition-colors duration-300">
              我們在感情中反覆重蹈覆轍的那些小習慣，往往隱藏著不可言說的隱性心理優勢...
            </p>
            <div className="mt-3 text-[13px] text-[#0071e3] font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-5px] group-hover:translate-x-0">
              深入解碼 →
            </div>
          </article>

          {/* 卡片 2 */}
          <article className="group cursor-pointer">
            <p className="text-[11px] text-[#86868b] font-medium tracking-wider mb-2">2026.05.15</p>
            <h3 className="text-[20px] font-semibold group-hover:text-[#0071e3] text-[#1d1d1f] transition-colors duration-300 mb-2">
              現代命運實驗室：解構塔羅牌圖騰中的幾何與秩序
            </h3>
            <p className="text-[14px] text-[#86868b] leading-relaxed group-hover:text-[#1d1d1f]/80 transition-colors duration-300">
              擺脫舊式神秘學的唯心論，用現代視覺結構重新看待那些跳動在桌面的命運圖騰...
            </p>
            <div className="mt-3 text-[13px] text-[#0071e3] font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-5px] group-hover:translate-x-0">
              深入解碼 →
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}