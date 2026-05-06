import Image from "next/image";
import {
  Building2,
  Camera,
  CheckCircle2,
  Gauge,
  Hammer,
  Mail,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { OrderForm } from "@/components/OrderForm";

const navItems = [
  { href: "#sluzby", label: "Služby" },
  { href: "#technika", label: "Technika" },
  { href: "#realizacie", label: "Realizácie" },
  { href: "#kontakt", label: "Kontakt" },
];

const serviceItems = [
  "Čerpanie betónu na stavbách, dvoroch aj v horšie dostupnom teréne.",
  "Prečerpanie rôznych druhov betónov s veľkosťou frakcie do 16 mm.",
  "Rýchla koordinácia termínu, príjazdu a dĺžky čerpania podľa stavby.",
];

const specs = [
  { label: "Výkon čerpania", value: "3-30 m³/h", icon: Gauge },
  { label: "Max. tlak", value: "55 bar", icon: ShieldCheck },
  { label: "Horizontálny dosah", value: "300 m", icon: Ruler },
  { label: "Vertikálny dosah", value: "100 m", icon: Building2 },
  { label: "Motor", value: "55,4 kW", icon: Truck },
  { label: "Zásobník", value: "300 / 360 l", icon: Hammer },
];

const gallerySlots = Array.from({ length: 16 }, (_, index) => index + 1);

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Hlavná navigácia">
        <a href="#top" className="header-logo" aria-label="Betonax úvod">
          <Image src="/betonax-logo.png" alt="Betonax" width={750} height={123} priority />
        </a>
        <nav>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

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

      <section className="intro-band" id="sluzby">
        <div className="section-shell intro-grid">
          <div>
            <p className="section-kicker">Čo ponúkame</p>
            <h2>Betón dostaneme presne tam, kde ho stavba potrebuje</h2>
          </div>
          <div className="service-list">
            {serviceItems.map((item) => (
              <div key={item} className="service-row">
                <CheckCircle2 aria-hidden="true" size={22} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-section" id="technika">
        <div className="section-shell tech-grid">
          <div className="tech-copy">
            <p className="section-kicker">Technika</p>
            <h2>Putzmeister P 730</h2>
            <p>
              Výkonné stacionárne piestové čerpadlo určené na čerpanie jemnozrnného betónu a prácu v náročných
              podmienkach. Vďaka kompaktnému riešeniu je vhodné aj tam, kde je prístup na stavbu obmedzený.
            </p>
            <a
              href="https://www.putzmeister.com/web/europe-east/product-detail/-/product/1406/p-730"
              target="_blank"
              rel="noreferrer"
              className="source-link"
            >
              Technické údaje podľa výrobcu
            </a>
          </div>

          <div className="spec-grid" aria-label="Technické parametre Putzmeister P 730">
            {specs.map((spec) => {
              const Icon = spec.icon;
              return (
                <div className="spec-item" key={spec.label}>
                  <Icon aria-hidden="true" size={22} />
                  <span>{spec.label}</span>
                  <strong>{spec.value}</strong>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="gallery-section" id="realizacie">
        <div className="section-shell">
          <div className="gallery-heading">
            <div>
              <p className="section-kicker">Foto / video</p>
              <h2>Realizácie Betonax</h2>
            </div>
            <p>
              Priestor pre fotografie a videá z hotových betonáží, prístupov na stavby a ukážok čerpania v teréne.
            </p>
          </div>

          <div className="photo-grid" aria-label="Prázdna mriežka pre fotografie realizácií">
            {gallerySlots.map((slot) => (
              <div className="photo-slot" key={slot} aria-label={`Miesto pre fotografiu ${slot}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="partner-band">
        <div className="section-shell partner-grid">
          <div>
            <p className="section-kicker">Partner</p>
            <h2>MS Rental Services</h2>
          </div>
          <div className="partner-logo-card">
            <Image src="/msrental.png" alt="MS Rental Services" width={300} height={72} />
          </div>
        </div>
      </section>

      <section className="contact-section" id="kontakt">
        <div className="section-shell contact-grid">
          <div className="contact-copy">
            <p className="section-kicker">Objednávka</p>
            <h2>Dohodnite si čerpanie betónu</h2>
            <p>
              Vyplňte základné údaje o stavbe a termíne betonáže. Po odoslaní sa otvorí predvyplnený e-mail s
              objednávkou, ktorý môžete rovno poslať.
            </p>

            <div className="contact-list">
              <a href="https://maps.google.com/?q=Such%C3%BD%20Jarok%202807%2C%2006601%20Humenn%C3%A9" target="_blank" rel="noreferrer">
                <MapPin aria-hidden="true" size={20} />
                Suchý Jarok 2807, 06601 Humenné
              </a>
              <a href="tel:+421902302050">
                <Phone aria-hidden="true" size={20} />
                0902 30 20 50
              </a>
              <a href="mailto:info@msrental.sk">
                <Mail aria-hidden="true" size={20} />
                info@msrental.sk
              </a>
              <a href="https://www.instagram.com/beton_ax/" target="_blank" rel="noreferrer">
                <Camera aria-hidden="true" size={20} />
                @beton_ax
              </a>
            </div>
          </div>

          <OrderForm />
        </div>
      </section>
    </main>
  );
}
