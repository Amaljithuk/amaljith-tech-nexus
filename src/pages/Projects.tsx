import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Github, Sparkles, Star } from "lucide-react";
import { ChapterTitle, Reveal, SpeechBubble, Starburst } from "@/components/comic/ComicKit";
import { profile, projects } from "@/data/resume";

const covers: Record<string, { emoji: string; ink: string }> = {
  aegis: { emoji: "🛡️", ink: "#ffffff" },
  "agentic-rag": { emoji: "📚", ink: "#ffffff" },
  "smart-health-connect": { emoji: "🩺", ink: "#ffffff" },
  "fi-res": { emoji: "🔥", ink: "#ffffff" },
};

const filters = ["All", "AI Security", "AI / RAG", "Full-Stack", "Machine Learning"] as const;

const Projects = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div className="container-x py-12 lg:py-16">
      <header className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <span className="sticker sticker-yellow">Chapter 02</span>
          <span className="sticker sticker-red">The issues</span>
          <span className="sticker sticker-blue">4 covers</span>
        </div>
        <h1 className="display mt-4 text-[clamp(2.8rem,8vw,5rem)] leading-[0.85] title-ink">
          Four issues,
          <br /> zero filler
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-comic-ink/80">
          Each one started as a “quick idea”, grew a database, and now has a personality. Tap a cover to
          read what it actually does — the code lives on GitHub.
        </p>

        <Starburst
          className="pointer-events-none absolute -top-1 right-0 hidden h-28 w-28 lg:grid"
          color="var(--blue)"
          textClassName="text-base text-white"
          wobble
        >
          Fresh
          <br />
          ink!
        </Starburst>
      </header>

      {/* filter rail */}
      <div className="mt-9 flex flex-wrap items-center gap-2 border-y-[3px] border-dashed border-comic-ink/30 py-4">
        <span className="display mr-1 text-lg">Filter:</span>
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`display border-[3px] border-comic-ink px-3 pb-1 pt-0.5 text-base tracking-wide transition-transform hover:-translate-y-0.5 ${
              filter === f
                ? "bg-comic-ink text-comic-yellow shadow-comic-sm"
                : "bg-comic-cream shadow-[2px_2px_0_var(--ink)]"
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto text-sm font-bold text-comic-ink/60">
          showing {visible.length} of {projects.length} · reader discretion: strong opinions about code
          quality
        </span>
      </div>

      {/* covers */}
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {visible.map((p, i) => {
          const cover = covers[p.id] ?? { emoji: "💥", ink: "#fff" };
          return (
            <Reveal key={p.id} delay={i * 90}>
              <article className="panel panel-hover flex h-full flex-col overflow-hidden">
                {/* cover art */}
                <div
                  className="relative grid h-48 place-items-center border-b-4 border-comic-ink"
                  style={{ background: p.accent }}
                >
                  <span className="pointer-events-none absolute inset-0 halftone-strong opacity-25" aria-hidden="true" />
                  <span className="pointer-events-none absolute inset-0 speed-lines opacity-30" aria-hidden="true" />
                  <span className="display absolute left-4 top-3 text-2xl tracking-[0.12em] text-white drop-shadow-[2px_2px_0_rgba(19,18,23,1)]">
                    Issue {p.issue}
                  </span>
                  <span className="display absolute bottom-3 right-4 text-sm tracking-[0.18em] text-white/90">
                    ₹0.00 · no ads
                  </span>
                  <span
                    className="relative text-[92px] leading-none drop-shadow-[4px_4px_0_rgba(19,18,23,1)]"
                    aria-hidden="true"
                  >
                    {cover.emoji}
                  </span>
                  <span className="absolute bottom-3 left-4">
                    <span className="sticker sticker-paper text-xs">{p.category}</span>
                  </span>
                </div>

                {/* blurb */}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="display text-3xl leading-none sm:text-4xl">{p.title}</h2>
                  <p className="display mt-1 text-lg tracking-wide text-comic-ink/60">{p.subtitle}</p>

                  <p className="mt-4 text-[16px] leading-snug text-comic-ink/85">{p.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-[15px] leading-snug text-comic-ink/80">
                        <Star size={15} className="mt-1 shrink-0 text-comic-red" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((tech) => (
                      <span key={tech} className="tag transition-colors hover:bg-comic-yellow">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <SpeechBubble>
                      <p className="text-[15px] font-bold italic">{p.quip}</p>
                    </SpeechBubble>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-comic btn-sm btn-red"
                    >
                      <Github size={16} /> See the code
                    </a>
                    <Link to="/contact" className="btn-comic btn-sm btn-paper">
                      Ask about it <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {visible.length === 0 && (
        <div className="panel mt-10 grid place-items-center p-10 text-center">
          <p className="display text-3xl">Nothing under this tag (yet).</p>
          <p className="mt-2 text-comic-ink/70">
            The artist is accepting commissions — a.k.a. job offers.
          </p>
          <button type="button" className="btn-comic btn-sm mt-5" onClick={() => setFilter("All")}>
            Show every issue
          </button>
        </div>
      )}

      {/* footer strip */}
      <section className="mt-16">
        <ChapterTitle
          kicker="Letters to the editor"
          accent="var(--ink)"
          title="How these got built"
          blurb="Python and Java for the heavy lifting, React and Angular for the face, Docker for the “works on your machine too” promise, and Kafka when messages need to travel at speed."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { t: "Built, then broken", d: "Every project gets the red-team treatment: attack it, measure it, then write the tests." },
            { t: "Measured, not vibed", d: "Ragas for retrieval accuracy, PyRIT and Garak for safety scores, TensorFlow for the fire detector." },
            { t: "Shipped in containers", d: "Docker, Weaviate, Pinecone — the stuff that turns a notebook into a product." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="panel h-full p-5">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-comic-purple" />
                  <h3 className="display text-xl leading-none">{c.t}</h3>
                </div>
                <p className="mt-2 text-[15px] leading-snug text-comic-ink/80">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t-4 border-dashed border-comic-ink/30 pt-8">
        <p className="display text-2xl">Next: the trophy room. Bring sunglasses.</p>
        <Link to="/achievements" className="btn-comic btn-blue">
          See the trophies <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
