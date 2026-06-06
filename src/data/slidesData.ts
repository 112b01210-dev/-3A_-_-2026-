export interface SlideItem {
  page: number;
  title: string;
  theme?: string;
  subtitle?: string;
  points?: {
    title: string;
    description: string;
    icon?: string;
  }[];
  tableData?: {
    label: string;
    ptA: string;
    ptB: string;
  }[];
  footerText?: string;
  diagramStyle?: "challenges" | "vision" | "values" | "evolution" | "blueprint" | "loop" | "timeline" | "roles" | "threeWin" | "shift" | "futureGrid";
}

export const SLIDE_DECK_A: SlideItem[] = [
  {
    page: 1,
    title: "遠距醫療與智慧長照",
    subtitle: "建構「健康台灣」的新世代照護藍圖",
    footerText: "長榮大學醫務管理學系 ｜ 陳妤妮 期末成果報告",
    diagramStyle: "vision"
  },
  {
    page: 2,
    title: "驅動系統轉型的三大挑戰",
    subtitle: "面對超高齡社會，實體醫療面臨之轉型痛點",
    points: [
      {
        title: "高齡化人口結構",
        description: "人口老化改變結構平衡，使傳統實體就醫消耗過多時間與交通成本。",
        icon: "Users2"
      },
      {
        title: "慢性病盛行率攀升",
        description: "高血壓與糖尿病等需長期連續性監測，而非單次片段性治療。",
        icon: "Activity"
      },
      {
        title: "家庭照顧者耗竭",
        description: "面對長者多重疾病與行動不便，家屬承受極大身心與照護壓力。",
        icon: "Heart"
      }
    ],
    footerText: "單靠傳統實體醫療，已無法承載超高齡社會的照護重擔。",
    diagramStyle: "challenges"
  },
  {
    page: 3,
    title: "重新定義照護：「健康台灣」的全人連續性願景",
    subtitle: "打破片段式被動醫療，走向預防與社區融合",
    points: [
      { title: "生病後治療 (20%)", description: "過往醫療模式著重於發病後的醫院端處置與高昂急重症支出。" },
      { title: "全人連續性照護 (80%)", description: "整合「預防、篩檢、管理、治療、照護」之五位一體，讓健康促進落實在日常生活中。" }
    ],
    footerText: "延長國民健康餘命，將照護從「醫院內」無縫延伸至「生活中」。",
    diagramStyle: "values"
  },
  {
    page: 4,
    title: "跨越時空的橋梁：遠距醫療的五大核心價值",
    subtitle: "以通訊科技打通「智慧長照」與「居家防護」末梢",
    points: [
      { title: "提升醫療可近性", description: "克服偏鄉與離島的距離障礙，提供規律看診。", icon: "MapPin" },
      { title: "慢性病長期追蹤", description: "無需到院的即時數據監測，血壓血糖即時掌握。", icon: "TrendingUp" },
      { title: "降低照顧者負擔", description: "免除護送行動不便長者之往返勞苦與請假成本。", icon: "ShieldCheck" },
      { title: "強化醫療與長照銜接", description: "資訊無縫交換，防範長照案主轉介中斷。", icon: "Layers" },
      { title: "提升醫療資源效率", description: "遠距合理分流輕症，保留實體急重症病患量能。", icon: "Cpu" }
    ],
    footerText: "無縫醫療網絡，讓專業關懷直達偏鄉與居家。",
    diagramStyle: "values"
  },
  {
    page: 5,
    title: "台灣遠距醫療的三階段演進",
    subtitle: "從特例開放、應急政策到「常態化通訊診療辦法」新里程碑",
    points: [
      {
        title: "早期發展 (Pre-COVID)",
        description: "主要聚焦於山地、離島及偏遠地區會診，旨在解決偏鄉資源匱乏與專科醫師不足的問題。"
      },
      {
        title: "疫情催化 (COVID-19 期間)",
        description: "擴展至門診追蹤、隔離諮詢與慢箋開立，促使大眾快速適應線上看診並加速系統擴張。"
      },
      {
        title: "法規落實與新常態 (2024 年與未來)",
        description: "2024年1月《通訊診察治療辦法》修正。從緊急應變轉向標準慢性病管理、出院追蹤與長照機構協同支援。"
      }
    ],
    footerText: "台灣遠距法規全面突破，大步邁向雲端新常態。",
    diagramStyle: "evolution"
  },
  {
    page: 6,
    title: "邁向長照 3.0：從服務提供到精準賦能",
    subtitle: "長照政策大躍進，以科技全面引導預防失能與全人融合",
    tableData: [
      { label: "核心理念", ptA: "「找得到、看得見、用得到」", ptB: "整合服務、預防失能、智慧科技精準賦能" },
      { label: "服務重點", ptA: "基礎居家、日照、喘息與交通接送服務", ptB: "積極復能訓練、安寧善終與人性化居家照護" },
      { label: "系統架構", ptA: "實體社區整體照顧服務體系 (A-B-C 據點)", ptB: "醫療院所與長照單位的深度數位與實體關聯銜接" },
      { label: "家庭角色", ptA: "被動接受政府或派件之照護服務", ptB: "強化家庭照顧者支持（結合心理、資訊與訓練）" }
    ],
    footerText: "政策精準賦能，智慧長照 3.0 全面守護。",
    diagramStyle: "shift"
  },
  {
    page: 7,
    title: "智慧長照的居家實踐藍圖",
    subtitle: "健康智慧住宅：感知設備、人工智慧與平台協作之理想配置",
    points: [
      { title: "跨單位資料整合", description: "居家生理數據無縫同步至合作醫院與長照中心後台。" },
      { title: "照顧者支持", description: "當偵測到血壓等關鍵異常，自動即時發送警示推播給遠方子女。" },
      { title: "生命徵象監測", description: "利用穿戴裝置（手環、指夾）與智慧床墊持續紀錄生理徵象數據。" },
      { title: "照顧提醒", description: "互動平板自動推播語音，貼心通知用藥、飲水與高齡復健時程。" },
      { title: "智慧輔具與安全", description: "防跌倒多譜雷達與無感緊急雷達感測呼叫系統，打造零盲區居家。" },
      { title: "AI 復能訓練", description: "互動電視結合姿態辨識，無痛引導精準高齡關節伸展、居家自主復健。" }
    ],
    footerText: "科技走入客廳與臥房，讓居家照護無死角、更顯溫度。",
    diagramStyle: "blueprint"
  },
  {
    page: 8,
    title: "無縫照護網絡：遠距醫療與智慧長照的閉環整合",
    subtitle: "打破臨床醫療與日常居家邊界，形成永續守護閉環 (Closed-loop)",
    points: [
      { title: "1. 居家健康資料蒐集", description: "透過智慧設備、量測儀器每日自動記錄生理徵象並加密上網。" },
      { title: "2. 醫療專業遠距判斷", description: "雲端大數據偵測，醫師一鍵審查病歷，必要時一指啟動視訊看診。" },
      { title: "3. 長照服務即時銜接", description: "依據遠端電子醫囑，長照機構主動送藥或直接派遣復能人員到府。" },
      { title: "4. 家庭照顧者共同參與", description: "家屬透過 APP 透明掌握長輩動態看板，資訊無落差，共享支持系統。" },
      { title: "5. 持續追蹤與動態回饋", description: "數據回饋，循序調整照護指南，形成全面、閉環、安全的生命防線。" }
    ],
    footerText: "遠距醫療(智慧長照)一站式閉環，讓銀髮照護沒有斷點。",
    diagramStyle: "loop"
  },
  {
    page: 9,
    title: "實境解析：慢性病長者的無縫照護旅程",
    subtitle: "一個日常案例：以技術、生理資料整合對接醫護實體服務",
    points: [
      { title: "數據與科技驅動 (早晨 / 中午)", description: "早起血糖儀同步上傳偏高數據，AI篩檢標記高風險並通知團隊，下午雲端更新處方傳送藥局，翌日APP推播家屬。" },
      { title: "醫護與人員介入 (下午 / 隔日)", description: "無需手寫登記，中午醫師即刻發起一對一遠距診察與用藥指導，下午藥物宅配到府，翌日復健專車到家。" }
    ],
    footerText: "結合科技的高效能與醫護的溫暖看顧，為高齡患者打造無摩擦的一天。",
    diagramStyle: "timeline"
  },
  {
    page: 10,
    title: "落地實踐的雷達診斷：三大系統性挑戰",
    subtitle: "遠距醫療推行之核心瓶頸與因應策略",
    points: [
      {
        title: "人性與社會適應",
        description: "高齡患者面臨嚴重「數位落差」，亟需免除繁複的無障礙親切介面；且不少病患對傳統「面對面把脈」存有高心理信賴偏好，需建立信任度，同時避免加重醫護行政系統負擔。"
      },
      {
        title: "法規與資安邊界",
        description: "數據通訊需要「最高隱私保護」，務必遵守個資法；線上發起需要實時且安全的「健保卡人卡覆核與身分核驗」機制，同時明確界定遠距過濾中之診療事故責任。"
      },
      {
        title: "基礎建設落差",
        description: "東部、深山或偏遠離島之「基層寬頻基礎建設與載具普及度」仍有空缺，極大限制了偏遠弱勢群落之就醫可近性。"
      }
    ],
    footerText: "克服社會、技術與法治挑戰，才能讓遠距醫療永續生根。",
    diagramStyle: "challenges"
  },
  {
    page: 11,
    title: "系統典範轉移：從「醫院中心」到「生活中心」",
    subtitle: "未來十年的照護大趨勢：醫療院所化為守護後盾，居家化為看診現場",
    points: [
      { title: "過去 - 以大型醫院為中心", description: "病患不分輕重症皆往核心醫院奔波，導致實體院區擁擠，交通折返重疊並形成龐大高齡者出門消耗。" },
      { title: "未來 - 以生活日常場域為中心", description: "以患者「溫馨居所」為中樞，互聯遠距平台、社區診所、專科醫院、社區日照長照據點，織就一體化守護網。" }
    ],
    footerText: "把醫療資源帶入患者家中，重新定義人道的照護生態系。",
    diagramStyle: "shift"
  },
  {
    page: 12,
    title: "未來展望：科技賦能的人性化照護",
    subtitle: "讓智慧科技在背後運算，把溫暖與時間留給臨床接觸",
    points: [
      { title: "遠距醫療常態化", description: "通訊診療常規化，患者慢病照護無縫接軌融入日常生活，真正成為新常態。" },
      { title: "個人化健康大數據", description: "由安全AI算法持續解碼個人各項穿戴常態，在急性病情發作前夕建立智能預警。" },
      { title: "跨域資料深度整合", description: "健保署、基層診所、大型醫院、長照機構達成單一資料權限整合，阻絕資訊孤島。" },
      { title: "極致無障礙親和設計", description: "語音、手勢或一按即通之科技，消除高齡者最後一公里操作焦慮。" }
    ],
    footerText: "「科技只是橋梁，最終目標是建立充滿尊嚴、連續且溫暖的照護網絡。」",
    diagramStyle: "futureGrid"
  }
];

export const SLIDE_DECK_B: SlideItem[] = [
  {
    page: 1,
    title: "陽光遠距醫療系統",
    subtitle: "SUNSHINE TELEHEALTH PORTAL 系統實作成果與開發上線展示",
    footerText: "長榮大學醫務管理學系 ｜ 陳妤妮 同學期末實作平台專報",
    diagramStyle: "vision"
  },
  {
    page: 2,
    title: "從實體擁擠到雲端透明：系統開發願景",
    subtitle: "本期末網頁平台實作解決之三維度醫務管理痛點",
    points: [
      {
        title: "1. 消除就醫實體距離",
        description: "免除長途跋涉、長輩舟車勞頓與長照患者之交通阻隔障礙，免裝 App 即可一鍵看診。",
        icon: "ShieldAlert"
      },
      {
        title: "2. 整合身分前置作業",
        description: "突破在線健保實體卡核對、拍照建檔、卡號輸入程序，完全化繁為簡、直覺覆核。",
        icon: "UserSearch"
      },
      {
        title: "3. 智慧排程後台一站搞定",
        description: "實踐無紙化，不限量看診預約列表、動態醫事人員排班、指派狀態流暢調度。",
        icon: "Workflow"
      }
    ],
    footerText: "「跨距問診，愛無間斷」之最佳實踐原型。",
    diagramStyle: "challenges"
  },
  {
    page: 3,
    title: "敏捷開發架構與實際上線流程",
    subtitle: "結合 Google AI Studio 自然語言規劃與前端現代框架快速部署全球",
    points: [
      { title: "邏輯大腦 Google AI Studio", description: "使用自然語言提示規劃病人端遠距流程、醫護審查大卡控制台與管理員班表修改後台架構，代碼結構清晰。" },
      { title: "親切介面 前端 RWD 等技術", description: "以 React + Tailwind CSS 實現符合 44px 觸控之無障礙版面，色調溫馨，兼顧電腦與平板、手機高相容度。" },
      { title: "Netlify 雲端敏捷部署全球", description: "串接 Netlify 發布，支援一鍵更新與高安全 HTTPS 加密，讓指導老師張祐倉老師隨手皆可測試考評。" }
    ],
    footerText: "敏捷規劃：AI 規劃 -> 介面開發 -> 雙端測試 -> 雲端部署 -> 同學 UAT 實測。",
    diagramStyle: "values"
  },
  {
    page: 4,
    title: "系統核心生態系：三大權限角色矩陣",
    subtitle: "病人、醫護、主管三位一體，全功能、多終端完美整合運作",
    points: [
      {
        title: "病人端 (Patient Portal)",
        description: "一站式健保卡極速建檔，隨手點選科別排班醫師、輸入健康狀況主訴，並即時查驗診察進度。",
        icon: "User"
      },
      {
        title: "醫護端 (Medical Staff Control)",
        description: "首創「今日看診計量漏斗」，支援病人搜尋，看見病人上傳健保影像，實現無紙線上門診人工覆核。",
        icon: "ShieldAlert"
      },
      {
        title: "管理端 (Admin Center)",
        description: "系統最高後台，可追加開設科別、配置科系範疇、指派值班醫護團隊、一鍵切換視訊診療候診控制開關。",
        icon: "Sliders"
      }
    ],
    footerText: "三端系統相互配合，完美的虛擬診所雲端中樞。",
    diagramStyle: "roles"
  },
  {
    page: 5,
    title: "病患旅程 (1/2)：零摩擦的數位建檔與認證",
    subtitle: "病人註冊、線上健保卡人工覆對之具體操作展示",
    points: [
      { title: "第一步：病人簡明註冊", description: "輸入病歷基本名冊建立，隨時支援手機、行動設備與桌機註冊。" },
      { title: "第二步：安全健保卡拍攝建檔", description: "點選啟動相機、拖放照片檔案，或貼心點按『一鍵生成範例健保卡影像』。" },
      { title: "第三步：人工校正核對發送", description: "人工讀卡、校對健保序號、真實姓名與出生年月日，送出建立高標準身分病歷系統。" }
    ],
    footerText: "為兼顧測試資安隱私發想『一鍵生成範例建保卡程式』，體驗前所未有的流暢！",
    diagramStyle: "values"
  },
  {
    page: 6,
    title: "病患旅程 (2/2)：直覺化遠距預約與進度追蹤",
    subtitle: "科別自選篩選、醫生班表、主訴留言與看診單產生機制",
    points: [
      { title: "智慧選擇與預約門診", description: "病人可直接點按，依院區挑選所需科別（家醫、兒科等）與值勤醫學專家排診時間。" },
      { title: "病理 Chief Complaint 預填", description: "手動或一鍵隨之填寫當前症狀（例如咳嗽、頭痛等不適），協助醫師提前判斷病情。" },
      { title: "電子看診掛號單生成與追踪", description: "提交後系統即刻更新『我的掛號狀態』序列，透明防錯、動態在線查詢防落空。" }
    ],
    footerText: "完整遠距門診掛號拼圖：科別選擇 -> 輸入主訴 -> 自動掛號單 -> 狀態歷程監控。",
    diagramStyle: "values"
  },
  {
    page: 7,
    title: "醫護控制台：一站式遠距診療指揮中心",
    subtitle: "今日候診大廳、健保卡核驗、一指推移看診病程流向配置",
    points: [
      { title: "即時臨床核心漏斗看板", description: "自動即時匯總今日掛號總指標：掛號計量、待認明身分、候診中、看診完毕回報資訊。" },
      { title: "高功能病歷搜尋與標籤過濾", description: "可同時搜索病患姓名、健保編號或用科別快速排序，一指掌握初診/複診標籤、看診歷程。" },
      { title: "健保卡影像身分覆驗大卡", description: "大卡直接渲染展現病患上傳之實體卡，醫護人工一指對應姓名及卡號，確保實名安全醫療。" },
      { title: "一鍵進程更新按鈕控制", description: "醫師與助理直接點按『開立診察、切換看診中、完成看診、取消掛號』，對接病人即時警示。" }
    ],
    footerText: "一站掌握身分核對與看診排序，真正免除實體病舍奔折等候。",
    diagramStyle: "blueprint"
  },
  {
    page: 8,
    title: "管理員樞紐：彈性的門診資源與配置規劃",
    subtitle: "動態修訂看診科系與醫師排診班次控制台",
    points: [
      { title: "1. 看診院區科系新增卸載", description: "主管能追加自訂英譯科別、中文名稱、主述科系願景與細項簡述，極具擴充便利度。" },
      { title: "2. 主治醫師出診名冊與管轄指派", description: "一體化增設在職醫師、安排對應科別，主管能實時監控各科線上主政醫師名冊。" },
      { title: "3. 一鍵開關遠距看診資質", description: "點選即可設定該醫師今日是否開放挂診，靈活調節實體門診高流動之臨床突發調度。" }
    ],
    footerText: "指尖輕點完成全院排班，大幅解碼醫管體系人資配置阻抗。",
    diagramStyle: "blueprint"
  },
  {
    page: 9,
    title: "適用對象：打造無邊界的醫療可近性",
    subtitle: "這套陽光醫療系統專題為六大長照與偏鄉痛點量身客製",
    points: [
      { title: "1. 基層執業診所", description: "偏鄉小型聯合診所、家庭衛生所快速開啟線上看診分流，零成本轉型。" },
      { title: "2. 多重慢病案主", description: "高血壓、慢病規律常備回診開立箋單老人，免去常態奔波與交通耗費。" },
      { title: "3. 居家照顧高齡老者", description: "高齡多病不便移轉之患者，在家直接享有醫護指導。" },
      { title: "4. 外流偏鄉住民", description: "偏山群落交通不便居民免乘返市公車，節省出門成本與大把返程折耗。" },
      { title: "5. 受限行動不便住民", description: "輪椅族群、高齡照護長輩，徹底排除實體進出大門障礙。" },
      { title: "6. 長照日照養護機構", description: "機構照顧人員可一次代管、一次看顧, 輕鬆對接簽署合約診所醫師。" }
    ],
    footerText: "守護最弱勢族群，真正踐履健康台灣之全民可近性藍圖。",
    diagramStyle: "values"
  },
  {
    page: 10,
    title: "價值主張：共創三贏的智慧醫療生態系",
    subtitle: "陽光遠距醫療實踐多維營運之社會價值體系",
    points: [
      {
        title: "病人端 (就醫高便利)",
        description: "省去現場冗長排卡、交通折病成本，流程透明有安全度，高齡看診舒適度升格性提速。"
      },
      {
        title: "醫護端 (大幅提高調度時效)",
        description: "提前了解病患主訴填記、完成人卡相符前置審查，極致釋放臨床精力，看診無紙化且安心。"
      },
      {
        title: "醫療院所 (降低實體行政耗損)",
        description: "流暢分流院內實體大廳排隊壓力，靈活開設或移轉醫事排班，契合健康台灣科技醫療示範。"
      }
    ],
    footerText: "創造三方獲利新高度，醫防一站融合好榜樣。",
    diagramStyle: "threeWin"
  },
  {
    page: 11,
    title: "推廣策略：從校園驗證到機構落地",
    subtitle: "專題商品化、草根推廣與深度長照合作之三階段 Roadmap",
    points: [
      {
        title: "1. 近期：校園與同儕高可靠測試",
        description: "於長榮大學課堂課評中聽取教授大綱考卷意見；海報列印專題 QR 碼邀請 5 位以上同儕實測並分析回饋，取得高可信草根肯定。"
      },
      {
        title: "2. 中期：衛教包裝與全村賦能",
        description: "精心製成一鍵看診視頻上架 YouTube；深入鄰里中心發佈圖畫傳單；推行高齡看診操作懶人包，掃除高齡者數位屏障焦慮。"
      },
      {
        title: "3. 長期：長照與大型診所深度引流",
        description: "與長照服務、社區診所啟動 SaaS 進階代預排看診模式，串接生理物聯網上傳，達成非急重慢箋全方位高親照護整合。"
      }
    ],
    footerText: "循序漸進，由點及面。把學術期末專題完美化為可商業落地之實用方案。",
    diagramStyle: "timeline"
  },
  {
    page: 12,
    title: "商業模式：彈性的 SaaS 雲端訂閱計費",
    subtitle: "為家庭診所、中大型診所及養護集團提供可承受之按月訂閱服務",
    points: [
      {
        title: "基礎方案 (微型診所/獨立衛生所)",
        description: "NT$ 3,000 - 5,000 / 月 ｜ 基礎掛號預約序列，1組醫護審查入口，支援範例卡，不開放自訂科系。適合初探雲端診察之诊所。"
      },
      {
        title: "標準方案 (中型診所/聯合家醫科)",
        description: "NT$ 8,000 - 15,000 / 月 ｜ 支援不限量病歷、5組多醫護在線覆核，管理員排班醫師控制面板，提供初級門診數據統計。"
      },
      {
        title: "進階方案 (大型教學醫院/長照養護集團)",
        description: "NT$ 20,000+ / 月 ｜ 支援跨院區百位醫師排診。長照家護代理人掛號。深度提供 HIS / EMR API 對接工程與客製 UI 標識設計。"
      }
    ],
    footerText: "一站客製、按月訂閱、無限擴容。超過合約人均用度每人次加收 NT$20-50 元，創利良性循環。",
    diagramStyle: "futureGrid"
  },
  {
    page: 13,
    title: "總結與未來藍圖：邁向全方位數位醫療",
    subtitle: "科技賦能遠距就醫，使關懷與愛心跨越疆界與塵土時空阻隔",
    points: [
      { title: "系統開發最終成果總括", description: "陽光遠距醫療系統成功透過病人拍攝健保線上掛診、醫護一站覆核、管理端班表隨心搭配完備對接。實測 100% 通過，完美演示醫患痛點消除過程。" },
      { title: "下一步升級升格四大目標", description: "1. 串接衛福部 FHIR HIS 醫事大病歷。 2. 支持 WebRTC 實體在線流暢多方通話會診。 3. 串接第三方金流、電子處方與鄰家藥局取藥。 4. AI 自然語言症狀初步分導，精準照護預警監控。" }
    ],
    footerText: "「科技點亮長照心，陽光醫療護萬家。」謝謝老師與同窗的在線考查與指點！",
    diagramStyle: "timeline"
  }
];
