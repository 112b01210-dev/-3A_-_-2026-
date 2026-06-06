import { TIMELINE_DATA } from "../types";
import { LucideIcon } from "./LucideIcon";

export function DevelopmentTimeline() {
  return (
    <section id="timeline" className="py-16 bg-[#FAF7F0] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0E7490] tracking-wider uppercase bg-cyan-100/60 px-3 py-1 rounded-full">
            Engineering Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight mt-3">
            系統開發過程與上線流程
          </h2>
          <div className="h-1 w-16 bg-[#0E7490] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#64748B] text-sm leading-relaxed">
            本學術專案的開發循序組成，從最初期使用 Google AI Studio 對接需求，到中間的前後端模擬開發，最後成功自動部署於 Netlify 雲端，並實存了 5 位長榮大學醫管系同窗的操作反饋。
          </p>
        </div>

        {/* Timeline Line Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line (desktop) */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-cyan-200/60 -translate-x-[1px] md:translate-x-0" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={event.step}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Badge (Center point) */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-2 border-[#0E7490] text-[#0E7490] font-bold text-sm flex items-center justify-center -translate-x-[1px] md:-translate-x-4 z-10 shadow-sm animate-pulse">
                    {event.step}
                  </div>

                  {/* Empty divider block for desktop visual alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Box */}
                  <div className="pl-14 md:pl-0 md:w-1/2 md:px-8">
                    <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                      {/* Arrow tip decorations */}
                      <div className={`hidden md:block absolute top-1/2 -mt-2 w-4 h-4 bg-white border-b border-r border-[#E2E8F0] rotate-45 ${
                        isEven ? "-left-2 border-t-0 border-r-0 border-l border-b" : "-right-2 border-b-0 border-l-0 border-r border-t"
                      }`} />

                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#0E7490] flex items-center justify-center">
                          <LucideIcon name={event.icon} size={16} />
                        </div>
                        <h4 className="font-bold text-[#1F2937] text-base leading-snug">
                          {event.title}
                        </h4>
                      </div>

                      <p className="text-sm text-[#64748B] leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
