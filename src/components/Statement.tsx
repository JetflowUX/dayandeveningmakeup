import { Reveal } from "./Reveal";

/** Editorial thesis line — the idea the whole studio is built on. */
export function Statement() {
  return (
    <section className="statement section">
      <div className="wrap statement__grid">
        <Reveal className="statement__label">
          <span className="kicker">The premise</span>
        </Reveal>
        <Reveal className="statement__body" delay={0.05}>
          <p className="statement__text">
            The makeup that flatters you at <em>nine in the morning</em> is rarely the makeup
            that flatters you at <em>nine at night</em>. So every face here is built for the
            hour it will be seen in — honest in daylight, engineered for the dark.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
