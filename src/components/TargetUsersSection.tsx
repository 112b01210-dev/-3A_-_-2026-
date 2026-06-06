import { TARGET_USERS_DATA } from "../types";
import { LucideIcon } from "./LucideIcon";
import { AlertCircle } from "lucide-react";

export function TargetUsersSection() {
  return (
    <section id="users" className="py-16 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#14B8A6] tracking-wider uppercase bg-teal-100/60 px-3 py-1 rounded-full">
            Target Audiences
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight mt-3">
            應用對象：打造無邊界的醫療可近性
          </h2>
          <div className="h-1 w-16 bg-[#14B8A6] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#64748B] text-sm leading-relaxed">
            陽光遠距掛號與診療系統的誕生不只限於單一角色。本成果具有極高之醫療普惠特性，旨在協助所有阻於地理、心理或生理不便之多元照護群體：
          </p>
        </div>

        {/* 6 Target Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TARGET_USERS_DATA.map((user, index) => (
            <div
              key={index}
              className="bg-[#FAF7F0]/40 rounded-2xl border border-[#E2E8F0] p-6 hover:shadow-md hover:border-[#14B8A6] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#14B8A6] flex items-center justify-center shrink-0">
                    <LucideIcon name={user.icon} size={20} />
                  </div>
                  <h3 className="font-extrabold text-[#1F2937] text-base leading-tight">
                    {user.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {user.description}
                </p>
              </div>

              {/* simulated marker */}
              <div className="mt-6 pt-2 border-t border-gray-200/40 text-[9px] text-[#64748B] uppercase font-mono tracking-widest text-right">
                USER_SEGMENT_{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Quote */}
        <div className="mt-12 p-5 rounded-2xl bg-[#0E7490]/10 border border-cyan-200 text-[#0E7490] max-w-4xl mx-auto flex gap-3 text-xs sm:text-sm">
          <AlertCircle size={20} className="shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-bold">臨床醫管評析：</span>
            本學術系統在「應用對象」的分群設定上，高度對標衛福部所發布的《通訊診療辦法》修正案精神（納入慢性病長期追蹤者、安養中心住民、身心障礙或出院照護對象等）。證明系統在科系學習與政策脈絡上，具有實務上切合規律之實用價值！
          </p>
        </div>
      </div>
    </section>
  );
}
