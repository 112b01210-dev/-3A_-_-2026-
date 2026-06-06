/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { DashboardHub } from "./components/DashboardHub";
import { OverviewSection } from "./components/OverviewSection";
import { PartASection } from "./components/PartASection";
import { PartBSection } from "./components/PartBSection";
import { DevelopmentTimeline } from "./components/DevelopmentTimeline";
import { SystemRolesSection } from "./components/SystemRolesSection";
import { PatientFlowSection } from "./components/PatientFlowSection";
import { StaffAdminFlowSection } from "./components/StaffAdminFlowSection";
import { PresentationSection } from "./components/PresentationSection";
import { LinksSection } from "./components/LinksSection";
import { TestingSection } from "./components/TestingSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { TargetUsersSection } from "./components/TargetUsersSection";
import { PromotionSection } from "./components/PromotionSection";
import { PricingSection } from "./components/PricingSection";
import { LimitationsSection } from "./components/LimitationsSection";
import { FutureSection } from "./components/FutureSection";
import { ConclusionSection } from "./components/ConclusionSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeTab, setActiveTab ] = useState<"dashboard" | "theory" | "sandbox" | "slides" | "testing">("dashboard");
  const [pendingScrollTo, setPendingScrollTo] = useState<string | null>(null);

  // Monitor DOM rendering changes to perform high-precision scrolling
  useEffect(() => {
    if (pendingScrollTo) {
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(pendingScrollTo);
        if (el) {
          const offset = 90; // offset of navbar
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          setPendingScrollTo(null);
        } else if (attempts < 12) {
          attempts++;
          setTimeout(tryScroll, 60); // Poll and retry every 60ms until DOM is fully mounted
        } else {
          // If fallback fails after multiple attempts, go dry
          setPendingScrollTo(null);
        }
      };
      
      const timer = setTimeout(tryScroll, 100);
      return () => clearTimeout(timer);
    }
  }, [activeTab, pendingScrollTo]);

  const handleNavigate = (sectionId: string) => {
    let targetTab: "dashboard" | "theory" | "sandbox" | "slides" | "testing" = "dashboard";
    
    if (sectionId === "overview" || sectionId === "parta" || sectionId === "target-users") {
      targetTab = "theory";
    } else if (
      sectionId === "partb" || 
      sectionId === "timeline" || 
      sectionId === "roles" || 
      sectionId === "flow" ||
      sectionId === "patient-flow" ||
      sectionId === "staff-flow"
    ) {
      targetTab = "sandbox";
    } else if (sectionId === "presentation" || sectionId === "links") {
      targetTab = "slides";
    } else if (
      sectionId === "testing" || 
      sectionId === "benefits" ||
      sectionId === "promotion" || 
      sectionId === "pricing" || 
      sectionId === "limitations" || 
      sectionId === "future" || 
      sectionId === "conclusion"
    ) {
      targetTab = "testing";
    }
    
    // 1. Instantly swap page tab
    setActiveTab(targetTab);
    
    // 2. Queue high fidelity scrolling alignment
    setPendingScrollTo(sectionId);
  };

  const handleTabChange = (tab: "dashboard" | "theory" | "sandbox" | "slides" | "testing") => {
    setActiveTab(tab);
    setTimeout(() => {
      const el = document.getElementById("tab-content-start");
      if (el) {
        const offset = 56; // High precision offset matching Navbar height (pt-14 is 56px)
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 80);
  };

  return (
    <div className="bg-[#FAF7F0] min-h-screen font-sans antialiased selection:bg-teal-100 selection:text-teal-900">
      {/* 1. Header Navigation Menu */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Main structure layout */}
      <main className="relative pt-14">
        {/* 2. Hero Header Banner Showcase */}
        <HeroSection />

        {/* Anchor for scrolling */}
        <div id="tab-content-start" />

        {/* Interactive Multi-page Tab Navigator Bar */}
        <div id="tab-navigator" className="sticky top-14 z-30 bg-white border-y border-[#E2E8F0] shadow-2xs py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0E7490] animate-pulse" />
              <div className="text-xs font-bold text-[#1F2937]">
                學生報告多頁式導覽列：
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-1.5 bg-[#FAF7F0] p-1.5 rounded-2xl border border-neutral-200">
              <button
                onClick={() => handleTabChange("dashboard")}
                className={`px-3.5 py-1.5 text-xs font-black rounded-xl transition-all cursor-pointer ${
                  activeTab === "dashboard"
                    ? "bg-[#0E7490] text-white shadow-2xs"
                    : "text-[#64748B] hover:text-[#1F2937]"
                }`}
              >
                📊 1. 成果總覽 (Console)
              </button>
              <button
                onClick={() => handleTabChange("theory")}
                className={`px-3.5 py-1.5 text-xs font-black rounded-xl transition-all cursor-pointer ${
                  activeTab === "theory"
                    ? "bg-[#0E7490] text-white shadow-2xs"
                    : "text-[#64748B] hover:text-[#1F2937]"
                }`}
              >
                📖 2. PartA 理論政策 (Policy)
              </button>
              <button
                onClick={() => handleTabChange("sandbox")}
                className={`px-3.5 py-1.5 text-xs font-black rounded-xl transition-all cursor-pointer ${
                  activeTab === "sandbox"
                    ? "bg-[#0E7490] text-white shadow-2xs"
                    : "text-[#64748B] hover:text-[#1F2937]"
                }`}
              >
                💻 3. PartB 系統實作 (Sandbox)
              </button>
              <button
                onClick={() => handleTabChange("slides")}
                className={`px-3.5 py-1.5 text-xs font-black rounded-xl transition-all cursor-pointer ${
                  activeTab === "slides"
                    ? "bg-[#0E7490] text-white shadow-2xs"
                    : "text-[#64748B] hover:text-[#1F2937]"
                }`}
              >
                🛝 4. 成果簡報合輯 (Slides & Video)
              </button>
              <button
                onClick={() => handleTabChange("testing")}
                className={`px-3.5 py-1.5 text-xs font-black rounded-xl transition-all cursor-pointer ${
                  activeTab === "testing"
                    ? "bg-[#0E7490] text-white shadow-2xs"
                    : "text-[#64748B] hover:text-[#1F2937]"
                }`}
              >
                🧪 5. UAT測試與推廣 (UAT)
              </button>
            </div>
          </div>
        </div>

        {/* Tab-driven Dynamic Screens router template */}
        <div className="space-y-1">
          {activeTab === "dashboard" && (
            <div className="animate-in fade-in-40 duration-200">
              {/* Central Integrated Dashboard Interface */}
              <DashboardHub onNavigate={handleNavigate} />
              
              {/* Concluding Wrap-up */}
              <ConclusionSection />

              {/* Bottom pathway guider */}
              <div className="bg-white py-10 border-t border-gray-100 flex justify-center">
                <button
                  onClick={() => handleTabChange("theory")}
                  className="px-6 py-3 rounded-xl bg-slate-800 text-white font-bold text-xs hover:bg-slate-700 transition-all flex items-center gap-2 cursor-pointer"
                >
                  前往下個頁面：📖 2. PartA 理論政策 ➜
                </button>
              </div>
            </div>
          )}

          {activeTab === "theory" && (
            <div className="animate-in fade-in-40 duration-200">
              {/* Part A Academic Theories */}
              <OverviewSection />
              <PartASection />
              <TargetUsersSection />

              {/* Bottom pathway guider */}
              <div className="bg-[#FAF7F0] py-12 border-t border-gray-200/50 flex justify-center gap-4">
                <button
                  onClick={() => handleTabChange("dashboard")}
                  className="px-5 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 font-bold text-xs hover:bg-gray-50 transition-all cursor-pointer"
                >
                  ⬅ 返回首頁儀表板
                </button>
                <button
                  onClick={() => handleTabChange("sandbox")}
                  className="px-6 py-3 rounded-xl bg-[#0E7490] text-white font-bold text-xs hover:bg-cyan-800 transition-all flex items-center gap-2 cursor-pointer"
                >
                  前往下個頁面：💻 3. PartB 系統實作 ➜
                </button>
              </div>
            </div>
          )}

          {activeTab === "sandbox" && (
            <div className="animate-in fade-in-40 duration-200">
              {/* Part B Interactive Simulation Environment */}
              <PartBSection />
              <SystemRolesSection />
              <PatientFlowSection />
              <StaffAdminFlowSection />
              <DevelopmentTimeline />

              {/* Bottom pathway guider */}
              <div className="bg-[#FAF7F0] py-12 border-t border-gray-200/50 flex justify-center gap-4">
                <button
                  onClick={() => handleTabChange("theory")}
                  className="px-5 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 font-bold text-xs hover:bg-gray-50 transition-all cursor-pointer"
                >
                  ⬅ 返回 PartA 理論政策
                </button>
                <button
                  onClick={() => handleTabChange("slides")}
                  className="px-6 py-3 rounded-xl bg-[#14B8A6] text-white font-bold text-xs hover:bg-teal-600 transition-all flex items-center gap-2 cursor-pointer"
                >
                  前往下個頁面：🛝 4. 成果簡報合輯 ➜
                </button>
              </div>
            </div>
          )}

          {activeTab === "slides" && (
            <div className="animate-in fade-in-40 duration-200">
              {/* Slide Decks and Videos links */}
              <PresentationSection />
              <LinksSection />

              {/* Bottom pathway guider */}
              <div className="bg-[#FAF7F0] py-12 border-t border-gray-200/50 flex justify-center gap-4">
                <button
                  onClick={() => handleTabChange("sandbox")}
                  className="px-5 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 font-bold text-xs hover:bg-gray-50 transition-all cursor-pointer"
                >
                  ⬅ 返回 PartB 系統實作
                </button>
                <button
                  onClick={() => handleTabChange("testing")}
                  className="px-6 py-3 rounded-xl bg-[#0E7490] text-white font-bold text-xs hover:bg-cyan-800 transition-all flex items-center gap-2 cursor-pointer"
                >
                  前往下個頁面：🧪 5. UAT測試與展望 ➜
                </button>
              </div>
            </div>
          )}

          {activeTab === "testing" && (
            <div className="animate-in fade-in-40 duration-200">
              {/* Statistics, promotion, pricing, classmate testing, limits */}
              <TestingSection />
              <BenefitsSection />
              <PromotionSection />
              <PricingSection />
              <LimitationsSection />
              <FutureSection />
              <ConclusionSection />

              {/* Bottom pathway guider */}
              <div className="bg-[#FAF7F0] py-12 border-t border-gray-200/50 flex justify-center">
                <button
                  onClick={() => handleTabChange("dashboard")}
                  className="px-6 py-3 rounded-xl bg-slate-800 text-white font-bold text-xs hover:bg-slate-700 transition-all flex items-center gap-2 cursor-pointer"
                >
                  ⬅ 已閱讀完畢，返回儀表板首頁！
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* 20. Dark Charcoal Graduate Footer */}
      <Footer />
    </div>
  );
}
