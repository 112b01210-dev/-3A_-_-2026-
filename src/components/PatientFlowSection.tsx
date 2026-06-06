import { PATIENT_FLOW_DATA } from "../types";
import { Sparkles, Calendar, ClipboardList, Eye, CheckCircle2, ShieldCheck, ChevronRight } from "lucide-react";

export function PatientFlowSection() {
  const screenshots = [
    {
      id: "screen-1",
      title: "系統登入首頁",
      desc: "病人端、醫護端及管理端一秒登入與切換面板",
      previewText: "Sunshine Portal",
      element: (
        <div className="w-full h-32 bg-[#FAF7F0] rounded-lg border border-cyan-100 flex flex-col justify-between p-3 select-none">
          <div className="flex items-center justify-between border-b pb-1 border-gray-200">
            <span className="text-[10px] font-bold text-[#0E7490] flex items-center gap-1">🌸 陽光遠距醫療</span>
            <span className="text-[8px] bg-cyan-100 text-[#0E7490] px-1 rounded">2026_Ver</span>
          </div>
          <div className="text-center space-y-1.5 my-2">
            <div className="text-[9px] font-bold text-[#1F2937]">請選擇任一身份進入系統</div>
            <div className="flex justify-center gap-1">
              <span className="text-[8px] bg-[#0E7490] text-white px-2 py-0.5 rounded shadow-sm">病人端</span>
              <span className="text-[8px] bg-white border border-gray-200 text-[#64748B] px-2 py-0.5 rounded">醫護端</span>
              <span className="text-[8px] bg-white border border-gray-200 text-[#64748B] px-2 py-0.5 rounded">管理員</span>
            </div>
          </div>
          <div className="text-[7px] text-center text-gray-400">長榮大學醫事管理學系認證</div>
        </div>
      )
    },
    {
      id: "screen-2",
      title: "建立新病歷卡",
      desc: "輸入常備身體狀況，提供首診基礎背景資料",
      previewText: "Add Record Card",
      element: (
        <div className="w-full h-32 bg-white rounded-lg border border-cyan-100 flex flex-col justify-between p-3 text-[8px] select-none">
          <div className="font-bold text-[#1F2937] border-b pb-1 border-gray-100">建立個人病歷紀錄</div>
          <div className="space-y-1 my-1">
            <div className="flex justify-between">
              <span className="text-gray-400">主要病史：</span>
              <span className="font-semibold text-emerald-800 bg-emerald-50 px-1 rounded">高血壓 / 糖尿病歷史</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">藥物過敏：</span>
              <span className="font-semibold text-rose-800 bg-rose-50 px-1 rounded">無過敏紀錄</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">生理常備：</span>
              <span className="font-semibold text-gray-700">固定測量血壓、無吸菸習慣</span>
            </div>
          </div>
          <button className="w-full py-1 bg-[#14B8A6] text-white rounded text-[8px] font-bold">送出儲存病歷</button>
        </div>
      )
    },
    {
      id: "screen-3",
      title: "健保卡建檔註冊",
      desc: "一站式註冊健保卡身分，帶入看診資訊",
      previewText: "NHI Register",
      element: (
        <div className="w-full h-32 bg-white rounded-lg border border-cyan-100 flex flex-col justify-between p-3 text-[8px] select-none">
          <div className="font-bold text-[#1F2937] border-b pb-1 text-center">雙重核對健保身分建檔</div>
          <div className="space-y-1 my-1.5">
            <div className="flex justify-between text-gray-400">
              <span>身分證字號：</span>
              <span className="text-gray-900 font-mono">A234567***</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>真實姓名：</span>
              <span className="text-gray-900">陳妤妮 (學生示範)</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>手機號碼：</span>
              <span className="text-gray-900 font-mono">0987-***-321</span>
            </div>
          </div>
          <div className="text-[7px] text-teal-600 bg-teal-50 p-1 rounded text-center">身分字號與影像覆核開啟</div>
        </div>
      )
    },
    {
      id: "screen-4",
      title: "健保卡拍攝上傳",
      desc: "模擬拖曳上傳與真卡相機拍照或一鍵快速建檔",
      previewText: "Card Scanning",
      element: (
        <div className="w-full h-32 bg-[#F8FAF6] rounded-lg border-2 border-dashed border-teal-200 flex flex-col items-center justify-center p-3 text-[8px] select-none relative">
          {/* Simulated NHI Health Card graphic inside upload element */}
          <div className="w-20 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-md p-1 flex flex-col justify-between shadow text-white pointer-events-none transform -rotate-2">
            <div className="flex justify-between items-center">
              <span className="text-[4px] tracking-widest uppercase">National Health Card</span>
              <span className="w-2 h-2 rounded bg-amber-200" />
            </div>
            <div className="space-y-0.5">
              <div className="font-bold text-[5px]">陳妤妮 Model</div>
              <div className="font-mono text-[4px]">0000 1234 5678</div>
            </div>
          </div>
          <span className="text-[7px] text-teal-700 mt-2 font-semibold">拖曳至此處或預留上傳</span>
        </div>
      )
    },
    {
      id: "screen-5",
      title: "病人資料欄位核對",
      desc: "核對健保相片之姓名、生日、IC晶片卡號",
      previewText: "Data Verification",
      element: (
        <div className="w-full h-32 bg-white rounded-lg border border-cyan-100 flex flex-col justify-between p-3 text-[8px] select-none">
          <div className="text-emerald-700 font-bold flex items-center gap-1 border-b pb-0.5"><CheckCircle2 size={10} /> 資訊確認覆核中</div>
          <div className="my-1.5 space-y-0.5">
            <div className="flex justify-between">
              <span>卡片端姓名:</span>
              <span className="font-semibold text-gray-900">陳妤妮</span>
            </div>
            <div className="flex justify-between">
              <span>出生年月日:</span>
              <span className="font-semibold text-gray-900 font-mono">92 年 05 月 20 日</span>
            </div>
            <div className="flex justify-between">
              <span>健保卡IC卡號:</span>
              <span className="font-semibold text-indigo-700 font-mono">8024-5231-1502</span>
            </div>
          </div>
          <div className="text-[6px] text-gray-400 text-right">人工確認無誤，將載入註冊庫</div>
        </div>
      )
    },
    {
      id: "screen-6",
      title: "健保卡註冊完成",
      desc: "通過線上覆核、卡證儲存完成病歷授權",
      previewText: "NHI Register Success",
      element: (
        <div className="w-full h-32 bg-[#FAF7F0] rounded-lg border border-emerald-200 flex flex-col items-center justify-center p-3 text-center select-none">
          <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-1">
            <ShieldCheck size={16} />
          </div>
          <h4 className="font-bold text-emerald-950 text-[9px]">健保IC卡身分建檔成功</h4>
          <p className="text-[7px] text-gray-400 max-w-xs mt-1">您現在可以隨時預約遠距看診與心血管、一般內科等值班醫師囉！</p>
        </div>
      )
    },
    {
      id: "screen-7",
      title: "遠距掛號表單",
      desc: "選擇所屬科別、排班醫師、門診時段與不適主訴",
      previewText: "Appointment Form",
      element: (
        <div className="w-full h-32 bg-white rounded-lg border border-cyan-100 flex flex-col justify-between p-3 text-[8px] select-none">
          <div className="font-bold text-[#1F2937] border-b pb-1">送出線上掛號預約</div>
          <div className="space-y-0.5 my-1 text-[7px]">
            <div className="flex justify-between"><span className="text-gray-400">門診科別:</span><span className="font-bold text-[#0E7490]">家醫科 (視訊)</span></div>
            <div className="flex justify-between"><span className="text-gray-400">門診醫師:</span><span className="font-bold text-gray-900">張祐倉 醫師</span></div>
            <div className="flex justify-between"><span className="text-gray-400">預計時段:</span><span className="font-mono text-gray-900">2026-06-10 上午診</span></div>
            <div className="flex justify-between"><span className="text-gray-400">主訴說明:</span><span className="text-slate-600 truncate max-w-[80px]">近日偶有輕微頭痛、喉嚨乾癢...</span></div>
          </div>
          <button className="w-full py-0.5 bg-[#0E7490] text-white text-[7px] font-bold rounded">遞交預約</button>
        </div>
      )
    },
    {
      id: "screen-8",
      title: "預約掛號成功",
      desc: "成功生成序列序號、完成通訊診程連結",
      previewText: "Booking Confirmed",
      element: (
        <div className="w-full h-32 bg-emerald-50/50 rounded-lg border border-emerald-100 flex flex-col justify-between p-3 text-[8px] select-none text-emerald-950">
          <div className="text-center font-bold text-[9px] text-[#0E7490] flex items-center justify-center gap-1">🎉 門診掛號預約成功</div>
          <div className="bg-white p-1 rounded border border-emerald-100 my-1 text-[7px]">
            <div className="flex justify-between"><span>看診科別:</span><span className="font-bold">心臟內科</span></div>
            <div className="flex justify-between"><span>看診編號:</span><span className="font-mono font-bold text-emerald-800">4 號 (當前回報)</span></div>
            <div className="flex justify-between"><span>估計看診:</span><span className="text-gray-400">約 10:45 AM 線上候診</span></div>
          </div>
          <div className="text-[6px] text-center text-[#64748B]">請務必於看診前 10 分鐘保持網路順暢</div>
        </div>
      )
    },
    {
      id: "screen-9",
      title: "我的掛號狀態看板",
      desc: "追蹤門診看診排序進度（候診中、看診中、已完診）",
      previewText: "My Booking Queue",
      element: (
        <div className="w-full h-32 bg-white rounded-lg border border-cyan-100 flex flex-col justify-between p-3 text-[8px] select-none">
          <div className="font-bold text-[#1F2937] border-b pb-1 flex justify-between"><span>我的掛號狀態</span><span className="text-[#0E7490] font-mono">實時重整</span></div>
          <div className="space-y-1 my-1 flex-1">
            <div className="flex items-center justify-between bg-teal-50 px-1.5 py-1 rounded">
              <div>
                <span className="font-bold">心臟內科 - 許醫師</span>
                <span className="block text-[6px] text-slate-400">看診日期：2026-06-08</span>
              </div>
              <span className="px-1.5 py-0.5 bg-[#14B8A6] text-white rounded-[4px] text-[6px] font-bold">看診中</span>
            </div>
          </div>
          <div className="text-[7px] text-center text-gray-400">網頁右上角即時提供各端互動對接</div>
        </div>
      )
    }
  ];

  return (
    <section id="flow" className="py-16 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0E7490] tracking-wider uppercase bg-cyan-100/60 px-3 py-1 rounded-full">
            Patient Portal Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight mt-3">
            病人端完整操作流程：從建檔到遠距掛號
          </h2>
          <div className="h-1 w-16 bg-[#0E7490] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#64748B] text-sm leading-relaxed">
            病人端為陽光通訊診療系統的起點，我們設計了極為流暢、老幼咸宜的「無礙防跌流程（Seamless Check-in）」。從一開始的註冊健保卡，到醫師掛號填寫主訴，均以圖文化大按鈕與大字級呈現，並完整保留圖片預留位置和系統UI演示：
          </p>
        </div>

        {/* 12 Steps List & Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PATIENT_FLOW_DATA.map((flow) => (
            <div
              key={flow.step}
              className="bg-[#FAF7F0] p-5 rounded-2xl border border-[#E2E8F0] relative hover:border-[#0E7490] hover:shadow-md transition-all duration-300"
            >
              <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-cyan-50 border border-cyan-100 text-[#0E7490] font-mono text-xs font-bold flex items-center justify-center">
                {String(flow.step).padStart(2, "0")}
              </div>

              <div className="space-y-2 mt-2">
                <span className="text-[10px] font-bold text-[#14B8A6] uppercase tracking-widest font-mono">Step {flow.step}</span>
                <h4 className="font-bold text-[#1F2937] text-base">{flow.title}</h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {flow.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 9 Screenshot Placeholders Grid requested by user */}
        <div className="bg-[#FAF7F0] p-8 rounded-3xl border border-[#E2E8F0]">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-[#1F2937] flex items-center justify-center gap-2">
              <Sparkles className="text-[#0E7490]" size={20} />
              病人端實體系統 UI 截圖展示與預留區
            </h3>
            <p className="text-xs text-[#64748B] mt-2">
              「請保留圖片區，讓我放以下截圖。」此區塊已為您精心設計了美觀、對比分明的高保真交互 UI 模型。未來在進行最終部署或 PDF 報告時，您可以直接替換為您在陽光平台的實體操作截圖，或者把此成果圖直接放在書面專題裡哦！
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.map((screen) => (
              <div
                key={screen.id}
                className="bg-white p-5 rounded-2xl border border-neutral-200/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
                    <span className="text-xs font-bold text-[#1F2937]">{screen.title}</span>
                    <span className="text-[9px] bg-red-100/60 text-red-800 px-1.5 py-0.5 rounded font-semibold">
                      截圖推薦位
                    </span>
                  </div>
                  
                  {/* High Quality UI Mockup placeholder */}
                  <div className="p-2 rounded-xl bg-[#FAF7F0]/40 border border-[#E2E8F0] shadow-inner mb-4 flex items-center justify-center">
                    {screen.element}
                  </div>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {screen.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-[10px] text-[#64748B]">
                  <span className="font-mono">ID: {screen.id.toUpperCase()}</span>
                  <span className="text-xs font-semibold text-[#14B8A6] flex items-center gap-0.5">
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
