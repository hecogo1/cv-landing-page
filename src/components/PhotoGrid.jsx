export function PhotoGrid({ images, slots }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:sticky xl:top-24">
      {slots.map((slot, index) => {
        const src = images[slot.key];
        if (!src) return null;
        const isWide = index === 0;
        const aspectClass = slot.aspect ?? (isWide ? 'aspect-[16/9]' : 'aspect-[4/5]');
        const objectPosition = slot.objectPosition ?? 'center';
        return (
          <div
            key={slot.key}
            className={`photo-frame shadow-[0_2px_12px_rgba(0,0,0,0.06)] ${isWide ? 'sm:col-span-2' : ''}`}
          >
            <div className={`relative overflow-hidden ${aspectClass}`}>
              <img
                src={src}
                alt={slot.title}
                className="h-full w-full object-cover"
                style={{ objectPosition }}
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-4 pb-3 pt-8">
                <p className="text-xs font-semibold text-white/90">{slot.title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
