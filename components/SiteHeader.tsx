"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/#sluzby", label: "Služby" },
  { href: "/#technika", label: "Technika" },
  { href: "/#realizacie", label: "Realizácie" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <header className="site-header" aria-label="Hlavná navigácia">
        <a href="/" className="header-logo" aria-label="Betonax úvod">
          <Image src="/betonax-logo.png" alt="Betonax" width={750} height={123} priority />
        </a>
        <nav className="site-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="menu-toggle"
          aria-label="Otvoriť menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu size={26} aria-hidden="true" />
        </button>
      </header>

      <div
        className={`mobile-drawer-backdrop ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`mobile-drawer ${open ? "is-open" : ""}`}
        aria-label="Mobilné menu"
        aria-hidden={!open}
      >
        <div className="mobile-drawer-head">
          <Image src="/betonax-logo.png" alt="Betonax" width={400} height={66} />
          <button
            type="button"
            className="menu-close"
            aria-label="Zavrieť menu"
            onClick={() => setOpen(false)}
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <nav className="mobile-drawer-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

export function SiteHero() {
  return (
    <section className="hero-section" id="top">
      <Image
        src="/betonax-banner.png"
        alt="Betonax čerpanie betónu so stacionárnym čerpadlom Putzmeister P 730"
        width={3544}
        height={886}
        className="hero-image"
        priority
        sizes="100vw"
      />
    </section>
  );
}
