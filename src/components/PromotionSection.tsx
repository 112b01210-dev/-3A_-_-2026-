import { PROMOTION_STAGES } from "../types";
import { LucideIcon } from "./LucideIcon";
import { ArrowRight, Sparkles } from "lucide-react";

export function PromotionSection() {
  return (
    <section id="promotion" className="py-16 bg-[#FAF7F0] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0E7490] tracking-wider uppercase bg-cyan-100/60 px-3 py-1 rounded-full">
            Market Expansion & Growth
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight mt-3">
            推廣策略：從校園驗證到機構落地
          </h2>
          <div className="h-1 w-16 bg-[#0E7490] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#64748B] text-sm leading-relaxed">
            為實現從「學術研究」往「社會實證與商業契機」進化的可能性，我們為陽光遠距掛號與核對系統擘畫了明確的三階段策略推演。旨在循序漸進，由點及面地解決長輩在通訊看診上的障礙門檻。
          </p>
        </div>

        {/* 3 Horizontal/Vertical Flow Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PROMOTION_STAGES.map((stage, idx) => {
            const isFirst = idx === 0;
            const isSecond = idx === 1;

            let cardBorder = "hover:border-[#0E7490]";
            let stageBadge = "bg-cyan-100 text-[#0E7490]";
            if (isSecond) {
              cardBorder = "hover:border-[#14B8A6]";
              stageBadge = "bg-teal-100 text-[#14B8A6]";
            } else if (!isFirst && !isSecond) {
              cardBorder = "hover:border-indigo-300";
              stageBadge = "bg-indigo-100 text-indigo-800";
            }

            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl border border-[#E2E8F0] p-8 shadow-sm ${cardBorder} transition-all duration-300 flex flex-col justify-between relative`}
              >
                {/* Arrow visual connection for non-last blocks in desktop */}
                {idx < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-gray-300 z-10">
                    <ArrowRight size={24} className="animate-pulse" />
                  </div>
                )}

                <div>
                  {/* Tag top */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${stageBadge}`}>
                      {stage.stage}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500">
                      <LucideIcon name={stage.icon} size={20} />
                    </div>
                  </div>

                  <h3 className="font-extrabold text-[#1F2937] text-lg mb-4">
                    {stage.title}
                  </h3>

                  {/* Bullet items */}
                  <ul className="space-y-3.5">
                    {stage.items.map((item, key) => (
                      <li key={key} className="flex items-start gap-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Foot card */}
                <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center text-[10px] text-[#64748B]">
                  <span>STRATEGY_NODE_0{idx + 1}</span>
                  <span className="font-mono text-emerald-600 font-bold flex items-center gap-0.5">
                    <Sparkles size={10} />
                    規劃可行
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
