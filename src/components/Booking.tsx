import { useState, type FormEvent } from "react";
import { WhatsappLogo, Phone, InstagramLogo, MapPin, CaretDown, ArrowRight } from "@phosphor-icons/react";
import { BRAND, FAQS } from "../data/content";
import { Reveal } from "./Reveal";

const LOOK_TYPES = ["Day / Natural", "Evening / Full glam", "Bridal", "Not sure yet"];

export function Booking() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      `Hi ${BRAND.name}! I'd like to book.`,
      `Name: ${f.get("name")}`,
      `Look: ${f.get("look")}`,
      `Date: ${f.get("date") || "flexible"}`,
      `City / venue: ${f.get("city") || "—"}`,
      `Notes: ${f.get("notes") || "—"}`,
    ].join("\n");
    window.open(
      `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  return (
    <section className="book section" id="book" aria-labelledby="book-h">
      <div className="wrap book__grid">
        <Reveal className="book__intro">
          <span className="kicker kicker--accent">Book</span>
          <h2 id="book-h" className="book__title">Let’s plan your look</h2>
          <p className="book__lede dim">
            Send the details and the request opens straight in WhatsApp — the fastest way to
            check a date. Prefer to talk? Call or DM.
          </p>

          <div className="book__direct">
            <a className="book__channel" href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <WhatsappLogo size={20} weight="fill" aria-hidden="true" />
              <span>WhatsApp<em>{BRAND.phoneDisplay}</em></span>
            </a>
            <a className="book__channel" href={`tel:+${BRAND.whatsapp}`}>
              <Phone size={20} weight="fill" aria-hidden="true" />
              <span>Call<em>{BRAND.phoneDisplay}</em></span>
            </a>
            {BRAND.instagram && (
              <a className="book__channel" href={`https://instagram.com/${BRAND.instagram}`} target="_blank" rel="noopener noreferrer">
                <InstagramLogo size={20} weight="fill" aria-hidden="true" />
                <span>Instagram<em>@{BRAND.instagram}</em></span>
              </a>
            )}
            <a className="book__channel" href={BRAND.mapsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin size={20} weight="fill" aria-hidden="true" />
              <span>The studio<em>{BRAND.address}</em></span>
            </a>
          </div>

          <ul className="book__faq" role="list">
            {FAQS.map((f) => (
              <li key={f.q}>
                <details>
                  <summary>{f.q}<CaretDown size={15} weight="bold" aria-hidden="true" /></summary>
                  <p className="dim">{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="book__panel" delay={0.08}>
          {sent ? (
            <div className="book__done" role="status">
              <h3>Opening WhatsApp…</h3>
              <p className="dim">
                If nothing opened, message us at{" "}
                <a className="arrow-link" href={`https://wa.me/${BRAND.whatsapp}`}>{BRAND.phoneDisplay}</a>.
              </p>
              <button type="button" className="btn btn--line" onClick={() => setSent(false)}>Edit request</button>
            </div>
          ) : (
            <form className="book__form" onSubmit={handleSubmit}>
              <div className="fld">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" required autoComplete="name" />
              </div>
              <div className="fld">
                <label htmlFor="look">Look</label>
                <div className="fld__select">
                  <select id="look" name="look" defaultValue={LOOK_TYPES[0]}>
                    {LOOK_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                  <CaretDown size={15} weight="bold" aria-hidden="true" />
                </div>
              </div>
              <div className="fld fld--half">
                <label htmlFor="date">Preferred date</label>
                <input id="date" name="date" type="date" />
              </div>
              <div className="fld fld--half">
                <label htmlFor="city">City / venue</label>
                <input id="city" name="city" type="text" autoComplete="address-level2" />
              </div>
              <div className="fld">
                <label htmlFor="notes">Anything else?</label>
                <textarea id="notes" name="notes" rows={3} />
              </div>
              <button type="submit" className="btn book__submit">
                Send via WhatsApp <ArrowRight size={15} weight="bold" aria-hidden="true" />
              </button>
              <p className="book__fine dim">Opens WhatsApp with your details filled in. Nothing is stored on this site.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
