import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  GraduationCap,
  MapPin,
  Phone,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  ChapterTitle,
  Marquee,
  Reveal,
  SpeechBubble,
  Starburst,
  Tape,
} from "@/components/comic/ComicKit";
import {
  marqueeSkills,
  powerStats,
  profile,
  projects,
  stats,
} from "@/data/resume";

const chapters = [
  {
    n: "01",
    title: "Origin Story",
    blurb: "Kasaragod → CUSAT. Three internships, zero capes, one very tired laptop.",
    href: "/about",
    color: "var(--yellow)",
  },
  {
    n: "02",
    title: "The Issues",
    blurb: "Four projects — including one that attacks AI on purpose and grades the damage.",
    href: "/projects",
    color: "var(--red)",
  },
  {
    n: "03",
    title: "Trophy Room",
    blurb: "UGC NET 96.36 percentile, ModelQuest #6, and four shiny certification badges.",
    href: "/achievements",
    color: "var(--blue)",
  },
  {
    n: "04",
    title: "Send A Signal",
    blurb: "Hiring? Collaborating? Just lonely? My inbox has excellent uptime.",
    href: "/contact",
    color: "var(--green)",
  },
];

const barColors = ["var(--red)", "var(--blue)", "var(--purple)", "var(--green)", "var(--orange)", "var(--pink)"];

const Index = () => {
  const [comicMode, setComicMode] = useState(false);
  const featured = projects.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* ============================== HERO ============================== */}
      <section className="relative">
        <div
          className="pointer-events-none absolute -right-28 -top-32 h-80 w-80 rounded-full halftone-strong opacity-50 spin-slow"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rotate-12 rounded-full halftone opacity-40"
          aria-hidden="true"
        />

        <div className="container-x relative grid items-center gap-12 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="sticker sticker-yellow anim-wiggle">Issue #01</span>
              <span className="sticker sticker-blue">MCA · CUSAT</span>
              <span className="sticker sticker-green">
                <span className="inline-block h-2 w-2 rounded-full bg-comic-ink anim-blink" /> Open to work
              </span>
            </div>

            <h1 className="display mt-5 text-[clamp(3.4rem,11vw,7rem)] leading-[0.85]">
              <span className="block title-ink">Amaljith</span>
              <span className="block title-pop mt-2">U K</span>
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="display -rotate-1 border-[3px] border-comic-ink bg-comic-ink px-3 pb-1 pt-0.5 text-lg tracking-[0.14em] text-comic-yellow shadow-comic-sm">
                The full-stack crusader
              </span>
              <span className="display rotate-1 border-[3px] border-comic-ink bg-comic-cream px-3 pb-1 pt-0.5 text-lg tracking-[0.1em]">
                AI agent wrangler
              </span>
            </div>

            <SpeechBubble className="mt-8 max-w-xl">
              <p className="text-lg font-bold leading-snug sm:text-xl">{profile.headline}</p>
            </SpeechBubble>

            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-comic-ink/80">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="btn-comic btn-red">
                Read the issues <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-comic">
                Send a signal <Zap size={18} />
              </Link>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-comic btn-paper"
              >
                <Github size={18} /> GitHub
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-bold text-comic-ink/70">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={15} className="text-comic-red" /> {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap size={15} className="text-comic-blue" /> MCA, CUSAT — CGPA 9.4
              </span>
              <a href={profile.phoneHref} className="inline-flex items-center gap-1.5 hover:text-comic-red">
                <Phone size={15} className="text-comic-green" /> {profile.phone}
              </a>
            </div>
          </div>

          {/* photo panel */}
          <Reveal delay={120} className="relative">
            <figure className="panel relative mx-auto max-w-[400px] rotate-[1.6deg] p-3 lg:max-w-none">
              <Tape className="-top-3 left-6 -rotate-6" />
              <Tape className="-top-3 right-8 rotate-3" />
              <div className="relative overflow-hidden border-[3px] border-comic-ink bg-comic-yellow">
                <img
                  src={
                    comicMode
                      ? "/lovable-uploads/portrait-halftone.png"
                      : "/lovable-uploads/profile.png"
                  }
                  alt="Amaljith U K"
                  className="aspect-[4/5] w-full object-cover"
                  width={800}
                  height={1000}
                />
                <span className="absolute left-3 top-3 sticker sticker-red text-xs">Panel 1</span>
                <Starburst
                  className="absolute bottom-3 right-3 h-24 w-24 rotate-12 sm:h-28 sm:w-28"
                  textClassName="text-lg sm:text-xl"
                  wobble
                >
                  Hire
                  <br />
                  me!
                </Starburst>
              </div>
              <figcaption className="mt-2 px-1 pb-1 font-display text-[19px] leading-[1.1] tracking-wide">
                Our hero, smiling because the build passed on the first try. It did not, but let him have
                this.
              </figcaption>
            </figure>

            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setComicMode((v) => !v)}
                className="btn-comic btn-sm btn-paper"
                aria-pressed={comicMode}
              >
                <Sparkles size={14} /> {comicMode ? "Show the real me" : "Comic-ify me"}
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================== TICKER ============================== */}
      <Marquee items={marqueeSkills} duration={38} className="bg-comic-ink" />
      <Marquee items={marqueeSkills.slice().reverse()} reverse duration={44} className="bg-comic-red" />

      {/* ============================== STATS ============================== */}
      <section className="container-x py-16">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <h2 className="display text-3xl sm:text-4xl">The numbers panel</h2>
            <p className="text-sm font-bold text-comic-ink/60">
              Verified by the résumé. Unverified by my sleep schedule.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="panel panel-hover shake-hover p-4"
                style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
              >
                <div className="display text-4xl leading-none text-comic-red">{s.value}</div>
                <div className="display mt-1 text-lg leading-none tracking-wide">{s.label}</div>
                <div className="mt-1 text-[13px] font-bold text-comic-ink/60">{s.sub}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ============================== CHAPTERS ============================== */}
      <section className="relative border-y-4 border-comic-ink bg-comic-cream py-16">
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" aria-hidden="true" />
        <div className="container-x relative">
          <ChapterTitle
            kicker="Inside this issue"
            title={
              <>
                Four chapters,
                <br className="hidden sm:block" /> zero filler episodes
              </>
            }
            blurb="Flip through the origin story, the project issues, the trophy shelf, and the contact page. There is a joke on every panel — that is the deal."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {chapters.map((c, i) => (
              <Reveal key={c.n} delay={i * 90}>
                <Link
                  to={c.href}
                  className="panel panel-hover relative block h-full p-6 pt-7 group"
                  style={{ transform: `rotate(${i % 2 === 0 ? -1.2 : 1.2}deg)` }}
                >
                  <span className="corner-num" style={{ background: c.color }}>
                    {c.n}
                  </span>
                  <h3 className="display mt-3 text-2xl leading-none">{c.title}</h3>
                  <p className="mt-3 text-[15px] leading-snug text-comic-ink/80">{c.blurb}</p>
                  <span className="display mt-4 inline-flex items-center gap-1 text-lg text-comic-red">
                    Open chapter <ArrowUpRight size={16} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== POWER STATS ============================== */}
      <section className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <ChapterTitle
              align="left"
              kicker="Power stats"
              accent="var(--purple)"
              title={
                <>
                  Skill sheet,
                  <br /> measured in vibes
                </>
              }
              blurb="Hand-graded by me, after three internships and one too many 2 a.m. merges. No XP hacks used."
            />
            <div className="mt-8 rotate-[-1deg]">
              <SpeechBubble>
                <p className="font-bold">
                  “Proficient in Python, Java, Spring Boot, FastAPI, React, and LangGraph.” — my résumé,
                  also my alibi.
                </p>
              </SpeechBubble>
            </div>
            <Link to="/about" className="btn-comic btn-sm btn-paper mt-10 inline-flex">
              See the full gadget belt <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <div className="panel p-6">
              <div className="mb-4 flex items-center justify-between border-b-[3px] border-dashed border-comic-ink/40 pb-3">
                <span className="display text-xl tracking-wide">STAT SHEET</span>
                <span className="sticker sticker-cyan text-[11px]">Beta build</span>
              </div>
              <ul className="space-y-4">
                {powerStats.map((s, i) => (
                  <li key={s.label}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="display text-[17px] tracking-wide">{s.label}</span>
                      <span className="display text-lg text-comic-red">{s.level}</span>
                    </div>
                    <div className="mt-1 h-4 overflow-hidden rounded-full border-[3px] border-comic-ink bg-white">
                      <div
                        className="bar-fill h-full border-r-[3px] border-comic-ink"
                        style={{
                          width: `${s.level}%`,
                          background: barColors[i % barColors.length],
                          animationDelay: `${i * 90}ms`,
                        }}
                      />
                    </div>
                    <p className="mt-0.5 text-[12px] font-bold italic text-comic-ink/55">{s.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================== FEATURED PROJECTS ============================== */}
      <section className="border-t-4 border-comic-ink bg-comic-ink py-16 text-comic-paper">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="sticker sticker-red">Fresh off the press</span>
              <h2 className="display title-paper mt-4 text-4xl sm:text-5xl">This month's issues</h2>
            </div>
            <Link to="/projects" className="btn-comic btn-sm">
              All four issues <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <Link
                  to="/projects"
                  className="group flex h-full flex-col rounded-2xl border-4 border-comic-paper bg-comic-cream p-5 text-comic-ink shadow-[8px_8px_0_var(--red)] transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_var(--yellow)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="display text-lg tracking-[0.14em]" style={{ color: p.accent }}>
                      {p.issue}
                    </span>
                    <span className="tag" style={{ background: p.accent, color: "#fff", borderColor: "var(--ink)" }}>
                      {p.category}
                    </span>
                  </div>
                  <h3 className="display mt-3 text-3xl leading-none">{p.title}</h3>
                  <p className="display mt-1 text-base tracking-wide text-comic-ink/60">{p.subtitle}</p>
                  <p className="mt-3 flex-1 text-[15px] leading-snug text-comic-ink/80">{p.quip}</p>
                  <span className="display mt-4 inline-flex items-center gap-1 text-lg">
                    Read the panels <ArrowUpRight size={16} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== CTA ============================== */}
      <section className="container-x py-16">
        <Reveal>
          <div className="panel relative overflow-hidden bg-comic-yellow p-8 sm:p-12">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rotate-12 halftone-strong opacity-40"
              aria-hidden="true"
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <span className="sticker sticker-red">To be continued…</span>
                <h2 className="display mt-4 text-4xl leading-[0.9] sm:text-5xl">
                  Got a role, a project,
                  <br /> or a heroic bug?
                </h2>
                <p className="mt-4 max-w-xl text-lg font-bold text-comic-ink/80">
                  I build things, break things on purpose, and document the damage. Let's put that on
                  your team's résumé next.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-comic btn-red">
                    Send a signal <ArrowRight size={18} />
                  </Link>
                  <a href={profile.emailHref} className="btn-comic btn-paper normal-case tracking-normal">
                    {profile.email}
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <Starburst
                  className="h-40 w-40 sm:h-48 sm:w-48"
                  color="var(--red)"
                  textClassName="text-[26px] text-white sm:text-3xl"
                  wobble
                >
                  Let's
                  <br />
                  talk!
                </Starburst>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Index;
