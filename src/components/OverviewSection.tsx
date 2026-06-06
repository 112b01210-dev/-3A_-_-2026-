import { ArrowRight, BookOpen, Command, Sparkles, Network } from "lucide-react";

export function OverviewSection() {
  const partAFeatures = [
    "解析高齡社會與慢性病患醫療照護痛點",
    "探討未來長照 3.0 的科技精準賦能藍圖",
    "詮釋「健康台灣」之預防與多維度無阻礙照護連結",
    "梳理通訊診療法規與新常態診療適用場景"
  ];

  const partBFeatures = [
    "病人端：模擬健保卡建檔、核驗與線上掛號排程",
    "醫護端：今日預約控制台、病歷資料與進度調配",
    "管理員：多學群醫師值班、看診科別彈性開關調度",
    "Netlify 雲端發布、5 位同窗實際在線實存測試與 SaaS 定價"
  ];

  return (
    <section id="overview" className="bg-white py-16 border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight">
            專題總覽：從理論到實作的遠距醫療學習成果
          </h2>
          <div className="h-1 w-20 bg-[#0E7490] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#64748B] text-base leading-relaxed">
            本期末專題以「遠距醫療與健康管理」為核心主題，由學導與研究出發（PartA），再行轉化為線上系統模擬（PartB）。將課堂上的體制探索，轉化為直覺、可運營操作的便老智慧診療架構。
          </p>
        </div>

        {/* Dynamic Comparison Column */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Part A Column */}
          <div className="bg-[#FAF7F0] p-8 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between hover:border-[#0E7490] transition-colors duration-300">
            <div>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-cyan-100/50 flex items-center justify-center text-[#0E7490]">
                  <BookOpen size={20} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-[#1F2937]">PartA：政策研究與理論支柱</h3>
                  <p className="text-xs text-[#64748B]">Theoretical Foundations & Health Visions</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#1F2937] leading-relaxed">
                探討我國當前遠距醫療與通訊診療體系發展。針對高齡人口結構激增、慢性病盛行率、照顧者老化支持進行系統性剖析，融合長照 3.0 與健康台灣，確立居家看診之必然性。
              </p>

              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-bold text-[#0E7490] uppercase tracking-wider">重點覆蓋範疇</h4>
                <ul className="space-y-2.5">
                  {partAFeatures.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#64748B]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E7490]" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200/50 flex justify-between items-center text-xs text-[#64748B]">
              <span>輸出形式：宣導網頁、導覽簡報、短影音</span>
              <span className="flex items-center gap-1 font-semibold text-[#0E7490]">
                完整理解 <ArrowRight size={14} />
              </span>
            </div>
          </div>

          {/* Part B Column */}
          <div className="bg-[#FAF7F0] p-8 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between hover:border-[#14B8A6] transition-colors duration-300">
            <div>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-teal-100/50 flex items-center justify-center text-[#14B8A6]">
                  <Command size={20} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-[#1F2937]">PartB：實作系統與商業模型</h3>
                  <p className="text-xs text-[#64748B]">Sunshine Telehealth System Implementation</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#1F2937] leading-relaxed">
                將理論化為程式邏輯。實作出「陽光遠距醫療系統」，模擬真正的註冊相機上傳檢核健保卡實況口、多科別與值班醫師自訂、視訊掛號狀態管制，並設計完整的 SaaS 商業收費與機構推行模型。
              </p>

              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-bold text-[#14B8A6] uppercase tracking-wider">實體技術架構</h4>
                <ul className="space-y-2.5">
                  {partBFeatures.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#64748B]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200/50 flex justify-between items-center text-xs text-[#64748B]">
              <span>輸出形式：實體網頁系統、流程截圖、測試數據</span>
              <span className="flex items-center gap-1 font-semibold text-[#14B8A6]">
                在線體驗 <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>

        {/* Visual Connectivity Bridge */}
        <div className="mt-10 p-5 rounded-xl bg-cyan-50/60 border border-cyan-100 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <div className="p-2 bg-white rounded-lg border border-cyan-100 text-[#0E7490] shrink-0">
            <Network size={20} />
          </div>
          <div className="text-xs sm:text-sm text-cyan-950">
            <span className="font-bold">整合亮點：</span>
            本網站最核心的設計理念，在於打破理論報告常與實務脫節的限制。讓使用者先透析政策痛點與連續性看診模式，隨即點擊「陽光遠距醫療系統」親身體驗實務如何落地，是全方位的期末精準展示成果！
          </div>
        </div>
      </div>
    </section>
  );
}
