import { SYSTEM_ROLES_DATA } from "../types";
import { LucideIcon } from "./LucideIcon";

export function SystemRolesSection() {
  return (
    <section id="roles" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#14B8A6] tracking-wider uppercase bg-teal-100/60 px-3 py-1 rounded-full">
            3-Tier Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight mt-3">
            系統核心架構：病人端、醫護端、管理員端
          </h2>
          <div className="h-1 w-16 bg-[#14B8A6] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#64748B] text-sm leading-relaxed">
            陽光遠距醫療系統設計了三個完全獨立、資訊同步的入口。讓處於不同環境的病患、醫事行政人員及總規劃管理人員，均能完美連結，各司其職。
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SYSTEM_ROLES_DATA.map((role) => {
            const isPatient = role.role === "patient";
            const isStaff = role.role === "staff";
            
            // Custom card accents per role
            let borderAccent = "hover:border-[#0E7490]";
            let headerBg = "bg-cyan-50/50";
            let iconBoxBg = "bg-cyan-100 text-[#0E7490]";
            if (isStaff) {
              borderAccent = "hover:border-[#14B8A6]";
              headerBg = "bg-teal-50/50";
              iconBoxBg = "bg-teal-100 text-[#14B8A6]";
            } else if (!isPatient && !isStaff) {
              borderAccent = "hover:border-[#64748B]";
              headerBg = "bg-slate-50";
              iconBoxBg = "bg-slate-200 text-[#2D3748]";
            }

            return (
              <div
                key={role.role}
                className={`bg-[#FAF7F0]/40 rounded-2xl border border-[#E2E8F0] shadow-sm ${borderAccent} transition-all duration-300 flex flex-col justify-between overflow-hidden`}
              >
                <div>
                  {/* Card Header Banner */}
                  <div className={`p-6 border-b border-[#E2E8F0] ${headerBg} flex items-center gap-4`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBoxBg}`}>
                      <LucideIcon name={role.icon} size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1F2937] text-lg leading-tight">{role.title}</h3>
                      <p className="text-[10px] text-[#64748B] tracking-widest uppercase font-mono mt-0.5">Role Authorization</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-6">
                    <p className="text-sm text-[#1F2937] leading-relaxed mb-6 font-medium">
                      {role.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold text-[#1F2937] uppercase tracking-wider">配備的核心服務模組</h4>
                      <ul className="space-y-3">
                        {role.features.map((item, id) => (
                          <li key={id} className="flex items-start gap-2 text-sm text-[#64748B] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] mt-2 shrink-0 animate-pulse" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card footer simulated code segment */}
                <div className="p-4 bg-gray-50/50 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
                  <span className="font-mono">SYS_ROUTE_{role.role?.toUpperCase()}</span>
                  <span className="font-semibold text-[#0E7490]">
                    已串接模擬
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
