import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenCallback: () => void;
}

export function Header({ onOpenCallback }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Каталог', href: '#catalog' },
    { name: 'О компании', href: '#about' },
    { name: 'Контакты', href: '#contacts' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-viant-50/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="/images/herologo.png" 
              alt="ВИАНТПРОМ Logo" 
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-viant-900 tracking-tight">Виантпром</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="font-medium text-viant-600 transition-colors hover:text-brand-accent"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="tel:+79585812412" 
              className="flex items-center font-semibold text-viant-900 transition-colors hover:text-brand-accent"
            >
              <Phone className="w-4 h-4 mr-2 text-viant-600" />
              +7 958 581-24-12
            </a>
            <button 
              onClick={onOpenCallback}
              className="px-6 py-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Заказать звонок
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-viant-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-viant-100 overflow-hidden shadow-xl absolute top-full left-0 right-0"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <button 
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-lg font-medium text-viant-900 py-2"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 border-t border-viant-100 flex flex-col space-y-4">
                <a href="tel:+79585812412" className="flex items-center text-xl font-semibold text-viant-900">
                  <Phone className="w-6 h-6 mr-3 text-brand-accent" />
                  +7 958 581-24-12
                </a>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenCallback();
                  }}
                  className="w-full py-3 bg-brand-accent text-white font-medium rounded-lg"
                >
                  Заказать звонок
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
