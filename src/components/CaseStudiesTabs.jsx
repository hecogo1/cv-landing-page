import { useState } from 'react';
import { Section } from './Section';
import { CaseStudyCard } from './CaseStudyCard';
import { Reveal } from './Reveal';

export function CaseStudiesTabs({ cases, title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="transformations" eyebrow="Evidence" title={title}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mt-4">
        {/* Tab List w/ horizontal scroll on mobile */}
        <Reveal className="w-full lg:w-1/3 shrink-0">
          <div className="flex lg:flex-col gap-2 lg:gap-2 relative overflow-x-auto pb-4 lg:pb-0 lg:overflow-visible snap-x">
            {/* Left border line (Desktop only) */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-line/60 hidden lg:block" />
            
            {cases.map((study, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={study.title}
                  onClick={() => setActiveIndex(index)}
                  className={`relative text-left px-5 py-4 min-w-[240px] lg:min-w-0 snap-start rounded-xl lg:rounded-l-none lg:rounded-r-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-accent text-white shadow-md lg:bg-accent/5 lg:text-accent lg:shadow-none'
                      : 'bg-surface-strong/50 lg:bg-transparent text-muted hover:bg-surface-strong hover:text-ink border border-line/50 lg:border-none'
                  }`}
                >
                  {/* Active indicator (desktop) */}
                  {isActive && (
                    <span className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-full" />
                  )}
                  <h4 className={`font-semibold text-[0.9375rem] leading-snug ${isActive ? 'text-white lg:text-accent' : 'text-ink'}`}>
                    {study.title}
                  </h4>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Tab Content */}
        <Reveal className="w-full lg:w-2/3 h-full">
          {/* Key forces re-render for animation */}
          <div key={activeIndex} className="animate-fade-in">
            <CaseStudyCard study={cases[activeIndex]} />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
