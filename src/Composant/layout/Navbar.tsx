import React, { useState } from "react";
import { Menu, X, MapPin, Clock, Phone, Search, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Utilisez react-router-dom pour Vite

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/about' },
    { label: 'Événements', href: '/events' },
    { label: 'Contact', href: '/contact' },
    { label: 'Admin', href: '/admin' },
  ];

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      {/* TOP BAR */}
      <div className="w-full border-b bg-white py-3">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-2 no-underline">
            <Church className="h-8 w-8 text-primary" />
            <span className="text-3xl font-bold">
              <span className="text-blue-900">Eglise</span>
              <span className="text-orange-500">Cité de Réfuge</span>
            </span>
          </Link>

          {/* INFO */}
          <div className="hidden md:flex items-center space-x-10">
            {/* Location */}
            <div className="flex items-center space-x-2">
              <MapPin className="text-purple-600" size={22} />
              <div className="text-sm">
                <p className="font-semibold">6A, avenue Luadi,</p>
                <p className="text-gray-600">Kinshasa, commune/Kintambo</p>
              </div>
            </div>

            {/* Emergency */}
            <div className="flex items-center space-x-2">
              <Phone className="text-purple-600" size={22} />
              <div className="text-sm">
                <p className="text-orange-600 font-bold">Emergency Line:</p>
                <p className="font-semibold">+243 825 555 757</p>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MAIN MENU */}
      <div className="w-full py-4 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="text-gray-700 text-lg font-medium hover:text-purple-600 transition no-underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Search + Appointment */}
          <div className="hidden md:flex items-center space-x-4">
            {/* SEARCH */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-lg px-4 py-2 w-64"
              />
              <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
            </div>
          </div>
        </div>

        {/* MOBILE NAV */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 py-4 space-y-3 border-t">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block text-gray-700 text-lg py-2 border-b no-underline hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <input
              type="text"
              placeholder="Search..."
              className="border rounded-lg px-4 py-2 w-full mt-2"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;