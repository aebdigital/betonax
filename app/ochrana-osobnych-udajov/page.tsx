import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader, SiteHero } from "@/components/SiteHeader";

export const metadata = {
  title: "Ochrana osobných údajov | Betonax",
  description: "Zásady spracovania osobných údajov spoločnosti MS Rental Services, s.r.o.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <SiteHeader />
      <SiteHero />

      <div className="section-shell legal-shell">
        <Link href="/#top" className="legal-back">
          <ArrowLeft aria-hidden="true" size={18} />
          Späť na úvod
        </Link>

        <h1 className="legal-title">Ochrana osobných údajov</h1>
        <p className="legal-lead">
          Tieto zásady popisujú, ako prevádzkovateľ webu Betonax — spoločnosť MS Rental Services, s.r.o. —
          spracúva osobné údaje, ktoré jej poskytnete prostredníctvom objednávkového formulára alebo iných
          kontaktných kanálov.
        </p>

        <section>
          <h2>Prevádzkovateľ</h2>
          <p>
            MS Rental Services, s.r.o., Suchý Jarok 2807, 06601 Humenné, e-mail{" "}
            <a href="mailto:info@msrental.sk">info@msrental.sk</a>, telefón{" "}
            <a href="tel:+421902302050">0902 30 20 50</a>.
          </p>
        </section>

        <section>
          <h2>Aké údaje spracúvame</h2>
          <p>
            Pri odoslaní objednávky cez formulár spracúvame meno a priezvisko, kontaktné údaje (telefón alebo e-mail),
            lokalitu stavby, požadovaný termín betonáže a ďalšie informácie, ktoré nám sami pošlete v poznámke.
          </p>
        </section>

        <section>
          <h2>Účel spracovania</h2>
          <p>
            Údaje používame výlučne na to, aby sme vás mohli kontaktovať, pripraviť cenovú ponuku, dohodnúť termín
            čerpania betónu a následne službu poskytnúť. Bez nich nedokážeme objednávku spracovať.
          </p>
        </section>

        <section>
          <h2>Doba uchovávania</h2>
          <p>
            Osobné údaje uchovávame len po dobu nevyhnutnú na splnenie zmluvného vzťahu a na obdobie vyžadované
            zákonom (napr. účtovné a daňové predpisy).
          </p>
        </section>

        <section>
          <h2>Vaše práva</h2>
          <p>
            Máte právo na prístup k svojim údajom, na ich opravu, vymazanie, obmedzenie spracovania, na prenosnosť
            údajov a právo namietať. Žiadosť môžete kedykoľvek poslať na{" "}
            <a href="mailto:info@msrental.sk">info@msrental.sk</a>.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            Stránka používa cookies na svoje fungovanie a na anonymnú analytiku. Svoj súhlas môžete kedykoľvek
            upraviť cez odkaz „Cookies" v päte stránky.
          </p>
        </section>
      </div>
    </main>
  );
}
