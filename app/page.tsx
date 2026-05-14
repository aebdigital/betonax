import Image from "next/image";
import Link from "next/link";
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
import { FloatingOrderButton } from "@/components/FloatingOrderButton";
import { CookieBanner, CookieSettingsLink } from "@/components/CookieBanner";
import { Lightbox } from "@/components/Lightbox";
import { SiteHeader, SiteHero } from "@/components/SiteHeader";

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

const galleryPhotos = [
  "11037455-dfef-4045-84b9-78712751e445.jpg",
  "57199202-cd62-4473-8ab8-e9614e4c539f.jpg",
  "580906d5-c7b1-43f5-8ca9-fcfb7e49eee9.jpg",
  "597f1394-b1cb-4299-b97e-14f106be50ea.jpg",
  "82bbeb89-a9b9-43e8-ba6d-50c83580b1cc.jpg",
  "ccf65d99-ae11-4629-8e0c-d0fb5eb59e1c.jpg",
  "e430e507-3449-4b50-bfbb-2543ead8a67e.jpg",
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <SiteHero />

      <section className="intro-band" id="sluzby">
        <div className="section-shell intro-stack">
          <div className="intro-heading">
            <p className="section-kicker">Čo ponúkame</p>
            <h2>
              Betonax zabezpečuje výkonné a spoľahlivé čerpanie betónu pre stavby, kde rozhoduje presnosť a čas.
            </h2>
          </div>
          <div className="intro-split">
            <div className="service-cards">
              {serviceItems.map((item) => (
                <div key={item} className="service-card">
                  <CheckCircle2 aria-hidden="true" size={26} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="intro-photo">
              <Image
                src={`/realizacie/${galleryPhotos[3]}`}
                alt="Realizácia Betonax"
                width={1200}
                height={1500}
                sizes="(max-width: 980px) 100vw, 50vw"
              />
            </div>
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

          <Lightbox photos={galleryPhotos} basePath="/realizacie" alt="Realizácia Betonax" />
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

            <div className="contact-partner">
              <span className="contact-partner-label">BETONAX by</span>
              <Image
                src="/msrental.png"
                alt="MS Rental Services"
                width={300}
                height={72}
                className="contact-partner-logo"
              />
            </div>
          </div>

          <OrderForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-row">
          <p className="footer-copy">© 2026 MS Rental Services, s.r.o.</p>
          <div className="footer-links">
            <Link href="/ochrana-osobnych-udajov">Ochrana osobných údajov</Link>
            <CookieSettingsLink>Cookies</CookieSettingsLink>
          </div>
          <p className="footer-author">
            Tvorba webu{" "}
            <a href="https://aebdigital.sk" target="_blank" rel="noreferrer">
              AEB Digital sk
            </a>
          </p>
        </div>
      </footer>

      <FloatingOrderButton />
      <CookieBanner />
    </main>
  );
}
