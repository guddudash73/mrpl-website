import React, { memo } from 'react';
import Link from 'next/link';

export const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-surface-alt border-t border-border-light/80 text-text-main pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-6">
          <Link href="/" className="font-display text-2xl font-bold tracking-tight text-primary flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3tLwxUvKzW7z0B0Zlxh9Zmh_kTXKm8R0CxJ3-R07DrewJ4bgR3pkLxjerJ4549n3rTJhjzJoldwoeA7slkoD9N0IEYQrseq2N0x-IziiTRZiVMFfsLDlTsw_rb1hAU8rvXA1Yr2V6pQtrUT1c2HwOXTCAb1sHO-QoTyCp1rvE65vwASBBOWgxbUQ_6DTs27fTPAKx4xNs1y3s3mJSBC5kdJ96q9Jgony4cK6vYXqplLflRLq0591AxEtCS-uZryuXTg"
              alt="MRPL Logo"
              className="h-10 w-auto object-contain logo-monochrome dark:brightness-[2.5] dark:contrast-[1.2] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.95)]"
              style={{
                WebkitFilter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.95))",
              }}
            />
            Meadowlark Realcon
          </Link>
          <p className="text-text-muted text-sm leading-relaxed max-w-md font-light">
            Meadowlark Realcon (MRPL) is Bhubaneswar’s premier real estate development firm specializing in institutional-grade residential plots, custom duplex villas, and master-planned eco townships.
          </p>
          <div className="flex space-x-4 pt-2">
            <a
              href="https://www.facebook.com/share/1CUUGHEipa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card-bg border border-border-light flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors text-xs font-bold"
              aria-label="Facebook"
            >
              FB
            </a>
            <a
              href="https://www.instagram.com/meadowlarkrealcon_pvt_ltd?igsh=ODlvZDRsZHZ0MTNi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card-bg border border-border-light flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors text-xs font-bold"
              aria-label="Instagram"
            >
              IG
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6">Quick Navigation</h4>
          <ul className="space-y-3 text-sm text-text-muted">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">About MRPL</Link></li>
            <li><Link href="/plots" className="hover:text-primary transition-colors">Available Plots</Link></li>
            <li><Link href="/duplex-projects" className="hover:text-primary transition-colors">Duplex Projects</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Property Offerings */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6">Property Offerings</h4>
          <ul className="space-y-3 text-sm text-text-muted">
            <li><Link href="/duplex-projects" className="hover:text-primary transition-colors">Standard Duplex</Link></li>
            <li><Link href="/duplex-projects" className="hover:text-primary transition-colors">Premium Luxury Duplex</Link></li>
            <li><Link href="/plots" className="hover:text-primary transition-colors">Residential Plots</Link></li>
            <li><Link href="/plots" className="hover:text-primary transition-colors">Investment Land</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">Master-Planned Townships</Link></li>
          </ul>
        </div>

        {/* Corporate Office */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6">Corporate Office</h4>
          <address className="not-italic text-sm text-text-muted space-y-3 leading-relaxed">
            <p>217/A, near Madhuban marriage mandap, Saheed Nagar, Bhubaneswar, Odisha 751007</p>
            <p className="pt-2"><strong className="text-primary font-semibold">Phone:</strong> +91 9338379494</p>
          </address>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 border-t border-border-light pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-text-muted space-y-4 md:space-y-0">
        <p>© {new Date().getFullYear()} Meadowlark Realcon Private Limited (MRPL). All rights reserved.</p>
        <div className="flex space-x-6">
          <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
