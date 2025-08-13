'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  triggerPageExit: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ triggerPageExit }) => {
  const router = useRouter();

  const handleNavigation = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    triggerPageExit();
    setTimeout(() => {
      router.push(href);
    }, 600); // Match the exit animation duration in BookLayout
  };

  return (
    <div className="p-6 flex flex-col h-full">
      <h2 className="text-4xl font-heading font-bold text-text-primary mb-2">
        The New Page Project
      </h2>
      <p className="text-sm font-body text-text-secondary mb-8 italic">Table of Contents</p>
      <ul className="space-y-4 flex-grow">
        <li>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" onClick={(e) => handleNavigation(e, "/")} className="text-xl font-body hover:text-primary transition-colors duration-300 block py-2">
              Home
            </Link>
          </motion.div>
        </li>
        <li>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/about" onClick={(e) => handleNavigation(e, "/about")} className="text-xl font-body hover:text-primary transition-colors duration-300 block py-2">
              About
            </Link>
          </motion.div>
        </li>
        <li>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/projects/local" onClick={(e) => handleNavigation(e, "/projects/local")} className="text-xl font-body hover:text-primary transition-colors duration-300 block py-2">
              Local Projects
            </Link>
          </motion.div>
        </li>
        <li>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/projects/international" onClick={(e) => handleNavigation(e, "/projects/international")} className="text-xl font-body hover:text-primary transition-colors duration-300 block py-2">
              International Projects
            </Link>
          </motion.div>
        </li>
        <li>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact" onClick={(e) => handleNavigation(e, "/contact")} className="text-xl font-body hover:text-primary transition-colors duration-300 block py-2">
              Contact
            </Link>
          </motion.div>
        </li>
      </ul>
      <div className="mt-auto pt-6 border-t border-gray-300 text-center">
        <p className="text-sm font-body text-text-secondary">© 2025 TNPP</p>
      </div>
    </div>
  );
};

export default Navbar;