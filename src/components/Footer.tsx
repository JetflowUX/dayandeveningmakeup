import { WhatsappLogo, InstagramLogo, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { BRAND, NAV } from "../data/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__masthead">
          <a href="#top" className="foot__brand">Day <em>&amp;</em> Evening</a>
          <p className="foot__tag">{BRAND.tagline}</p>
        </div>

        <hr className="rule" />

        <div className="foot__grid">
          <nav className="foot__nav" aria-label="Footer">
            {NAV.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
          <div className="foot__contact">
            <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <WhatsappLogo size={17} weight="fill" aria-hidden="true" /> {BRAND.phoneDisplay}
            </a>
            <a href={BRAND.mapsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin size={17} weight="fill" aria-hidden="true" /> {BRAND.address}
            </a>
            {BRAND.instagram && (
              <a href={`https://instagram.com/${BRAND.instagram}`} target="_blank" rel="noopener noreferrer">
                <InstagramLogo size={17} weight="fill" aria-hidden="true" /> @{BRAND.instagram}
              </a>
            )}
            {BRAND.email && (
              <a href={`mailto:${BRAND.email}`}>
                <EnvelopeSimple size={17} weight="fill" aria-hidden="true" /> {BRAND.email}
              </a>
            )}
          </div>
          <p className="foot__loc dim">{BRAND.location}</p>
        </div>

        <div className="foot__base">
          <span className="dim">© {year} {BRAND.full}</span>
          <span className="dim">The face for daylight. The face for night.</span>
        </div>
      </div>
    </footer>
  );
}
