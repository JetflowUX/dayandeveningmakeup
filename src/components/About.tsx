import { ABOUT, STATS } from "../data/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-h">
      <div className="wrap about__grid">
        <Reveal className="about__portrait">
          <img src={ABOUT.portrait} alt="The makeup artist" loading="lazy" />
        </Reveal>

        <Reveal className="about__body" delay={0.08}>
          <span className="kicker kicker--accent">The Artist</span>
          <h2 id="about-h" className="about__title">{ABOUT.heading}</h2>
          {ABOUT.body.map((p, i) => (
            <p key={i} className="about__para">{p}</p>
          ))}
          <p className="about__sign">{ABOUT.signature}</p>

          <ul className="about__stats" role="list">
            {STATS.map((s) => (
              <li key={s.label}>
                <span className="about__stat-v">{s.value}</span>
                <span className="about__stat-l dim">{s.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
