import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { MapPin, Phone, Mail, Link as LinkIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container border-t border-primary/10 pt-20 pb-10 mt-auto">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-16">
              <div className="md:col-span-3">
                  <div className="mb-6">
                    <img src="/logo-bst.png" alt={siteConfig.name || "Bombay Street Logo"} className="h-20 object-contain" />
                  </div>
                  <p className="font-body-md text-on-surface-variant mb-6">
                    Elevating the traditional flavours of Indian street food into a fine dining experience.
                  </p>
                  <div className="flex gap-4">
                      {siteConfig.instagramUrl && (
                        <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                      )}
                      {siteConfig.facebookUrl && (
                        <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </a>
                      )}
                  </div>
              </div>
              
              <div className="md:col-span-2">
                  <h4 className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-6">Quick Links</h4>
                  <ul className="space-y-4">
                      <li><Link to="/" className="font-body-md text-on-surface hover:text-primary transition-colors">Home</Link></li>
                      <li><Link to="/menu" className="font-body-md text-on-surface hover:text-primary transition-colors">Menu</Link></li>
                      <li><Link to="/contact" className="font-body-md text-on-surface hover:text-primary transition-colors">Contact Us</Link></li>
                  </ul>
              </div>
              
              <div className="md:col-span-4">
                  <h4 className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-6">Contact</h4>
                  <ul className="space-y-4">
                      <li className="flex gap-3 items-start">
                          <MapPin size={20} className="text-primary mt-1 shrink-0" />
                          <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.address)}`} target="_blank" rel="noopener noreferrer" className="font-body-md text-on-surface hover:text-primary transition-colors">
                              {siteConfig.address}
                          </a>
                      </li>
                      <li className="flex gap-3 items-center">
                          <Phone size={20} className="text-primary shrink-0" />
                          <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="font-body-md text-on-surface hover:text-primary transition-colors">
                            {siteConfig.phone}
                          </a>
                      </li>
                      <li className="flex gap-3 items-center">
                          <Mail size={20} className="text-primary shrink-0" />
                          <a href={`mailto:${siteConfig.email}`} className="font-body-md text-on-surface hover:text-primary transition-colors break-words">
                            {siteConfig.email || 'hello@bombaystreettadka.com'}
                          </a>
                      </li>
                  </ul>
              </div>
              
              <div className="md:col-span-3">
                  <h4 className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-6">Hours</h4>
                  <ul className="space-y-3">
                      {siteConfig.hours.map(hour => (
                        <li key={hour.day} className="flex justify-between">
                            <span className="font-body-md text-on-surface">{hour.day}</span>
                            <span className="font-body-md text-on-surface-variant">{hour.time}</span>
                        </li>
                      ))}
                  </ul>
              </div>
          </div>
          
          <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-body-md text-on-surface-variant">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
              <p className="font-body-md text-on-surface-variant">
                  Powered by <a href="https://www.appkartz.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium">Appkartz Inc</a>
              </p>
          </div>
      </div>
    </footer>
  );
}
