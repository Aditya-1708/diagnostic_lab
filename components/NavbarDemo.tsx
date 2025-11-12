"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { useState, useEffect } from "react";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Services", link: "#services" },
    { name: "About Us", link: "#about" },
    { name: "Testimonials", link: "#testimonials" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // Detect section in view to highlight active link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      for (const item of navItems) {
        const section = document.querySelector(item.link) as HTMLElement | null;

        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveLink(item.link);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-neutral-900/80 shadow-sm transition-all">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="px-8 py-3 rounded-full border border-sky-100/60 dark:border-cyan-900/40 backdrop-blur-xl bg-white/80 dark:bg-neutral-950/70 shadow-[0_2px_20px_rgba(0,0,0,0.03)]">
          <NavbarLogo />
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                onClick={() => setActiveLink(item.link)}
                className={`relative text-base font-semibold transition-all duration-300 ${
                  activeLink === item.link
                    ? "text-sky-600 dark:text-cyan-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-cyan-400"
                }`}
              >
                {item.name}
                {activeLink === item.link && (
                  <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-gradient-to-r from-sky-600 to-cyan-500 rounded-full"></span>
                )}
              </a>
            ))}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl border-t border-sky-100/60 dark:border-cyan-900/40"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`w-full text-center py-3 text-lg font-semibold rounded-md transition-all duration-200 ${
                  activeLink === item.link
                    ? "text-sky-600 dark:text-cyan-400 bg-sky-50/60 dark:bg-cyan-950/30"
                    : "text-gray-800 dark:text-gray-300 hover:text-sky-600 dark:hover:text-cyan-400"
                }`}
              >
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
