import { TESTING_DATA } from "../types";
import { CheckCircle2, Video, HelpCircle, Image as ImageIcon } from "lucide-react";

export function TestingSection() {
  return (
    <section id="testing" className="py-16 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0E7490] tracking-wider uppercase bg-cyan-100/60 px-3 py-1 rounded-full">
            User Acceptance Testing
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight mt-3">
            實際上線與 5 位同學測試成果
          </h2>
          <div className="h-1 w-16 bg-[#0E7490] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#64748B] text-sm leading-relaxed">
            系統成功部署於 Netlify 雲端後，為求學術研究之客觀與健全，我特地邀請長榮大學醫管系同窗 5 位同學擔任測試志工（以 Patient 端身份登入）。五位同學皆順利走完病歷登記、IC 卡照片核銷與預約流程，且反饋體驗滿分。
          </p>
        </div>

        {/* Scalable Responsive Table */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden mb-12">
          <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
            <h3 className="font-bold text-sm text-[#1F2937] flex items-center gap-1.5">
              <CheckCircle2 className="text-[#14B8A6]" size={16} />
              5 位同學線上實測核對紀錄表 (UAT Testing Logs)
            </h3>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
              全數通過 100% SUCCESS
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FAF7F0] border-b border-[#E2E8F0] text-xs font-bold text-gray-700">
                  <th className="p-4">測試者 (Tester)</th>
                  <th className="p-4">測試角色 (Role)</th>
                  <th className="p-4">完成項目 (Flow Coverage)</th>
                  <th className="p-4 text-center">測試結果</th>
                  <th className="p-4">備註 (User Feedback)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm text-[#64748B]">
                {TESTING_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF7F0]/30 transition-colors">
                    <td className="p-4 font-bold text-[#1F2937]">{row.student}</td>
                    <td className="p-4 shrink-0 font-medium text-cyan-800">{row.role}</td>
                    <td className="p-4 font-sans text-xs max-w-xs">{row.items}</td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full font-bold text-[10px] border border-emerald-100 shadow-inner">
                        <CheckCircle2 size={10} />
                        {row.status}
                      </span>
                    </td>
                    <td className="p-4 text-xs italic">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* UAT Screenshots/Videos Placeholder Area */}
        <div className="p-6 bg-[#FAF7F0] rounded-2xl border border-[#E2E8F0]">
          <h3 className="font-bold text-sm text-[#1F2937] border-b border-gray-200/60 pb-3 mb-6 flex items-center gap-2">
            <ImageIcon className="text-[#0E7490]" size={18} />
            同學線上模擬測試截圖與錄影預留區
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Spot 1: Screenshot Placeholders */}
            <div className="bg-white p-5 rounded-2xl border border-neutral-200 flex flex-col justify-between h-48 hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">圖片與截圖區</span>
                <h4 className="font-bold text-sm text-[#1F2937] mt-2">同窗現場錄影與流程截圖</h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  本區塊專門為您保留，可點擊原始碼在 `TestingSection.tsx` 中置入實際跟同學的視訊考核合照、或者是系統上各端更新的名冊截圖。
                </p>
              </div>

              {/* Decorative dotted mockup box */}
              <div className="h-16 border border-dashed border-neutral-300 rounded-lg bg-gray-50 flex items-center justify-center text-xs text-neutral-400 gap-1 select-none">
                <ImageIcon size={14} />
                <span>[請在此處插入同學測試之畫面截圖]</span>
              </div>
            </div>

            {/* Spot 2: Link to Recording */}
            <div className="bg-white p-5 rounded-2xl border border-neutral-200 flex flex-col justify-between h-48 hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded">影音串聯與演示</span>
                <h4 className="font-bold text-sm text-[#1F2937] mt-2">測試影片錄製或會議連結</h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  本區塊用以關聯您在課堂上面對面測試時的語音、或者是 NotebookLM 形成的互動播報錄音庫。
                </p>
              </div>

              {/* Action */}
              <a
                href="https://www.youtube.com/watch?v=HyU1t5ZaEkc"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <Video size={14} />
                點擊前往 YouTube 查看系統演示錄影
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
