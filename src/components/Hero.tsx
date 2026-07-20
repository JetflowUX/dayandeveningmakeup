import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { useMode } from "../theme/ModeContext";
import { BRAND } from "../data/content";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};
const lineMask: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.95, ease: EASE } },
};

const LINES = ["The face for daylight.", "The face for night."];

/**
 * Cinematic motion hero. Full-bleed portrait that crossfades day ⇄ evening,
 * a slow Ken Burns drift, staggered entrance, and scroll parallax. Desktop is
 * composed as an editorial cover: one confident statement, an edge-anchored
 * meta bar (location · coordinates · edition), disciplined negative space.
 * All motion collapses under prefers-reduced-motion.
 */
export function Hero() {
  const { mode } = useMode();
  const evening = mode === "evening";
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const mediaStyle = reduce ? undefined : { y: imgY, scale: imgScale };
  const copyStyle = reduce ? undefined : { y: copyY, opacity: copyOpacity };

  return (
    <section className="hero" id="top" ref={ref}>
      <motion.div className="hero__media" aria-hidden="true" style={mediaStyle}>
        <img
          src="/images/hero-day.jpg"
          alt=""
          className={`hero__img${!evening ? " is-on" : ""}${reduce ? "" : " kenburns"}`}
          fetchPriority="high"
        />
        <img
          src="/images/hero-evening.jpg"
          alt=""
          className={`hero__img${evening ? " is-on" : ""}${reduce ? "" : " kenburns"}`}
        />
        <div className="hero__scrim" />
        <div className="hero__grain" />
      </motion.div>

      <motion.div
        className="hero__grid wrap"
        style={copyStyle}
        variants={container}
        initial={reduce ? undefined : "hidden"}
        animate={reduce ? undefined : "show"}
      >
        <div className="hero__cover">
          <h1 className="hero__headline">
            {LINES.map((line, i) => (
              <span className="hero__line" key={line}>
                <motion.span
                  className={`hero__line-in${i === 1 ? " hero__line-em" : ""}`}
                  variants={lineMask}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div className="hero__actions" variants={rise}>
            <a href="#book" className="btn btn--solid-light">
              Book a look <ArrowRight size={15} weight="bold" aria-hidden="true" />
            </a>
            <a href="#portfolio" className="btn btn--on-image">View the portfolio</a>
          </motion.div>
        </div>

        <div className="hero__meta">
          <motion.span className="hero__meta-item" variants={rise}>
            {BRAND.location.replace("Makeup Artistry — ", "")}
            <span className="hero__meta-sep hero__meta-geo" aria-hidden="true" />
            <span className="hero__meta-geo">{BRAND.geo}</span>
          </motion.span>

          <a href="#registers" className="hero__scroll" aria-label="Scroll to the work">
            <span className="hero__scroll-label">Scroll</span>
            <span className="hero__scroll-line" aria-hidden="true" />
          </a>

          <motion.span className="hero__meta-item hero__meta-item--right" variants={rise}>
            <span className="index">N{"º"} {evening ? "02" : "01"}</span>
            <span aria-hidden="true"> — </span>
            {evening ? "Evening" : "Day"} edition
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
