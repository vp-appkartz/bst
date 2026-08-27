import React from 'react';
import { siteConfig } from '../config/site';

export default function Location() {
  return (
    <section id="location" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-24)', alignItems: 'center' }}>
          
          <div style={{ paddingRight: 'var(--spacing-8)' }}>
            <span className="script-font" style={{ fontSize: 'var(--text-2xl)', color: 'var(--accent-gold)', marginBottom: 'var(--spacing-2)', display: 'block' }}>Visit Us</span>
            <h2 style={{ fontSize: 'var(--text-4xl)', color: 'var(--text-primary)', marginBottom: 'var(--spacing-8)', fontWeight: 400 }}>Location & Hours</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.1em', fontSize: 'var(--text-sm)', color: 'var(--accent-gold-dark)', marginBottom: 'var(--spacing-2)', textTransform: 'uppercase' }}>Address</h4>
                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>{siteConfig.address}</p>
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.1em', fontSize: 'var(--text-sm)', color: 'var(--accent-gold-dark)', marginBottom: 'var(--spacing-2)', textTransform: 'uppercase' }}>Hours</h4>
                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>M-F: {siteConfig.hours.weekdays}</p>
                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>S-S: {siteConfig.hours.weekends}</p>
              </div>
              <div style={{ marginTop: 'var(--spacing-4)' }}>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-btn hover-lift"
                  style={{ backgroundColor: 'var(--text-primary)', color: 'var(--text-inverse)', borderColor: 'var(--text-primary)' }}
                >
                  GET DIRECTIONS
                </a>
              </div>
            </div>
          </div>

          <div style={{ 
            height: '450px', 
            borderRadius: '8px', 
            overflow: 'hidden', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border)'
          }}>
            <div style={{ fontFamily: 'var(--font-body)', textAlign: 'center', color: 'var(--accent-gold-dark)', letterSpacing: '0.1em' }}>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-2)' }}>📍</div>
              <div>MAP INTEGRATION</div>
            </div>
          </div>

        </div>

      </div>
      <style>{`
        @media (min-width: 768px) {
          #location .container > div {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
}
