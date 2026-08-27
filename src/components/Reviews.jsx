import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';

const reviews = [
  {
    name: "Sarah M.",
    date: "2 weeks ago",
    text: "Absolutely the best Indian street food I've had in Edmonton. The Egg Tikhari is out of this world. The spices are perfectly balanced and the service is incredible. Highly recommend this hidden gem!",
    rating: 5
  },
  {
    name: "James T.",
    date: "1 month ago",
    text: "Incredible ambiance and top-tier authentic Mumbai flavours. The Dragon Paneer was a delightful surprise. You can tell they use fresh, quality ingredients. Will definitely be coming back.",
    rating: 5
  },
  {
    name: "Priya K.",
    date: "3 months ago",
    text: "As someone who grew up eating street food in Bombay, I can confidently say this place hits the mark. The Dum Biryani transported me back home. Elegant dining with street-level authenticity.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-24 relative overflow-hidden bg-surface">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-5"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-surface/90 z-0"></div>

      {/* Decorative quotes icon in background */}
      <div className="absolute -top-10 -right-10 opacity-[0.03] text-primary rotate-12 pointer-events-none z-0">
        <Quote size={400} />
      </div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-4xl md:text-5xl font-bold text-primary mb-4">What Our Guests Say</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto">
            Don't just take our word for it. Here is what our lovely community has to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-primary/10 hover:shadow-lg transition-all duration-300 flex flex-col h-full relative">
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote size={40} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="font-body-md text-on-surface-variant italic mb-8 flex-1 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-headline-sm text-base font-bold text-on-surface">{review.name}</h4>
                  <span className="font-body-md text-sm text-on-surface-variant">{review.date}</span>
                </div>
                <div className="ml-auto">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Review" className="w-6 h-6 grayscale opacity-60" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href={siteConfig.googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body-md font-bold text-primary hover:text-secondary transition-colors group"
          >
            Leave us a review on Google
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
