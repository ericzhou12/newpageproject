'use client';

import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background p-6"
    >
      <div className="text-center mb-12">
        <h1 className="text-5xl font-heading font-bold text-text-primary">Contact Us</h1>
        <p className="text-lg font-body text-text-secondary mt-4 max-w-3xl mx-auto">We would love to hear from you. Whether you have a question, a suggestion, or would like to partner with us, please do not hesitate to reach out.</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <form className="bg-secondary p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-text-primary font-bold mb-2">Name</label>
            <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-text-primary leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-text-primary font-bold mb-2">Email</label>
            <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-text-primary leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-text-primary font-bold mb-2">Message</label>
            <textarea id="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-text-primary leading-tight focus:outline-none focus:shadow-outline" rows={5}></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-primary hover:bg-accent text-text-primary font-bold py-3 px-6 rounded-full transition-colors duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
