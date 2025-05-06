'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Detectar scroll y actualizar estado
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Throttle para mejorar rendimiento
    let timeoutId: ReturnType<typeof setTimeout>;
    const throttledHandleScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 100);
      }
    };
    
    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Cerrar menú mobile cuando se cambia de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevenir scroll cuando el menú mobile está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  // Variantes para animaciones
  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto' }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : pathname === '/' 
            ? 'bg-transparent py-4' 
            : 'bg-white shadow-md py-2'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="z-10 relative">
            <div className="relative h-16 w-48 cursor-pointer transition-transform duration-300 hover:scale-105">
              <Image 
                src="/images/logo.png"
                alt="Nido de Cuidados Logo"
                width={192}
                height={64}
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" label="Inicio" isActive={pathname === '/'} />
            <NavLink href="/nosotros" label="Nosotros" isActive={pathname === '/nosotros'} />
            <NavLink 
              href="/#servicios" 
              label="Servicios" 
              isActive={pathname === '/' && window?.location?.hash === '#servicios'} 
            />
            <NavLink href="/blog" label="Blog" isActive={pathname === '/blog' || pathname.startsWith('/blog/')} />
            <Link href="/contacto" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md">
              Contáctanos
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-primary focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <MobileNavLink 
                href="/" 
                label="Inicio" 
                onClick={() => setIsMobileMenuOpen(false)} 
                isActive={pathname === '/'} 
              />
              <MobileNavLink 
                href="/nosotros" 
                label="Nosotros" 
                onClick={() => setIsMobileMenuOpen(false)} 
                isActive={pathname === '/nosotros'} 
              />
              <MobileNavLink 
                href="/#servicios" 
                label="Servicios" 
                onClick={() => setIsMobileMenuOpen(false)} 
                isActive={pathname === '/' && window?.location?.hash === '#servicios'} 
              />
              <MobileNavLink 
                href="/blog" 
                label="Blog" 
                onClick={() => setIsMobileMenuOpen(false)} 
                isActive={pathname === '/blog' || pathname.startsWith('/blog/')} 
              />
              <MobileNavLink 
                href="/contacto" 
                label="Contáctanos" 
                onClick={() => setIsMobileMenuOpen(false)} 
                isActive={pathname === '/contacto'} 
                isButton 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Navigation Link Component
const NavLink = ({ href, label, isActive }: { href: string; label: string; isActive: boolean }) => {
  return (
    <Link 
      href={href} 
      className={`relative font-medium group transition-colors duration-300 ${
        isActive ? 'text-primary' : 'text-gray-800 hover:text-primary'
      }`}
    >
      {label}
      <span 
        className={`absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      ></span>
    </Link>
  );
};

// Mobile Navigation Link Component
const MobileNavLink = ({ 
  href, 
  label, 
  onClick, 
  isActive,
  isButton 
}: { 
  href: string;
  label: string;
  onClick: () => void;
  isActive: boolean;
  isButton?: boolean;
}) => {
  return (
    <Link 
      href={href} 
      className={`
        ${isButton 
          ? 'bg-primary text-white py-3 px-6 rounded-full text-center font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-md flex justify-center items-center' 
          : `text-gray-800 py-2 border-b border-gray-100 ${isActive ? 'text-primary font-semibold' : 'hover:text-primary'}`
        } 
        block transition-all duration-300
      `} 
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header;