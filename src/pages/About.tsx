import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Languages, Music, Trophy, Zap } from "lucide-react";
import { ChapterTitle, Reveal, SpeechBubble, Starburst } from "@/components/comic/ComicKit";
import {
  education,
  experience,
  funFacts,
  languages,
  leadership,
  profile,
  skillGroups,
  sports,
} from "@/data/resume";

const strip = [
  {
    n: "1",
    emoji: "🌴",
    title: "Kasaragod",
    caption: "Born, raised, and taught to squeeze a compiler into a shared family computer.",
    color: "var(--green)",
  },
  {
    n: "2",
    emoji: "🎓",
    title: "B.Sc. CS",
    caption: "Govt. College Kasaragod, 83.13%. Learned recursion, and the fear of a power cut.",
    color: "var(--blue)",
  },
  {
    n: "3",
    emoji: "🧠",
    title: "MCA @ CUSAT",
    caption: "CGPA 9.4. Grad school, but with three internships bolted on the side.",
    color: "var(--purple)",
  },
  {
    n: "4",
    emoji: "⚡",
    title: "Field Work",
    caption: "Deloitte, Remap Intelligence, DataiX3 — shipped real things for real users.",
    color: "var(--red)",
  },
];

const About = () => {
  return (
    <div className="container-x py-12 lg:py-16">
      {/* header */}
      <header className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <span className="sticker sticker-yellow">Chapter 01</span>
          <span className="sticker sticker-blue">Origin story</span>
        </div>
        <h1 className="display mt-4 text-[clamp(2.8rem,8vw,5rem)] leading-[0.85] title-ink">
          How this hero
          <br /> got compiled
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-comic-ink/80">
          One MCA from CUSAT, three internships, four shipped projects and an unreasonable amount of
          chai. Here is the readable version — with fewer footnotes than the résumé.
        </p>

        <Starburst
          className="pointer-events-none absolute -top-2 right-0 hidden h-28 w-28 lg:grid"
          color="var(--red)"
          textClassName="text-lg text-white"
          wobble
        >
          Est.
          <br />
          2021
        </Starburst>
      </header>

      {/* strip */}
      <section className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {strip.map((panel, i) => (
          <Reveal key={panel.n} delay={i * 80}>
            <div className="panel panel-hover h-full overflow-hidden">
              <div
                className="relative grid h-32 place-items-center border-b-4 border-comic-ink"
                style={{ background: panel.color }}
              >
                <span className="absolute left-2 top-2 grid h-8 w-8 place-items-center rounded-full border-[3px] border-comic-ink bg-comic-cream display text-base">
                  {panel.n}
                </span>
                <span className="text-5xl drop-shadow-[3px_3px_0_rgba(19,18,23,1)]" aria-hidden="true">
                  {panel.emoji}
                </span>
                <span className="pointer-events-none absolute inset-0 halftone-strong opacity-25" aria-hidden="true" />
              </div>
              <div className="p-4">
                <h2 className="display text-2xl leading-none">{panel.title}</h2>
                <p className="mt-2 text-[15px] leading-snug text-comic-ink/80">{panel.caption}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* secret origin */}
      <section className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <Reveal>
          <div className="panel p-6 sm:p-8">
            <span className="sticker sticker-purple">Secret origin</span>
            <h2 className="display mt-4 text-3xl sm:text-4xl">The résumé summary, but narrated</h2>
            <p className="mt-4 text-lg leading-relaxed text-comic-ink/85">{profile.summary}</p>
            <p className="mt-4 text-lg leading-relaxed text-comic-ink/85">
              Day job: build full-stack enterprise web apps — front-end, back-end microservices, the
              whole buffet. Side quest: point AI agents at each other, see which one cracks first, and
              turn the wreckage into a safety score. Weekend boss fight: real-time data pipelines on
              Kafka and PySpark that refuse to drop a message.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.roles.map((role) => (
                <span key={role} className="tag">
                  {role}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-comic btn-sm btn-red">
                See the issues <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-comic btn-sm btn-paper">
                Hire this origin story
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="panel -rotate-1 bg-comic-yellow p-6">
            <h2 className="display text-2xl">Random panels (100% résumé-derived)</h2>
            <ul className="mt-4 space-y-4">
              {funFacts.map((fact, i) => (
                <li key={i} className="flex gap-3 border-b-2 border-dashed border-comic-ink/30 pb-3 last:border-0 last:pb-0">
                  <span className="display text-xl text-comic-red">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[15px] font-bold leading-snug">{fact}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-end gap-3">
              <div className="barcode h-9 w-24 bg-comic-ink/80" aria-hidden="true" />
              <span className="font-type text-[10px] uppercase leading-tight tracking-widest">
                Origin · vol. 01
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* education */}
      <section className="mt-20">
        <ChapterTitle
          align="left"
          kicker="Training montage"
          accent="var(--blue)"
          title="Education, with receipts"
          blurb="Two degrees, two campuses, and exactly zero of those “10x developer” courses advertised in my feed."
        />

        <div className="mt-9 grid gap-6 md:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 100}>
              <article className="panel panel-hover h-full p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border-[3px] border-comic-ink bg-comic-blue shadow-comic-sm">
                    <GraduationCap size={22} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="display text-3xl leading-none text-comic-red">{edu.score}</div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-comic-ink/60">
                      {edu.scoreLabel}
                    </div>
                  </div>
                </div>
                <h3 className="display mt-4 text-2xl leading-tight">{edu.degree}</h3>
                <p className="mt-1 font-bold text-comic-ink/70">{edu.school}</p>
                <span className="sticker mt-3 inline-flex">{edu.period}</span>
                <p className="mt-4 text-[15px] leading-snug text-comic-ink/80">{edu.blurb}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* experience */}
      <section className="mt-20">
        <ChapterTitle
          align="left"
          kicker="Battle records"
          accent="var(--red)"
          title="Three internships, three bosses"
          blurb="Real companies, real codebases, real deadlines. All references available — assuming they survived the sprints."
        />

        <div className="mt-9 space-y-7">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 80}>
              <article className="panel relative p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span
                      className="sticker"
                      style={{ background: job.accent, color: "#fff" }}
                    >
                      Record {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="display mt-2 text-3xl leading-none sm:text-4xl">{job.company}</h3>
                    <p className="display mt-1 text-lg tracking-wide text-comic-ink/70">{job.role}</p>
                    <p className="text-sm font-bold text-comic-ink/55">{job.location}</p>
                  </div>
                  <span className="sticker sticker-yellow">{job.period}</span>
                </div>

                <ul className="mt-5 space-y-3">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-[15px] leading-snug text-comic-ink/85">
                      <Zap size={17} className="mt-0.5 shrink-0 text-comic-red" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 max-w-xl sm:ml-auto sm:mr-0">
                  <SpeechBubble right>
                    <p className="text-[15px] font-bold italic">{job.quip}</p>
                  </SpeechBubble>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* gadget belt */}
      <section className="mt-20">
        <ChapterTitle
          align="left"
          kicker="The gadget belt"
          accent="var(--purple)"
          title="Everything in the utility belt"
          blurb="Grouped the way the résumé groups them — no “advanced” claims I can't back up in a code review."
        />

        <div className="mt-9 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 90}>
              <div className="panel panel-hover h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-lg border-[3px] border-comic-ink text-xl shadow-comic-sm" style={{ background: group.accent }}>
                    <span aria-hidden="true">{group.emoji}</span>
                  </span>
                  <h3 className="display text-2xl leading-none">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="tag transition-transform hover:-translate-y-0.5 hover:bg-comic-yellow"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* side quests */}
      <section className="mt-20">
        <ChapterTitle
          align="left"
          kicker="Side quests"
          accent="var(--green)"
          title="Leadership, languages & a volleyball"
          blurb="Because a résumé that only says “wrote code” is a comic with only one character."
        />

        <div className="mt-9 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5">
            {leadership.map((item, i) => (
              <Reveal key={`${item.role}-${item.year}`} delay={i * 80}>
                <div className="panel flex flex-wrap items-center justify-between gap-4 p-5">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-comic-ink bg-comic-green text-xl shadow-comic-sm">
                      <span aria-hidden="true">{item.emoji}</span>
                    </span>
                    <div>
                      <h3 className="display text-xl leading-none">{item.role}</h3>
                      <p className="text-[13px] font-bold text-comic-ink/65">{item.org}</p>
                      <p className="mt-0.5 text-[12px] italic text-comic-ink/55">{item.note}</p>
                    </div>
                  </div>
                  <span className="sticker sticker-yellow">{item.year}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="space-y-6">
            <Reveal delay={100}>
              <div className="panel p-5">
                <div className="flex items-center gap-2">
                  <Languages size={18} className="text-comic-blue" />
                  <h3 className="display text-xl leading-none">Languages</h3>
                </div>
                <ul className="mt-3 space-y-2">
                  {languages.map((lang) => (
                    <li key={lang.name} className="flex items-center justify-between border-b-2 border-dashed border-comic-ink/25 pb-1.5 last:border-0">
                      <span className="font-bold">{lang.name}</span>
                      <span className="text-[12px] font-bold uppercase tracking-wider text-comic-ink/55">
                        {lang.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="panel rotate-1 bg-comic-pink p-5">
                <div className="flex items-center gap-2">
                  <Trophy size={18} />
                  <h3 className="display text-xl leading-none">Sports panel</h3>
                </div>
                <p className="mt-2 display text-2xl leading-none">{sports.title}</p>
                <p className="text-[13px] font-bold">{sports.detail}</p>
                <p className="mt-2 text-[14px] font-bold italic">{sports.note}</p>
                <div className="mt-3 flex items-center gap-2 text-2xl" aria-hidden="true">
                  <span className="anim-bob inline-block">🏐</span>
                  <Music size={16} className="opacity-40" />
                  <span className="text-sm font-bold opacity-60">crowd noise intensifies</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t-4 border-dashed border-comic-ink/30 pt-8">
        <p className="display text-2xl">Next: the projects, where the chaos is documented.</p>
        <Link to="/projects" className="btn-comic btn-red">
          Read the issues <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default About;
