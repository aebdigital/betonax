"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CalendarDays, Mail, MapPin, Phone, UserRound } from "lucide-react";

type OrderFormState = {
  name: string;
  contact: string;
  location: string;
  date: string;
  details: string;
  consent: boolean;
};

const initialState: OrderFormState = {
  name: "",
  contact: "",
  location: "",
  date: "",
  details: "",
  consent: false,
};

export function OrderForm() {
  const [form, setForm] = useState<OrderFormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const mailtoHref = useMemo(() => {
    const body = [
      `Meno a priezvisko: ${form.name}`,
      `Kontakt: ${form.contact}`,
      `Lokalita stavby: ${form.location}`,
      `Dátum betonáže: ${form.date}`,
      "",
      "Detail objednávky:",
      form.details,
    ].join("\n");

    return `mailto:info@msrental.sk?subject=${encodeURIComponent(
      "Objednávka čerpania betónu - Betonax",
    )}&body=${encodeURIComponent(body)}`;
  }, [form]);

  function updateField<K extends keyof OrderFormState>(key: K, value: OrderFormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.consent) return;
    setSubmitted(true);
    window.location.href = mailtoHref;
  }

  return (
    <form onSubmit={handleSubmit} className="order-form" id="objednavka">
      <div className="form-grid">
        <label>
          <span>
            <UserRound aria-hidden="true" size={18} />
            Meno a priezvisko
          </span>
          <input
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            name="name"
            autoComplete="name"
            placeholder="Ján Novák"
          />
        </label>

        <label>
          <span>
            <Phone aria-hidden="true" size={18} />
            Kontaktné údaje
          </span>
          <input
            required
            value={form.contact}
            onChange={(event) => updateField("contact", event.target.value)}
            name="contact"
            autoComplete="tel email"
            placeholder="Telefón alebo e-mail"
          />
        </label>

        <label>
          <span>
            <MapPin aria-hidden="true" size={18} />
            Lokalita stavby
          </span>
          <input
            required
            value={form.location}
            onChange={(event) => updateField("location", event.target.value)}
            name="location"
            placeholder="Obec, ulica alebo GPS"
          />
        </label>

        <label>
          <span>
            <CalendarDays aria-hidden="true" size={18} />
            Dátum betonáže
          </span>
          <input
            required
            type="date"
            value={form.date}
            onChange={(event) => updateField("date", event.target.value)}
            name="date"
          />
        </label>
      </div>

      <label className="details-field">
        <span>
          <Mail aria-hidden="true" size={18} />
          Detail objednávky
        </span>
        <textarea
          required
          value={form.details}
          onChange={(event) => updateField("details", event.target.value)}
          name="details"
          rows={7}
          placeholder="Typ betónu, množstvo, prístup na stavbu, čas betonáže..."
        />
      </label>

      <p className="form-note">
        Uveďte prosím aj približnú vzdialenosť v metroch, na akú dlhú vzdialenosť bude potrebné betón čerpať.
      </p>

      <label className="consent-field">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
          required
        />
        <span>
          Súhlasím so spracovaním osobných údajov v zmysle{" "}
          <Link href="/ochrana-osobnych-udajov" target="_blank" rel="noreferrer">
            Ochrany osobných údajov
          </Link>
          .
        </span>
      </label>

      <button type="submit" className="submit-button" disabled={!form.consent}>
        Odoslať objednávku
        <ArrowRight aria-hidden="true" size={19} />
      </button>

      {submitted ? (
        <p className="submit-note">
          Otvára sa e-mail s predvyplnenou objednávkou. Po kontrole ho odošlite na adresu info@msrental.sk.
        </p>
      ) : null}
    </form>
  );
}
