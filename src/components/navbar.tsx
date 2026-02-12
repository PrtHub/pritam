"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="font-bold text-xl tracking-tight text-white hover:opacity-80 transition-opacity"
        >
          {siteConfig.name}
          <span className="text-zinc-500">.</span>
        </Link>

        <div className="hidden sm:flex items-center gap-8">
          <Link
            href="#about"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="#apps"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Apps
          </Link>
          <Link
            href="#contact"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>

        <Button
          asChild
          size="sm"
          className="hidden sm:inline-flex rounded-full bg-white text-black hover:bg-zinc-200"
        >
          <a href={`mailto:${siteConfig.links.email}`}>Get in Touch</a>
        </Button>
      </div>
    </nav>
  );
}
