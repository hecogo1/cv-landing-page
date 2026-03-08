import { useEffect } from 'react';
import { siteContent } from './content/siteContent';
import { BackToTopButton } from '../components/BackToTopButton';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { CTAButton } from '../components/CTAButton';
import { Footer } from '../components/Footer';
import { ImageSlot } from '../components/ImageSlot';
import { NavBar } from '../components/NavBar';
import { NotFoundView } from '../components/NotFoundView';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { SignalStrip } from '../components/SignalStrip';
import { Timeline } from '../components/Timeline';
import { ValueCard } from '../components/ValueCard';

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
    <section id="top" className="relative overflow-hidden px-6 pb-12 pt-10 sm:px-8 lg:px-12 lg:pb-16 lg:pt-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-accent/15 bg-accent-soft/70 px-4 py-2 text-sm font-semibold text-accent">
            {brand.roleBadge}
          </span>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-muted/80">
            {brand.trajectoryLabel}
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-[clamp(3rem,8vw,5.5rem)] leading-[0.96] tracking-tight text-ink">
            {siteContent.brand.name}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-muted sm:text-2xl sm:leading-10">{hero.title}</p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">{hero.text}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTAButton href={hero.primaryCta.href}>{hero.primaryCta.label}</CTAButton>
            <CTAButton href={resolveContentLink(hero.secondaryCta)} variant="secondary">
              {hero.secondaryCta.label}
            </CTAButton>
            <CTAButton href={resolveContentLink(hero.tertiaryCta)} variant="text">
              {hero.tertiaryCta.label}
            </CTAButton>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="panel relative overflow-hidden p-4 sm:p-5">
            <div className="absolute inset-x-5 top-5 rounded-full border border-white/50 bg-surface/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted/80 shadow-[0_12px_30px_rgba(28,25,21,0.06)]">
              Career story landing page
            </div>
            <ImageSlot
              src={images.heroPortrait}
              alt="Portrait of Héctor Cózar"
              title="Hero portrait"
              description="Optional profile image path for the main hero portrait."
              ratioClassName="aspect-[5/6]"
            />
          </div>
        </Reveal>
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
    { label: 'Top', href: '#top' },
    { label: 'LinkedIn', href: siteContent.links.linkedinUrl },
    { label: 'Email', href: siteContent.links.email },
    { label: 'Download CV', href: siteContent.links.cvUrl },
  ];

  return (
    <div className="min-h-screen text-ink">
      <NavBar brand={siteContent.brand.name} links={siteContent.navigation} cvUrl={siteContent.links.cvUrl} />
      <main>
        <Hero />
        <SignalStrip items={siteContent.signalStrip} />

        <Section id="summary" eyebrow="Professional summary" title={siteContent.summary.title}>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Reveal className="space-y-6">
              {siteContent.summary.paragraphs.map((paragraph) => (
                <p key={paragraph} className="muted-copy">
                  {paragraph}
                </p>
              ))}
            </Reveal>
            <Reveal delay={0.08}>
              <aside className="panel p-7 sm:p-8">
                <p className="eyebrow mb-4">Working thesis</p>
                <blockquote className="font-serif text-2xl leading-10 text-ink">{siteContent.summary.quote}</blockquote>
                <div className="mt-8 inline-flex items-center rounded-full border border-line bg-canvas/75 px-4 py-2 text-sm font-semibold text-muted">
                  {siteContent.brand.trajectoryLabel}
                </div>
              </aside>
            </Reveal>
          </div>
        </Section>

        <Section id="story" eyebrow="Career journey" title={siteContent.story.title} intro={siteContent.story.intro}>
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] xl:items-start">
            <Reveal className="space-y-6">
              {siteContent.story.paragraphs.map((paragraph) => (
                <p key={paragraph} className="muted-copy">
                  {paragraph}
                </p>
              ))}
            </Reveal>
            <Reveal delay={0.08}>
              <div className="grid gap-5 sm:grid-cols-2 xl:sticky xl:top-28">
                {siteContent.story.imageSlots.map((slot, index) => (
                  <ImageSlot
                    key={slot.key}
                    src={siteContent.images.story[slot.key]}
                    alt={slot.title}
                    title={slot.title}
                    description={slot.description}
                    className={index === 0 ? 'sm:col-span-2' : ''}
                    ratioClassName={index === 0 ? 'aspect-[16/9]' : 'aspect-[4/5]'}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </Section>

        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12" aria-hidden="true">
          <div className="h-px bg-gradient-to-r from-transparent via-line to-transparent" />
        </div>

        <Section id="timeline" eyebrow="Professional timeline" title={siteContent.timeline.title}>
          <Reveal>
            <Timeline items={siteContent.timeline.items} />
          </Reveal>
        </Section>

        <Section id="strengths" eyebrow="Core strengths" title={siteContent.strengths.title}>
          <div className="grid gap-6 md:grid-cols-2">
            {siteContent.strengths.cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.05}>
                <ValueCard icon={card.icon} title={card.title} text={card.text} />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="transformations" eyebrow="Evidence" title={siteContent.caseStudies.title}>
          <div className="grid gap-8 xl:grid-cols-2">
            {siteContent.caseStudies.items.map((study, index) => (
              <Reveal key={study.title} delay={index * 0.04}>
                <CaseStudyCard study={study} imageSrc={siteContent.images.caseStudies[study.imageKey]} />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="how-i-work" eyebrow="Operating style" title={siteContent.howIWork.title}>
          <div className="grid gap-6 lg:grid-cols-2">
            {siteContent.howIWork.blocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.05}>
                <article className="card-surface h-full p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-serif text-4xl leading-none text-highlight/70">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="max-w-xl">
                      <h3 className="text-xl font-semibold tracking-tight text-ink">{block.title}</h3>
                      <p className="mt-4 text-base leading-8 text-muted">{block.text}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="background"
          eyebrow="Foundation"
          title={siteContent.background.title}
          intro={siteContent.background.intro}
        >
          <div className="grid gap-6 md:grid-cols-3">
            {siteContent.background.blocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.05}>
                <article className="card-surface h-full p-7 sm:p-8">
                  <h3 className="text-xl font-semibold tracking-tight text-ink">{block.title}</h3>
                  <p className="mt-4 text-base leading-8 text-muted">{block.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="next" eyebrow="Forward-looking" title={siteContent.next.title}>
          <Reveal>
            <div className="panel grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-6">
                {siteContent.next.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="muted-copy">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="rounded-[1.5rem] border border-line/80 bg-canvas/72 p-6">
                <p className="eyebrow mb-4">Focus areas</p>
                <div className="flex flex-wrap gap-3">
                  {['Data engineering', 'Analytics', 'Automation', 'Adoption', 'Technical judgment'].map((item) => (
                    <span
                      key={item}
                      className="inline-flex rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-medium text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        <Section id="contact" eyebrow="Contact" title={siteContent.contact.title} intro={siteContent.contact.text}>
          <Reveal>
            <div className="panel flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
                  The site complements a CV and LinkedIn profile, but it is also meant to start a sharper
                  conversation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
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
