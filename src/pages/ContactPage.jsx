import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { MapPin, CheckCircle, Loader2 } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.target);
    // Split full name into first and last for the API
    const fullName = formData.get('name') || '';
    const nameParts = fullName.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const data = {
      firstName,
      lastName,
      phone: formData.get('phone'),
      email: formData.get('email'),
      inquiryType: formData.get('inquiryType'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Failed to send message.');
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-surface-container-high pt-40 pb-20 text-center relative overflow-hidden -mt-28">
          <div className="relative z-10 px-4">
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4">Connect with us.</h1>
              <p className="font-body-lg text-body-lg text-primary font-semibold max-w-2xl mx-auto">
                  Get in touch with us for reservations, feedback, or to inquire about our catering services for your next grand event.
              </p>
          </div>
      </section>

      <section className="py-24 relative bg-background">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-gutter">
              
              {/* Contact Form */}
              <div className="bg-surface p-8 md:p-10 rounded-3xl shadow-sm border border-primary/10 scroll-reveal transition-all duration-700">
                  <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-6 border-b border-outline-variant pb-4">Send us a Message</h2>
                  
                  {status === 'success' ? (
                    <div className="bg-primary/10 border border-primary text-primary p-6 rounded-xl flex flex-col items-center justify-center text-center py-12">
                      <CheckCircle className="w-16 h-16 mb-4" />
                      <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                      <p>Thank you for reaching out. We will get back to you shortly.</p>
                      <button onClick={() => setStatus('idle')} className="mt-6 font-bold underline hover:text-on-surface">Send another message</button>
                    </div>
                  ) : (
                    <form id="contactForm" className="space-y-6" onSubmit={handleSubmit}>
                        {status === 'error' && (
                          <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm mb-4 border border-red-200">
                            {errorMessage}
                          </div>
                        )}
                        <div className="grid grid-cols-1 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block font-label-md text-label-md text-on-surface-variant mb-1">Full Name *</label>
                                <input type="text" id="name" name="name" required disabled={status === 'loading'} className="w-full border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-surface-container-highest text-on-surface disabled:opacity-50" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="phone" className="block font-label-md text-label-md text-on-surface-variant mb-1">Phone No *</label>
                                <input type="tel" id="phone" name="phone" required disabled={status === 'loading'} className="w-full border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-surface-container-highest text-on-surface disabled:opacity-50" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block font-label-md text-label-md text-on-surface-variant mb-1">Email Address *</label>
                                <input type="email" id="email" name="email" required disabled={status === 'loading'} className="w-full border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-surface-container-highest text-on-surface disabled:opacity-50" />
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="inquiryType" className="block font-label-md text-label-md text-on-surface-variant mb-1">Inquiry Type</label>
                            <select id="inquiryType" name="inquiryType" defaultValue="general" disabled={status === 'loading'} className="w-full border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-surface-container-highest text-on-surface disabled:opacity-50">
                                <option value="general">General Inquiry</option>
                                <option value="reservation">Table Reservation</option>
                                <option value="catering">Catering Service</option>
                                <option value="feedback">Feedback</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block font-label-md text-label-md text-on-surface-variant mb-1">Your Message *</label>
                            <textarea id="message" name="message" rows={5} required disabled={status === 'loading'} className="w-full border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-surface-container-highest text-on-surface disabled:opacity-50"></textarea>
                        </div>

                        <button type="submit" disabled={status === 'loading'} className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary font-medium text-lg tracking-wider py-4 px-8 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed">
                            {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                  )}
              </div>

              {/* Catering Info & Map */}
              <div className="space-y-8 scroll-reveal transition-all duration-700 delay-100">
                  <div className="bg-primary text-on-primary p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden">
                      <div className="relative z-10">
                          <h2 className="font-headline-md text-headline-md font-bold mb-4 text-on-primary">Catering Services</h2>
                          <p className="mb-6 font-body-lg text-body-lg leading-relaxed text-on-primary/90">
                              Elevate your special occasions with our bespoke catering packages. From intimate gatherings to grand weddings, our expert culinary team brings the authentic taste of Indian heritage directly to your event.
                          </p>
                          <ul className="space-y-4 mb-8 font-body-md text-body-md">
                              <li className="flex items-center gap-3">
                                  <CheckCircle size={20} className="text-[#fdf9f0] shrink-0" />
                                  <span className="text-on-primary">Customizable Menus (Vegetarian/Vegan/GF options)</span>
                              </li>
                              <li className="flex items-center gap-3">
                                  <CheckCircle size={20} className="text-[#fdf9f0] shrink-0" />
                                  <span className="text-on-primary">Live Food Stations</span>
                              </li>
                          </ul>
                          <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="inline-block border-2 border-[#fdf9f0] text-[#fdf9f0] font-medium text-lg tracking-wider py-4 px-8 rounded-xl hover:shadow-xl hover:-translate-y-1 hover:bg-[#fdf9f0] hover:text-primary transition-all duration-300">
                              Call {siteConfig.phone}
                          </a>
                      </div>
                  </div>

                  {/* Google Map Embed */}
                  <div className="block bg-surface-container-high h-64 rounded-3xl shadow-inner overflow-hidden relative border border-primary/10">
                      <iframe 
                          src="https://maps.google.com/maps?q=Bombay%20Street%20Tadka,%201511%20Lakewood%20Rd%20W%20NW,%20Edmonton&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          allowFullScreen="" 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Bombay Street Tadka Location Map"
                      ></iframe>
                  </div>
              </div>

          </div>
      </section>
    </>
  );
}
