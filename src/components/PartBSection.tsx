import { Play, Globe, FileText, ExternalLink, Activity } from "lucide-react";
import { PART_B_DATA } from "../types";
import { LucideIcon } from "./LucideIcon";

export function PartBSection() {
  return (
    <section id="partb" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-l-4 border-[#14B8A6] pl-4 mb-10">
          <span className="text-xs font-bold text-[#14B8A6] tracking-wider uppercase">Practical Engineering Implementation</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1F2937]">
            PartB：陽光遠距醫療系統實作專案
          </h2>
          <p className="text-sm text-[#64748B] mt-2 max-w-4xl">
            此篇章為本學期的動手實作展示，系統名為「陽光遠距醫療系統 Sunshine Telehealth Portal」。以「跨距問診，愛無間斷」為核心精神，藉由系統整合、自訂醫師班表排程、病人健保卡建檔上載演示以及多端資訊串流，建置出支援行動載具的可運作模型。
          </p>
        </div>

        {/* Part B Product Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PART_B_DATA.map((card) => {
            const isSystemName = card.id === "b-name";
            return (
              <div
                key={card.id}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isSystemName
                    ? "bg-gradient-to-br from-cyan-50/50 to-teal-50/50 border-cyan-100 shadow-md col-span-1 md:col-span-2 lg:col-span-1"
                    : "bg-white border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-teal-100"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSystemName ? "bg-[#0E7490] text-white animate-pulse" : "bg-teal-50 text-[#14B8A6]"
                    }`}>
                      <LucideIcon name={card.icon} size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1F2937] text-base leading-snug">{card.title}</h3>
                      <p className="text-[10px] text-[#64748B] tracking-wider uppercase font-mono">PORTB_IMPLEMENTATION</p>
                    </div>
                  </div>

                  <p className="text-sm text-[#64748B] leading-relaxed whitespace-pre-line">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded">
                    ACTIVE
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {card.id.toUpperCase()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live System Operations Gateways */}
        <div className="mt-12 bg-[#FAF7F0] rounded-2xl border border-[#E2E8F0] p-6 lg:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Box: Quick Actions */}
            <div>
              <h3 className="text-lg font-bold text-[#1F2937] flex items-center gap-2">
                <Activity className="text-[#14B8A6] animate-pulse" size={20} />
                陽光通訊醫療平台在線操作與展示
              </h3>
              <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
                本成果系統已徹底部署上線，提供極簡體驗。您可以隨時切換模擬「家醫科」、「心臟內科」值班看診排班。學生更誠摯錄製了 8 分鐘精華影片說明多端核驗與操作。
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://www.youtube.com/watch?v=HyU1t5ZaEkc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#14B8A6] hover:bg-teal-600 text-white shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <Play size={16} fill="white" />
                  觀看 PartB 操作影片 (YouTube)
                </a>
                <a
                  href="https://legendary-tiramisu-1064a4.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border-2 border-[#14B8A6] hover:bg-teal-50 text-[#14B8A6] transition-colors"
                >
                  <Globe size={16} />
                  進入陽光遠距掛號系統
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Right Box: PDF Slide Placeholder */}
            <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#14B8A6]">
                  <FileText size={20} />
                  <span className="font-bold text-sm">實作簡報下載</span>
                </div>
                <h4 className="font-semibold text-[#1F2937] text-base">簡報名稱：陽光遠距醫療系統</h4>
                <p className="text-xs text-[#64748B] max-w-sm leading-relaxed">
                  本簡報系統化囊括系統開發初衷、軟硬體協作棧、模擬測試反饋、SaaS 收費框架與校園推廣等實作結晶。
                </p>
              </div>

              <div className="w-full md:w-auto shrink-0 flex flex-col items-stretch gap-2">
                <a
                  href="#"
                  className="px-4 py-2.5 rounded-lg text-center font-semibold text-xs bg-[#FAF7F0] text-[#14B8A6] border border-teal-200 hover:bg-teal-50 shadow-sm transition-colors"
                  onClick={(e) => {
                    if (e.currentTarget.getAttribute("href") === "#") {
                      alert("學生提示：PDF簡報連結目前為預留站位，您可以在原始碼中隨時替換為您在 Google Drive/網頁上的真實簡報 PDF 連結哦！");
                    }
                  }}
                >
                  查看 PartB 簡報 / 下載 PDF
                </a>
                <span className="text-[10px] text-center text-amber-600 font-mono bg-amber-50 rounded px-1 py-0.5 border border-amber-100">
                  即將對接 PDF 連結
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
