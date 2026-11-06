import { Link } from "react-router-dom";
import { ArrowRight, Award, BadgeCheck, Medal, Sparkles, Trophy } from "lucide-react";
import { ChapterTitle, Reveal, SpeechBubble, Starburst } from "@/components/comic/ComicKit";
import { achievements, certifications, profile, sports } from "@/data/resume";

const metrics = [
  { value: "96.36%", label: "UGC NET percentile" },
  { value: "#6", label: "ModelQuest, NIT Trichy" },
  { value: "9.4", label: "MCA CGPA at CUSAT" },
  { value: "4", label: "Professional certifications" },
];

const Achievements = () => {
  return (
    <div className="container-x py-12 lg:py-16">
      <header className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <span className="sticker sticker-yellow">Chapter 03</span>
          <span className="sticker sticker-purple">Trophy room</span>
          <span className="sticker sticker-green">Sunglasses advised</span>
        </div>
        <h1 className="display mt-4 text-[clamp(2.8rem,8vw,5rem)] leading-[0.85] title-ink">
          Trophies,
          <br /> badges &amp; bruises
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-comic-ink/80">
          The highlight reel: one national eligibility exam, one machine learning hackathon, four
          certifications, and a volleyball that has seen things.
        </p>

        <Starburst
          className="pointer-events-none absolute -top-1 right-0 hidden h-28 w-28 lg:grid"
          color="var(--yellow)"
          textClassName="text-lg"
          wobble
        >
          Winner
          <br />
          vibes
        </Starburst>
      </header>

      {/* headline trophies */}
      <section className="mt-12 grid gap-7 lg:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 100}>
            <article className="panel panel-hover h-full overflow-hidden">
              <div
                className="relative flex items-center gap-5 border-b-4 border-comic-ink p-6"
                style={{ background: a.accent }}
              >
                <span className="pointer-events-none absolute inset-0 halftone-strong opacity-20" aria-hidden="true" />
                <span className="relative text-6xl drop-shadow-[3px_3px_0_rgba(19,18,23,1)]" aria-hidden="true">
                  {a.emoji}
                </span>
                <div className="relative">
                  <span className="sticker sticker-paper text-[11px]">Achievement unlocked</span>
                  <h2 className="display mt-2 text-3xl leading-none sm:text-4xl">{a.title}</h2>
                  <p className="display text-lg tracking-wide text-comic-ink/70">{a.subtitle}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="display text-xl tracking-wide text-comic-red">{a.detail}</p>
                <div className="mt-5">
                  <SpeechBubble>
                    <p className="text-[15px] font-bold italic">{a.note}</p>
                  </SpeechBubble>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-comic-ink/60">
                  <Trophy size={15} className="text-comic-yellow" /> Logged in the résumé, page 1.
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* certifications */}
      <section className="mt-20">
        <ChapterTitle
          align="left"
          kicker="Merit badges"
          accent="var(--blue)"
          title="Four certificates, zero lamination"
          blurb="Collected between 2024 and 2026 — data analytics, network science, machine learning, and the agentic AI rabbit hole."
        />

        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 80}>
              <article
                className="panel panel-hover flex h-full flex-col p-5 text-center"
                style={{ transform: `rotate(${i % 2 === 0 ? -1.4 : 1.4}deg)` }}
              >
                <div
                  className="mx-auto grid h-16 w-16 place-items-center rounded-full border-[3px] border-comic-ink text-3xl shadow-comic-sm"
                  style={{ background: cert.accent }}
                >
                  <span aria-hidden="true">{cert.emoji}</span>
                </div>
                <h3 className="display mt-4 text-xl leading-tight">{cert.title}</h3>
                <p className="mt-1 flex-1 text-[14px] font-bold text-comic-ink/70">{cert.detail}</p>
                <span className="sticker mx-auto mt-4">{cert.year}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* sports + metrics */}
      <section className="mt-20 grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="panel h-full rotate-[-1deg] bg-comic-cyan p-6">
            <span className="sticker sticker-red">Side boss</span>
            <h2 className="display mt-3 text-3xl leading-none">{sports.title}</h2>
            <p className="display text-lg tracking-wide">{sports.detail}</p>
            <p className="mt-3 text-[16px] font-bold">{sports.note}</p>
            <div className="mt-5 flex items-center gap-3 text-4xl" aria-hidden="true">
              <span className="anim-bob inline-block">🏐</span>
              <span className="display text-lg">spike · dig · deploy</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="panel h-full p-6">
            <div className="flex items-center gap-2">
              <Medal size={18} className="text-comic-red" />
              <h2 className="display text-2xl leading-none">Metrics panel</h2>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-xl border-[3px] border-comic-ink bg-comic-paper p-3">
                  <div className="display text-3xl leading-none text-comic-red">{m.value}</div>
                  <div className="mt-1 text-[13px] font-bold text-comic-ink/70">{m.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm font-bold text-comic-ink/60">
              <Sparkles size={14} className="text-comic-purple" /> Same numbers as the résumé. The sleep
              debt is not on the résumé.
            </p>
          </div>
        </Reveal>
      </section>

      {/* credentials note */}
      <section className="mt-16">
        <Reveal>
          <div className="panel flex flex-wrap items-center justify-between gap-6 bg-comic-ink p-6 text-comic-paper sm:p-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2">
                <BadgeCheck size={20} className="text-comic-yellow" />
                <span className="kicker text-comic-yellow">Editor's note</span>
              </div>
              <h2 className="display mt-2 text-3xl leading-none sm:text-4xl">
                Certificates expire. Curiosity doesn't.
              </h2>
              <p className="mt-3 text-comic-paper/80">
                Also qualified UGC NET for Assistant Professor in the December 2024 session — which is a
                fancy way of saying I can explain things to a room full of people and still enjoy it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-comic btn-sm">
                <Award size={16} /> Verify on LinkedIn
              </a>
              <Link to="/contact" className="btn-comic btn-sm btn-red">
                Pick me <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Achievements;
