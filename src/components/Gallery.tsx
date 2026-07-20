import { useMemo, useState } from "react";
import { FILTERS, LOOKS, type Filter } from "../data/content";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [active, setActive] = useState<Filter>("All");
  const looks = useMemo(
    () => (active === "All" ? LOOKS : LOOKS.filter((l) => l.category === active)),
    [active],
  );

  return (
    <section className="gallery section" id="portfolio" aria-labelledby="port-h">
      <div className="wrap">
        <div className="gallery__head">
          <div>
            <span className="kicker kicker--accent">Portfolio</span>
            <h2 id="port-h" className="gallery__title">Selected looks</h2>
          </div>
          <div className="gallery__filters" role="group" aria-label="Filter looks">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={active === f}
                className={`filter${active === f ? " is-on" : ""}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <ul className="gallery__grid" role="list">
          {looks.map((look, i) => (
            <Reveal
              as="li"
              key={look.id}
              delay={(i % 3) * 0.06}
              className={`shot${look.tall ? " shot--tall" : ""}`}
            >
              <img src={look.image} alt={`${look.category} look — ${look.title}`} loading="lazy" />
              <div className="shot__meta">
                <span className="shot__cat">{look.category}</span>
                <span className="shot__title">{look.title}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
