import { PRICING_PLANS } from "../types";
import { Check, HelpCircle } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#14B8A6] tracking-wider uppercase bg-teal-100/60 px-3 py-1 rounded-full">
            Commercial Model
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight mt-3">
            商業模式：彈性的 SaaS 雲端訂閱計費
          </h2>
          <div className="h-1 w-16 bg-[#14B8A6] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#64748B] text-sm leading-relaxed">
            為建立健全自持的智慧醫療服務，系統設計出高彈度、依用量及端點層級計價的 SaaS (Software-as-a-Service) 訂閱體系。免除實體機房租賃與傳統大型HIS系統繁贅開發，極速即插即用：
          </p>
        </div>

        {/* 3 Price Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => {
            const isPopular = plan.badge !== undefined;
            return (
              <div
                key={index}
                className={`rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between relative ${
                  isPopular
                    ? "bg-gradient-to-b from-[#FAF7F0] to-white border-[#0E7490] hover:shadow-xl scale-100 lg:scale-105 z-10"
                    : "bg-white border-[#E2E8F0] hover:shadow-md hover:border-teal-100"
                }`}
              >
                {/* Popular recommendation ribbon */}
                {isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0E7490] text-[#FFFFFF] rounded-full text-xs font-bold shadow animate-bounce">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <div className="space-y-1 mb-6">
                    <h3 className="font-extrabold text-[#1F2937] text-xl">{plan.title}</h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed">{plan.target}</p>
                  </div>

                  {/* Price */}
                  <div className="py-5 border-y border-neutral-100 mb-6 bg-gray-50/50 rounded-xl px-4 text-center">
                    <span className="text-2xl font-black text-[#0E7490] font-mono">{plan.price}</span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">方案包含權能與服務：</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feat, key) => (
                        <li key={key} className="flex gap-2.5 text-xs sm:text-sm text-[#64748B] leading-relaxed items-start">
                          <span className="w-4 h-4 rounded-full bg-teal-50 border border-teal-200 text-[#14B8A6] flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={10} strokeWidth={3} />
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100">
                  <button className={`w-full py-2.5 rounded-xl text-xs font-bold shadow-sm hover:shadow transition-all ${
                    isPopular 
                      ? "bg-[#0E7490] hover:bg-cyan-800 text-white" 
                      : "bg-[#FAF7F0] border border-gray-300 hover:bg-[#FAF7F0]/80 text-[#1F2937]"
                  }`}>
                    試用此方案諮詢
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add-on Pricing Column & Patient policy info */}
        <div className="mt-16 bg-[#FAF7F0]/60 border border-[#E2E8F0] rounded-3xl p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column: Hospital Add-ons */}
            <div>
              <h3 className="font-extrabold text-[#1F2937] text-base border-b border-gray-200/80 pb-3 mb-4 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0E7490]" />
                院所專屬加值或一次性建置費用：
              </h3>
              
              <ul className="space-y-3 text-xs sm:text-sm text-[#64748B]">
                <li className="flex items-start gap-2">
                  <span className="text-[#0E7490] font-bold shrink-0">■</span>
                  <p>
                    <span className="font-bold text-gray-800">變動交易用量：</span>
                    除固定月費外，每人次完成視訊掛號可加收 <span className="font-bold text-[#0E7490]">20～50 元</span> 雲端系統流量維護費。
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0E7490] font-bold shrink-0">■</span>
                  <p>
                    <span className="font-bold text-gray-800">一次性導入建置費：</span>
                    約 <span className="font-bold text-[#0E7490]">30,000～100,000 元</span>。建置內容核心包含：院所專有 Logo 圖示設定、宣傳主基調色彩、科別與排班醫師名冊手動雲端導入、院內醫護操作現場教育培訓、與首期上網測試防護核校。
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Column: Patient-side Policy */}
            <div>
              <h3 className="font-extrabold text-[#1F2937] text-base border-b border-gray-200/80 pb-3 mb-4 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6]" />
                病人端 (Patient) 使用政策規範：
              </h3>
              
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                病人端操作陽光遠距系統進行健保IC卡上傳核驗、隨時查詢預約排序等基本功能其為<span className="font-bold text-[#14B8A6] bg-teal-50 px-1 rounded">完全免費</span>。
                看診費用則依照合約醫療診所之公告正式「實體掛號費」與「衛福部通訊診療健保给付法規」進行院所線下支付或電子繳款。
              </p>

              <div className="mt-4 p-3 bg-white rounded-lg border border-[#E2E8F0] flex gap-2 text-xs text-amber-800">
                <HelpCircle size={14} className="shrink-0 mt-0.5" />
                <span>註：模擬掛號流程不產生任何真實健保或金融扣卡交易費用，指導老師可放心實機測試。</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
