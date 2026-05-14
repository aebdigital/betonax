"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export function FloatingOrderButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const form = document.getElementById("objednavka");
      if (!form) {
        setVisible(window.scrollY > 320);
        return;
      }
      const rect = form.getBoundingClientRect();
      const formTop = rect.top + window.scrollY;
      const formBottom = formTop + rect.height;
      const viewportBottom = window.scrollY + window.innerHeight;
      setVisible(window.scrollY > 320 && viewportBottom < formBottom + 80);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  function scrollToForm() {
    const target = document.getElementById("objednavka") ?? document.getElementById("kontakt");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <button
      type="button"
      onClick={scrollToForm}
      className={`floating-order ${visible ? "is-visible" : ""}`}
      aria-label="Prejsť na objednávkový formulár"
    >
      Objednať
      <ArrowDown aria-hidden="true" size={18} />
    </button>
  );
}
