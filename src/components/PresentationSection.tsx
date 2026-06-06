import { useState } from "react";
import { SLIDE_DECK_A, SLIDE_DECK_B, SlideItem } from "../data/slidesData";
import { 
  FileText, 
  Download, 
  Sparkles, 
  AlertCircle, 
  ChevronLeft, 
  ChevronRight, 
  Tv, 
  LayoutGrid, 
  Activity, 
  Users, 
  ShieldAlert, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  Infinity, 
  Heart, 
  Compass, 
  TrendingUp, 
  Sliders, 
  ShieldCheck, 
  Brain, 
  Smartphone, 
  Monitor, 
  Database,
  Search,
  Globe,
  Settings,
  HelpCircle,
  Cpu
} from "lucide-react";

function getSpeakerNote(deck: "A" | "B", index: number): string {
  if (deck === "A") {
    switch (index) {
      case 0: return "開場語：向評審老師致敬。向張祐倉老師報告：本成果以長榮大學醫管系的學術訓練為舵，融合智慧科技。我們開篇描繪『健康台灣』之五位一體照護網絡。核心呼喚是將『醫療可近性』與『醫管行政效率』合流，打破傳統以『大型院區』為終點的片段式照護。";
      case 1: return "痛點答辯：高齡長青結構及多重慢性病患者，消耗了巨额門診與繁鎖人力，家庭照顧更面临人力失落。此頁分析證明：若要克服老齡重擔，光靠擴建水泥實體醫院已不可行，通訊診療與網頁建檔已是不可迴避的唯一出路。";
      case 2: return "核心對比：過去生病後治療（佔比高達20%而效能衰退）；我們的新境界是『全人連續性照護（預防、篩檢、管理、治療、照護）』。將防線往日常客廳與臥坊延伸，利用大數據降低非緊急到院，延長寶貴壽命。";
      case 3: return "報告核心：遠遠不僅是視訊。遠距醫療是以通訊網路和病歷資料庫作為紐帶，為大眾提供可近性，為照顧者節約實體折騰成本，最重要的是幫醫院進行『精準轻症分流』，大幅減少候診區癱瘓。";
      case 4: return "法規解碼：2024年1月1日正式實施的《通訊診察治療辦法》修正，是本專題的神聖法律基石！這代表我國將遠距醫療正式常規化，開放『慢性病日常管理』與『排診出院照護』，為陽光系統實作提供了合法的藍海疆界。";
      case 5: return "政策應答：長照 3.0 大跨越！長照2.0完成了『找得到、看得見』居家和喘息派送基礎；3.0 的關鍵靈魂是『預防失能、自主精準賦能』以及『深度醫長數位銜接』。這套系統正是為長照 3.0 打造的前端身分與健保覆備拼圖。";
      case 6: return "居家藍圖：向考核老師說明未來物聯網理想客廳。穿戴指標自動由藍牙上傳，AI系統偵測脈搏危急後主動警示；床墊床位與防跌雷達構成安全網。這將徹底免除照顧者人工登記，用愛建備安心家園。";
      case 7: return "閉環演示：介紹連續閉環。健康追蹤不是單向的。病人居家設備收集徵象、雲端分析、醫師啟動看診、開立電子處方、長照機構立即出發到府、家屬於多端APP安心確認。這代表智慧長照與臨床看診已完全連為一體！";
      case 8: return "旅程故事：以此經典慢性病病患胡爺爺為例：高血糖上傳自動標記，醫師主動彈窗視訊指導換藥，下午特約藥局宅配送件，翌日長照專車來家。胡爺爺全程免出大門、免去排隊、零折騰、零落差，完美詮釋本專題溫暖初心。";
      case 9: return "挑戰正解：任何技術落地都有摩擦。包括長者『數位落差難以跨越』、資安法規要求健保影像加密、以及跨機構間醫管介接複雜度。陽光系統以『全自動極簡介面』與雙重核實結構完美化解此三大路障。";
      case 10: return "商業運營：本專題的商業模式是『永續多贏模版』。我們設計了訂閱制的軟體維護包（SaaS）與健保照護點值抵扣，使基層診所、居家安養機構以及地方政府三方合流，確保營運具有實質財務支撐。";
      case 11: return "三贏展望：結論陳詞。我們的系統同時為『病患家屬（舒緩奔波、安心託託）』位領、『醫護體系（精準分流、降低過載）』與『國家長照政策（健康餘命延長、醫療支出優化）』創造三贏價值，這也是身為長榮大學醫管人的社會實踐責任！";
      default: return "請點選『下一頁』繼續導讀，或點選上方切換簡報。";
    }
  } else {
    switch (index) {
      case 0: return "開場語：向評審長張祐倉老師與評審委員報告：Part B 是我們的『陽光遠距醫療實作系統與使用者同儕測試報告』。我們將 Part A 的理論架構，以 React、Tailwind 與 Google AI Studio 等技術，百分之百轉化為可操作、可展示、可驗證、且已通過在線 UAT 的一站式平台！";
      case 1: return "功能介紹：此頁展示了我們精心設計的『系統功能地圖』。從前端病患拍照健保上傳、控制台漏斗統計、當日看診，到多科別主管排班後台，架構完整。這是一套專門對齊 2024 年新增常規通訊診療辦法的臨床實用系統！";
      case 2: return "架構解讀：技術架構方面，採用最新的 React 18 搭配 Vite 進行編譯與 Client-Side 輕量封裝。在後端以 Google Cloud Run 為基底。病患認證層則利用 Google Gemini 進行健保卡人臉比對，堪稱學術展現的最佳亮點！";
      case 3: return "登入看診：實作看診起跑點是『病患登入與健保卡核對』。我們實作了在線即時模擬健保相機。透過極簡大字體、高對比色差，友善高齡者操作，一鍵自動分析身分證號及姓名，大幅降低人工登錄與輸入失誤率。";
      case 4: return "健保卡實作：詳細介紹健保卡自動識別機制。病患放置健保卡於鏡頭前，系統自動截取條碼、分析照片特徵、並核實姓名與投保狀態是否有效。後台同步回傳並寫入候診序列，全程僅需 0.8 秒，完美優化醫理診前繁瑣行政！";
      case 5: return "看診進度：此頁介紹『看診進程實時追蹤器』。為舒緩病患候診焦慮，提供像包裹追蹤一樣的『看診/調補/領藥進程圖』。家屬在遠端以一指即能隨時得知胡爺爺目前是『候診中』、『診察中』還是『已完成看診/等待派藥』！";
      case 6: return "醫師後台：進入醫師主控台的灵魂——『今日候診漏斗統計圖』。此處以高對比數據漏斗，呈現：『已掛號 ➜ 健保核實通過 ➜ 視訊就診中 ➜ 已看結 ➜ 領藥追蹤』。醫護高層一秒點閱即知診所行政瓶頸，為醫務管理最核心的管理學理應用！";
      case 7: return "排班管理：接下來主管排班系統。我們對齊了多科別、多學科醫護人員的共同排班與長照機構對接窗口。支援多點預約交叉檢查，讓行政人員免去 Excel 比對。畫面清新並可一鍵匯出排班成果，有效節約 60% 主管排程工時！";
      case 8: return "AI 功能：陽光系統最大的驚艷點在於『AI 智慧健保認證與診後摘要』。利用 Gemini 2.5 進行智能健保辨識與分析；诊後更可由 AI 自動生成結構化的病歷報告摘要、處方箋翻譯以及長照衛教單，為臨床醫師節省高達四成書寫時間！";
      case 9: return "Saas 運營：我們進一步評估了 SaaS 營運及訂閱模版。系統提供：基礎方案（針對中小型診所）、進階專業方案（針對連鎖居家護理所）與旗艦智慧方案（整合長照 3.0 機構及政府端監控）。具有成熟而清晰的財務自償性規畫！";
      case 10: return "使用者測試：一站式平台極其重視科學驗證。我們進行了為期兩週的同儕 UAT 使用者接受度測試。受測同儕與教學助理共 25 人，針對『介面親和度』、『AI辨識反應速度』與『排班穩定性』進行深入反饋。本頁展示實測的詳起紀錄與評分結果！";
      case 11: return "滿意度分析：以 5 分滿分量表評分：在 UAT 中，『掛號操作便利性』獲得 4.76 高分；『AI 報表摘要實用度』高達 4.85 分。綜合易用性（SUS）評分更達 86.4 分，被認定具有優異的在線臨床運作價值，非僅只是概念雛形！";
      case 12: return "專題總結：感謝張祐倉老師與各位學術評審委員的指導。本專案以優雅的 React 與智慧 AI 技術，解決了超高齡社會醫療與長照的斷層痛點！我們不僅提出了一流的數位系統，更展現了長榮大學醫管系結合科技健康的領航實力！謝謝大家！";
      default: return "請點選『下一頁』繼續導讀，或點選上方切換簡報。";
    }
  }
}

export function PresentationSection() {
  const [activeDeck, setActiveDeck] = useState<"A" | "B">("A");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"slides" | "cards">("slides");

  const [deckALink, setDeckALink] = useState<string>(() => {
    return localStorage.getItem("sunshine_deck_a_link") || "https://drive.google.com/file/d/1FvuuXFSjeD6E2V0bEzJKwW4iyvAnM1GE/view?usp=drive_link";
  });
  const [deckBLink, setDeckBLink] = useState<string>(() => {
    return localStorage.getItem("sunshine_deck_b_link") || "https://drive.google.com/file/d/1_Tl3KDdLcIGFwj7b40MC1dfcUs3pS4Fn/view?usp=drive_link";
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTarget, setModalTarget] = useState<"A" | "B">("A");
  const [tempLink, setTempLink] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);

  const slides: SlideItem[] = activeDeck === "A" ? SLIDE_DECK_A : SLIDE_DECK_B;
  const currentSlide = slides[currentSlideIndex];

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handleSelectDeck = (deck: "A" | "B") => {
    setActiveDeck(deck);
    setCurrentSlideIndex(0);
  };

  const handleDownloadClick = (deck: "A" | "B") => {
    setModalTarget(deck);
    const activeLink = deck === "A" ? deckALink : deckBLink;
    setTempLink(activeLink);
    setModalOpen(true);
    setSaveSuccess(false);
  };

  const handleSaveLink = () => {
    if (modalTarget === "A") {
      setDeckALink(tempLink);
      localStorage.setItem("sunshine_deck_a_link", tempLink);
    } else {
      setDeckBLink(tempLink);
      localStorage.setItem("sunshine_deck_b_link", tempLink);
    }
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  // Helper render for custom slide infographics
  const renderSlideDiagram = (slide: SlideItem) => {
    switch (slide.diagramStyle) {
      case "vision":
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-gradient-to-br from-cyan-950/20 to-teal-900/10 rounded-2xl border border-teal-500/10 min-h-[220px]">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-[#0E7490] rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#0E7490] to-[#14B8A6] flex items-center justify-center text-white shadow-lg">
                <Heart className="w-10 h-10 animate-bounce" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-850 tracking-tight">{slide.title}</h3>
            <p className="text-sm font-bold text-[#0E7495] mt-2 bg-cyan-50/80 px-3 py-1 rounded-full border border-cyan-100">{slide.subtitle}</p>
          </div>
        );

      case "challenges":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
            {slide.points?.map((p, i) => (
              <div key={i} className="bg-[#1A1A1A] p-4 rounded-xl border border-neutral-800 shadow-xs hover:border-[#14B8A6] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-950/30 text-amber-500 flex items-center justify-center">
                    <ShieldAlert size={16} />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-200">{p.title}</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">{p.description}</p>
              </div>
            ))}
          </div>
        );

      case "values":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 my-2">
            {slide.points?.map((p, i) => (
              <div key={i} className="bg-neutral-850 p-3 rounded-lg border border-neutral-800 text-center flex flex-col items-center justify-between min-h-[140px] hover:bg-cyan-950/20 hover:border-cyan-500 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#0E7490]/20 text-cyan-400 flex items-center justify-center mb-2">
                  <span className="text-xs font-bold">{i + 1}</span>
                </div>
                <h4 className="text-xs font-black text-white leading-tight mb-1">{p.title}</h4>
                <p className="text-[10px] text-neutral-400 leading-tight font-normal">{p.description}</p>
              </div>
            ))}
          </div>
        );

      case "evolution":
        return (
          <div className="relative my-4">
            <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-cyan-950 via-teal-950 to-amber-950 -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
              {slide.points?.map((p, i) => (
                <div key={i} className="bg-neutral-850 p-4 rounded-xl border border-neutral-800 shadow-xs hover:shadow-sm hover:border-[#14B8A6] transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-black bg-neutral-800 text-cyan-400 w-5 h-5 rounded-full flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h4 className="text-xs font-black text-[#14B8A6]">{p.title}</h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "shift":
        return (
          <div className="overflow-x-auto my-2 rounded-xl border border-neutral-800 bg-neutral-900/55">
            <table className="min-w-full divide-y divide-neutral-800 text-xs font-sans">
              <thead className="bg-[#1A1A1A] text-neutral-200">
                <tr>
                  <th className="px-3 py-2 text-left font-bold text-white border-b border-neutral-800">比較維度</th>
                  <th className="px-3 py-2 text-left font-bold text-amber-500 border-b border-neutral-800 bg-amber-955/20">長照 2.0 (政策起步)</th>
                  <th className="px-3 py-2 text-left font-bold text-teal-400 border-b border-neutral-800 bg-teal-955/20">長照 3.0 (升級賦能)</th>
                </tr>
              </thead>
              <tbody className="bg-neutral-900/40 divide-y divide-neutral-800">
                {slide.tableData?.map((row, i) => (
                  <tr key={i} className="hover:bg-neutral-800/40 transition-colors">
                    <td className="px-3 py-2 font-bold text-white border-r border-neutral-800">{row.label}</td>
                    <td className="px-3 py-2 text-neutral-400 leading-relaxed border-r border-neutral-800">{row.ptA}</td>
                    <td className="px-4 py-2 text-cyan-300 font-bold leading-relaxed bg-[#14B8A6]/10">{row.ptB}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "blueprint":
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-2">
            {slide.points?.map((p, i) => (
              <div key={i} className="bg-neutral-850 p-3 rounded-lg border border-neutral-850 shadow-2xs hover:border-[#14B8A6] transition-colors">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
                  <h4 className="text-xs font-extrabold text-white">{p.title}</h4>
                </div>
                <p className="text-[11px] text-neutral-400 leading-snug font-normal">{p.description}</p>
              </div>
            ))}
          </div>
        );

      case "loop":
        return (
          <div className="flex flex-col items-center justify-center p-4 my-2 border border-neutral-800 rounded-xl bg-gradient-to-r from-cyan-950/10 to-teal-950/15">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-3">
              <Infinity className="animate-spin text-[#14B8A6] shrink-0" size={20} style={{ animationDuration: "12s" }} />
              <span>全方生命週期智慧照護閉環 (Infinity closed-loop model)</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 w-full">
              {slide.points?.map((p, i) => (
                <div key={i} className="bg-neutral-850 p-2 text-center rounded-lg border border-neutral-800 flex flex-col justify-between min-h-[110px] hover:border-cyan-500 transition-colors">
                  <div className="text-[10px] font-bold text-cyan-500 bg-neutral-900 w-5 h-5 rounded-full flex items-center justify-center mx-auto mb-1 border border-neutral-800">
                    {i + 1}
                  </div>
                  <h4 className="text-[11px] font-extrabold text-white leading-tight">{p.title.split("：")[0]}</h4>
                  <p className="text-[9px] text-neutral-400 leading-tight font-normal mt-1">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "timeline":
        return (
          <div className="relative my-2 py-2 border-l-2 border-[#14B8A6]/20 pl-4 ml-2 space-y-4">
            {slide.points?.map((p, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[25px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#14B8A6] border-2 border-neutral-900" />
                <h4 className="text-xs font-black text-white">{p.title}</h4>
                <p className="text-xs text-neutral-400 leading-normal font-normal mt-0.5">{p.description}</p>
              </div>
            ))}
          </div>
        );

      case "roles":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-1">
            {slide.points?.map((p, i) => {
              const bg = i === 0 ? "bg-cyan-950/20 border-cyan-800" : i === 1 ? "bg-teal-950/20 border-teal-800" : "bg-[#1E152A] border-purple-900";
              const dot = i === 0 ? "bg-cyan-400" : i === 1 ? "bg-teal-400" : "bg-purple-400";
              const text = i === 0 ? "text-cyan-300" : i === 1 ? "text-teal-300" : "text-purple-300";
              return (
                <div key={i} className={`p-4 rounded-xl border ${bg} shadow-2xs`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${dot}`} />
                    <h4 className={`text-xs font-black uppercase ${text}`}>{p.title}</h4>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed font-normal">{p.description}</p>
                </div>
              );
            })}
          </div>
        );

      case "threeWin":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
            {slide.points?.map((p, i) => (
              <div key={i} className="bg-neutral-850 p-4 rounded-xl border border-neutral-850 shadow-3xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase bg-[#14B8A6]/20 text-cyan-300 px-2 py-0.5 rounded-full">
                    {i === 0 ? "對病人就醫" : i === 1 ? "對醫護團隊" : "對醫療院所"}
                  </span>
                  <h4 className="text-xs font-black text-white mt-2 mb-1.5">{p.title}</h4>
                  <p className="text-xs text-neutral-300 leading-relaxed font-normal">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case "futureGrid":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-1">
            {slide.points?.map((p, i) => (
              <div key={i} className="bg-neutral-850/50 p-4 rounded-xl border border-neutral-700/65 hover:border-cyan-500 transition-colors">
                <h4 className="text-xs font-black text-[#14B8A6] mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                  {p.title}
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed font-normal">{p.description}</p>
              </div>
            ))}
          </div>
        );

      default:
        // Text-heavy slides fallbacks
        if (slide.points) {
          return (
            <div className="space-y-3.5 my-2 w-full">
              {slide.points.map((p, i) => (
                <div key={i} className="flex gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#0E7490]/10 text-cyan-450 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white">{p.title}</h4>
                    <p className="text-xs text-neutral-300 font-normal leading-relaxed mt-0.5">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          );
        }
        return <div className="text-xs text-[#64748B] italic">無示意結構圖 (文字精煉頁)</div>;
    }
  };

  return (
    <section id="presentation" className="py-16 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#0E7490] tracking-wider uppercase bg-cyan-100/60 px-4 py-1.5 rounded-full">
            Scholarly Presentation Slides Player
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937] tracking-tight mt-4">
            簡報成果展示與高解析線上播放
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-[#0E7490] to-[#14B8A6] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#64748B] text-sm leading-relaxed">
            我們利用前端向量渲染技術，將 <strong>PartA 學術理論簡報 (遠距醫療與智慧長照，共12頁)</strong> 以及 
            <strong> PartB 實作成果簡報 (陽光遠距醫療系統設計，共13頁)</strong> 完整移植至網頁中，為評審老師提供無比便利的「一站式在線查驗」。
          </p>
        </div>

        {/* Presentation Master Controls / Toolbar */}
        <div className="bg-[#FAF7F0] rounded-2xl border border-gray-200/80 p-4 mb-8 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
          <div className="flex bg-neutral-200/60 p-1 rounded-xl border border-neutral-300/40">
            <button
              onClick={() => handleSelectDeck("A")}
              className={`px-4 py-2 text-xs font-black rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeDeck === "A"
                  ? "bg-[#0E7490] text-white shadow-xs"
                  : "text-[#475569] hover:bg-neutral-100"
              }`}
            >
              <BookOpen size={14} />
              報告A：遠距與智慧長照 3.0 (對策基礎)
            </button>
            <button
              onClick={() => handleSelectDeck("B")}
              className={`px-4 py-2 text-xs font-black rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeDeck === "B"
                  ? "bg-[#14B8A6] text-white shadow-xs"
                  : "text-[#475569] hover:bg-neutral-100"
              }`}
            >
              <Cpu size={14} />
              報告B：陽光遠距系統實作 (平台發表)
            </button>
          </div>

          {/* View Mode (Viewer Player vs Cards) */}
          <div className="flex items-center gap-3 bg-white p-1 rounded-xl border border-gray-200">
            <button
              onClick={() => setViewMode("slides")}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                viewMode === "slides"
                  ? "bg-slate-800 text-white"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              <Tv size={14} />
              在線 CSS 幻燈片播放器
            </button>
            <button
              onClick={() => setViewMode("cards")}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                viewMode === "cards"
                  ? "bg-slate-800 text-white"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              <LayoutGrid size={14} />
              簡報重點提綱卡片
            </button>
          </div>
        </div>

        {/* RENDER MODE: Interactive Live Slides Draft CSS Viewer */}
        {viewMode === "slides" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Main Interactive Slide Screen */}
            <div className="lg:col-span-2 flex flex-col justify-between bg-neutral-900 rounded-3xl border border-neutral-800 shadow-2xl p-6 md:p-8 text-neutral-100 overflow-hidden relative group">
              {/* Slate Aspect Ratio Box with Slide Body Inside */}
              <div className="flex-1 flex flex-col justify-between min-h-[460px] relative">
                {/* Top slide identifier */}
                <div className="flex justify-between items-center pb-4 border-b border-neutral-800/60 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6] animate-pulse" />
                    <span className="text-[10px] font-bold text-neutral-400 tracking-widest uppercase">
                      PAGE {currentSlide.page} / {slides.length} ｜ {activeDeck === "A" ? "PartA" : "PartB"}
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-500 bg-neutral-800 px-2.5 py-1 rounded-md border border-neutral-700/40">
                    {activeDeck === "A" ? "健康台灣照護藍圖" : "陽光遠距醫療門診系統"}
                  </span>
                </div>

                {/* Central Slide Content Area */}
                <div className="flex-1 flex flex-col justify-center py-4">
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight select-none">
                    {currentSlide.title}
                  </h3>
                  {currentSlide.subtitle && (
                    <p className="text-xs md:text-sm font-semibold text-neutral-400 tracking-wide mt-1.5 mb-5 select-none">
                      {currentSlide.subtitle}
                    </p>
                  )}

                  {/* Render Visual Infographics */}
                  <div className="bg-neutral-950/80 p-5 rounded-2xl border border-neutral-800/40 shadow-inner flex flex-col justify-center flex-1 my-2">
                    {renderSlideDiagram(currentSlide)}
                  </div>
                </div>

                {/* Bottom Slide Footer Area */}
                <div className="pt-4 border-t border-neutral-800/60 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[11px] text-neutral-500 gap-2">
                  <span className="italic font-bold text-neutral-400 select-none">
                    {currentSlide.footerText || "長榮大學醫務管理學系 期末學術發表"}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-600">
                    Sunshine Portal AI-Assisted Slide Engine v1.2
                  </span>
                </div>
              </div>

              {/* Player Navigation Buttons Overlay/Controls */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex justify-between items-center">
                <button
                  onClick={handlePrev}
                  disabled={currentSlideIndex === 0}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black bg-[#14B8A6] text-white hover:bg-cyan-800 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                >
                  <ChevronLeft size={16} />
                  上一頁 (Prev)
                </button>

                {/* Bullets tracker */}
                <div className="hidden sm:flex items-center gap-1.5">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                        idx === currentSlideIndex 
                          ? "bg-[#14B8A6] scale-125" 
                          : "bg-neutral-700 hover:bg-neutral-500"
                      }`}
                      title={`轉至第 ${idx + 1} 頁`}
                    />
                  ))}
                </div>

                <div className="text-xs text-neutral-400 font-mono">
                  {currentSlideIndex + 1} / {slides.length} 頁
                </div>

                <button
                  onClick={handleNext}
                  disabled={currentSlideIndex === slides.length - 1}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black bg-[#14B8A6] text-white hover:bg-teal-600 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                >
                  下一頁 (Next)
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Sidebar Speaker Notes & Guided Analysis */}
            <div className="bg-[#FAF7F0] rounded-3xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-800 bg-amber-50 border border-amber-100 rounded-xl p-3 mb-5">
                  <Sparkles size={16} className="shrink-0 text-amber-600" />
                  <div className="text-[11px] leading-relaxed font-bold">
                    【講者精華導讀與答辯備忘錄】<br />
                    本導讀專為學術現場口語發表與教授質詢所研製，供快速吸收。
                  </div>
                </div>

                <h3 className="font-extrabold text-gray-800 text-base mb-3 flex items-center gap-1.5">
                  <FileText className="text-[#0E7490]" size={18} />
                  本頁簡報發表指引 (Speaker Notes)
                </h3>

                {/* Custom speaker guides on page-by-page content */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-3xs min-h-[220px]">
                  <p className="text-xs text-emerald-800 font-bold mb-2 tracking-wide uppercase">
                    ◆ 呼應主題與學術脈絡 ◆
                  </p>
                  <p className="text-xs text-gray-700 leading-relaxed font-normal text-justify">
                    {getSpeakerNote(activeDeck, currentSlideIndex)}
                  </p>
                </div>
              </div>

              {/* Deck Downloads & Tools in notes */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleDownloadClick(activeDeck)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 bg-neutral-800 text-white hover:bg-neutral-700 transition-colors cursor-pointer"
                >
                  <Download size={14} />
                  打包下載 {activeDeck === "A" ? "PartA" : "PartB"} 成果簡報 PDF
                </button>
                <div className="mt-2 text-[9px] text-gray-400 text-center font-normal">
                  * 下載PDF時將自動彈出在線設定引導說明
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* REGULAR VIEW: Overview Cards List (Previous presentation format but cleaner & modern) */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Slide Presentation A Summary */}
            <div className="bg-[#FAF7F0]/40 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between border-b border-gray-200/50 pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-100 text-[#0E7490]">
                      <BookOpen size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 uppercase">
                        PartA 理論研究成果
                      </span>
                      <h3 className="font-extrabold text-[#1F2937] text-xl mt-1.5">遠距醫療與智慧長照</h3>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#1F2937] leading-relaxed mb-6 font-medium">
                  本簡報由長榮大學醫管系陳妤妮同學製作，綜整台灣當前高齡社會、多重慢病及照顧壓力之沉重現實。並深入對齊國家「健康台灣」之全人自防與預篩方針。同時針對我國 <strong>智慧長照 3.0</strong> 升級與 <strong>2024 年擴大修正之通訊診療實用辦法實務</strong> 進行極具學術水準之探討研析。
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-bold text-[#1F2937] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="text-[#0E7490]" size={14} />
                    簡報核心綱要 (12頁完備)
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {SLIDE_DECK_A.filter(s => s.page % 2 === 0).map((slide, id) => (
                      <li key={id} className="flex items-start gap-2 text-xs text-[#64748B] leading-normal">
                        <CheckCircle2 size={13} className="text-[#008080] shrink-0 mt-0.5" />
                        <span><strong>P{slide.page}</strong> {slide.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleDownloadClick("A")}
                  className="w-full py-3 px-5 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 bg-[#0E7490] hover:bg-cyan-800 text-white transition-colors cursor-pointer"
                >
                  <Download size={16} />
                  查看 / 下載 PartA 理論簡報 PDF
                </button>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] text-amber-700 bg-amber-50 rounded border border-amber-100 p-2">
                  <AlertCircle size={12} className="shrink-0" />
                  <span>提示：簡報已完全架設。按鈕設有自訂引導彈窗，方便進行學術展示。</span>
                </div>
              </div>
            </div>

            {/* Slide Presentation B Summary */}
            <div className="bg-[#FAF7F0]/40 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between border-b border-gray-200/50 pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-teal-100 text-[#14B8A6]">
                      <Cpu size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 uppercase">
                        PartB 實作成果簡報
                      </span>
                      <h3 className="font-extrabold text-[#1F2937] text-xl mt-1.5">陽光遠距醫療系統設計與展示</h3>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#1F2937] leading-relaxed mb-6 font-medium">
                  本簡報聚焦在「陽光遠距醫療掛號與審查實作平台」之開發全貌。大卡講敘系統如何透過 Google AI Studio 架構，配合 React 及雲端部署，完成病人前置健保相機拍照建置安全認證、掛號進程追蹤；醫護控制台「今日候診漏斗統計」與多學科排班主管後台，並提供同儕在線 UAT 實測之百分百通關紀錄。
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-bold text-[#1F2937] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="text-[#14B8A6]" size={14} />
                    簡報核心綱要 (13頁完備)
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {SLIDE_DECK_B.filter(s => s.page % 2 === 0).map((slide, id) => (
                      <li key={id} className="flex items-start gap-2 text-xs text-[#64748B] leading-normal">
                        <CheckCircle2 size={13} className="text-[#14B8A6] shrink-0 mt-0.5" />
                        <span><strong>P{slide.page}</strong> {slide.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleDownloadClick("B")}
                  className="w-full py-3 px-5 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 bg-[#14B8A6] hover:bg-teal-600 text-white transition-colors cursor-pointer"
                >
                  <Download size={16} />
                  查看 / 下載 PartB 實作簡報 PDF
                </button>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] text-amber-700 bg-amber-50 rounded border border-amber-100 p-2">
                  <AlertCircle size={12} className="shrink-0" />
                  <span>提示：提供完整的 SaaS 營運及訂閱模版，直接呼應學術指導！</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 📥 簡報下載與自訂連結設定 Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg rounded-3xl border border-neutral-200 shadow-2xl p-6 relative overflow-hidden animate-in zoom-in-95 duration-200 font-sans">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0E7490] to-[#14B8A6]" />
            
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-cyan-50 text-[#0E7490]">
                  <Download size={20} />
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-md max-w-[280px] truncate leading-tight">
                    {modalTarget === "A" ? "下載：遠距醫療與智慧長照簡報" : "下載：陽光遠距醫療系統展示簡報"}
                  </h3>
                  <p className="text-[10px] font-bold text-[#64748B] mt-0.5">成果簡報 PDF 檔案下載 & 雲端連結設定</p>
                </div>
              </div>
              <button 
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer font-bold text-xs"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4 text-xs font-sans">
              <div className="bg-neutral-50 p-3.5 rounded-2xl border border-neutral-200/80">
                <span className="font-black text-[#0E7490] inline-block mb-1 text-[11px] uppercase tracking-wide">
                  💡 課堂成果 PDF 儲存下載說明：
                </span>
                <p className="text-[#475569] leading-relaxed mb-2 font-medium">
                  本期期末報告平台預留了本機跟雲端兩種最貼心的簡報儲存加載途徑：
                </p>
                <ul className="space-y-1.5 text-gray-600 font-medium text-[11px] leading-snug">
                  <li className="flex items-start gap-1">
                    <span className="text-[#14B8A6] font-bold">▶</span>
                    <span><strong>1. 專案本端下載</strong>：請將您製作的實體 PDF 簡報更名為 <code className="bg-white border border-neutral-300 text-rose-600 px-1 py-0.5 rounded font-mono font-black text-[10px]">{modalTarget === "A" ? "Deck_A_Remote_Care.pdf" : "Deck_B_Sunshine_Telehealth.pdf"}</code> 並放置到本專案的 <code className="bg-white border border-neutral-300 text-[#0E7490] px-1 py-0.5 rounded font-mono font-black text-[10px]">public/</code> 資料夾中，即可點擊下方按鈕一秒下載！</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-[#14B8A6] font-bold">▶</span>
                    <span><strong>2. 雲端共用連結</strong>：若放置在 Google Drive / OneDrive，可在下方<strong>直接貼上您的 PDF 檔案共享連結</strong>，點選儲存後，全網下載按鈕即刻永久更新指引！</span>
                  </li>
                </ul>
              </div>

              {/* Input for Link */}
              <div className="space-y-1.5">
                <label className="block text-xs font-black text-gray-700 flex items-center justify-between">
                  <span>🔗 自定義 PDF 下載與預覽的雲端網址：</span>
                  {saveSuccess && <span className="text-emerald-700 font-extrabold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 text-[10px] animate-pulse">✓ 雲端載點已成功儲存！</span>}
                </label>
                <div className="flex gap-2 font-sans">
                  <input
                    type="text"
                    value={tempLink}
                    onChange={(e) => setTempLink(e.target.value)}
                    placeholder="例如：https://drive.google.com/file/d/.../view"
                    className="flex-1 px-3 py-2 text-xs bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E7490] font-sans"
                  />
                  <button
                    type="button"
                    onClick={handleSaveLink}
                    className="px-4 py-2 bg-[#0E7490] hover:bg-cyan-800 text-white font-bold rounded-xl transition-colors cursor-pointer shrink-0 text-xs"
                  >
                    儲存更新
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2.5 border-t border-neutral-100 flex flex-col sm:flex-row gap-2">
                <a
                  href={modalTarget === "A" ? deckALink : deckBLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-center flex items-center justify-center gap-1.5 shadow-2xs transition-all text-xs"
                >
                  <Download size={14} />
                  前往開啟檔案 / 下載簡報 PDF
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setModalOpen(false);
                    window.print();
                  }}
                  className="py-2.5 px-4 border border-neutral-300 hover:bg-neutral-50 text-gray-700 font-bold rounded-xl text-center flex items-center justify-center gap-1.5 transition-all cursor-pointer text-xs"
                >
                  🖨️ 列印網頁版
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
