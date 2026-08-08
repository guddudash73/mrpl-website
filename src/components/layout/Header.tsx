"use client";

import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { openSiteVisitModal } from "@/store/modalSlice";
import { useTheme } from "@/context/ThemeContext";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Plots", href: "/plots" },
  { name: "Duplex Projects", href: "/duplex-projects" },
  { name: "Contact", href: "/contact" },
];

export const Header: React.FC = memo(() => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const [navStyle, setNavStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const updateUnderline = useCallback(() => {
    if (!navRef.current) return;
    const activeIndex = NAV_LINKS.findIndex((link) => link.href === pathname);
    if (activeIndex !== -1) {
      const activeElement = navRef.current.children[activeIndex] as HTMLElement;
      if (activeElement) {
        setNavStyle({
          left: activeElement.offsetLeft,
          width: activeElement.offsetWidth,
          opacity: 1,
        });
      }
    } else {
      setNavStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [pathname]);

  useEffect(() => {
    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [updateUnderline]);

  return (
    <header
      className="fixed top-0 w-full z-50 bg-header-bg backdrop-blur-md border-b border-border-light/50 transition-all duration-300"
      id="header"
    >
      <div className="max-w-360 mx-auto w-full px-4 sm:px-6 md:px-12 py-3.5 sm:py-5 flex justify-between items-center">
        <Link
          href="/"
          className="font-display text-[15px] sm:text-xl md:text-2xl font-bold tracking-tight text-primary flex items-center gap-2 sm:gap-3 group shrink min-w-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3tLwxUvKzW7z0B0Zlxh9Zmh_kTXKm8R0CxJ3-R07DrewJ4bgR3pkLxjerJ4549n3rTJhjzJoldwoeA7slkoD9N0IEYQrseq2N0x-IziiTRZiVMFfsLDlTsw_rb1hAU8rvXA1Yr2V6pQtrUT1c2HwOXTCAb1sHO-QoTyCp1rvE65vwASBBOWgxbUQ_6DTs27fTPAKx4xNs1y3s3mJSBC5kdJ96q9Jgony4cK6vYXqplLflRLq0591AxEtCS-uZryuXTg"
            alt="MRPL Logo"
            className="h-7 sm:h-10 md:h-11 w-auto object-contain shrink-0 transition-all duration-300 dark:brightness-[2.5] dark:contrast-[1.2] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.95)]"
            style={{
              WebkitFilter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.95))",
            }}
          />
          <span className="truncate">Meadowlark Realcon</span>
        </Link>

        {/* Desktop Nav - Clean text with smooth sliding underline (NO boxes) */}
        <nav ref={navRef} className="hidden md:flex items-center space-x-8 relative py-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-wide font-medium transition-colors duration-300 py-1 ${
                  isActive
                    ? "text-secondary font-bold"
                    : "text-text-muted hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Smooth Sliding Underline Bar */}
          <span
            className="absolute bottom-0 h-[2.5px] bg-secondary rounded-full shadow-[0_2px_8px_rgba(217,119,6,0.5)] transition-all duration-300 ease-out pointer-events-none"
            style={{
              transform: `translateX(${navStyle.left}px)`,
              width: `${navStyle.width}px`,
              opacity: navStyle.opacity,
            }}
          />
        </nav>

        {/* Trailing Action & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          {/* Dark Mode Toggle Button (Right Aligned, Before Book Visit) */}
          <button
            data-theme-toggle
            onClick={(event) => toggleTheme(event.currentTarget)}
            aria-label="Toggle Theme"
            title={
              theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
            className="w-10 h-10 rounded-full bg-surface-alt border border-border-light flex items-center justify-center text-primary hover:text-secondary hover:border-secondary transition-all cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-[20px]">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Book a Site Visit Button */}
          <button
            onClick={() => dispatch(openSiteVisitModal())}
            className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white rounded-lg text-sm font-semibold tracking-wider hover:bg-secondary-light transition-colors cursor-pointer"
          >
            Inquire Now
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2 sm:gap-3 shrink-0 ml-2">
          <button
            data-theme-toggle
            onClick={(event) => toggleTheme(event.currentTarget)}
            aria-label="Toggle Theme"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-surface-alt border border-border-light flex items-center justify-center text-primary cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Modern Animated Hamburger Icon Button */}
          <button
            aria-label="Toggle Menu"
            className="w-10 h-10 rounded-xl bg-surface-alt/80 border border-border-light/70 flex items-center justify-center text-primary cursor-pointer transition-all duration-300 hover:bg-surface-alt active:scale-95 shrink-0 relative overflow-hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between items-center">
              {/* Top Bar */}
              <span
                className={`w-5 h-[2px] bg-primary rounded-full transition-all duration-300 ease-in-out origin-center ${
                  mobileMenuOpen ? "absolute top-[7px] rotate-45" : ""
                }`}
              />
              {/* Middle Bar */}
              <span
                className={`w-5 h-[2px] bg-primary rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              {/* Bottom Bar */}
              <span
                className={`w-5 h-[2px] bg-primary rounded-full transition-all duration-300 ease-in-out origin-center ${
                  mobileMenuOpen ? "absolute top-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Modern Animated Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] bg-card-bg/95 backdrop-blur-2xl border-b border-border-light/80 shadow-2xl ${
          mobileMenuOpen
            ? "max-h-[440px] opacity-100 py-5 px-6"
            : "max-h-0 opacity-0 py-0 px-6 pointer-events-none"
        }`}
      >
        <div className="space-y-1.5">
          {NAV_LINKS.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  transitionDelay: `${mobileMenuOpen ? idx * 55 + 40 : 0}ms`,
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                className={`flex items-center justify-between text-base font-semibold px-4 py-3 rounded-2xl transition-all duration-500 ${
                  isActive
                    ? "bg-secondary/10 text-secondary font-bold"
                    : "text-primary hover:bg-surface-alt"
                } ${
                  mobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-12 opacity-0"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-secondary shadow-sm shadow-secondary/50"></span>
                )}
              </Link>
            );
          })}
        </div>

        <div
          style={{
            transitionDelay: `${mobileMenuOpen ? NAV_LINKS.length * 55 + 40 : 0}ms`,
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
          className={`pt-4 transition-all duration-500 ${
            mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              dispatch(openSiteVisitModal());
            }}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-secondary text-white rounded-2xl text-sm font-bold tracking-wider hover:bg-secondary-light transition-all shadow-lg shadow-secondary/25 active:scale-[0.98] cursor-pointer"
          >
            Inquire Now
          </button>
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";
