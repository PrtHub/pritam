import Link from "next/link";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Left - Branding */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <Link
              href="/"
              className="font-bold text-lg tracking-tight text-white hover:opacity-80 transition-opacity"
            >
              {siteConfig.name}
              <span className="text-zinc-500">.</span>
            </Link>
            <p className="text-sm text-zinc-500">
              Building the future, one product at a time.
            </p>
          </div>

          {/* Right - Links & Copyright */}
          <div className="flex flex-col items-center sm:items-end gap-2">
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="#about"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
            <p className="text-sm text-zinc-600">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
