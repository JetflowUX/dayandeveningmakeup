import { ArrowRight, Check } from "@phosphor-icons/react";
import { REGISTERS } from "../data/content";
import { Reveal } from "./Reveal";

/** The three registers as alternating editorial spreads. */
export function Registers() {
  return (
    <section className="registers section" id="registers" aria-labelledby="reg-h">
      <div className="wrap">
        <div className="registers__head">
          <span className="kicker kicker--accent">The Work</span>
          <h2 id="reg-h" className="registers__title">Three faces, priced by the light</h2>
        </div>
      </div>

      {REGISTERS.map((r, i) => (
        <article key={r.key} className={`spread${i % 2 ? " spread--flip" : ""}`}>
          <Reveal className="spread__media">
            <img src={r.image} alt={`${r.title} makeup look`} loading="lazy" />
            <span className="spread__no index">N{"º"} {r.no}</span>
          </Reveal>
          <Reveal className="spread__body" delay={0.08}>
            <span className="kicker">{r.key}</span>
            <h3 className="spread__title">{r.title}</h3>
            <p className="spread__manifesto">{r.manifesto}</p>
            <ul className="spread__includes">
              {r.includes.map((x) => (
                <li key={x}><Check size={15} weight="bold" aria-hidden="true" />{x}</li>
              ))}
            </ul>
            <div className="spread__foot">
              <span className="spread__price">
                {/^[\d£$€₦]/.test(r.priceFrom) && <span className="dim">from </span>}
                {r.priceFrom}
              </span>
              <a href="#book" className="arrow-link">
                Book {r.key.toLowerCase()} <ArrowRight size={14} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </article>
      ))}
    </section>
  );
}
