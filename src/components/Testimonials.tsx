import { TESTIMONIALS } from "../data/content";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section className="words section" id="words" aria-labelledby="words-h">
      <div className="wrap">
        <div className="words__head">
          <span className="kicker kicker--accent">In their words</span>
          <h2 id="words-h" className="words__title">Faces, and the people wearing them</h2>
        </div>
        <ul className="words__grid" role="list">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 0.08} className="quote">
              <span className="quote__mark" aria-hidden="true">&ldquo;</span>
              <blockquote className="quote__text">{t.quote}</blockquote>
              <footer className="quote__by">
                <span className="quote__name">{t.name}</span>
                <span className="quote__ctx dim">{t.context}</span>
              </footer>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
