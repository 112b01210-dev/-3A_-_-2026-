import { LINKS_DATA } from "../types";
import { Youtube, Globe, ArrowUpRight, HelpCircle } from "lucide-react";

export function LinksSection() {
  return (
    <section id="links" className="py-16 bg-[#FAF7F0] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#14B8A6] tracking-wider uppercase bg-teal-100/60 px-3 py-1 rounded-full">
            Deliverable Redirection Hub
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight mt-3">
            成果影片與網站連結
          </h2>
          <div className="h-1 w-16 bg-[#14B8A6] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#64748B] text-sm leading-relaxed">
            為方便單一介面彙整，以下卡片羅列了本學期在 PartA 文獻及 PartB 實體平台上的 YouTube 說明影音與正式上線網站。所有按鈕皆已配置外鏈重導向，支援在新分頁中流暢開啟：
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {LINKS_DATA.map((link, index) => {
            const isVideo = link.type === "Video";
            const isPartA = link.category === "PartA";

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                      isPartA ? "bg-cyan-50 text-cyan-800" : "bg-teal-50 text-teal-800"
                    }`}>
                      {isPartA ? "PartA 理論研究成果" : "PartB 實體技術實作"}
                    </span>
                    
                    <div className={`p-2 rounded-lg ${
                      isVideo ? "bg-red-50 text-red-600" : "bg-indigo-50 text-indigo-600"
                    }`}>
                      {isVideo ? <Youtube size={20} /> : <Globe size={20} />}
                    </div>
                  </div>

                  <h3 className="font-extrabold text-[#1F2937] text-lg leading-snug">
                    {link.title}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed font-medium">
                    {link.subtitle}
                  </p>
                </div>

                {/* Foot/button */}
                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-400">
                    HTTP_SSL_SECURE
                  </span>
                  
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      isVideo 
                        ? "bg-red-600 hover:bg-red-700 text-white" 
                        : "bg-[#0E7490] hover:bg-cyan-800 text-white"
                    }`}
                  >
                    <span>在新分頁開啟成果</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative tips */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-xl bg-amber-50 border border-amber-100 flex gap-3 text-amber-900">
          <HelpCircle size={18} className="shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <span className="font-bold">指導教授考評指南：</span>
            <p className="leading-relaxed">
              點選上面的連結，新開分頁將可以檢視我本學期精心構建的
              Lovable、Netlify 網站，與 YouTube 解說旁白。陽光遠距掛號系統已完全發佈且處在健康在線狀態，歡迎老師實機與多端進行操作！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
