import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

interface ContactProps {
  selectedService: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    locality: '',
    service: selectedService || siteConfig.services[0].name,
    preferredTime: 'Morning (8:00 AM – 12:00 PM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Inspection Booking Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Locality in Tirupati:* ${formData.locality || 'Not specified'}\n` +
      `*Service Required:* ${formData.service}\n` +
      `*Preferred Slot:* ${formData.preferredTime}\n` +
      `*Notes:* ${formData.message || 'None'}`;

    const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wide uppercase mb-3">
            <span>Fast Booking</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-3">
            BOOK A FREE INSPECTION
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            Schedule your free on-site assessment across Tirupati with zero hidden costs.
          </p>
        </div>

        {/* Action Buttons: Phone & WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center justify-center gap-3 p-4.5 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all duration-200 group shadow-xs"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">Direct Call Desk</div>
              <div className="text-base font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors">{siteConfig.phone}</div>
            </div>
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappPrefillText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4.5 rounded-2xl bg-emerald-50 border border-emerald-200 hover:border-emerald-400 hover:bg-emerald-100/60 transition-all duration-200 group shadow-xs"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-[11px] uppercase tracking-wider text-emerald-800 font-semibold">WhatsApp Booking</div>
              <div className="text-base font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors">Instant Scheduling</div>
            </div>
          </a>
        </div>

        {/* Layout: Form on Left, Office & Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 bg-zinc-50/80 rounded-3xl p-6 sm:p-10 border border-zinc-200">
            <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-2">
              Request Your Free On-Site Inspection
            </h3>
            <p className="text-zinc-500 text-xs sm:text-sm mb-8">
              Fill in your details below. Our Tirupati supervisor will call to confirm your preferred hour.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-zinc-900 mb-1">Request Submitted!</h4>
                <p className="text-zinc-600 text-sm mb-4">
                  Thank you, {formData.name}. Our supervisor will connect with you to confirm your inspection.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-lg text-xs font-bold text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-50"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-zinc-300 text-zinc-900 focus:outline-hidden focus:border-emerald-600 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-zinc-300 text-zinc-900 focus:outline-hidden focus:border-emerald-600 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-locality" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                      Locality in Tirupati
                    </label>
                    <select
                      id="contact-locality"
                      name="locality"
                      value={formData.locality}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-zinc-300 text-zinc-900 focus:outline-hidden focus:border-emerald-600 transition-all"
                    >
                      <option value="">Select your area</option>
                      {siteConfig.localities.map(loc => (
                        <option key={loc.name} value={loc.name}>{loc.name}</option>
                      ))}
                      <option value="Other Area">Other / Suburban</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                      Service Required
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-zinc-300 text-zinc-900 focus:outline-hidden focus:border-emerald-600 transition-all"
                    >
                      {siteConfig.services.map(srv => (
                        <option key={srv.id} value={srv.name}>{srv.icon} {srv.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-preferredTime" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                    Preferred Inspection Slot
                  </label>
                  <select
                    id="contact-preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-zinc-300 text-zinc-900 focus:outline-hidden focus:border-emerald-600 transition-all"
                  >
                    <option value="Morning (8:00 AM – 12:00 PM)">Morning (8:00 AM – 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                    <option value="Evening (4:00 PM – 7:30 PM)">Evening (4:00 PM – 7:30 PM)</option>
                    <option value="Urgent / Today if possible">Urgent / Today if possible</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                    Specific requirements or notes (optional)
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. 2 bathrooms need hard water descaling..."
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:outline-hidden focus:border-emerald-600 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit & Confirm On WhatsApp</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-zinc-50/80 rounded-3xl p-6 sm:p-8 border border-zinc-200">
              <h3 className="font-heading text-xl font-bold text-zinc-900 mb-5">
                Our Tirupati Operations Desk
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-zinc-500 text-xs uppercase font-bold">Address</div>
                    <div className="text-zinc-900 font-semibold mt-0.5">{siteConfig.address.street}, {siteConfig.address.locality}</div>
                    <div className="text-zinc-600 text-xs">{siteConfig.address.state} — {siteConfig.address.postalCode}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-zinc-500 text-xs uppercase font-bold">Operating Hours</div>
                    <div className="text-zinc-900 font-semibold mt-0.5">{siteConfig.hours}</div>
                    <div className="text-zinc-500 text-xs">Emergency teams on call across Tirupati</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-zinc-500 text-xs uppercase font-bold">Email Inquiry</div>
                    <div className="text-zinc-900 font-semibold mt-0.5">
                      <a href={`mailto:${siteConfig.email}`} className="text-emerald-700 hover:underline">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-3xl border border-zinc-200 overflow-hidden shadow-xs">
              <iframe
                title="Garuda Cleaning Services Tirupati Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62057.44795328328!2d79.37920194689408!3d13.628799486708685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b0f88620427%3A0xcf4749f7532f416d!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
