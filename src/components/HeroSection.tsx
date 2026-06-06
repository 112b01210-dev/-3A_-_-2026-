import { ExternalLink, Play, FileText, Globe, HeartPulse, Sparkles, BookOpen } from "lucide-react";

export function HeroSection() {
  const deliverables = [
    {
      title: "PartA PDF 簡報成果",
      badge: "簡報",
      desc: "研究遠距醫療、健康台灣願景、長照 3.0 與科技賦能發展之精美學術簡報。",
      actionText: "查看 PartA 簡報",
      url: "https://drive.google.com/file/d/1FvuuXFSjeD6E2V0bEzJKwW4iyvAnM1GE/view?usp=drive_link",
      icon: <FileText className="text-[#0E7490]" size={22} />,
      bgColor: "bg-cyan-50",
      accentBorder: "border-cyan-100",
      tagColor: "bg-cyan-100 text-cyan-800"
    },
    {
      title: "PartA YouTube 影片",
      badge: "影片",
      desc: "深入解說遠距醫療政策脈絡與高齡時代下如何以科技賦能健康台灣願景。",
      actionText: "前往 YouTube 播放",
      url: "https://www.youtube.com/watch?v=Mq-EZFSSAVw",
      icon: <Play className="text-[#14B8A6]" size={22} />,
      bgColor: "bg-teal-50",
      accentBorder: "border-teal-100",
      tagColor: "bg-teal-100 text-teal-800"
    },
    {
      title: "PartA 成果宣導網站",
      badge: "主題頁",
      desc: "專門宣導遠距醫療常規看診可近性、智慧長照與制度沿革的靜態理論科普網站。",
      actionText: "瀏覽 PartA 網站",
      url: "https://home-health-stream.lovable.app/",
      icon: <Globe className="text-[#0E7490]" size={22} />,
      bgColor: "bg-cyan-50",
      accentBorder: "border-cyan-100",
      tagColor: "bg-cyan-100 text-cyan-800"
    },
    {
      title: "PartB PDF 簡報成果",
      badge: "簡報",
      desc: "規劃陽光遠距掛號與管理平台、三端工作流、同學測試與 SaaS 營運之專利提案級簡報。",
      actionText: "查看 PartB 簡報",
      url: "https://drive.google.com/file/d/1_Tl3KDdLcIGFwj7b40MC1dfcUs3pS4Fn/view?usp=drive_link",
      icon: <FileText className="text-[#0E7490]" size={22} />,
      bgColor: "bg-cyan-50",
      accentBorder: "border-cyan-100",
      tagColor: "bg-cyan-100 text-cyan-800"
    },
    {
      title: "PartB YouTube 影片",
      badge: "影片",
      desc: "實錄演示陽光遠距診察系統之病人健保卡註冊、線上預約及醫護看診管理全流程影片。",
      actionText: "前往 YouTube 播放",
      url: "https://www.youtube.com/watch?v=HyU1t5ZaEkc",
      icon: <Play className="text-[#14B8A6]" size={22} />,
      bgColor: "bg-teal-50",
      accentBorder: "border-teal-100",
      tagColor: "bg-teal-100 text-teal-800"
    },
    {
      title: "PartB 陽光遠距實作系統",
      badge: "實作系統",
      desc: "可線上實際操作核對健保卡照片、掛號、查看進度，支持三端自主切換體驗的網頁系統。",
      actionText: "上線操作 PartB 系統",
      url: "https://legendary-tiramisu-1064a4.netlify.app/",
      icon: <Globe className="text-[#14B8A6]" size={22} />,
      bgColor: "bg-teal-50",
      accentBorder: "border-teal-100",
      tagColor: "bg-teal-100 text-teal-800"
    },
  ];

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Decorative colored glow background spots */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -z-10 w-80 h-80 bg-[#0E7490]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academic Meta Header */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3  py-1 rounded-full bg-cyan-100/60 border border-cyan-200 text-cyan-900 text-xs font-semibold mb-6 animate-pulse">
            <HeartPulse size={14} className="text-[#0E7490]" />
            <span>2026 醫管期末專題總成果發表</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2937] leading-tight tracking-tight font-sans">
            遠距醫療與健康管理 <span className="text-[#0E7490]">2026 年期末成果網站</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto">
            從健康台灣、智慧長照與遠距醫療發展，到陽光遠距醫療系統實作上線
          </p>

          {/* Student Profile Info */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm text-sm">
            <div className="border-r border-neutral-100 last:border-0 pr-2">
              <span className="block text-[#64748B] text-xs">專題作者</span>
              <span className="font-semibold text-[#1F2937] text-base">陳妤妮 同學</span>
            </div>
            <div className="border-r border-neutral-100 last:border-0 pr-2 sm:px-2">
              <span className="block text-[#64748B] text-xs">指導老師</span>
              <span className="font-semibold text-[#1F2937] text-base">張祐倉 老師</span>
            </div>
            <div className="border-r border-neutral-100 last:border-0 pr-2 sm:px-2">
              <span className="block text-[#64748B] text-xs">就讀學校</span>
              <span className="font-semibold text-[#1F2937] text-base text-ellipsis overflow-hidden whitespace-nowrap">長榮大學</span>
            </div>
            <div className="last:border-0 sm:px-2">
              <span className="block text-[#64748B] text-xs">所屬科系</span>
              <span className="font-semibold text-[#1F2937] text-base">醫務管理學系</span>
            </div>
          </div>
        </div>

        {/* Dual Pillar Gateways */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1: PartA Gateway */}
          <div className="relative group bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#0E7490] rounded-l-2xl" />
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#0E7490] uppercase tracking-wider block">Theoretical Base</span>
                <h3 className="text-2xl font-bold text-[#1F2937] group-hover:text-[#0E7490] transition-colors">
                  PartA：遠距醫療、智慧長照與健康台灣願景
                </h3>
              </div>
              <div className="p-3 bg-cyan-50 text-[#0E7490] rounded-xl">
                <BookOpen size={24} />
              </div>
            </div>
            <p className="mt-4 text-[#64748B] text-sm leading-relaxed">
              詳細整理遠距醫療發展進程、智慧長照政策、長照 3.0 的精準賦能機制、與「健康台灣」政策中自預防至醫療照護的五位一體連續性願景，奠定雄厚系統理論基底。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/watch?v=Mq-EZFSSAVw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-[#0E7490] text-white hover:bg-cyan-800 transition-colors shadow-sm"
              >
                <Play size={14} fill="white" />
                觀看 PartA 宣導影片
              </a>
              <a
                href="https://home-health-stream.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium border border-[#0E7490] text-[#0E7490] hover:bg-cyan-50 transition-colors"
              >
                <Globe size={14} />
                進入 PartA 宣導網站
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Pillar 2: PartB Gateway */}
          <div className="relative group bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#14B8A6] rounded-l-2xl" />
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#14B8A6] uppercase tracking-wider block">Service System Prototype</span>
                <h3 className="text-2xl font-bold text-[#1F2937] group-hover:text-[#14B8A6] transition-colors">
                  PartB：陽光遠距醫療系統實作專案
                </h3>
              </div>
              <div className="p-3 bg-teal-50 text-[#14B8A6] rounded-xl">
                <HeartPulse size={24} />
              </div>
            </div>
            <p className="mt-4 text-[#64748B] text-sm leading-relaxed">
              運用 Google AI Studio 協調輔助，自主開發兼顧「病人線上健保卡註冊掛號」、「醫護看診管理控制」及「管理員排班與自訂科別」的三端在線上線模擬系統，驗證可行性。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/watch?v=HyU1t5ZaEkc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-[#14B8A6] text-white hover:bg-teal-600 transition-colors shadow-sm"
              >
                <Play size={14} fill="white" />
                觀看 PartB 實作影片
              </a>
              <a
                href="https://legendary-tiramisu-1064a4.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium border border-[#14B8A6] text-[#14B8A6] hover:bg-teal-50 transition-colors"
              >
                <Globe size={14} />
                切換至陽光實作系統
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* 6 Core Deliverables Showcase Grid */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] flex items-center justify-center gap-2">
              <Sparkles className="text-[#0E7490]" size={24} />
              本學期六大專題成果總覽
            </h2>
            <p className="text-[#64748B] text-sm mt-2 max-w-2xl mx-auto">
              涵蓋本期末專案所有的簡報、解說影音、理論站點與實作平台，點擊直接進行互動。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${item.tagColor}`}>
                      {item.badge}
                    </span>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-50">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-[#1F2937]">{item.title}</h4>
                  <p className="text-xs text-[#64748B] mt-2 line-clamp-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Simulated preview placeholder style per instructions */}
                <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                  <a
                    href={item.url}
                    target={item.url !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#0E7490] hover:text-[#14B8A6] inline-flex items-center gap-1 transition-colors"
                  >
                    {item.actionText}
                    <ExternalLink size={12} />
                  </a>
                  {item.url === "#" && (
                    <span className="text-[10px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded border border-amber-100">
                      即將替換為正式 PDF
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
