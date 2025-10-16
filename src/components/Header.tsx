'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Logo Insurial" 
              className="h-16 md:h-20"
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-[#1E3A8A] transition-colors font-medium"
            >
              Accueil
            </Link>
            <Link 
              href="/comment-ca-marche" 
              className="text-gray-700 hover:text-[#1E3A8A] transition-colors font-medium"
            >
              Comment ça marche
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-[#1E3A8A] transition-colors font-medium"
            >
              Blog
            </Link>
            <Link 
              href="/a-propos" 
              className="text-gray-700 hover:text-[#1E3A8A] transition-colors font-medium"
            >
              À propos
            </Link>
            
            {/* Dropdown Insurance */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#1E3A8A] transition-colors font-medium flex items-center">
                Assurances
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link 
                    href="/assurances" 
                    className="block px-4 py-2 text-sm text-gray-900 font-semibold hover:bg-gray-50 hover:text-[#1E3A8A]"
                  >
                    Toutes les assurances
                  </Link>
                  <div className="h-px bg-gray-100 my-1" />
                  <Link 
                    href="/assurances/rc-pro" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E3A8A]"
                  >
                    Responsabilité Civile Professionnelle (RC Pro)
                  </Link>
                  <Link 
                    href="/assurances/multirisque-professionnelle" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E3A8A]"
                  >
                    Multirisque Professionnelle
                  </Link>
                  <Link 
                    href="/assurances/flotte-automobile" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E3A8A]"
                  >
                    Flotte automobile professionnelle
                  </Link>
                  <Link 
                    href="/assurances/at-mp" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E3A8A]"
                  >
                    Accidents du travail (AT/MP)
                  </Link>
                  <Link 
                    href="/packs/pack-tpe" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E3A8A]"
                  >
                    Pack TPE / Multirisque Pro complète
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href="/#diagnostic" 
              className="bg-[#1E3A8A] hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Faire mon diagnostic
            </Link>
          </nav>

          {/* Menu Mobile Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#1E3A8A] hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-[#1E3A8A] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/comment-ca-marche" 
                className="text-gray-700 hover:text-[#1E3A8A] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Comment ça marche
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-[#1E3A8A] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/a-propos" 
                className="text-gray-700 hover:text-[#1E3A8A] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              
              {/* Insurance Mobile */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">Assurances</p>
                <div className="pl-4 space-y-2">
                  <Link 
                    href="/assurances" 
                    className="block text-sm text-gray-900 font-semibold hover:text-[#1E3A8A]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Toutes les assurances
                  </Link>
                  <Link 
                    href="/assurances/rc-pro" 
                    className="block text-sm text-gray-700 hover:text-[#1E3A8A]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Responsabilité Civile Professionnelle (RC Pro)
                  </Link>
                  <Link 
                    href="/assurances/multirisque-professionnelle" 
                    className="block text-sm text-gray-700 hover:text-[#1E3A8A]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Multirisque Professionnelle
                  </Link>
                  <Link 
                    href="/assurances/flotte-automobile" 
                    className="block text-sm text-gray-700 hover:text-[#1E3A8A]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Flotte automobile professionnelle
                  </Link>
                  <Link 
                    href="/assurances/at-mp" 
                    className="block text-sm text-gray-700 hover:text-[#1E3A8A]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Accidents du travail (AT/MP)
                  </Link>
                  <Link 
                    href="/packs/pack-tpe" 
                    className="block text-sm text-gray-700 hover:text-[#1E3A8A]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pack TPE / Multirisque Pro complète
                  </Link>
                </div>
              </div>

              <Link 
                href="/#diagnostic" 
                className="bg-[#1E3A8A] hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Faire mon diagnostic
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
