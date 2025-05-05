// src/app/components/Navbar.jsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Bloquear/desbloquear scroll cuando el menú está abierto
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Nido de Cuidados" 
              width={120} 
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Menú para escritorio */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link href="/" className="text-gray-700 hover:text-[#00927c]">Inicio</Link></li>
              <li><Link href="/servicios" className="text-gray-700 hover:text-[#00927c]">Servicios</Link></li>
              <li><Link href="/nosotros" className="text-gray-700 hover:text-[#00927c]">Nosotros</Link></li>
              <li><Link href="/blog" className="text-gray-700 hover:text-[#00927c]">Blog</Link></li>
              <li><Link href="/contacto" className="text-gray-700 hover:text-[#00927c]">Contacto</Link></li>
            </ul>
          </nav>

          {/* Botón hamburguesa */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-50 pt-16">
          <div className="container mx-auto px-4 py-8">
            <ul className="space-y-6">
              <li>
                <Link href="/" className="text-2xl font-medium block" onClick={closeMenu}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-2xl font-medium block" onClick={closeMenu}>
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-2xl font-medium block" onClick={closeMenu}>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-2xl font-medium block" onClick={closeMenu}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-2xl font-medium block" onClick={closeMenu}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}