import React, { Fragment } from 'react';
export function Marquee() {
  const words = [
  'WEBSITES',
  'SOFTWARE',
  'MOBILE APPS',
  'BRAND IDENTITY',
  'AUTOMATION',
  'PAID MEDIA',
  'MOTION',
  'UI/UX'];

  return (
    <div className="w-full overflow-hidden border-y border-brand-border1 bg-brand-surface1/50 py-8 md:py-12 flex items-center">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Render twice for seamless loop */}
        {[...Array(2)].map((_, i) =>
        <div key={i} className="flex items-center">
            {words.map((word, j) =>
          <Fragment key={`${i}-${j}`}>
                <span className="text-4xl md:text-6xl font-heading font-bold text-brand-text1/80 px-8">
                  {word}
                </span>
                <span className="text-brand-gold text-2xl px-4">✦</span>
              </Fragment>
          )}
          </div>
        )}
      </div>
    </div>);

}