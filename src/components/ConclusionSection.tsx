import { BookOpenCheck, Medal, Sparkles } from "lucide-react";

export function ConclusionSection() {
  return (
    <section id="conclusion" className="py-16 bg-[#FAF7F0] border-t border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100/60 text-[#0E7490] text-xs font-bold border border-cyan-200">
            <Medal size={14} />
            <span>2026 學術專題完滿落幕</span>
          </div>
        </div>

        {/* Section Card */}
        <div className="bg-white rounded-3xl border border-[#E2E8F0] p-8 sm:p-12 shadow-md relative overflow-hidden">
          {/* subtle decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-100/40 to-transparent rounded-bl-full pointer-events-none" />

          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] text-center border-b border-gray-100 pb-5 mb-8">
            結論：從理論學習到系統實作的完整成果
          </h2>

          <div className="space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
            <p>
              本期末成果總彙整，完成了「遠距醫療與健康管理」的理論與系統實作跨界整合。<span className="font-bold text-[#0E7490]">PartA</span> 透過遠距醫療、智慧長照與健康台灣願景研析，說明台灣在高齡化、慢性病照護與長照需求激增局勢下，發展遠距醫療與智慧照護的歷史必然性。
            </p>
            <p>
              而 <span className="font-bold text-[#14B8A6]">PartB</span> 則實際落地開發了「陽光遠距醫療系統」，完整展現病人端健保卡建檔、遠距掛號與排序即時查詢；醫護端今日掛號數統計與健保實體卡照片審核；以及管理員端自訂科別名稱與分配排班醫師醫師等智慧化模組。
            </p>
            <p>
              本大成成果網站，同步整合了兩份長篇報告簡報、兩支長達數分鐘的 YouTube 操作旁白與演示影片、兩個對外運行的 Loveable、Netlify 二大入口成果系統。完整呈現了一名醫務管理學系學生，從最基礎的文獻探析、NotebookLM 協作，直到網頁前端建置並在 Netlify 部署的厚實學習歷程。
            </p>
            <p className="border-t border-gray-100 pt-6 italic text-[#64748B] text-xs sm:text-sm">
              「長榮大學醫事管理學系，始終致力於培育兼具醫療科技素養與關懷溫度的專業醫管人才。未來，陽光醫療系統若能深度串聯醫療 HIS 電子病歷、行動支付、虛擬健保卡認證，必能為健康台灣的願景投下最有力、更有溫度的拼圖！」
            </p>
          </div>

          {/* Academic Profile Sign-off */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs text-[#64748B] gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6]" />
              <span>論文指導教授：張祐倉 博士 ｜ 研究作者：學生 陳妤妮</span>
            </div>
            
            <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200 uppercase">
              UAT_APPROVED_2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
