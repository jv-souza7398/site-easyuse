import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useLoop } from "@/components/ui/skiper-ui/skiper62";
import { TextRoll } from "@/components/ui/skiper-ui/skiper58";
import { AnimatePresence, motion } from "framer-motion";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import pJumidia from "@/assets/project-jumidia.png";
import pVincci from "@/assets/project-vincci.png";
import pFresh from "@/assets/project-fresh.png";
import pClarinna from "@/assets/project-clarinna.png";

export const Route = createFileRoute("/")({
  component: Index,
});

type Project = {
  name: string;
  tagline: string;
  image: string;
  url: string;
  tag: string;
};

const projects: Project[] = [
  { name: "Jumidia Studio", tagline: "Site pessoal de uma publicitária — uma narrativa íntima sobre escolhas e propósito.", image: pJumidia, url: "https://www.jumidia.com.br/", tag: "Pessoal" },
  { name: "Vincci Bar", tagline: "Coquetelaria autoral para eventos exclusivos, com identidade sofisticada.", image: pVincci, url: "https://vinccibar.com/", tag: "Gastronomia" },
  { name: "Fresh Hortifruti", tagline: "Frutas e verduras sempre frescas — entrega rápida e identidade vibrante.", image: pFresh, url: "https://v0-hortifruti-website-prototype.vercel.app/", tag: "Hortifruti" },
  { name: "Clarinna Personalizados", tagline: "Papelaria, brindes e produtos artesanais feitos com carinho — presentes com alma.", image: pClarinna, url: "https://v0-site-clarinna-personalizados.vercel.app/", tag: "Artesanal" },
  { name: "Maison Lavoir", tagline: "Casa de moda histórica, reimaginada para o palco digital.", image: p1, url: "#", tag: "Moda" },
  { name: "Ostra & Vine", tagline: "Um restaurante litorâneo onde cada rolagem parece uma degustação.", image: p2, url: "#", tag: "Hospitalidade" },
  { name: "Fold Architects", tagline: "Portfólio silencioso para um estúdio que constrói em concreto.", image: p3, url: "#", tag: "Arquitetura" },
  { name: "Hôtel Solène", tagline: "Reservas de hotel boutique no ritmo de uma estadia cinematográfica.", image: p4, url: "#", tag: "Viagem" },
  { name: "Ember Roastery", tagline: "E-commerce de origem única com o aconchego de um café.", image: p5, url: "#", tag: "E-commerce" },
  { name: "Galerie Noir", tagline: "Galeria contemporânea apresentando obras como salas de estar.", image: p6, url: "#", tag: "Cultura" },
];

function Index() {
  return (
    <div className="grain relative min-h-screen overflow-x-hidden bg-bg text-text">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-[color:var(--bg)]/70 border-b border-[color:var(--border)]" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="font-serif text-2xl tracking-tight text-text">
          EasyUse<span className="text-gold">.</span>
        </a>
        <ul className="hidden items-center gap-10 text-sm uppercase tracking-[0.2em] text-text-muted md:flex">
          {[
            { label: "Projetos", href: "#work" },
            { label: "Sobre", href: "#about" },
            { label: "Contato", href: "#contact" },
          ].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full border border-[color:var(--gold)]/40 px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-bg md:inline-block"
        >
          Iniciar projeto
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-6 pt-32 md:px-10"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(10,45,255,0.14), transparent 50%), radial-gradient(ellipse at 80% 60%, rgba(10,45,255,0.10), transparent 55%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-7xl">
        <p className="animate-fade-up mb-8 text-xs uppercase tracking-[0.4em] text-gold">
          Estúdio de design independente · Desde 2020
        </p>
        <h1
          className="animate-fade-up text-balance font-serif text-[clamp(3rem,9vw,9rem)] leading-[0.95] text-text"
          style={{ animationDelay: "120ms" }}
        >
          <TextRoll center className="font-serif text-[clamp(3rem,9vw,9rem)] leading-[0.95] text-text">
            Sites que ganham
          </TextRoll>{" "}
          <TextRoll center className="font-serif italic text-[clamp(3rem,9vw,9rem)] leading-[0.95] text-text-muted">
            vida
          </TextRoll>
          <br />
          <TextRoll center className="font-serif text-[clamp(3rem,9vw,9rem)] leading-[0.95] text-text">
            e respiram.
          </TextRoll>
        </h1>
        <p
          className="animate-fade-up mt-10 max-w-xl text-lg leading-relaxed text-text-muted"
          style={{ animationDelay: "240ms" }}
        >
          Criamos lares digitais imersivos para marcas que se recusam a parecer com qualquer outra.
        </p>

        <div
          className="animate-fade-up absolute bottom-0 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-text-muted md:flex"
          style={{ animationDelay: "500ms" }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em]">Rolar</span>
          <div className="h-12 w-px bg-gradient-to-b from-[color:var(--gold)] to-transparent">
            <span className="block h-2 w-px animate-scroll-bounce bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [active, setActive] = useState(0);
  const [focused, setFocused] = useState<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const next = () => setActive((i) => (i + 1) % projects.length);
  const prev = () => setActive((i) => (i - 1 + projects.length) % projects.length);

  const wheelLockRef = useRef(0);
  // Non-passive wheel listener so preventDefault works
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      if (focused !== null) return;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 8) return;
      const now = Date.now();
      if (now - wheelLockRef.current < 450) {
        e.preventDefault();
        return;
      }
      wheelLockRef.current = now;
      e.preventDefault();
      if (delta > 0) next();
      else prev();
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, [focused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (focused !== null) {
        if (e.key === "Escape") setFocused(null);
        return;
      }
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [focused]);

  return (
    <section id="work" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Trabalhos selecionados</p>
            <h2 className="font-serif text-5xl text-text md:text-7xl">Um pequeno acervo.</h2>
          </div>
          <p className="max-w-sm text-text-muted">
            Peças recentes. Use as setas, deslize ou clique em um card para entrar.
          </p>
        </div>

        {/* Desktop / tablet 3D carousel */}
        <div
          ref={stageRef}
          className="perspective-stage relative hidden h-[560px] items-center justify-center md:flex"
        >
          {projects.map((p, i) => {
            const offset = i - active;
            const total = projects.length;
            // shortest path
            let d = offset;
            if (d > total / 2) d -= total;
            if (d < -total / 2) d += total;

            const abs = Math.abs(d);
            const visible = abs <= 2;
            const translateX = d * 320;
            const rotateY = d * -22;
            const translateZ = -abs * 220;
            const opacity = abs > 2 ? 0 : 1 - abs * 0.25;
            const z = 100 - abs;

            return (
              <button
                key={p.name}
                onClick={() => (i === active ? setFocused(i) : setActive(i))}
                aria-label={i === active ? `Abrir ${p.name}` : `Ver ${p.name}`}
                className="card-3d group absolute h-[460px] w-[680px] max-w-[80vw] overflow-hidden rounded-2xl border border-[color:var(--border)] bg-surface text-left"
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                  opacity,
                  zIndex: z,
                  pointerEvents: visible ? "auto" : "none",
                  boxShadow:
                    abs === 0
                      ? "0 50px 100px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(158,130,83,0.4), 0 0 80px -10px rgba(158,130,83,0.25)"
                      : "0 30px 60px -20px rgba(0,0,0,0.6)",
                }}
              >
                <img
                  src={p.image}
                  alt={`${p.name} website preview`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,45,255,0) 30%, rgba(10,45,255,0.78) 80%, rgba(10,45,255,0.95) 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-8">
                  <div>
                    <p className="mb-2 text-[10px] uppercase tracking-[0.4em] text-white/80">{p.tag}</p>
                    <h3 className="font-serif text-3xl text-white">{p.name}</h3>
                    <p className="mt-2 max-w-md text-sm text-white/80">{p.tagline}</p>
                  </div>
                  {abs === 0 && (
                    <span className="shrink-0 rounded-full border border-white/60 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white transition-colors group-hover:bg-white group-hover:text-gold">
                      Entrar →
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Controls */}
        <div className="mt-12 hidden items-center justify-between md:flex">
          <div className="flex items-center gap-3">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Ir para projeto ${i + 1}`}
                className={`h-px transition-all ${
                  i === active ? "w-12 bg-gold" : "w-6 bg-[color:var(--text-muted)]/40 hover:bg-[color:var(--text-muted)]"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="grid h-12 w-12 place-items-center rounded-full border border-[color:var(--border)] text-text-muted transition-all hover:border-gold hover:text-gold"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Próximo"
              className="grid h-12 w-12 place-items-center rounded-full border border-[color:var(--border)] text-text-muted transition-all hover:border-gold hover:text-gold"
            >
              →
            </button>
          </div>
        </div>

        {/* Mobile fallback */}
        <div className="flex flex-col gap-8 md:hidden">
          {projects.map((p) => (
            <article
              key={p.name}
              className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-surface"
            >
              <img
                src={p.image}
                alt={`${p.name} website preview`}
                width={1280}
                height={800}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-6">
                <p className="mb-2 text-[10px] uppercase tracking-[0.4em] text-gold">{p.tag}</p>
                <h3 className="font-serif text-2xl text-text">{p.name}</h3>
                <p className="mt-2 text-sm text-text-muted">{p.tagline}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block rounded-full border border-[color:var(--gold)]/50 px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-gold"
                >
                  Ver site →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Focus mode */}
      {focused !== null && (
        <FocusView project={projects[focused]} onClose={() => setFocused(null)} />
      )}
    </section>
  );
}

function FocusView({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/95 px-6 py-10 backdrop-blur-xl animate-fade-up"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-[color:var(--gold)]/30 bg-surface gold-glow"
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-[color:var(--border)] bg-bg/60 text-text-muted backdrop-blur transition hover:border-gold hover:text-gold"
        >
          ✕
        </button>
        <img
          src={project.image}
          alt={`${project.name} expanded preview`}
          width={1280}
          height={800}
          className="aspect-[16/10] w-full object-cover"
        />
        <div className="flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-end md:p-12">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-gold">{project.tag}</p>
            <h3 className="font-serif text-4xl text-text md:text-6xl">{project.name}</h3>
            <p className="mt-4 max-w-xl text-text-muted">{project.tagline}</p>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gold px-7 py-3 text-xs uppercase tracking-[0.3em] text-bg transition hover:bg-gold-soft"
          >
            Ver site →
          </a>
        </div>
      </div>
    </div>
  );
}

function About() {
  const stats = [
    { value: "12", label: "Projetos entregues" },
    { value: "5", label: "Anos de prática" },
    { value: "3", label: "Países atendidos" },
  ];
  return (
    <section id="about" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Sobre o estúdio</p>
          <h2 className="font-serif text-5xl text-text md:text-6xl">
            Ofício discreto, <em className="italic text-text-muted">intenção</em> alta.
          </h2>
        </div>
        <div className="flex flex-col gap-10">
          <p className="text-lg leading-relaxed text-text-muted">
            studio. é uma prática de duas pessoas que projeta e desenvolve sites para hospitalidade,
            cultura e comércio cuidadoso. Trabalhamos em pequenos lotes, tratamos a tipografia como matéria-prima
            e entregamos sites que continuam tão bons quanto parecem — seis meses depois.
          </p>
          <StatRotator items={stats} />
        </div>
      </div>
    </section>
  );
}

function StatRotator({ items }: { items: { value: string; label: string }[] }) {
  const { key } = useLoop(2200);
  const current = items[key % items.length];

  return (
    <div className="overflow-hidden border-t border-[color:var(--border)] pt-10">
      <div className="flex items-baseline gap-4">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={`value-${key}`}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="font-serif text-6xl text-gold md:text-7xl"
          >
            {current.value}
          </motion.span>
          <motion.span
            key={`label-${key}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="max-w-[16ch] text-[11px] uppercase leading-tight tracking-[0.25em] text-text-muted"
          >
            {current.label}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="mt-8 flex gap-3">
        {items.map((_, i) => {
          const active = i === key % items.length;
          return (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                active ? "w-10 bg-gold" : "w-4 bg-[color:var(--text-muted)]/30"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative px-6 py-32 md:px-10">
      <div
        className="mx-auto max-w-4xl rounded-3xl border border-[color:var(--gold)]/30 p-10 md:p-16 gold-glow"
        style={{
          background:
            "linear-gradient(160deg, #0A2DFF 0%, #0822c2 100%)",
        }}
      >
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white/70">Contato</p>
        <h2 className="font-serif text-5xl text-white md:text-6xl">Vamos criar algo silencioso.</h2>
        <p className="mt-4 max-w-lg text-white/75">
          Conte-nos sobre sua marca. Respondemos em até dois dias úteis.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-12 grid gap-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Nome" name="name" type="text" onDark />
            <Field label="E-mail" name="email" type="email" onDark />
          </div>
          <Field label="Mensagem" name="message" textarea onDark />
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/70">
              {sent ? "Obrigado — entraremos em contato." : "Lemos cada mensagem."}
            </span>
            <button
              type="submit"
              className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-gold transition hover:bg-bg-2"
            >
              Enviar →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  onDark = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  onDark?: boolean;
}) {
  const cls = onDark
    ? "w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/40 focus:border-white focus:outline-none transition-colors"
    : "w-full bg-transparent border-b border-[color:var(--border)] py-3 text-text placeholder:text-text-muted/50 focus:border-gold focus:outline-none transition-colors";
  return (
    <label className="block">
      <span className={`mb-2 block text-[10px] uppercase tracking-[0.3em] ${onDark ? "text-white/70" : "text-text-muted"}`}>
        {label}
      </span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls} required />
      ) : (
        <input name={name} type={type} className={cls} required />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-xs text-text-muted md:flex-row">
        <span>© {new Date().getFullYear()} EasyUSe. Todos os direitos reservados.</span>
        <div className="flex items-center gap-5">
          {[
            { label: "GitHub", href: "https://github.com" },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Instagram", href: "https://instagram.com" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="uppercase tracking-[0.3em] transition-colors hover:text-gold"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
