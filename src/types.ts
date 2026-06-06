/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Core types for the Telemedicine Showcase App

export interface PartACard {
  id: string;
  title: string;
  subtitle?: string;
  icon: string;
  items: string[];
}

export interface PartBCard {
  id: string;
  title: string;
  subtitle?: string;
  icon: string;
  description: string;
}

export interface TimelineEvent {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface RoleInfo {
  role: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface FlowStep {
  step: number;
  title: string;
  description: string;
}

export interface PresentationInfo {
  id: string;
  title: string;
  type: string;
  description: string;
  keyPoints: string[];
  pdfLink: string;
}

export interface LinkItem {
  category: "PartA" | "PartB";
  type: "Video" | "Website";
  title: string;
  subtitle: string;
  url: string;
}

export interface StudentTestResult {
  student: string;
  role: string;
  items: string;
  status: "完成" | "進行中" | "異常";
  notes: string;
}

export interface BenefitItem {
  target: string;
  description: string;
  icon: string;
  points: string[];
}

export interface TargetUser {
  title: string;
  description: string;
  icon: string;
}

export interface PromotionStage {
  stage: string;
  title: string;
  icon: string;
  items: string[];
}

export interface PricePlan {
  title: string;
  target: string;
  price: string;
  features: string[];
  badge?: string;
}

export interface LimitationItem {
  id: number;
  text: string;
}

export interface FutureDirection {
  title: string;
  points: string[];
  icon: string;
}

// Static Data conforming to the specified types

export const PART_A_DATA: PartACard[] = [
  {
    id: "challenge",
    title: "系統轉型的三大挑戰",
    subtitle: "Healthcare Transition Challenges",
    icon: "AlertTriangle",
    items: [
      "高齡人口結構：高齡社會延伸多重慢性病與照護資源負荷",
      "慢性病盛行率攀升：需由偶發性院內治療轉化為長期日常追蹤",
      "家庭照顧者老化與照顧壓力：照顧人力短缺且面臨身心疲憊困境"
    ]
  },
  {
    id: "vision",
    title: "健康台灣的連續性照護願景",
    subtitle: "Continuous Care Blueprint",
    icon: "HeartHandshake",
    items: [
      "從治療延伸到預防：落實自主健康促進與早篩制度",
      "從醫院內延伸到生活中：建立無阻礙居家生理監測網路",
      "從疾病處理轉向健康管理：落實個人化全天候照護指導",
      "完整健康照護環節：串接「預防、篩檢、管理、治療、照護」"
    ]
  },
  {
    id: "value",
    title: "遠距醫療的核心價值",
    subtitle: "Core Benefits & Values",
    icon: "Share2",
    items: [
      "提升醫療可近性：降低偏鄉與行動不便族群之空間阻隔",
      "慢性病長期追蹤：即時上傳生理數據由醫護團隊規律把關",
      "降低照顧者負擔：大幅減少實體往返診所與排隊等候成本",
      "強化醫療與民眾連結：醫務關懷直送居家，提升信賴感",
      "提升醫療資源效率：合理分流輕症病人，釋放門診壓力"
    ]
  },
  {
    id: "milestone",
    title: "台灣遠距醫療發展進程",
    subtitle: "Developmental Timeline",
    icon: "Gauge",
    items: [
      "早期發展：偏鄉與離島之視訊會診、急症緊急共同會診",
      "疫情催化：COVID-19 期間打破法規圍籬，加速普及視訊診療",
      "法規落實與新常態：通訊診療辦法擴大適用，常態化追蹤機制正式上軌"
    ]
  },
  {
    id: "ltc",
    title: "智慧長照與長照 3.0",
    subtitle: "Smart Long-term Care 3.0",
    icon: "Activity",
    items: [
      "從服務提供轉向精準賦能：運用科技輔具提升自我照顧能力",
      "整合服務、預防失能與智慧科技：串聯IoT設備與健康防線",
      "強化家庭照顧者支持：減壓喘息服務搭配線上遠距諮詢",
      "無縫照護網：對接「醫療院所、長照機構、社區據點與居家照護」"
    ]
  },
  {
    id: "future",
    title: "未來展望與願景",
    subtitle: "Future Evolution",
    icon: "Sparkles",
    items: [
      "遠距醫療常態化：融入常態健保給付與多元診療場景",
      "個人化健康管理：大數據與智慧穿載引領高精準照護預測",
      "跨域資料深度整合：病歷與生理指標雲端整合，提供全人照護",
      "無障礙友善設計：專為銀髮族設計的極簡無障礙科技導覽"
    ]
  }
];

export const PART_B_DATA: PartBCard[] = [
  {
    id: "b-name",
    title: "系統名稱與主軸",
    description: "陽光遠距醫療系統 (Sunshine Telehealth Portal)。以簡約、溫馨的一站式網頁流程，重新定義醫患雙方的遠距視訊掛號與健康追蹤體驗。",
    icon: "Stethoscope"
  },
  {
    id: "b-spirit",
    title: "系統核心理念",
    description: "「跨距問診，愛無間斷」是陽光醫療的核心宗旨。打破地理疆界，讓關懷與專業醫療資源能以最有溫度、最有效率的方式送達每一個家庭與機構。",
    icon: "Heart"
  },
  {
    id: "b-purpose",
    title: "開發目的",
    description: "建立一套可展示、易操作的遠距醫療掛號與醫護管理實作平台，讓病人免出門即可完成健保卡線上註冊與精準掛號，並支持醫護端進行後台審核。",
    icon: "Target"
  },
  {
    id: "b-tools",
    title: "系統開發工具",
    description: "本系統運用 Google AI Studio 協作架構與資料流規劃；前端採用 React + Vite 快速構建優雅的響應式網頁；設計上追求高對比、對長者友善的溫煦配色；使用 NotebookLM 生成精準的期末報告與展示影音素材，並以 Netlify 雲端服務快速部署至全球上線。",
    icon: "Settings"
  },
  {
    id: "b-status",
    title: "系統實際上線",
    description: "本系統已透過高可靠度雲端平台 Netlify 正式發布，支援電腦及行動裝置在線實時操作，為醫療、學術與測試人員提供完整的期末成果演示環境。",
    icon: "Globe"
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    step: 1,
    title: "AI 架構規劃",
    description: "使用 Google AI Studio 深度協作，梳理遠距醫療系統關鍵流程，設計出兼顧「病人註冊掛號」、「醫護看診管理」與「管理員資源調度」的三端架構模型。",
    icon: "Lightbulb"
  },
  {
    step: 2,
    title: "前端網頁與資料庫開發",
    description: "建置一站式角色快速切換。開發病歷卡建立、模擬健保卡相機/上傳建檔、自動核驗卡號、遠距科別預約掛號與狀態查詢等功能，確保流程直覺完整。",
    icon: "Code2"
  },
  {
    step: 3,
    title: "三大角色工作流測試",
    description: "反覆模擬病人端、醫護端、管理員端的相互關聯與控制邏輯。確認病人送出掛號後，醫護控制台與管理員配置能即時更新看診進度與預約狀態。",
    icon: "CheckSquare"
  },
  {
    step: 4,
    title: "Netlify 雲端發布上線",
    description: "將程式碼推入部署管線，在 Netlify 雲端自動化建置，發布安全、高速、可隨時對外展示的正式線上系統 (https://legendary-tiramisu-1064a4.netlify.app/)。",
    icon: "CloudLightning"
  },
  {
    step: 5,
    title: "五位同學邀請與測試驗證",
    description: "邀請長榮大學醫管系同窗進行在線實時測試。每位測試同窗皆成功走完註冊、健保卡 AI 建檔、遠距掛號與狀態追蹤等完整核心環節，完成學術可行性驗證。",
    icon: "Users"
  }
];

export const SYSTEM_ROLES_DATA: RoleInfo[] = [
  {
    role: "patient",
    title: "病人端 (Patient Portal)",
    description: "專為長者、慢性病人與偏鄉居民設計的親和介面。大字體、高對比的無障礙一站式健保卡登記與預約掛號工具。",
    icon: "User",
    features: [
      "個人資料與病歷卡快速註冊",
      "模擬健保卡拍攝、拖曳上傳與一鍵範例健保卡建檔",
      "身分資料人工比對對接，核對卡號、生日與姓名",
      "遠距診察掛號：依科別對應線上醫師，填寫當前不適主訴",
      "進度狀態儀表板：即時查詢遠距候診狀態與門診排序"
    ]
  },
  {
    role: "staff",
    title: "醫護端 (Medical Staff Control)",
    description: "醫護團隊的日常視訊控制塔。一目了然看診清單、預先審查健保卡、病人主訴與看診進度調配。",
    icon: "ShieldAlert",
    features: [
      "今日門診關鍵指標：預約總數、待審查人數、預備看診與完成看診",
      "多功能搜尋過濾：可依病人姓名、健保卡號或病歷代碼快速篩選",
      "病歷主訴速覽：掌握預約病人基本生理狀況與本次遠距看診主訴",
      "健保實體卡影像人工比對功能，快速確認人卡相符與身分註冊",
      "一鍵更新看診狀態：流暢切換候診、看診中、已看診與缺席狀態"
    ]
  },
  {
    role: "admin",
    title: "管理員端 (Admin Configurator)",
    description: "系統後台神經中樞。維護基礎科別資訊、醫師排班，靈活調配寶貴且有限的雲端醫療視訊資源與看診門限。",
    icon: "Sliders",
    features: [
      "看診科別彈性調整：配置科別代碼、中文名稱與科別核心願景",
      "醫師排班配置：指派醫師科別、職稱，並指定可視訊名額",
      "可控制「是否開放線上掛號」，因應實體門診與視訊門診突發調度",
      "極簡儀表板：維護診所醫師與基礎科別資訊，維運調度快速便捷"
    ]
  }
];

export const PATIENT_FLOW_DATA: FlowStep[] = [
  { step: 1, title: "進入系統首頁", description: "點選「進入陽光遠距醫療系統」體驗一站式看診介面。" },
  { step: 2, title: "切換病人端 Patient", description: "首頁切換到病人入口，並可選擇一鍵體驗或自主註冊。" },
  { step: 3, title: "建立新病歷卡", description: "點擊新病歷卡建立，輸入個人基礎身心常備病歷背景。" },
  { step: 4, title: "健保卡建檔註冊", description: "輸入身分證號、姓名與手機，準備上傳健保卡以完成身分驗證。" },
  { step: 5, title: "上傳健保卡影像", description: "點擊相機拍照、拖曳檔案，或使用一鍵生成模擬優雅範例健保卡。" },
  { step: 6, title: "核對欄位比對", description: "系統與健保卡影像人工覆核，帶入並校對姓名、生日、健保卡卡號。" },
  { step: 7, title: "身分與建檔儲存", description: "儲存健保卡資料卡，成功完成醫療系統前端病歷卡註冊程序。" },
  { step: 8, title: "前往遠距掛號表單", description: "點擊「線上遠距掛號」功能，進入科別與醫師篩選系統。" },
  { step: 9, title: "選擇科別、排班醫師", description: "篩選所需門診科別（如：家醫科、心臟內科），指定看診日期與時段。" },
  { step: 10, title: "寫下個人主訴 (Chief Complaint)", description: "寫下「近日血壓較高，且伴隨頭暈不適」等主訴，幫助醫師預判病情。" },
  { step: 11, title: "確認並送出掛號", description: "二次確認門診資訊無誤，儲存並提交模擬，即刻對接雲端進度資料排程。" },
  { step: 12, title: "即時查詢狀態", description: "回到「我的掛號狀態」看板，實時追蹤「候診中、看診中、已完成」排序。" }
];

export const PRESENTATIONS_DATA: PresentationInfo[] = [
  {
    id: "pres-a",
    title: "遠距醫療與智慧長照",
    type: "PartA 理論成果報告簡報",
    description: "本簡報由長榮大學醫管系陳妤妮同學製作，完整綜整、分析台灣當前面對高齡化、慢性病及照顧壓力等社會隱憂，探討「健康台灣」之政策與智慧科技賦能的融合，特別針對我國長照 3.0 與遠距醫療通訊診療辦法的推展深度探析。",
    keyPoints: [
      "高齡社會挑戰：全台高齡結構剖析、多重慢病管理難點、照顧壓力與因應之道",
      "健康台灣方針：提倡「預防、篩檢、管理、治療、照護」之五位一體照護網絡",
      "遠距的核心價值：提升醫療可近性、長期追蹤、健全家庭支持並增補偏鄉資源",
      "智慧長照 3.0 原理：由被動服務轉變為自主賦能，建立跨單位雲端無縫醫療連結"
    ],
    pdfLink: "#"
  },
  {
    id: "pres-b",
    title: "陽光遠距醫療系統",
    type: "PartB 實作專案與營運規劃簡報",
    description: "本簡報聚焦於實作系統「陽光遠距醫療系統（Sunshine Telehealth Portal）」的完整技術架構、UI 設計、三端（病人、醫護、管理）工作流、同學實際線上測試紀錄，並詳細研擬了該 SaaS 系統未來的應用推廣策略與階段主辦收費機制。",
    keyPoints: [
      "系統開發起因：打破看診擁擠、高齡舟車勞頓，提供一站式健保卡註冊與視訊排診",
      "雙雲端整合建置：Google AI Studio 技術協作，前端 React + Vite，Netlify 發布",
      "三大角色切換驗證：病人一線式掛號、醫護一體化看板與管理員彈性排班功能展示",
      "營運願景推展：針對診所、高齡家庭及機構提供靈活 SaaS 訂閱方案與三贏好處表敘"
    ],
    pdfLink: "#"
  }
];

export const LINKS_DATA: LinkItem[] = [
  {
    category: "PartA",
    type: "Video",
    title: "PartA 理論成果 YouTube 影片",
    subtitle: "影片名稱：遠距醫療、智慧長照與健康台灣願景",
    url: "https://www.youtube.com/watch?v=Mq-EZFSSAVw"
  },
  {
    category: "PartA",
    type: "Website",
    title: "PartA 成果主題網站",
    subtitle: "Lovable Web Port：遠距醫療與智慧長照宣導網站",
    url: "https://home-health-stream.lovable.app/"
  },
  {
    category: "PartB",
    type: "Video",
    title: "PartB 實作成果 YouTube 影片",
    subtitle: "影片名稱：陽光遠距醫療系統：翻轉遠距醫療體驗",
    url: "https://www.youtube.com/watch?v=HyU1t5ZaEkc"
  },
  {
    category: "PartB",
    type: "Website",
    title: "PartB 陽光遠距醫療實作系統",
    subtitle: "Netlify Cloud Site：三端在線模擬與健保卡核對系統",
    url: "https://legendary-tiramisu-1064a4.netlify.app/"
  }
];

export const TESTING_DATA: StudentTestResult[] = [
  { student: "蔡同學", role: "病人端 (Patient)", items: "一鍵病歷卡建立、模擬健保卡建檔、科別掛號、狀態即時追蹤", status: "完成", notes: "流程極佳，模擬健保卡產生器非常貼心，大字體對長者友善" },
  { student: "張同學", role: "病人端 (Patient)", items: "病歷卡建立、外接相機拍照上傳、掛號排班預約、主訴填寫", status: "完成", notes: "在手機端操作 RWD 版面相當清晰流暢，送出掛號後醫護端很快能看到" },
  { student: "許同學", role: "病人端 (Patient)", items: "病歷建立、健保卡核驗確認、家醫科隨機醫師預約、主訴儲存", status: "完成", notes: "整個流程十分順手，模擬上傳的速度也很快，畫面有現代感" },
  { student: "王同學", role: "病人端 (Patient)", items: "病歷註冊、模擬上傳、健保卡卡號確認、心臟內科視訊預約、查詢狀態", status: "完成", notes: "系統操作指示簡單明瞭，十分契合高齡身心跟醫管系教學情境" },
  { student: "李同學", role: "病人端 (Patient)", items: "病歷卡註冊、模擬卡建檔、掛號送出、確認狀態列表切換", status: "完成", notes: "無卡關情況，三端切換體驗很直覺，非常棒的期末報告實作" }
];

export const BENEFITS_DATA: BenefitItem[] = [
  {
    target: "對病人 (For Patients)",
    description: "完全排除出門求診的舟車勞頓與院內高傳播風險，為行動不便及慢性病長者量身打造無縫診療。",
    icon: "UserCheck",
    points: [
      "提升就醫便利性：免出門線上隨時發起諮詢",
      "減少龐大交通與漫長排隊等候負擔，降低高齡長輩體力消耗",
      "自訂簡明病歷卡，上網即可拍攝或極速上傳健保卡自動核對",
      "獨立掛號即時進度看板，幾號能看診、何時準備視訊一目了然",
      "完美契合高齡者、多重慢病患者、離島偏鄉民與家庭長照患者"
    ]
  },
  {
    target: "對醫護人員 (For Medical Staff)",
    description: "全面優化日常實體諮詢之外的掛號排程，提供看診前全方位病人主訴與實體卡核備備份。",
    icon: "Shield",
    points: [
      "提前全盤掌握病人生理概況與主訴症狀，提早進行診斷準備",
      "線上直覺核驗健保卡照片，病歷號與真實身分資訊一鍵人工確認入檔",
      "降低實體櫃台人工收件與登錄建檔的工作失誤以及重製時間成本",
      "流暢的遠距候診管制按鈕（待看診、看診中、已完成、缺席），提效診療",
      "安全便捷整合雲端照護資料，看診節奏與護理核備更加專注流暢"
    ]
  },
  {
    target: "對醫療院所與管理單位 (For Institutions)",
    description: "協助院長及行政主管在雲端進行流暢精緻的部門科別調配與在線視訊醫師值班看板管制。",
    icon: "Building2",
    points: [
      "有效排解實體醫院門診大廳人滿為患的擁擠亂象，做好社區分流",
      "擴充醫院服務能量：由物理病舍往雲端虛擬照護病房延伸擴充",
      "彈性指派管理值班醫師、新增線上微調科別，高度智慧化調度資源",
      "引領醫療流程全面走向低碳環保綠色醫療，支持智慧長照與長照數位整合",
      "為醫院提供可靠的 SaaS 訂閱和營運流程，實踐健康台灣轉型之行政指標"
    ]
  }
];

export const TARGET_USERS_DATA: TargetUser[] = [
  {
    title: "1. 基層醫療院所",
    description: "希望為社區或鄰里病人快速建立雲端視訊門診與病患分流的家庭中小型診所與衛生所。",
    icon: "Home"
  },
  {
    title: "2. 慢性病追蹤病人",
    description: "需要定期且規律複診、生理數值追蹤（如高血壓、糖尿病）的慢性病患，省去排隊開藥不便。",
    icon: "Heart"
  },
  {
    title: "3. 居家照顧高齡者",
    description: "行動困難、需要家人、外籍看護協助出門看診的重度長照、身心機能衰退長者。",
    icon: "BadgeAlert"
  },
  {
    title: "4. 偏鄉與交通不便者",
    description: "地處偏遠山區、臨海村落或偏鄉離島，實體醫療資源匱乏，前往市區醫院需要半天以上的居民。",
    icon: "Map"
  },
  {
    title: "5. 身心受限行動不便者",
    description: "輪椅族群、手術出院休養中居民，每次實體就醫上下車或尋求復康巴士极为困擾之對象。",
    icon: "Accessibility"
  },
  {
    title: "6. 長照機構與社區據點",
    description: "安養之家、護理之家或社區日照中心照服員，能代表長輩直接與合作醫院開啟視訊掛號追蹤。",
    icon: "Building"
  }
];

export const PROMOTION_STAGES: PromotionStage[] = [
  {
    stage: "第一階段",
    title: "草根推廣與學術驗證（近期）",
    icon: "Sprout",
    items: [
      "長榮大學醫管系校園與課堂專題中展示系統並聽取教授回饋",
      "誠摯邀請 5 位以上同班同學親自操作測試，填寫極速評估問卷",
      "製作美觀的系統示範小卡、QR Code 海報派發，進行高親和小範圍推廣",
      "收集使用情境、高齡視覺辨識、文字大小與按鈕點擊等第一手真實回饋"
    ]
  },
  {
    stage: "第二階段",
    title: "數位賦能與衛教教學（中期）",
    icon: "BookOpenCheck",
    items: [
      "精心製作詳盡的病人端與醫護端「一鍵上手系統教材」並發布在 YouTube 學習平台",
      "打造簡明圖解的實體單張衛教指引，派發至合作社區里民活動中心",
      "舉辦「銀髮族數位通訊看診體驗班」，由志工手把手教長輩開啟系統健保卡註冊與掛號",
      "提供預錄系統畫面，建立專屬患者、家屬操作懶人包，降低高齡數位門檻與恐懼感"
    ]
  },
  {
    stage: "第三階段",
    title: "機構深植與 B2B2C 合作（長期）",
    icon: "Briefcase",
    items: [
      "積極與中小型社區診所、各縣市居家綜合長照機構進行專案試點合作",
      "導入在線遠距諮詢、跨縣市專家合診、居家生理安全預警諮詢",
      "串接機構代掛號平台，照服員一鍵統籌機構下 30 位長輩的家庭視訊醫師挂載服務",
      "探討與健保給付、醫事卡讀卡相容之常規硬體串聯，使陽光醫療正式步入基層實務應用"
    ]
  }
];

export const PRICING_PLANS: PricePlan[] = [
  {
    title: "基礎方案 (Basic)",
    target: "適用對象：中小型社區診所、偏鄉獨立衛生所",
    price: "NT$ 3,000 - 5,000 / 月",
    features: [
      "基本遠距預約掛號功能",
      "病人端簡易資料庫建檔與狀態追蹤",
      "提供健保卡影像照片模擬上傳功能",
      "醫護端 1 組帳號登入進行狀態審查管理",
      "不包含管理員自訂科別等高級調配服務",
      "適合準備試水溫、初次提供視訊診療之微型院所"
    ]
  },
  {
    title: "標準方案 (Standard)",
    target: "適用對象：中大型診所、連鎖專科聯合診所",
    price: "NT$ 8,000 - 15,000 / 月",
    badge: "熱門推薦",
    features: [
      "完整病人端 + 醫護端 + 管理員自訂設定後台",
      "病人端不限量病歷註冊、健保卡 AI 照片核備儲存",
      "醫護審查控制台：支援 5 人同時協作，實時刷新等候序列",
      "管理員端：多科別代碼、醫師班表、視訊診療是否開啟開關",
      "提供完整的流程狀態與門診日數據基本统计",
      "可上傳診所專屬宣傳 Banner 與自訂診所掛號須知"
    ]
  },
  {
    title: "進階方案 (Enterprise)",
    target: "適用對象：地區教學綜合醫院、長照連鎖集團、養護中心",
    price: "NT$ 20,000+ / 月",
    features: [
      "多學群、多院區、百位醫師的大規模配置",
      "跨單位共照網：養護中心照服員代掛號系統免切換帳號",
      "7x24 小時高可靠優先客服，專屬雲端資源獨立布署，保證流暢",
      "支援與 HIS 系統病歷對接技術顧問諮詢與系統擴充",
      "自訂醫療院所專屬品牌色彩 App 的客製化系統版面",
      "支援線上藥局、處方籤簽章流程串接擴展介面"
    ]
  }
];

export const LIMITATIONS_DATA: LimitationItem[] = [
  { id: 1, text: "本系統為長榮大學醫管系之課堂期末成果展示專案，不具備正式醫療臨床診斷與開藥處方等實體法律效力。" },
  { id: 2, text: "純屬學術模擬原型，並未真正與中華民國衛福部健保署或任何實體健保特約醫療機構資料庫串接核驗。" },
  { id: 3, text: "並未與醫院現行實體 HIS（醫療資訊系統）、EMR（電子病歷）或 EHR（電子健康紀錄）系統進行實時接口同步。" },
  { id: 4, text: "病人端健保卡拍攝、拖曳上傳以及自動人工影像比對均為極高親和力流程演示，請勿上傳閣下真實之健保卡以免洩密。" },
  { id: 5, text: "系統內所使用的全部科別、醫師姓名、出班門診時間、多位看診病人名冊、身分證字號與求診主訴皆為學術模擬測試資料。" },
  { id: 6, text: "視訊看診流程目前透過病人「我的掛號狀態」與醫護端「看診狀態（看診中、已完診）」控制實時刷新演示，非實體內建視訊連線通話。" },
  { id: 7, text: "本展示網站目前尚未送審正式之國家醫療級資安隱私與 ISO 資安認證，旨在分享全方位流程設計概念與互動理念。" },
  { id: 8, text: "本課堂成果尚未整合線上第三方金流（信用卡/街口）、電子處方箋下發以及特約社區健保藥局配寄領藥流程。" }
];

export const FUTURE_DIRECTIONS: FutureDirection[] = [
  {
    title: "1. 正式醫療系統 API 深度串接",
    points: [
      "規劃與標準 HL7 FHIR 格式對口，串接醫院 HIS / EMR / EHR 電子病歷資料庫",
      "串接官方健保署虛擬健保卡讀卡模組與行動憑證簽章認證",
      "使在線註冊身分、健保卡讀寫與實體醫院櫃台保持完美的數據一致性"
    ],
    icon: "Cloud"
  },
  {
    title: "2. 遠距診療與藥局物流深化",
    points: [
      "網頁或App內嵌WebRTC高畫質視訊看診，支援醫師線上即時截圖會診",
      "對接第三方安全電子金流，實現線上門診掛號費、健保部分負擔行動支付",
      "電子處方箋安全云端傳遞，授權居家附近健保藥局，甚至支持行動外送領藥"
    ],
    icon: "Video"
  },
  {
    title: "3. AI 門診分流與全生命週期管理",
    points: [
      "基於 AI Natural Language 研發症狀初步分類與導醫系統，引導病人精準掛號",
      "定期推播個人化用藥安全、慢病居家量測提醒與心率血壓異常檢出警示",
      "建立個人健康大數據長期追蹤模型，預警潛在心血管或呼吸道異常風險"
    ],
    icon: "Brain"
  },
  {
    title: "4. 長照 3.0 社區與居家照顧資源全面融合",
    points: [
      "提供家屬與照服員「共同登入與多重代理掛號」，支持三方多點遠距視訊親情看診",
      "建立居家物理 IoT 穿戴設備（計步、血氧計、血壓計）實時上傳機制，連結社區關懷據點",
      "透過大字體語音智慧引導，讓長輩在熟悉舒適的家中就能享受專業醫管系統的照護溫度"
    ],
    icon: "ShieldPlus"
  }
];
