import { Youtube, Globe, GraduationCap, ChevronUp } from "lucide-react";

export function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#1F2937] text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-800 pb-10">
          
          {/* Col 1: Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="text-[#14B8A6]" size={24} />
              <span className="font-display font-bold text-lg text-white">2026 學期專題成果</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              遠距醫療與健康管理期末專題。由長榮大學醫事管理學系陳妤妮同學製作，指導老師為張祐倉老師。本站整合理論與實作，構建三端完整遠距健康解決方案原型。
            </p>
          </div>

          {/* Col 2: Pillar index */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">PartA 理論研究成果</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>• 全國通訊診療最新法制發展</li>
              <li>• 智慧長照 3.0 自主賦能研擬</li>
              <li>• 健康台灣自預防至照護連續防線</li>
              <li>• NotebookLM 理論剖析短片與主題站</li>
            </ul>
          </div>

          {/* Col 3: Practical index */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">PartB 系統實作專案</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>• 陽光遠距醫療系統 Sunshine Portal</li>
              <li>• 健保 IC 卡相片多欄位建檔核對</li>
              <li>• 管理層醫師看診天數視訊控制</li>
              <li>• 5 位同窗在線測試 100% 流程審查</li>
            </ul>
          </div>

          {/* Col 4: Quick Deliverable Links requested */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">成果對外追蹤連結</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a
                  href="https://www.youtube.com/watch?v=Mq-EZFSSAVw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#14B8A6] transition-colors"
                >
                  <Youtube size={14} className="text-red-500" />
                  PartA YouTube 影片
                </a>
              </li>
              <li>
                <a
                  href="https://home-health-stream.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#14B8A6] transition-colors"
                >
                  <Globe size={14} className="text-cyan-400" />
                  PartA 宣導成果網站
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=HyU1t5ZaEkc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#14B8A6] transition-colors"
                >
                  <Youtube size={14} className="text-red-500" />
                  PartB YouTube 影片
                </a>
              </li>
              <li>
                <a
                  href="https://legendary-tiramisu-1064a4.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#14B8A6] transition-colors"
                >
                  <Globe size={14} className="text-emerald-400" />
                  PartB 陽光遠距醫療系統
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div className="text-center sm:text-left space-y-1">
            <p>© 2026 遠距醫療與健康管理期末專案成果網. All rights reserved.</p>
            <p>長榮大學醫務管理學系 ｜ 指導老師：張祐倉 ｜ 學生：陳妤妮 ｜ 醫管學術發表專利儲備碼</p>
          </div>
          
          <button
            onClick={scrollUp}
            className="p-2.5 rounded-full bg-gray-800 hover:bg-gray-700 text-[#14B8A6] transition-colors cursor-pointer flex items-center justify-center shadow"
            aria-label="Scroll back to top"
          >
            <ChevronUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
