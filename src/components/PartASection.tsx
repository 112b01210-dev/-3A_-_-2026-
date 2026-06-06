import { Play, Globe, FileText, ExternalLink } from "lucide-react";
import { PART_A_DATA } from "../types";
import { LucideIcon } from "./LucideIcon";

export function PartASection() {
  return (
    <section id="parta" className="py-16 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-l-4 border-[#0E7490] pl-4 mb-10">
          <span className="text-xs font-bold text-[#0E7490] tracking-wider uppercase">Theoretical Achievements</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1F2937]">
            PartA：遠距醫療、智慧長照與健康台灣願景
          </h2>
          <p className="text-sm text-[#64748B] mt-2 max-w-4xl">
            此篇章深入探討遠距醫療在台灣當前高齡局勢與照護系統中的關鍵轉型。面對老化、慢性病負擔及家庭照顧資源缺口，建立以患者為中心、連續性、安全放心的社區居家遠距安全醫療網。
          </p>
        </div>

        {/* Six Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PART_A_DATA.map((card) => (
            <div
              key={card.id}
              className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-cyan-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#0E7490] flex items-center justify-center">
                    <LucideIcon name={card.icon} size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F2937] text-base leading-snug">{card.title}</h3>
                    {card.subtitle && <p className="text-[10px] text-[#64748B] tracking-wider uppercase font-mono">{card.subtitle}</p>}
                  </div>
                </div>

                <ul className="space-y-3">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#64748B] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Aesthetic card indicator */}
              <div className="mt-6 pt-3 border-t border-slate-50 flex justify-end">
                <span className="text-[10px] bg-slate-50 text-slate-400 font-mono px-1.5 py-0.5 rounded">
                  {card.id.toUpperCase()}_V2026
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Theoretical Documentations Gateways */}
        <div className="mt-12 bg-white rounded-2xl border border-[#E2E8F0] p-6 lg:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Box: Quick Actions */}
            <div>
              <h3 className="text-lg font-bold text-[#1F2937] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6]" />
                PartA 理論研究成果對外連結
              </h3>
              <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
                研究中深入探討高齡家屬喘息困難與偏鄉醫療資源分流，由
                NotebookLM 指導對接語音旁白。老師可直接進入產出影音或理論站點深入考評。
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://www.youtube.com/watch?v=Mq-EZFSSAVw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#0E7490] hover:bg-cyan-800 text-white shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <Play size={16} fill="white" />
                  觀看 PartA 指導影片 (YouTube)
                </a>
                <a
                  href="https://home-health-stream.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border-2 border-[#0E7490] hover:bg-cyan-50 text-[#0E7490] transition-colors"
                >
                  <Globe size={16} />
                  進入 PartA 理論宣導網站
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Right Box: PDF Slide Placeholder */}
            <div className="p-6 rounded-xl bg-cyan-50/50 border border-cyan-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#0E7490]">
                  <FileText size={20} />
                  <span className="font-bold text-sm">成果簡報下載</span>
                </div>
                <h4 className="font-semibold text-[#1F2937] text-base">簡報名稱：遠距醫療與智慧長照</h4>
                <p className="text-xs text-[#64748B] max-w-sm leading-relaxed">
                  本學術簡報精彩涵蓋健康台灣五重防線、通訊健保給付、科技喘息服務與無障礙看診引導。
                </p>
              </div>

              <div className="w-full md:w-auto shrink-0 flex flex-col items-stretch gap-2">
                <a
                  href="https://drive.google.com/file/d/1FvuuXFSjeD6E2V0bEzJKwW4iyvAnM1GE/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg text-center font-bold text-xs bg-[#0E7490] text-white hover:bg-cyan-800 shadow-sm transition-colors cursor-pointer"
                >
                  查看 PartA 簡報 / 下載 PDF
                </a>
                <span className="text-[10px] text-center text-emerald-600 font-bold bg-emerald-50 rounded px-2 py-0.5 border border-emerald-100">
                  已成功對接雲端 PDF
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
