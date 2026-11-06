import { useState } from "react";
import {
  Check,
  Clipboard,
  Clock,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { ChapterTitle, Reveal, SpeechBubble, Starburst } from "@/components/comic/ComicKit";
import { useSfx } from "@/components/comic/Effects";
import { languages, profile } from "@/data/resume";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: profile.emailHref, color: "var(--red)" },
  { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref, color: "var(--green)" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    color: "var(--blue)",
  },
  {
    icon: Github,
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
    color: "var(--purple)",
  },
];

const faqs = [
  {
    q: "Are you open to full-time roles?",
    a: "Yes — full-stack, backend, or AI/ML engineering. I have shipped production code in three internships and I am comfortable owning a feature end to end.",
  },
  {
    q: "What is your strongest stack?",
    a: "Python and Java on the backend (FastAPI, Spring Boot), React and Angular on the front, plus LangGraph, Weaviate and Pinecone when an AI agent is involved.",
  },
  {
    q: "Do you actually enjoy red teaming AI?",
    a: "Aegis exists because of that. PyRIT and Garak are in the résumé for a reason: finding a prompt injection before a user does is deeply satisfying.",
  },
  {
    q: "How fast do you reply?",
    a: "Usually within a day. If it takes longer, assume I am either in a code review or arguing with a Kafka consumer.",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [copied, setCopied] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const { play } = useSfx();

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    if (sent) setSent(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Hello from ${form.name || "your portfolio"}`);
    const body = encodeURIComponent(
      `Hi Amaljith,\n\n${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    play("success");
  };

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      window.setTimeout(() => setCopied(null), 1600);
    } catch {
      setCopied(null);
    }
  };

  return (
    <div className="container-x py-12 lg:py-16">
      <header className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <span className="sticker sticker-yellow">Chapter 04</span>
          <span className="sticker sticker-green">Send a signal</span>
          <span className="sticker sticker-blue">No spam, ever</span>
        </div>
        <h1 className="display mt-4 text-[clamp(2.8rem,8vw,5rem)] leading-[0.85] title-ink">
          Light up the
          <br /> bat-signal
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-comic-ink/80">
          Hiring, collaborating, or just want to argue about whether Kafka is overkill? All three are
          welcome. Replies usually land within a day.
        </p>

        <Starburst
          className="pointer-events-none absolute -top-1 right-0 hidden h-28 w-28 lg:grid"
          color="var(--green)"
          textClassName="text-base"
          wobble
        >
          Reply
          <br />
          &lt; 24h
        </Starburst>
      </header>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        {/* form */}
        <Reveal>
          <form onSubmit={handleSubmit} className="panel p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3 border-b-[3px] border-dashed border-comic-ink/30 pb-4">
              <h2 className="display text-2xl leading-none sm:text-3xl">Write in the issue</h2>
              <span className="sticker sticker-red text-[11px]">Panel 1</span>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="display text-sm tracking-[0.14em]">Your name</span>
                <input
                  className="comic-input mt-1"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Clark Kent (or your name)"
                  required
                  autoComplete="name"
                />
              </label>
              <label className="block">
                <span className="display text-sm tracking-[0.14em]">Your email</span>
                <input
                  className="comic-input mt-1"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@company.com"
                  required
                  autoComplete="email"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="display text-sm tracking-[0.14em]">Subject</span>
              <input
                className="comic-input mt-1"
                value={form.subject}
                onChange={update("subject")}
                placeholder="Full-stack role / project / hello"
                required
              />
            </label>

            <label className="mt-4 block">
              <span className="display text-sm tracking-[0.14em]">The pitch</span>
              <textarea
                className="comic-input mt-1 min-h-[150px] resize-y"
                value={form.message}
                onChange={update("message")}
                placeholder="Tell me what you're building, the stack, and the timeline. Bonus points for puns."
                required
              />
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button type="submit" className="btn-comic btn-red" data-sfx-quiet>
                <Send size={17} /> Send it
              </button>
              <button
                type="button"
                className="btn-comic btn-sm btn-paper"
                onClick={() => copy(profile.email)}
              >
                {copied === profile.email ? <Check size={15} /> : <Clipboard size={15} />}
                {copied === profile.email ? "Copied" : "Copy email"}
              </button>
            </div>

            {sent && (
              <div className="mt-5 flex items-start gap-3 rounded-xl border-[3px] border-comic-ink bg-comic-yellow p-4 shadow-comic-sm">
                <Sparkles size={18} className="mt-0.5 shrink-0" />
                <p className="text-[15px] font-bold leading-snug">
                  Your mail app should be open with everything filled in — just hit send. If nothing
                  happened, copy the email or call instead.
                </p>
              </div>
            )}

            <p className="mt-5 text-[13px] font-bold text-comic-ink/55">
              No backend, no tracking, no cookies: the form just opens your email client with the
              message pre-written.
            </p>
          </form>
        </Reveal>

        {/* channels */}
        <div className="space-y-5">
          <Reveal delay={80}>
            <div className="panel bg-comic-ink p-6 text-comic-paper">
              <div className="flex items-center gap-2">
                <MapPin size={17} className="text-comic-yellow" />
                <p className="kicker text-comic-yellow">Currently based in</p>
              </div>
              <p className="display mt-1 text-3xl leading-none">{profile.location}</p>
              <p className="mt-2 text-comic-paper/75">
                Open to roles across India (and remote everywhere). Willing to relocate — the suitcase is
                already 80% chargers.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-bold text-comic-paper/70">
                <Clock size={14} /> Replies within a day, faster if it is interesting.
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="panel p-5">
              <h2 className="display text-2xl leading-none">Direct lines</h2>
              <ul className="mt-4 space-y-3">
                {channels.map((ch) => (
                  <li key={ch.label} className="flex items-center gap-3">
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border-[3px] border-comic-ink shadow-comic-sm"
                      style={{ background: ch.color }}
                    >
                      <ch.icon size={17} className={ch.color === "var(--red)" || ch.color === "var(--blue)" || ch.color === "var(--purple)" ? "text-white" : "text-comic-ink"} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-comic-ink/50">
                        {ch.label}
                      </p>
                      <a
                        href={ch.href}
                        target={ch.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="block truncate font-bold hover:text-comic-red hover:underline"
                      >
                        {ch.value}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={() => copy(ch.value)}
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-md border-2 border-comic-ink bg-comic-paper transition-colors hover:bg-comic-yellow"
                      aria-label={`Copy ${ch.label}`}
                    >
                      {copied === ch.value ? <Check size={13} /> : <Clipboard size={13} />}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {languages.map((l) => (
                  <span key={l.name} className="tag">
                    {l.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mx-auto max-w-[220px]">
              <SpeechBubble right>
                <p className="text-[15px] font-bold italic">
                  “I read every message myself. No chatbot — ironic, given what I build.”
                </p>
              </SpeechBubble>
            </div>
          </Reveal>
        </div>
      </div>

      {/* FAQ */}
      <section className="mt-20">
        <ChapterTitle
          align="left"
          kicker="Ask the editor"
          accent="var(--purple)"
          title="Frequently shouted questions"
          blurb="The four things recruiters and friends ask most, answered without the corporate fog machine."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 70}>
              <details className="panel group p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                  <span className="display text-xl leading-tight">{faq.q}</span>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-[3px] border-comic-ink bg-comic-yellow transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 border-t-2 border-dashed border-comic-ink/25 pt-3 text-[15px] leading-snug text-comic-ink/80">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
