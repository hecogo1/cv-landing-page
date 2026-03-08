export function CaseStudyCard({ study }) {
  const details = [
    { label: 'Context', value: study.context },
    { label: 'Challenge', value: study.challenge },
    { label: 'What I did', value: study.whatIDid },
    { label: 'Outcome', value: study.outcome },
  ];

  return (
    <article className="card-surface flex h-full flex-col overflow-hidden">
      <div className="p-7 sm:p-8">
        <p className="eyebrow mb-3">Case study</p>
        <h3 className="text-xl font-semibold tracking-tight text-ink">{study.title}</h3>
        <div className="mt-6 space-y-5">
          {details.map((detail) => (
            <div key={detail.label} className="border-t border-line/50 pt-4 first:border-t-0 first:pt-0">
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-muted/70">{detail.label}</p>
              <p className="mt-2 text-[0.9375rem] leading-[1.7] text-muted">{detail.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto border-t border-accent/10 bg-accent-soft/30 px-7 py-5 sm:px-8">
        <p className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-accent">What it says about me</p>
        <p className="mt-2 text-[0.9375rem] leading-[1.7] font-medium text-ink">{study.whatItSays}</p>
      </div>
    </article>
  );
}
