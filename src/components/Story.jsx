import React from 'react';

export default function Story() {
  return (
    <section className="py-24 parchment-texture relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 w-[800px] pointer-events-none">
            {/* If there's an image logo, we use it here. For now, empty or text-based */}
            <span className="font-headline-md text-[150px] tracking-widest text-primary whitespace-nowrap">BOMBAY STREET</span>
        </div>
        <div className="max-w-4xl mx-auto px-margin-mobile text-center relative z-10">
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <h2 className="font-headline-md text-headline-md mb-8 scroll-reveal transition-all duration-1000 ease-out">
              A Legacy of Spice
            </h2>
            <div className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed space-y-6">
                <p className="scroll-reveal transition-all duration-1000 delay-100 ease-out">
                    We bring the vibrant, uncompromising flavours of Mumbai directly to your table, crafted with the utmost elegance. Our dishes aren't just meals; they are a celebration of tradition.
                </p>
                <p className="scroll-reveal transition-all duration-1000 delay-200 ease-out">
                    We blend time-honored recipes with a modern touch, ensuring every bite is a revelation. Experience the true essence of Indian cuisine in a setting that reflects its rich history.
                </p>
                <p className="font-bold text-primary mt-8 scroll-reveal transition-all duration-1000 delay-300 ease-out">
                    Elevating the traditional flavours of Indian street food into a fine dining experience.
                </p>
            </div>
            <div className="mt-12 flex justify-center items-center gap-4">
                <div className="h-[1px] w-24 bg-outline-variant"></div>
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                <div className="h-[1px] w-24 bg-outline-variant"></div>
            </div>
        </div>
    </section>
  );
}
