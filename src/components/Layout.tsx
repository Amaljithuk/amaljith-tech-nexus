import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail, Menu, X, Volume2, VolumeX, Phone } from "lucide-react";
import { profile } from "@/data/resume";
import { Marquee } from "@/components/comic/ComicKit";
import { SfxProvider, ScrollProgress, SoundWords, useSfx } from "@/components/comic/Effects";
import { CursorFX } from "@/components/comic/CursorFX";

const navigation = [
  { name: "Home", label: "Home", href: "/" },
  { name: "Origin", label: "Origin", href: "/about" },
  { name: "Issues", label: "Projects", href: "/projects" },
  { name: "Trophies", label: "Awards", href: "/achievements" },
  { name: "Signal", label: "Contact", href: "/contact" },
];

const tickerItems = [
  "THE PORTFOLIO ISSUE #01",
  "FULL-STACK DEVELOPER",
  "AI AGENT WRANGLER",
  "MCA · CUSAT · CGPA 9.4",
  "UGC NET 96.36 PERCENTILE",
  "AVAILABLE FOR HIRE",
  "HANDLE WITH CAFFEINE",
];

const LayoutInner = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { enabled, toggle, play } = useSfx();
  const location = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      play("whoosh");
    }
  }, [location.pathname, play]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <SoundWords />
      <CursorFX />

      {/* cover banner */}
      <Marquee items={tickerItems} duration={46} className="text-xs sm:text-sm" />

      {/* masthead */}
      <header
        className={`sticky top-0 z-50 border-b-4 border-comic-ink bg-comic-paper/95 backdrop-blur-sm transition-shadow ${
          scrolled ? "shadow-[0_6px_0_rgba(19,18,23,0.12)]" : ""
        }`}
      >
        <div className="container-x">
          <div className="flex h-[70px] items-center justify-between gap-4">
            <Link to="/" className="group flex items-center gap-3" aria-label="Amaljith U K — home">
              <span className="grid h-11 w-11 -rotate-6 place-items-center border-[3px] border-comic-ink bg-comic-red text-comic-cream shadow-comic-sm transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105">
                <span className="display pt-1 text-2xl leading-none">AU</span>
              </span>
              <span className="leading-none">
                <span className="display block text-2xl leading-none sm:text-[26px]">
                  Amaljith <span className="text-comic-red">U K</span>
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-comic-ink/55">
                  Issue #01 · Portfolio
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) => `nav-item ${isActive ? "active" : "text-comic-ink/80"}`}
                  end={item.href === "/"}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggle}
                aria-pressed={enabled}
                aria-label={enabled ? "Turn sound effects off" : "Turn sound effects on"}
                title={enabled ? "SFX: ON — click to mute" : "SFX: OFF — click for chaos"}
                className={`btn-comic btn-sm hidden sm:inline-flex ${enabled ? "btn-green" : "btn-paper"}`}
                data-sfx-quiet
              >
                {enabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                <span className="hidden xl:inline">{enabled ? "Sfx on" : "Sfx off"}</span>
              </button>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hidden h-10 w-10 place-items-center rounded-lg border-[3px] border-comic-ink bg-comic-cream shadow-comic-sm transition-transform hover:-translate-y-0.5 hover:bg-comic-yellow sm:grid"
              >
                <Github size={17} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hidden h-10 w-10 place-items-center rounded-lg border-[3px] border-comic-ink bg-comic-cream shadow-comic-sm transition-transform hover:-translate-y-0.5 hover:bg-comic-cyan sm:grid"
              >
                <Linkedin size={17} />
              </a>

              <Link to="/contact" className="btn-comic btn-red btn-sm hidden md:inline-flex">
                Hire me
              </Link>

              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-lg border-[3px] border-comic-ink bg-comic-yellow shadow-comic-sm lg:hidden"
                onClick={() => {
                  setMenuOpen((v) => !v);
                  play("boing");
                }}
                aria-expanded={menuOpen}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t-4 border-comic-ink bg-comic-cream px-4 pb-6 pt-4 lg:hidden">
            <div className="mx-auto flex max-w-lg flex-col gap-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) =>
                    `display flex items-center justify-between rounded-lg border-[3px] border-comic-ink px-4 py-2 text-2xl shadow-comic-sm ${
                      isActive ? "bg-comic-ink text-comic-cream" : "bg-comic-paper"
                    }`
                  }
                >
                  {item.label}
                  <span className="text-comic-red">→</span>
                </NavLink>
              ))}
              <div className="mt-2 grid grid-cols-3 gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border-[3px] border-comic-ink bg-comic-paper py-2 text-sm font-bold shadow-comic-sm"
                >
                  <Github size={15} /> Code
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border-[3px] border-comic-ink bg-comic-paper py-2 text-sm font-bold shadow-comic-sm"
                >
                  <Linkedin size={15} /> In
                </a>
                <a
                  href={profile.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-lg border-[3px] border-comic-ink bg-comic-paper py-2 text-sm font-bold shadow-comic-sm"
                >
                  <Phone size={15} /> Call
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* back cover */}
      <footer className="mt-24 border-t-4 border-comic-ink bg-comic-ink text-comic-paper">
        <div className="container-x py-14">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <span className="sticker sticker-yellow">End of issue</span>
              <h2 className="display title-paper mt-4 text-4xl sm:text-5xl">Thanks for reading!</h2>
              <p className="mt-4 max-w-md text-comic-paper/80">
                Next issue is being written somewhere between a code review and a coffee refill. Want a
                cameo? Send a signal — I reply faster than a hot reload.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={profile.emailHref} className="btn-comic btn-red btn-sm normal-case tracking-normal">
                  <Mail size={16} /> {profile.email}
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-comic btn-paper btn-sm"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>

            <div>
              <p className="kicker text-comic-yellow">Quick links</p>
              <ul className="mt-4 space-y-2">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="display text-xl tracking-wide text-comic-paper/85 transition-colors hover:text-comic-yellow"
                    >
                      {item.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="kicker text-comic-yellow">Colophon</p>
              <ul className="mt-4 space-y-2 text-sm text-comic-paper/75">
                <li>Written &amp; drawn in Kochi, Kerala.</li>
                <li>Inks: React, Vite, Tailwind, TypeScript.</li>
                <li>Powered by {profile.email}</li>
                <li className="flex items-center gap-2">
                  <Phone size={14} /> {profile.phone}
                </li>
              </ul>
              <div className="mt-5 flex items-end gap-3">
                <div className="barcode h-10 w-28 rounded-[2px] bg-comic-paper/90" aria-hidden="true" />
                <span className="font-type text-[10px] leading-tight text-comic-paper/60">
                  ₹0.00
                  <br />
                  NO. 001
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t-2 border-comic-paper/20 pt-6 text-xs text-comic-paper/60 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Amaljith U K. All panels reserved.</p>
            <p className="font-type uppercase tracking-[0.18em]">
              Not for resale · No refunds on bugs · Printed on pixels
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <SfxProvider>
    <LayoutInner>{children}</LayoutInner>
  </SfxProvider>
);

export default Layout;
