import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden -mt-28">
        <div className="absolute inset-0 z-0 bg-black">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
            {/* Main Background Image */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2000&auto=format&fit=crop')", opacity: 0.6 }}
            ></div>
        </div>
        {/* Smooth blend into next section */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
        
        <div className="relative z-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
            <div className="max-w-2xl mt-20">
                <h1 className="mb-6">
                    <span className="block text-primary text-4xl md:text-5xl lg:text-6xl mb-2 script-font" style={{ fontWeight: "normal" }}>
                      Eggs. Wok. Bombay Fire.
                    </span>
                    <span className="block text-on-background font-headline-md text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                      Authentic Indian Cuisine
                    </span>
                </h1>
                <p className="font-medium text-xl text-on-surface-variant mb-10 max-w-lg leading-relaxed">
                    We took the uncompromising flavour of Mumbai's street food and elevated it. Experience tradition, elegantly crafted.
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                    <a href={siteConfig.orderOnlineUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-on-primary font-medium text-lg tracking-wider px-8 py-4 rounded-xl border border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        Order Now
                    </a>
                    <Link to="/menu" className="inline-block bg-transparent border border-primary text-primary font-medium text-lg tracking-wider px-8 py-4 rounded-xl hover:shadow-xl hover:-translate-y-1 hover:bg-primary/5 transition-all duration-300">
                        Explore Menu
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}
