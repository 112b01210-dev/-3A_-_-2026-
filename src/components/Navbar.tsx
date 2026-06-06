import { useState, useEffect } from "react";
import { Menu, X, Stethoscope } from "lucide-react";

export function Navbar({ 
  activeTab, 
  setActiveTab 
}: { 
  activeTab: "dashboard" | "theory" | "sandbox" | "slides" | "testing";
  setActiveTab: (tab: "dashboard" | "theory" | "sandbox" | "slides" | "testing") => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "📊 總覽儀表板", id: "dashboard" },
    { label: "📖 PartA 理論政策", id: "theory" },
    { label: "💻 PartB 系統實作", id: "sandbox" },
    { label: "🛝 成果學術簡報", id: "slides" },
    { label: "🧪 UAT測試與展望", id: "testing" },
  ] as const;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: typeof navItems[number]["id"]) => {
    setActiveTab(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFFFF]/90 backdrop-blur-md shadow-md border-b border-[#E2E8F0] py-3"
          : "bg-[#FAF7F0]/85 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleNavClick("dashboard")}
          >
            <div className="w-10 h-10 rounded-full bg-[#0E7490] flex items-center justify-center text-[#FFFFFF] shadow-sm group-hover:bg-[#14B8A6] transition-colors duration-300">
              <Stethoscope size={20} />
            </div>
            <div>
              <span className="font-display font-bold text-base md:text-lg text-[#0E7490] tracking-tight group-hover:text-[#14B8A6] transition-colors">
                陽光遠距醫療門診系統
              </span>
              <span className="hidden md:block text-[9px] text-[#64748B] font-semibold leading-tight">長榮大學醫事管理學系 ｜ 期末成果報告</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-xs font-black rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0E7490] text-white shadow-xs"
                      : "text-[#1F2937] hover:text-[#0E7490] hover:bg-[#FAF7F0]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile hamburger trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1F2937] hover:text-[#0E7490] focus:outline-none p-2 rounded-lg hover:bg-neutral-100"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#FFFFFF] border-b border-[#E2E8F0] shadow-lg animate-in fade-in-50 duration-200">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 text-sm font-bold rounded-md transition-colors ${
                    isActive
                      ? "bg-[#0E7490]/10 text-[#0E7490]"
                      : "text-[#1F2937] hover:bg-[#FAF7F0] hover:text-[#0E7490]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3 border-t border-[#E2E8F0] px-4 text-[10px] text-[#64748B] flex flex-col space-y-1">
              <span className="font-bold">學生姓名：陳妤妮（掛號病人代表）</span>
              <span>指導老師：張祐倉 博士 ｜ 指導機構：長榮大學 醫學管理系</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
