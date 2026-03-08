import { ImageSlot } from './ImageSlot';

export function CaseStudyCard({ study, imageSrc }) {
  const details = [
    { label: 'Context', value: study.context },
    { label: 'Challenge', value: study.challenge },
    { label: 'What I did', value: study.whatIDid },
    { label: 'Outcome', value: study.outcome },
  ];

  return (
    <article className="panel overflow-hidden">
      <ImageSlot
        src={imageSrc}
        alt={study.title}
        title={study.title}
        description="Optional project or workflow illustration slot."
        ratioClassName="aspect-[16/10]"
      />
      <div className="p-7 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">Selected transformation</p>
            <h3 className="text-2xl font-semibold tracking-tight text-ink">{study.title}</h3>
          </div>
        </div>
        <div className="mt-8 space-y-6">
          {details.map((detail) => (
            <div key={detail.label} className="border-t border-line/75 pt-5 first:border-t-0 first:pt-0">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted/75">{detail.label}</p>
              <p className="mt-3 text-base leading-8 text-muted">{detail.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-[1.35rem] border border-accent/18 bg-accent-soft/60 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">What it says about me</p>
          <p className="mt-3 text-base leading-8 text-ink">{study.whatItSays}</p>
        </div>
      </div>
    </article>
  );
}
