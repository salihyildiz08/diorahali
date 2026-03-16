import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Search, Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Koleksiyonlar", path: "/koleksiyonlar" },
    { name: "Hikayemiz", path: "/hikayemiz" },
    { name: "İlham", path: "/ilham" },
    { name: "Blog", path: "/blog" },
    { name: "İletişim", path: "/iletisim" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-brand-ink"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Links - Left */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.slice(0, 2).map((link) => (
            <Link key={link.path} to={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link to="/" className="flex flex-col items-center">
          <span className="text-2xl lg:text-3xl font-serif font-bold tracking-[0.2em] uppercase text-brand-ink">
            Diora
          </span>
          <span className="text-[10px] tracking-[0.5em] uppercase text-brand-gold font-medium -mt-1">
            Halı
          </span>
        </Link>

        {/* Desktop Links - Right */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.slice(2).map((link) => (
            <Link key={link.path} to={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-6 ml-4">
            <button className="text-brand-ink hover:text-brand-gold transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="lg:hidden flex items-center space-x-4">
          <button className="text-brand-ink">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-12"
          >
            <button
              className="absolute top-8 right-8 text-brand-ink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col space-y-8 mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-3xl font-serif text-brand-ink hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto flex flex-col space-y-6">
              <div className="h-px bg-brand-beige w-full" />
              <div className="flex items-center space-x-8">
                <Instagram size={24} className="text-brand-ink" />
                <Facebook size={24} className="text-brand-ink" />
                <Pinterest size={24} className="text-brand-ink" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Instagram = ({ size, className }: { size: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Facebook = ({ size, className }: { size: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Pinterest = ({ size, className }: { size: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="12" y1="8" x2="12" y2="22" />
    <path d="M8 22c1-1.1 2.5-2 4-2s3 .9 4 2" />
    <circle cx="12" cy="9" r="7" />
  </svg>
);

export default Navbar;
