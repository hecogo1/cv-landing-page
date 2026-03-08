import { useEffect } from 'react';
import { siteContent } from './content/siteContent';
import { BackToTopButton } from '../components/BackToTopButton';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { CTAButton } from '../components/CTAButton';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { NotFoundView } from '../components/NotFoundView';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { Timeline } from '../components/Timeline';
import { ValueCard } from '../components/ValueCard';
import { PhotoGrid } from '../components/PhotoGrid';

const basePath = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL.slice(0, -1)
  : import.meta.env.BASE_URL;

const VALID_PATHS = new Set([`${basePath || ''}/`, `${basePath || ''}/index.html`]);

function syncMeta({ title, description, ogImage, url }) {
  document.title = title;

  const selectors = {
    description: 'meta[name="description"]',
    ogTitle: 'meta[property="og:title"]',
    ogDescription: 'meta[property="og:description"]',
    ogImage: 'meta[property="og:image"]',
    ogUrl: 'meta[property="og:url"]',
    twitterTitle: 'meta[name="twitter:title"]',
    twitterDescription: 'meta[name="twitter:description"]',
    twitterImage: 'meta[name="twitter:image"]',
  };

  const content = {
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogUrl: url,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
  };

  Object.entries(selectors).forEach(([key, selector]) => {
    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute('content', content[key]);
    }
  });
}

function buildAbsolutePath(value) {
  if (!value) {
    return '';
  }

  try {
    return new URL(value, `${window.location.origin}${import.meta.env.BASE_URL}`).toString();
  } catch {
    return value;
  }
}

function resolveContentLink(link) {
  if (!link) {
    return '#';
  }

  if (link.href) {
    return link.href;
  }

  return siteContent.links[link.linkKey] ?? '#';
}

function Hero() {
  const { brand, hero, images } = siteContent;

  return (
    <section id="top" className="relative overflow-hidden px-6 pb-6 pt-6 sm:px-8 lg:px-12 lg:pb-10 lg:pt-10">
      <div className="mx-auto w-full max-w-6xl">
        {/* Full-width hero card with image background on one side */}
        <div className="relative overflow-hidden rounded-3xl bg-accent">
          {/* Decorative gradient orbs */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/[0.04]" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-highlight/10" />

          <div className="grid lg:grid-cols-[1fr_auto]">
            {/* Text content */}
            <div className="relative z-10 px-8 py-12 sm:px-12 sm:py-16 lg:py-20 lg:pr-0">
              <div className="flex items-center gap-2.5">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold text-white/70">Available for new opportunities</span>
              </div>
              <h1 className="mt-6 font-serif text-[clamp(2.5rem,6vw,4.2rem)] leading-[1.05] tracking-tight text-white">
                {siteContent.brand.name}
              </h1>
              <p className="mt-2 text-lg font-medium text-white/60 sm:text-xl">
                {brand.roleBadge}
              </p>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg sm:leading-relaxed">
                {hero.title}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['SQL', 'Python', 'dbt', 'Airflow', 'GCP', 'Git', 'Codex'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={siteContent.links.cvUrl}
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-accent transition-all duration-200 hover:bg-canvas"
                >
                  Download CV
                </a>
                <a
                  href={hero.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10"
                >
                  {hero.primaryCta.label}
                </a>
                <a
                  href={resolveContentLink(hero.tertiaryCta)}
                  className="inline-flex items-center gap-1.5 px-2 py-2 text-sm font-semibold text-white/70 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
                >
                  {hero.tertiaryCta.label} <span aria-hidden="true">&#8599;</span>
                </a>
              </div>
            </div>
            {/* Hero photo - elegant crop */}
            <div className="relative hidden h-full w-80 lg:block xl:w-96">
              <img
                src={images.heroPortrait}
                alt="Héctor Cózar"
                className="h-full w-full object-cover"
                loading="eager"
              />
              {/* Color blend overlay to unify photo with card background */}
              <div className="absolute inset-0 bg-accent/30 mix-blend-multiply" />
              {/* Edge gradients */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-accent to-transparent" />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-accent/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-accent/60 to-transparent" />
            </div>
          </div>
        </div>
        {/* Mobile hero photo */}
        <div className="relative mt-6 overflow-hidden rounded-2xl lg:hidden">
          <img
            src={images.heroPortrait}
            alt="Héctor Cózar"
            className="aspect-[4/3] w-full object-cover object-top"
            loading="eager"
          />
          <div className="absolute inset-0 bg-accent/20 mix-blend-multiply" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-accent/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const path = window.location.pathname;
  const isNotFound = !VALID_PATHS.has(path);

  useEffect(() => {
    syncMeta({
      title: siteContent.meta.title,
      description: siteContent.meta.description,
      ogImage: buildAbsolutePath(siteContent.meta.ogImage),
      url: window.location.href,
    });
  }, []);

  if (isNotFound) {
    return <NotFoundView homeHref={import.meta.env.BASE_URL} />;
  }

  const footerLinks = [
    { label: 'LinkedIn', href: siteContent.links.linkedinUrl },
    { label: 'Email', href: siteContent.links.email },
    { label: 'Download CV', href: siteContent.links.cvUrl },
  ];

  return (
    <div className="min-h-screen text-ink">
      <NavBar brand={siteContent.brand.name} links={siteContent.navigation} cvUrl={siteContent.links.cvUrl} />
      <main>
        <Hero />

        {/* Signal strip — horizontal ticker feel */}
        <div className="overflow-hidden py-8">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {siteContent.signalStrip.map((item, i) => (
                <Reveal key={item} delay={i * 0.04}>
                  <span className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-muted/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/30" aria-hidden="true" />
                    {item}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Summary — quote-first layout */}
        <Section id="summary" eyebrow="About" title={siteContent.summary.title} className="section-alt">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Reveal className="space-y-5">
              {siteContent.summary.paragraphs.map((paragraph) => (
                <p key={paragraph} className="muted-copy">
                  {paragraph}
                </p>
              ))}
            </Reveal>
            <Reveal delay={0.1}>
              <aside className="relative overflow-hidden rounded-2xl bg-accent p-8 text-white">
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/[0.06]" />
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-white/50">Working thesis</p>
                <blockquote className="mt-4 font-serif text-xl leading-relaxed text-white/90 sm:text-2xl sm:leading-relaxed">
                  {siteContent.summary.quote}
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <span className="h-px flex-1 bg-white/15" />
                  <span className="text-xs font-semibold text-white/40">
                    {siteContent.brand.trajectoryLabel}
                  </span>
                </div>
              </aside>
            </Reveal>
          </div>
        </Section>

        {/* Story — text + sticky photo grid */}
        <Section id="story" eyebrow="Career journey" title={siteContent.story.title} intro={siteContent.story.intro}>
          <div className="grid gap-12 xl:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] xl:items-start">
            <Reveal className="space-y-5">
              {siteContent.story.paragraphs.map((paragraph) => (
                <p key={paragraph} className="muted-copy">
                  {paragraph}
                </p>
              ))}
            </Reveal>
            <Reveal delay={0.1}>
              <PhotoGrid images={siteContent.images.story} slots={siteContent.story.imageSlots} />
            </Reveal>
          </div>
        </Section>

        {/* Full-bleed team photo break */}
        {siteContent.images.team && (
          <Reveal>
            <div className="relative mx-auto max-w-7xl px-4 py-4">
              <div className="photo-frame aspect-[3/1] overflow-hidden rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                <img
                  src={siteContent.images.team}
                  alt="Team at CaixaBank"
                  className="h-full w-full object-cover object-[center_75%]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">Current chapter</p>
                  <p className="mt-1 text-lg font-semibold text-white sm:text-xl">CaixaBank Tech — Data Engineering</p>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Timeline */}
        <Section id="timeline" eyebrow="Timeline" title={siteContent.timeline.title}>
          <Reveal>
            <Timeline items={siteContent.timeline.items} />
          </Reveal>
        </Section>

        {/* Strengths — dark section for contrast break */}
        <section id="strengths" className="section-dark py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
            <header className="mb-10 max-w-2xl sm:mb-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-6 bg-white/30" />
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-white/50">Core strengths</p>
              </div>
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                {siteContent.strengths.title}
              </h2>
            </header>
            <div className="grid gap-5 md:grid-cols-2">
              {siteContent.strengths.cards.map((card, index) => (
                <Reveal key={card.title} delay={index * 0.06}>
                  <ValueCard icon={card.icon} title={card.title} text={card.text} variant="dark" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <Section id="transformations" eyebrow="Evidence" title={siteContent.caseStudies.title}>
          <div className="grid gap-8 xl:grid-cols-2">
            {siteContent.caseStudies.items.map((study, index) => (
              <Reveal key={study.title} delay={index * 0.05}>
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* How I work — numbered horizontal cards */}
        <Section id="how-i-work" eyebrow="Operating style" title={siteContent.howIWork.title} className="section-alt">
          <div className="grid gap-5 lg:grid-cols-2">
            {siteContent.howIWork.blocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.06}>
                <article className="card-surface flex h-full gap-5 p-7 sm:p-8">
                  <span className="font-serif text-3xl font-semibold leading-none text-accent/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-ink">{block.title}</h3>
                    <p className="mt-3 text-[0.9375rem] leading-[1.8] text-muted">{block.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Background */}
        <Section
          id="background"
          eyebrow="Foundation"
          title={siteContent.background.title}
          intro={siteContent.background.intro}
        >
          <div className="grid gap-5 md:grid-cols-3">
            {siteContent.background.blocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.06}>
                <article className="card-surface h-full p-7 sm:p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <span className="font-serif text-lg font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{block.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-[1.8] text-muted">{block.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Next — accent panel */}
        <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-12">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-accent p-8 sm:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/[0.04]" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-highlight/10" />
              <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-6 bg-white/30" />
                    <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-white/50">Forward-looking</p>
                  </div>
                  <h2 className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {siteContent.next.title}
                  </h2>
                  <div className="mt-6 space-y-4">
                    {siteContent.next.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-[1.8] text-white/70">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.07] p-6">
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-white/50">Focus areas</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Data engineering', 'Analytics', 'Automation', 'Adoption', 'Technical judgment'].map((item) => (
                      <span
                        key={item}
                        className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-medium text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Contact */}
        <Section id="contact" eyebrow="Contact" title={siteContent.contact.title} intro={siteContent.contact.text}>
          <Reveal>
            <div className="panel flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-xl font-serif text-2xl leading-snug text-ink sm:text-3xl">
                The site complements a CV and LinkedIn profile, but it is also meant to start a sharper
                conversation.
              </p>
              <div className="flex flex-wrap gap-3">
                {siteContent.contact.buttons.map((button, index) => (
                  <CTAButton
                    key={button.label}
                    href={resolveContentLink(button)}
                    variant={index === 0 ? 'primary' : index === 1 ? 'secondary' : 'text'}
                  >
                    {button.label}
                  </CTAButton>
                ))}
              </div>
            </div>
          </Reveal>
        </Section>
      </main>
      <Footer name={siteContent.brand.name} text={siteContent.footer.text} links={footerLinks} />
      <BackToTopButton />
    </div>
  );
}
