import React, { useState } from 'react';
import { Menu, X, Church } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Événements', href: '#events' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Church className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gray-900">
              C.C. Cité de Refuge/Kintambo
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/90">
              Donation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full bg-primary hover:bg-primary/90">
                Donation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;