import React from 'react';
import { siteConfig } from '../config/site';
import ctaBgImg from '../assets/bst-cta-1.webp';

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden flex items-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${ctaBgImg})` }}
        ></div>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-margin-mobile text-center relative z-10">
        <h2 className="font-display-lg text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Experience<br/>
          <span className="text-primary script-font font-normal text-5xl md:text-7xl block mt-2">Authentic Flavours?</span>
        </h2>
        <p className="font-body-lg text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Skip the line and order your favorite Mumbai street food directly from us for pickup or delivery.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href={siteConfig.orderOnlineUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-primary text-white font-medium text-lg tracking-wider px-10 py-5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-primary/90 transition-all duration-300"
          >
            Order Online Now
          </a>
        </div>
      </div>
    </section>
  );
}
