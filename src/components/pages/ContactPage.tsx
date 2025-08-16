'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:thenewpageproject@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-full overflow-y-auto"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-text-dark mb-4">
          Get Involved
        </h1>
        <p className="text-lg text-text-dark opacity-80">
          Ready to make a difference? Let's connect.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white bg-opacity-60 rounded-lg p-6 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-serif font-semibold text-text-dark mb-6">
            Send us a message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-book-brown border-opacity-30 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent bg-white bg-opacity-80 text-text-dark"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-book-brown border-opacity-30 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent bg-white bg-opacity-80 text-text-dark"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-text-dark mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-book-brown border-opacity-30 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent bg-white bg-opacity-80 text-text-dark"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-book-brown border-opacity-30 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent bg-white bg-opacity-80 text-text-dark resize-none"
                placeholder="Tell us how you'd like to get involved..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-accent-gold text-text-dark py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info & Social */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-6"
        >
          {/* Direct Contact */}
          <div className="bg-white bg-opacity-60 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-serif font-semibold text-text-dark mb-4">
              Direct Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📧</span>
                <div>
                  <p className="font-medium text-text-dark">Email</p>
                  <p className="text-text-dark opacity-80 text-sm">thenewpageproject@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white bg-opacity-60 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-serif font-semibold text-text-dark mb-4">
              Follow Us
            </h3>
            <div className="flex items-center">
              <span className="text-2xl mr-3">📱</span>
              <div>
                <p className="font-medium text-text-dark">Instagram</p>
                <p className="text-text-dark opacity-80 text-sm">@the.new.page.project</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-accent-gold bg-opacity-20 rounded-lg p-6">
            <h3 className="text-xl font-serif font-semibold text-text-dark mb-4">
              Our Impact
            </h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-text-dark">20,000+</div>
                <div className="text-sm text-text-dark opacity-80">Books Donated</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-text-dark">$4,500+</div>
                <div className="text-sm text-text-dark opacity-80">Funds Raised</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;