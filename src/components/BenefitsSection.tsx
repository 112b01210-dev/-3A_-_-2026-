import { BENEFITS_DATA } from "../types";
import { LucideIcon } from "./LucideIcon";
import { Sparkles, Heart } from "lucide-react";

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 bg-[#FAF7F0] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0E7490] tracking-wider uppercase bg-cyan-100/60 px-3 py-1 rounded-full">
            Ecosystem Triple-Win
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight mt-3">
            系統好處：共創三贏的智慧醫療生態系
          </h2>
          <div className="h-1 w-16 bg-[#0E7490] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#64748B] text-sm leading-relaxed">
            遠距診療並非單一維度的工具，而是一座串起整個醫患、護務與地方行政管理單位的健全網路。陽光通訊掛號系統藉由資訊透明對接，同時為三方群體帶來跨越式的數位照護體驗：
          </p>
        </div>

        {/* 3 Large Benefit Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {BENEFITS_DATA.map((benefit, index) => {
            const isPatient = index === 0;
            const isStaff = index === 1;

            let borderHover = "hover:border-[#0E7490]";
            let headerBg = "bg-cyan-50/50";
            let topIconBg = "bg-cyan-100 text-[#0E7490]";
            let numColor = "text-cyan-600";
            
            if (isStaff) {
              borderHover = "hover:border-[#14B8A6]";
              headerBg = "bg-teal-50/50";
              topIconBg = "bg-teal-100 text-[#14B8A6]";
              numColor = "text-teal-600";
            } else if (!isPatient && !isStaff) {
              borderHover = "hover:border-[#64748B]";
              headerBg = "bg-slate-100/60";
              topIconBg = "bg-slate-200 text-gray-800";
              numColor = "text-slate-600";
            }

            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Header */}
                  <div className={`p-6 border-b border-gray-100 ${headerBg} flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${topIconBg}`}>
                        <LucideIcon name={benefit.icon} size={20} />
                      </div>
                      <h3 className="font-extrabold text-gray-800 text-base">{benefit.target}</h3>
                    </div>
                    <span className={`font-mono text-xl font-bold opacity-30 ${numColor}`}>0{index + 1}</span>
                  </div>

                  <p className="p-6 text-xs sm:text-sm text-gray-700 font-medium pb-2 select-none leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Bullet points list */}
                  <div className="p-6 pt-2 space-y-3">
                    {benefit.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#64748B]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] mt-2 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated signature/footer inside card */}
                <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#64748B] select-none">
                  <span className="font-semibold text-xs flex items-center gap-1">
                    <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
                    安全照護價值
                  </span>
                  <span className="font-mono text-[9px] uppercase">ECOSYSTEM_V1</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic callout summary */}
        <div className="mt-12 text-center p-6 bg-white border border-[#E2E8F0] rounded-2xl max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E7490]">
            <Sparkles size={14} className="animate-spin" />
            落實「連續性照護」的行政解答
          </span>
          <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
            藉由系統的無縫數據串接，病人能安心、醫事人員能提效、醫療機構能達成數位化分流，是真正符合衛生主管機關「健康台灣、智慧長照」長遠方針的智慧方案。
          </p>
        </div>
      </div>
    </section>
  );
}
