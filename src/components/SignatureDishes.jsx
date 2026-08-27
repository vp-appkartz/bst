import React from 'react';
import { menuData } from '../data/menu';

export default function SignatureDishes() {
  const targetDishes = [
    "EGG TIKHARI",
    "DRAGON PANEER (DRY)",
    "LAHSUNI PANEER",
    "HAKKA NOODLES"
  ];

  // Dynamically find dishes from menuData
  const signatureItems = [];
  menuData.forEach(menu => {
    menu.categories.forEach(cat => {
      cat.items.forEach(item => {
        if (targetDishes.includes(item.name.toUpperCase())) {
          // Add only if not already added to avoid duplicates
          if (!signatureItems.find(i => i.name.toUpperCase() === item.name.toUpperCase())) {
            signatureItems.push({
              ...item,
              categoryName: cat.category
            });
          }
        }
      });
    });
  });

  // Sort them based on the targetDishes order
  signatureItems.sort((a, b) => targetDishes.indexOf(a.name.toUpperCase()) - targetDishes.indexOf(b.name.toUpperCase()));

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-[0.03]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2000&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-4xl md:text-5xl font-bold text-primary mb-4">Chef's Signatures</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto">
            Our most beloved creations, showcasing the pinnacle of flavour and authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureItems.map((item, idx) => (
            <div key={idx} className="bg-surface rounded-3xl p-6 shadow-sm border border-primary/10 hover:shadow-lg transition-all duration-300 group">
              <div className="h-48 rounded-2xl bg-surface-container-high mb-6 overflow-hidden relative">
                 {/* Using a placeholder image for food since we don't have exact photos of each dish */}
                 <img src={`https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=400&auto=format&fit=crop&sig=${idx}`} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface mb-2 capitalize group-hover:text-primary transition-colors">{item.name.toLowerCase()}</h3>
              <p className="font-body-md text-on-surface-variant text-sm mb-4 line-clamp-2">
                 {item.desc || "Experience the authentic, rich taste that has made this a crowd favorite."}
              </p>
              <div className="flex justify-between items-end mt-auto pt-4 border-t border-outline-variant border-dashed">
                <span className="font-body-md text-on-surface font-medium">Price</span>
                <span className="font-headline-sm text-lg font-bold text-primary">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
