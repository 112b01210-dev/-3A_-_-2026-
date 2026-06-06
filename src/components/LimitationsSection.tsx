import { LIMITATIONS_DATA } from "../types";
import { AlertCircle, ShieldAlert, Sparkles } from "lucide-react";

export function LimitationsSection() {
  return (
    <section id="limitations" className="py-16 bg-[#FAF7F0] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-700 tracking-wider uppercase bg-amber-100 px-3 py-1 rounded-full flex items-center justify-center gap-1.5 w-fit mx-auto">
            <ShieldAlert size={14} />
            Academic Sandbox Disclaimers
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight mt-3">
            系統限制與注意事項
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#64748B] text-sm leading-relaxed">
            本學術實作專案致力於完美表達「通訊掛號」與「智慧健保身分建檔」之端到端流程，但為確保資訊使用自主與隱私健全，以下列出本成果的原型運作限制與考評說明：
          </p>
        </div>

        {/* 8 Disclaimers Grid layout */}
        <div className="bg-white rounded-3xl border border-amber-200/60 p-6 sm:p-8 shadow-sm max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LIMITATIONS_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-amber-50/20 p-4 rounded-xl border border-amber-100 flex gap-3.5 hover:bg-amber-50/50 transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold font-mono text-xs shrink-0 mt-0.5">
                  {item.id}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Academic Signature */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
            <span className="font-semibold flex items-center gap-1">
              <AlertCircle size={14} className="text-amber-500" />
              長榮大學醫事管理學系｜陳妤妮期末彙報
            </span>
            <span className="font-mono text-amber-700 bg-amber-100/50 px-2 py-0.5 rounded border border-amber-200">
              PROTOTYPE_LIMIT_INFO
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
