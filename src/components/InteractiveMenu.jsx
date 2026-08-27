import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { menuData } from '../data/menu';

export default function InteractiveMenu() {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState(location.state?.activeMenu || menuData[0]?.menuName || '');
  const [filter, setFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    if (location.state?.activeMenu) {
      setSelectedMenu(location.state.activeMenu);
      // scroll to the top of the menu container or at least ensure smooth behavior
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.state]);
  
  const activeMenuObj = menuData.find(m => m.menuName === selectedMenu) || menuData[0];
  
  // Update category filter when menu changes
  useEffect(() => {
    if (activeMenuObj && activeMenuObj.categories.length > 0) {
      setFilter(activeMenuObj.categories[0].category);
      // Reset search when menu changes to avoid confusion
      setSearchQuery('');
    }
  }, [selectedMenu, activeMenuObj]);

  return (
    <>
      {/* Page Header */}
      <section className="bg-surface-container-high pt-40 pb-20 text-center relative overflow-hidden -mt-28">
          <div className="relative z-10 px-4">
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4">Restaurant Menu</h1>
              <p className="font-body-lg text-body-lg text-primary font-semibold max-w-2xl mx-auto">
                  Elevating the traditional flavours of Indian street food into a fine dining experience.
              </p>
          </div>
      </section>

      <section className="py-12 bg-surface-container-lowest min-h-screen">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-8">
             <div className="relative max-w-2xl mx-auto">
               <input 
                  type="search" 
                  placeholder="Search for any item..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-full border border-primary/20 bg-surface shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-lg pl-14 transition-colors text-on-surface"
               />
               <Search className="w-6 h-6 text-primary absolute left-5 top-1/2 -translate-y-1/2" />
             </div>
          </div>
          
          {/* Menu Selection Tabs */}
          {!searchQuery.trim() && (
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-8 flex justify-center">
                <div className="inline-flex items-center bg-surface p-1.5 rounded-2xl shadow-sm border border-primary/20 overflow-x-auto max-w-full">
                    {menuData.map((menu) => (
                        <button
                            key={menu.menuName}
                            onClick={() => setSelectedMenu(menu.menuName)}
                            className={`px-6 py-3 rounded-xl font-headline-sm text-lg font-bold transition-all duration-300 whitespace-nowrap ${
                                selectedMenu === menu.menuName 
                                ? 'bg-primary text-on-primary shadow-md' 
                                : 'text-primary hover:bg-primary/10'
                            }`}
                        >
                            {menu.menuName.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
          )}

          <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
              
              {/* Top Category Tabs */}
              {!searchQuery.trim() && activeMenuObj && (
                <div className="z-40 bg-surface-container-lowest py-4 mb-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        {activeMenuObj.categories.map(category => (
                            <button 
                                key={category.category}
                                onClick={() => setFilter(category.category)} 
                                className={`px-6 py-2.5 rounded-xl text-sm transition-all font-semibold ${filter === category.category ? 'bg-primary text-on-primary shadow-md transform scale-105' : 'bg-surface border border-outline-variant text-on-surface-variant shadow-sm hover:border-primary hover:text-primary'}`}
                            >
                                {category.category}
                            </button>
                        ))}
                    </div>
                </div>
              )}

              {/* Menu Items List */}
              <div className="bg-surface p-6 md:p-10 rounded-3xl border border-primary/10 shadow-sm mt-4 min-h-[400px]">
                  {(searchQuery.trim() ? menuData : (activeMenuObj ? [activeMenuObj] : [])).map(menuObj => {
                     const matchedCategories = menuObj.categories
                      .map(category => {
                        if (searchQuery.trim()) {
                          return {
                            ...category,
                            items: category.items.filter(item => item.name.toLowerCase().includes(searchQuery.trim().toLowerCase()))
                          };
                        }
                        return category;
                      })
                      .filter(c => searchQuery.trim() ? c.items.length > 0 : c.category === filter);
                      
                     if (matchedCategories.length === 0) return null;
                     
                     return (
                        <div key={menuObj.menuName} className="mb-16 last:mb-0">
                           {searchQuery.trim() && (
                               <h2 className="font-display-md text-2xl font-bold text-secondary mb-6 border-b-2 border-primary/20 pb-2">{menuObj.menuName.toUpperCase()}</h2>
                           )}
                           {matchedCategories.map(category => (
                              <div key={category.category} className="menu-category mb-12 last:mb-0">
                                  <h3 className="font-headline-md text-headline-md font-bold text-primary mb-6 border-b border-outline-variant pb-2">{category.category}</h3>
                                  
                                  <div className="space-y-4">
                                      {category.items.map((item, idx) => (
                                          <motion.div 
                                            key={`${category.category}-${idx}`} 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                                            className="menu-item flex justify-between items-end border-b border-outline-variant border-dashed pb-2 group"
                                          >
                                              <div className="flex-1 pr-4">
                                                <h4 className="font-body-md text-lg font-medium text-on-surface group-hover:text-primary transition-colors capitalize">
                                                    {item.name.toLowerCase()}
                                                </h4>
                                                {item.desc && (
                                                  <p className="text-on-surface-variant text-sm mt-1">{item.desc}</p>
                                                )}
                                              </div>
                                              <span className="font-medium text-lg text-primary whitespace-nowrap">{item.price}</span>
                                          </motion.div>
                                      ))}
                                  </div>
                              </div>
                           ))}
                        </div>
                     );
                  })}
                  
                  {searchQuery.trim() && !menuData.some(m => m.categories.some(c => c.items.some(i => i.name.toLowerCase().includes(searchQuery.trim().toLowerCase())))) && (
                    <div className="text-center py-12 text-on-surface-variant font-medium">
                      No items found for "{searchQuery}" across any menu.
                    </div>
                  )}
              </div>
          </div>
      </section>
    </>
  );
}
