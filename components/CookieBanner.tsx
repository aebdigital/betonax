"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

type CookiePrefs = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "betonax-cookie-consent";

const defaultPrefs: CookiePrefs = {
  necessary: true,
  analytics: false,
  marketing: false,
};

function loadPrefs(): CookiePrefs | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookiePrefs>;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
}

function savePrefs(prefs: CookiePrefs) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    /* ignore */
  }
}

export function CookieBanner() {
  const [bannerOpen, setBannerOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>(defaultPrefs);

  useEffect(() => {
    const existing = loadPrefs();
    if (existing) {
      setPrefs(existing);
    } else {
      setBannerOpen(true);
    }

    function openSettings() {
      setSettingsOpen(true);
    }
    window.addEventListener("open-cookie-settings", openSettings);
    return () => window.removeEventListener("open-cookie-settings", openSettings);
  }, []);

  function acceptAll() {
    const all: CookiePrefs = { necessary: true, analytics: true, marketing: true };
    setPrefs(all);
    savePrefs(all);
    setBannerOpen(false);
    setSettingsOpen(false);
  }

  function rejectAll() {
    const minimal: CookiePrefs = { necessary: true, analytics: false, marketing: false };
    setPrefs(minimal);
    savePrefs(minimal);
    setBannerOpen(false);
    setSettingsOpen(false);
  }

  function savePreferences() {
    savePrefs(prefs);
    setBannerOpen(false);
    setSettingsOpen(false);
  }

  return (
    <>
      {bannerOpen ? (
        <div className="cookie-banner" role="dialog" aria-label="Cookies">
          <div className="cookie-banner-inner">
            <p>
              Používame cookies na fungovanie stránky a anonymnú analytiku. Kliknutím na „Prijať všetky"
              súhlasíte s ich používaním.
            </p>
            <div className="cookie-banner-actions">
              <button type="button" className="ghost-button" onClick={rejectAll}>
                Odmietnuť
              </button>
              <button type="button" className="ghost-button" onClick={() => setSettingsOpen(true)}>
                Nastavenia
              </button>
              <button type="button" className="primary-button-sm" onClick={acceptAll}>
                Prijať všetky
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {settingsOpen ? (
        <div
          className="cookie-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Nastavenia cookies"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSettingsOpen(false);
          }}
        >
          <div className="cookie-modal">
            <button
              type="button"
              className="cookie-modal-close"
              onClick={() => setSettingsOpen(false)}
              aria-label="Zavrieť"
            >
              <X size={20} aria-hidden="true" />
            </button>
            <h3>Nastavenia cookies</h3>
            <p className="cookie-modal-intro">
              Sami si vyberte, ktoré kategórie cookies chcete povoliť. Nevyhnutné cookies sú vždy aktívne, lebo bez nich
              stránka nemôže fungovať.
            </p>

            <div className="cookie-toggle-list">
              <CookieToggle
                title="Nevyhnutné"
                description="Zabezpečujú základné funkcie stránky. Bez nich web nedokáže správne fungovať."
                checked={true}
                disabled
                onChange={() => {}}
              />
              <CookieToggle
                title="Analytické"
                description="Pomáhajú nám pochopiť, ako návštevníci stránku používajú, a vylepšovať ju."
                checked={prefs.analytics}
                onChange={(value) => setPrefs((p) => ({ ...p, analytics: value }))}
              />
              <CookieToggle
                title="Marketingové"
                description="Slúžia na zobrazovanie relevantných reklám a meranie ich účinnosti."
                checked={prefs.marketing}
                onChange={(value) => setPrefs((p) => ({ ...p, marketing: value }))}
              />
            </div>

            <div className="cookie-modal-actions">
              <button type="button" className="ghost-button" onClick={rejectAll}>
                Odmietnuť všetky
              </button>
              <button type="button" className="ghost-button" onClick={savePreferences}>
                Uložiť výber
              </button>
              <button type="button" className="primary-button-sm" onClick={acceptAll}>
                Prijať všetky
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function CookieToggle({
  title,
  description,
  checked,
  onChange,
  disabled,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <div className="cookie-toggle">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <label className={`toggle-switch ${disabled ? "is-disabled" : ""}`}>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(event) => onChange(event.target.checked)}
        />
        <span className="toggle-slider" aria-hidden="true" />
      </label>
    </div>
  );
}

export function CookieSettingsLink({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="footer-link-button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
    >
      {children}
    </button>
  );
}
