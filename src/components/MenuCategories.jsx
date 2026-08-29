import React from 'react';
import { Link } from 'react-router-dom';
import bombayTadkaImg from '../assets/bombay-tadka.png';

const categories = [
  {
    name: 'Bombay Tadka',
    description: 'Authentic street food and rich curries from the heart of Mumbai.',
    image: bombayTadkaImg,
    link: '/menu'
  },
  {
    name: 'Egg Corner',
    description: 'Innovative egg-centric dishes with a signature street-style twist.',
    image: 'https://images.unsplash.com/photo-1615598686121-6893c5c1639d?q=80&w=800&auto=format&fit=crop',
    link: '/menu'
  },
  {
    name: 'Indo Chinese',
    description: 'The perfect fusion of fiery Indian spices and wok-tossed perfection.',
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=800&auto=format&fit=crop',
    link: '/menu'
  }
];

export default function MenuCategories() {
  return (
    <section className="py-24 relative overflow-hidden bg-surface">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-[0.03]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=2000&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-surface/90 z-0"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-4xl md:text-5xl font-bold text-primary mb-4">Explore Our Menu</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto">
            Dive into three distinct culinary journeys, each crafted to deliver an unforgettable dining experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              to={cat.link}
              state={{ activeMenu: cat.name }}
              className="group block relative h-96 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${cat.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-headline-md text-3xl font-bold text-white mb-2">{cat.name}</h3>
                <p className="font-body-md text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
