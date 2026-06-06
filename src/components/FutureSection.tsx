import { FUTURE_DIRECTIONS } from "../types";
import { LucideIcon } from "./LucideIcon";
import { Sparkles } from "lucide-react";

export function FutureSection() {
  return (
    <section id="future" className="py-16 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#14B8A6] tracking-wider uppercase bg-teal-100/60 px-3 py-1 rounded-full">
            Long-term Vision & Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight mt-3">
            未來展望：邁向全方位數位醫療
          </h2>
          <div className="h-1 w-16 bg-[#14B8A6] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#64748B] text-sm leading-relaxed">
            為建立長遠之醫療影響力，本成果雖為課堂原型，我仍針對陽光平台擘畫了明確的「升級藍圖（Future Evolution Roadmap）」。期待能於將來在資安、視訊與物理穿戴IoT上深度結合，實境翻轉未來遠距照護體驗：
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {FUTURE_DIRECTIONS.map((dir, index) => {
            const isFirst = index < 2;
            return (
              <div
                key={index}
                className="bg-[#FAF7F0]/40 rounded-3xl border border-[#E2E8F0] p-8 hover:shadow-lg hover:border-[#14B8A6] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card head */}
                  <div className="flex items-center gap-3.5 border-b border-gray-200/50 pb-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#14B8A6] flex items-center justify-center shrink-0">
                      <LucideIcon name={dir.icon} size={20} />
                    </div>
                    <h3 className="font-extrabold text-gray-800 text-base leading-snug">
                      {dir.title}
                    </h3>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3.5">
                    {dir.points.map((point, id) => (
                      <li key={id} className="flex items-start gap-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] mt-2 shrink-0 animate-pulse" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* card foot */}
                <span className="text-[9px] uppercase font-mono tracking-widest text-right mt-8 block text-[#64748B]">
                  ROADMAP_PHASE_0{index + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
