import { ShieldCheck, Eye, Sparkles, Sliders, CheckSquare, Stethoscope, Briefcase } from "lucide-react";

export function StaffAdminFlowSection() {
  const staffSteps = [
    { num: 1, text: "醫護人員登入 Medical Staff，進入專屬控制面板。" },
    { num: 2, text: "進入今日掛號與遠距診療控制台，即時拉取數據線。" },
    { num: 3, text: "查看今日掛號總量、待確認身分、候診中與已完成看板。" },
    { num: 4, text: "查看預約中的門診病人清單、序號與診程時段。" },
    { num: 5, text: "加載並查看遠距登記人所上傳的仿真健保卡影像。" },
    { num: 6, text: "細緻比對病人姓名、科別、醫師、預約時段與主要不適主訴。" },
    { num: 7, text: "一鍵核對、審查健保卡身分，將病歷核定更新為「已審核」。" },
    { num: 8, text: "更新病人看診狀態為「看診中」或「看診完成」，維持診療效率。" }
  ];

  const adminSteps = [
    { num: 1, text: "管理人員使用管理者密鑰登入 Admin 設定後台。" },
    { num: 2, text: "進入「智慧門診時段與排班管理」維度配置。" },
    { num: 3, text: "自訂新增或修改看診科別（編配科別代碼與特色描述）。" },
    { num: 4, text: "新增值班醫師，輸入醫師姓名、職稱與宣講主治專長。" },
    { num: 5, text: "指派值班醫師所屬的專有臨床科別，做好合診分配。" },
    { num: 6, text: "設定醫師本日「是否開放視訊掛號」按鈕開關。" },
    { num: 7, text: "一鍵存檔調配，遠距門診醫師班表自動同步更新至病人預約前台。" }
  ];

  const screenSpots = [
    {
      id: "spots-1",
      title: "醫護端今日掛號控制台",
      desc: "即時顯示本日排班醫師的看診統計計量與搜尋功能",
      preview: (
        <div className="w-full h-32 bg-white rounded-lg border border-[#E2E8F0] p-3 text-[7px] flex flex-col justify-between select-none">
          <div className="flex justify-between items-center bg-cyan-900 text-white p-1 rounded-sm">
            <span>今日掛號管理控制台</span>
            <span className="font-mono text-[5px]">STAFF_VIEW</span>
          </div>
          <div className="grid grid-cols-4 gap-1 text-center my-1.5">
            <div className="bg-cyan-50 p-1 rounded border border-cyan-100"><span className="block font-bold font-mono text-[#0E7490]">15</span><span>預約總數</span></div>
            <div className="bg-[#FAF7F0] p-1 rounded border border-neutral-100"><span className="block font-bold font-mono text-amber-600">3</span><span>身分待審</span></div>
            <div className="bg-teal-50 p-1 rounded border border-teal-100"><span className="block font-bold font-mono text-teal-600">5</span><span>今日候診</span></div>
            <div className="bg-emerald-50 p-1 rounded border border-emerald-100"><span className="block font-bold font-mono text-emerald-700">7</span><span>看診完成</span></div>
          </div>
          <div className="text-[6px] text-gray-400">目前看診：3 號 (張妤妮 / 家醫科)</div>
        </div>
      )
    },
    {
      id: "spots-2",
      title: "醫護端健保卡審查大卡",
      desc: "彈性大視窗放大核對病人上傳的健保卡IC卡照片與欄位比對",
      preview: (
        <div className="w-full h-32 bg-slate-50 rounded-lg border border-[#E2E8F0] p-3 text-[7px] flex flex-col justify-between select-none">
          <div className="font-bold text-gray-700 border-b pb-0.5 flex justify-between">
            <span>健保卡IC身分覆核器</span>
            <span className="text-emerald-600">✔ 照片已載入</span>
          </div>
          <div className="flex gap-2 my-1.5 h-14 items-center">
            {/* NHI card illustration */}
            <div className="w-16 h-10 bg-gradient-to-r from-emerald-100 to-teal-200 rounded-sm border border-emerald-300 p-0.5 flex flex-col justify-between text-emerald-800 text-[3px] shrink-0">
              <span className="font-bold">健保卡 NHI CARD</span>
              <div className="h-2 w-2 rounded-full bg-slate-200 border border-slate-300 self-end mr-1" />
              <span>陳妤妮 ｜ 0000 5231 1502</span>
            </div>
            
            {/* NHI fields */}
            <div className="space-y-0.5 leading-snug flex-1">
              <div className="flex justify-between"><span>比對姓名:</span><span className="font-semibold text-gray-800">陳妤妮</span></div>
              <div className="flex justify-between"><span>卡號覆查:</span><span className="font-semibold text-gray-800">802452311502</span></div>
              <div className="flex justify-between"><span>生日確認:</span><span className="font-semibold text-gray-800">92/05/20</span></div>
            </div>
          </div>
          <div className="bg-teal-600 text-white text-[6px] text-center p-0.5 rounded cursor-pointer hover:bg-teal-700 transition-colors">審查核定通過</div>
        </div>
      )
    },
    {
      id: "spots-3",
      title: "管理員端門診配置控制台",
      desc: "進行看診預約時段和門診看診天數、門檻人數權限調配",
      preview: (
        <div className="w-full h-32 bg-white rounded-lg border border-[#E2E8F0] p-3 text-[7px] flex flex-col justify-between select-none">
          <div className="font-bold text-[#0E7490] border-b pb-0.5 flex justify-between items-center">
            <span>門診資源排班管理</span>
            <span className="text-[6px] bg-[#FAF7F0] text-amber-800 px-1 rounded-full border border-amber-200">門診調度</span>
          </div>
          <div className="space-y-1 my-1">
            <div className="flex justify-between"><span>科別名稱：</span><span className="font-semibold text-gray-800">家醫科 (FAM_01_MED)</span></div>
            <div className="flex justify-between"><span>值班時段：</span><span className="text-gray-900">每週一、三、五 上午診</span></div>
            <div className="flex justify-between"><span>看診人數限額：</span><span className="font-semibold text-[#0E7490] font-mono">25 名 / 門診</span></div>
          </div>
          <div className="flex gap-1">
            <span className="bg-[#0E7490] text-white p-0.5 rounded flex-1 text-center scale-95">更新資訊</span>
            <span className="bg-rose-50 text-rose-800 border border-rose-200 p-0.5 rounded flex-1 text-center scale-95">停開視訊</span>
          </div>
        </div>
      )
    },
    {
      id: "spots-4",
      title: "醫師值班與科別管理畫面",
      desc: "在管理者界面上新增、指派並啟用值班醫師班表資訊",
      preview: (
        <div className="w-full h-32 bg-[#F8FAF9] rounded-lg border border-[#E2E8F0] p-3 text-[7px] flex flex-col justify-between select-none">
          <div className="font-bold text-gray-700 border-b pb-0.5">新增線上排班醫師</div>
          <div className="space-y-1 my-1 leading-snug">
            <div className="flex justify-between"><span>醫師姓名：</span><span className="font-bold text-gray-800 bg-white border border-gray-100 rounded px-1">張祐倉 醫師</span></div>
            <div className="flex justify-between"><span>掛載科別：</span><span className="font-bold text-[#0E7490] bg-cyan-50 border border-cyan-100 rounded px-1">心臟內科</span></div>
            <div className="flex justify-between"><span>主要資歷：</span><span className="text-[#64748B]">醫務管理系所專任講師 / 智慧健康教授</span></div>
          </div>
          <button className="w-full py-0.5 bg-[#14B8A6] hover:bg-teal-600 text-white rounded font-bold">送出並啟用医师出班</button>
        </div>
      )
    }
  ];

  return (
    <section id="backoffice" className="py-16 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#14B8A6] tracking-wider uppercase bg-teal-100/60 px-3 py-1 rounded-full">
            Backoffice Workflows
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight mt-3">
            後台管理流程：醫護審查與資源配置
          </h2>
          <div className="h-1 w-16 bg-[#14B8A6] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#64748B] text-sm leading-relaxed">
            此區塊介紹陽光平台的醫務管端後台（Medical Staff）與系統管端後台（Admin Console）的無阻礙運行模型。這套後台專為釋放診所醫護行政負荷、合理調配門診資源、快速進行健保影像確認與病人流程引導而生：
          </p>
        </div>

        {/* Dual Flow Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Medical Staff Flow */}
          <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#0E7490] flex items-center justify-center">
                <Stethoscope size={22} className="animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-[#1F2937] text-lg">醫護人員管理工作流</h3>
                <p className="text-xs text-[#64748B]">Medical Assistant Verification Flow (8 Steps)</p>
              </div>
            </div>

            <div className="space-y-4">
              {staffSteps.map((step) => (
                <div key={step.num} className="flex gap-3 hover:bg-[#FAF7F0]/30 p-2 rounded-lg transition-colors duration-150">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 text-[#0E7490] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {step.num}
                  </div>
                  <span className="text-sm text-[#64748B] leading-relaxed select-none">
                    {step.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Admin Flow */}
          <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] text-[#14B8A6] flex items-center justify-center">
                <Briefcase size={22} />
              </div>
              <div>
                <h3 className="font-bold text-[#1F2937] text-lg">管理者時段醫師配置流</h3>
                <p className="text-xs text-[#64748B]">Administrator Scheduling & Allocation (7 Steps)</p>
              </div>
            </div>

            <div className="space-y-4">
              {adminSteps.map((step) => (
                <div key={step.num} className="flex gap-3 hover:bg-[#FAF7F0]/30 p-2 rounded-lg transition-colors duration-150">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-[#14B8A6] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {step.num}
                  </div>
                  <span className="text-sm text-[#64748B] leading-relaxed select-none">
                    {step.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Screenshot Placeholders requested by user */}
        <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0]">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-[#1F2937] flex items-center justify-center gap-2">
              <Sparkles className="text-[#14B8A6]" size={18} />
              醫護端與管理員端後台控制台截圖預留區
            </h3>
            <p className="text-xs text-[#64748B] mt-1">
              「請保留圖片區，讓我放以下截圖。」此區塊已為您預留高擬真的系統UI展示大卡與排班畫面。您在演示時，直接點擊「圖片預留位」即可了解系統的操作回饋，更方便您隨時在期末簡報中替換！
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {screenSpots.map((spot) => (
              <div
                key={spot.id}
                className="bg-[#FAF7F0]/50 p-5 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
                    <span className="text-xs font-bold text-[#1F2937] truncate">{spot.title}</span>
                    <span className="text-[8px] bg-indigo-100 text-indigo-800 px-1 rounded-sm font-semibold">
                      後台截圖
                    </span>
                  </div>
                  
                  {/* High Quality UI Mockup placeholder */}
                  <div className="p-1 rounded-xl bg-white border border-[#E2E8F0] shadow-inner mb-4 flex items-center justify-center">
                    {spot.preview}
                  </div>

                  <p className="text-[11px] text-[#64748B] leading-relaxed">
                    {spot.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200/50 flex items-center justify-between text-[10px] text-[#64748B]">
                  <span className="font-mono text-[9px] uppercase">{spot.id}</span>
                  <span className="text-xs font-semibold text-[#0E7490] flex items-center gap-0.5">
                    <Eye size={12} />
                    圖片預留位
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
