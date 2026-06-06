import { useState } from "react";
import { motion } from "motion/react";
import { 
  HeartPulse, 
  User, 
  FolderGit, 
  ArrowUpRight, 
  Award, 
  ExternalLink, 
  Play, 
  Globe, 
  FileText, 
  CheckCircle, 
  Calendar, 
  Cpu, 
  Building2, 
  ShieldCheck, 
  BadgeCheck, 
  Layers
} from "lucide-react";
import { 
  PART_A_DATA, 
  PART_B_DATA, 
  TIMELINE_DATA, 
  TESTING_DATA, 
  PRICING_PLANS 
} from "../types";

export function DashboardHub({ onNavigate }: { onNavigate?: (id: string) => void }) {
  const [activePlan, setActivePlan] = useState(1); // Standard as default

  const scrollToSection = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // offset for navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const targetSegments = [
    { label: "基層門診", id: "target-users" },
    { label: "慢病病患", id: "target-users" },
    { label: "居家高齡", id: "target-users" },
    { label: "偏鄉居民", id: "target-users" },
    { label: "行動不便", id: "target-users" },
    { label: "長照機構", id: "target-users" }
  ];

  return (
    <section id="dashboard" className="py-8 bg-[#FAF7F0] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hub Title Banner */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
          <div className="space-y-1">
            <span className="text-[10px] bg-cyan-50 text-[#0E7490] border border-cyan-100 font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Integrated Console Dashboard
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[#1F2937] tracking-tight">
              智慧遠距成果總覽儀表板 <span className="text-sm font-normal text-[#64748B]">© 2026 醫務管理成果一站集成</span>
            </h2>
          </div>
          <div className="flex gap-2 shrink-0">
            <button 
              onClick={() => scrollToSection("partb")}
              className="px-3.5 py-1.5 text-xs font-semibold bg-[#0E7490] hover:bg-cyan-800 text-white rounded-lg shadow-sm transition-all flex items-center gap-1"
            >
              <Cpu size={14} />
              立即操作系統
            </button>
            <button 
              onClick={() => scrollToSection("flow")}
              className="px-3.5 py-1.5 text-xs font-semibold bg-white border border-[#E2E8F0] text-[#1F2937] hover:bg-neutral-50 rounded-lg transition-colors flex items-center gap-1"
            >
              <Layers size={14} />
              查看操作流
            </button>
          </div>
        </div>

        {/* 12-Column Main Responsive Grid Layout from Design Pattern */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT COLUMN: col-span-3 (Project Info & Profile & Segments) */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Project Info & Profile Block */}
            <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div className="border-b border-[#E2E8F0] pb-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 bg-gradient-to-br from-[#0E7490] to-[#14B8A6] rounded-md flex items-center justify-center text-white font-bold text-xs">專</div>
                  <span className="font-bold text-[#0E7490] text-sm font-display leading-tight">遠距醫療期末專題</span>
                </div>
                <h3 className="text-base font-bold text-[#1F2937] leading-snug">
                  遠距醫療與健康管理期末成果整合網站
                </h3>
              </div>

              <div className="space-y-3 text-xs mb-4">
                <div className="flex justify-between items-center py-1 border-b border-gray-50">
                  <span className="text-[#64748B]">學生姓名</span>
                  <span className="font-semibold text-[#1F2937] flex items-center gap-1">
                    <User size={12} className="text-[#0E7490]" />
                    陳妤妮 同學
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-50">
                  <span className="text-[#64748B]">課程師長</span>
                  <span className="font-semibold text-[#1F2937] flex items-center gap-1">
                    <Award size={12} className="text-[#14B8A6]" />
                    張祐倉 老師
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-50">
                  <span className="text-[#64748B]">所屬大學</span>
                  <span className="font-semibold text-[#1F2937] truncate max-w-[130px]">長榮大學</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-50">
                  <span className="text-[#64748B]">醫管理系所</span>
                  <span className="font-semibold text-[#1F2937]">醫務管理學系</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#64748B]">當前修業</span>
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">
                    2026年度期末成果
                  </span>
                </div>
              </div>

              <div className="bg-[#FAF7F0] p-3 rounded-xl border border-neutral-100 text-[11px] text-[#64748B] leading-relaxed">
                <span className="font-bold text-[#0E7490] block mb-0.5">專案目的</span>
                本網站是期末專題成果一站式整合平台，為老師提供完整的理論報告、系統模擬、簡報、影片和同學測試紀錄。
              </div>
            </div>

            {/* Target Segments Block */}
            <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <div className="flex items-center justify-between border-b pb-3 mb-4">
                <h4 className="text-sm font-bold text-[#1F2937]">應用對象</h4>
                <span className="text-[10px] text-[#64748B]">可向下滑移</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center">
                {targetSegments.map((seg, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToSection(seg.id)}
                    className="p-1.5 text-[11px] font-medium bg-[#FAF7F0] hover:bg-cyan-50 border border-neutral-200 hover:border-cyan-200 text-slate-700 hover:text-[#0E7490] rounded-lg transition-all focus:outline-none cursor-pointer"
                  >
                    {seg.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Core Value Quick Highlight Card */}
            <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3.5">
              <h4 className="text-sm font-bold text-[#1F2937]">系統三大價值特質</h4>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0E7490] mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-xs text-[#1F2937] block">提高就醫可近性</span>
                    <p className="text-[10px] text-[#64748B]">徹底排除偏鄉高齡出門障礙。</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#14B8A6] mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-xs text-[#1F2937] block">減累因應家庭支持</span>
                    <p className="text-[10px] text-[#64748B]">大幅解碼家屬與機構看病等待。</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-xs text-[#1F2937] block">院端排程同步減壓</span>
                    <p className="text-[10px] text-[#64748B]">實踐健康台灣政策之永續指標。</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CENTER COLUMN: col-span-6 (Part A & Part B Achievements & Timeline Summary) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Part A & Part B Mini comparison boxes side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Part A Theory Core */}
              <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-[9px] bg-cyan-100 text-[#0E7490] px-2 py-0.5 rounded font-mono font-bold uppercase">
                      PART A理論
                    </span>
                    <FileText size={16} className="text-[#0E7490]" />
                  </div>
                  <h4 className="font-bold text-sm text-[#1F2937]">理論基地與國家政策</h4>
                  <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                    探討智慧長照、健康台灣願景、長照 3.0 的科技精準賦能藍圖。
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                  <button 
                    onClick={() => scrollToSection("parta")}
                    className="text-[11px] font-bold text-[#0E7490] hover:text-[#14B8A6] flex items-center gap-0.5 transition-colors"
                  >
                    讀取 PartA 詳細
                    <ArrowUpRight size={12} />
                  </button>
                  <a 
                    href="https://home-health-stream.lovable.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[11px] font-medium text-slate-500 hover:text-[#0E7490] flex items-center gap-0.5"
                  >
                    宣導站
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>

              {/* Part B System Core */}
              <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-[9px] bg-teal-100 text-[#14B8A6] px-2 py-0.5 rounded font-mono font-bold uppercase">
                      PART B實作
                    </span>
                    <Globe size={16} className="text-[#14B8A6]" />
                  </div>
                  <h4 className="font-bold text-sm text-[#1F2937]">陽光遠距實作系統</h4>
                  <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                    自主編程實作病人、醫護、管理者三端線上模擬與健保IC卡核對系統。
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                  <button 
                    onClick={() => scrollToSection("partb")}
                    className="text-[11px] font-bold text-[#14B8A6] hover:text-teal-600 flex items-center gap-0.5 transition-colors"
                  >
                    讀取 PartB 詳細
                    <ArrowUpRight size={12} />
                  </button>
                  <a 
                    href="https://legendary-tiramisu-1064a4.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[11px] font-medium text-slate-500 hover:text-[#14B8A6] flex items-center gap-0.5"
                  >
                    實作站
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>

            </div>

            {/* Continuous Development Timeline Roadmap Component */}
            <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <div className="flex items-center justify-between border-b pb-3 mb-4">
                <span className="font-bold text-sm text-[#1F2937] flex items-center gap-1.5">
                  <Calendar size={16} className="text-[#0E7490]" />
                  專題核心開發時程及階段性里程碑
                </span>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono font-bold">
                  Roadmap V1
                </span>
              </div>

              {/* Horizontal / Compact Timeline Node Blocks */}
              <div className="grid grid-cols-5 gap-1.5 relative py-2">
                {TIMELINE_DATA.map((node) => (
                  <div key={node.step} className="group relative">
                    {/* Node Circle */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-6 h-6 rounded-full bg-cyan-50 group-hover:bg-cyan-100 border border-cyan-200 text-[#0E7490] text-[10px] font-mono font-bold flex items-center justify-center transition-colors mb-1 shadow-sm">
                        {node.step}
                      </div>
                      <span className="text-[9px] font-bold text-[#1F2937] truncate max-w-full block">
                        {node.title}
                      </span>
                      <p className="text-[8px] text-[#64748B] line-clamp-1 mt-0.5 hidden xs:block">
                        {node.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive buttons to jump to simulation roles */}
              <div className="mt-5 p-3.5 bg-[#FAF7F0] rounded-xl border border-neutral-100 flex flex-col xs:flex-row justify-between items-center gap-3">
                <span className="text-[11px] font-bold text-[#1F2937] shrink-0">
                  ⚡ 快速定位三大模擬入口：
                </span>
                
                <div className="flex flex-wrap gap-1.5 w-full xs:w-auto justify-end">
                  <button 
                    onClick={() => scrollToSection("flow")} 
                    className="flex-1 xs:flex-none px-2.5 py-1 text-[10px] bg-white hover:bg-neutral-50 text-[#1F2937] border border-[#E2E8F0] hover:border-neutral-300 rounded font-semibold transition-all shadow-2xs"
                  >
                    1. 病人預約流程
                  </button>
                  <button 
                    onClick={() => scrollToSection("backoffice")}
                    className="flex-1 xs:flex-none px-2.5 py-1 text-[10px] bg-white hover:bg-neutral-50 text-[#1F2937] border border-[#E2E8F0] hover:border-neutral-300 rounded font-semibold transition-all shadow-2xs"
                  >
                    2. 醫護審查系統
                  </button>
                  <button 
                    onClick={() => scrollToSection("backoffice")}
                    className="flex-1 xs:flex-none px-2.5 py-1 text-[10px] bg-white hover:bg-neutral-50 text-[#1F2937] border border-[#E2E8F0] hover:border-neutral-300 rounded font-semibold transition-all shadow-2xs"
                  >
                    3. 管理排班設定
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Benefits Metrics Stats Panel */}
            <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <h4 className="text-sm font-bold text-[#1F2937] border-b pb-2.5 mb-3.5">
                系統實際上線成果數據評估 (SaaS Benefits)
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-cyan-50/50 rounded-xl border border-cyan-100/50">
                  <span className="text-[10px] text-[#64748B] block">偏鄉就醫等待時間</span>
                  <span className="text-md sm:text-lg font-mono font-bold text-[#0E7490] block mt-0.5">- 85%</span>
                  <span className="text-[8px] text-teal-700 font-semibold mt-0.5 block bg-teal-50 rounded">顯著提效</span>
                </div>
                <div className="p-3 bg-teal-50/50 rounded-xl border border-teal-100/50">
                  <span className="text-[10px] text-[#64748B] block">行政病歷資料歸檔</span>
                  <span className="text-md sm:text-lg font-mono font-bold text-[#14B8A6] block mt-0.5">1鍵核對</span>
                  <span className="text-[8px] text-teal-700 font-semibold mt-0.5 block bg-teal-50 rounded">無紙運營</span>
                </div>
                <div className="p-3 bg-emerald-50/40 rounded-xl border border-emerald-100/40">
                  <span className="text-[10px] text-[#64748B] block">同學實際測試通過</span>
                  <span className="text-md sm:text-lg font-mono font-bold text-emerald-800 block mt-0.5">100%</span>
                  <span className="text-[8px] text-emerald-700 font-semibold mt-0.5 block bg-emerald-50 rounded">驗證無感</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: col-span-3 (Presentations, Testing Table, Pricing Plan Slider) */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Academic Presentation Downloads & Links */}
            <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <div className="border-b pb-2.5 mb-3">
                <h4 className="text-sm font-bold text-[#1F2937]">期末簡報成果下載</h4>
              </div>
              <div className="space-y-3">
                <div className="p-2.5 bg-neutral-50 hover:bg-[#FAF7F0] rounded-xl border border-[#E2E8F0] transition-colors">
                  <span className="text-[9px] text-[#0E7490] font-mono block">PART A PRESENTATION</span>
                  <span className="text-[11px] font-bold text-[#1F2937] block mt-0.5">遠距醫療與智慧長照 簡報</span>
                  <a 
                    href="https://drive.google.com/file/d/1FvuuXFSjeD6E2V0bEzJKwW4iyvAnM1GE/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-block text-[9px] bg-[#0E7490] text-white px-2.5 py-1 rounded shadow-2xs font-bold hover:bg-cyan-800 transition-colors text-center cursor-pointer"
                  >
                    下載 PartA PDF
                  </a>
                </div>
                <div className="p-2.5 bg-neutral-50 hover:bg-[#FAF7F0] rounded-xl border border-[#E2E8F0] transition-colors">
                  <span className="text-[9px] text-[#14B8A6] font-mono block">PART B PRESENTATION</span>
                  <span className="text-[11px] font-bold text-[#1F2937] block mt-0.5">陽光遠距醫療系統 簡報</span>
                  <a 
                    href="https://drive.google.com/file/d/1_Tl3KDdLcIGFwj7b40MC1dfcUs3pS4Fn/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-block text-[9px] bg-[#14B8A6] text-white px-2.5 py-1 rounded shadow-2xs font-bold hover:bg-teal-600 transition-colors text-center cursor-pointer"
                  >
                    下載 PartB PDF
                  </a>
                </div>
              </div>
            </div>

            {/* Classmate Testing Table Overview */}
            <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
              <div className="flex items-center justify-between border-b pb-2.5 mb-3">
                <h4 className="text-sm font-bold text-[#1F2937]">5位同學測試紀錄</h4>
                <button 
                  onClick={() => scrollToSection("testing")}
                  className="text-[9px] text-[#0E7490] hover:underline cursor-pointer"
                >
                  細節
                </button>
              </div>

              <div className="space-y-2 text-[10px]">
                {TESTING_DATA.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-1 border-b border-gray-50">
                    <span className="font-semibold text-[#1F2937]">{item.student}</span>
                    <span className="text-[#64748B] max-w-[90px] truncate">{item.role}</span>
                    <span className="bg-emerald-50 text-emerald-800 px-1 rounded-[3px] text-[8px] font-bold">
                      {item.status}
                    </span>
                  </div>
                ))}
                <p className="text-[8px] text-center text-[#64748B] mt-1 italic">
                  全數同學皆成功通過陽光平台三端掛號流
                </p>
              </div>
            </div>

            {/* Pricing Model Preview Drawer / Box */}
            <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-3.5">
              <div className="flex justify-between items-center border-b pb-2.5">
                <h4 className="text-sm font-bold text-[#1F2937]">商業收費方案模式</h4>
                <button 
                  onClick={() => scrollToSection("pricing")}
                  className="text-[9px] text-[#0E7490] hover:underline"
                >
                  全文
                </button>
              </div>

              {/* Slider Toggles */}
              <div className="flex justify-between bg-gray-50 p-1 rounded-lg border border-neutral-200">
                {PRICING_PLANS.map((plan, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePlan(i)}
                    className={`flex-1 py-1 text-[9px] font-bold rounded transition-all cursor-pointer ${
                      activePlan === i 
                        ? "bg-[#0E7490] text-white shadow-2xs" 
                        : "text-[#64748B] hover:text-[#1F2937]"
                    }`}
                  >
                    {plan.title.split(" ")[0]}
                  </button>
                ))}
              </div>

              {/* Selected Plan Stats Card */}
              <div className="p-3 rounded-xl bg-[#FAF7F0] border border-neutral-200 select-none">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold text-[#1F2937]">{PRICING_PLANS[activePlan].title}</span>
                  {PRICING_PLANS[activePlan].badge && (
                    <span className="bg-amber-100 text-amber-800 text-[8px] px-1 rounded font-bold">
                      {PRICING_PLANS[activePlan].badge}
                    </span>
                  )}
                </div>
                <div className="text-sm font-mono font-bold text-[#0E7490] mb-1.5">
                  {PRICING_PLANS[activePlan].price}
                </div>
                <p className="text-[9px] text-[#64748B] line-clamp-2 leading-relaxed">
                  {PRICING_PLANS[activePlan].target}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
