// import React, { useState } from 'react';
// import { Menu, X, Church } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { cn } from '@/lib/utils';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
    // { label: 'Accueil', href: '#home' },
    // { label: 'À propos', href: '#about' },
    // { label: 'Événements', href: '#events' },
    // { label: 'Contact', href: '#contact' },
//   ];

//   return (
//     <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <Church className="h-8 w-8 text-primary" />
//             <span className="text-xl font-bold text-gray-900">
//               C.C. Cité de Refuge/Kintambo
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="text-gray-700 hover:text-primary transition-colors font-medium"
//               >
//                 {item.label}
//               </a>
//             ))}
//             <Button className="bg-primary hover:bg-primary/90">
//               Donation
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden py-4 border-t">
//             <div className="flex flex-col space-y-4">
//               {navItems.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className="text-gray-700 hover:text-primary transition-colors py-2"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//               <Button className="w-full bg-primary hover:bg-primary/90">
//                 Donation
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Menu, X, MapPin, Clock, Phone, Search, Church } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Événements', href: '#events' },
    { label: 'Contact', href: '#contact' },

  ];

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      {/* TOP BAR */}
      <div className="w-full border-b bg-white py-3">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* LOGO */}
          <div className="flex items-center space-x-2">
            <Church className="h-8 w-8 text-primary" />
            <span className="text-3xl font-bold">
              <span className="text-blue-900">Eglise</span>
              <span className="text-orange-500">Cité de Réfuge</span>
            </span>
          </div>

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

            {/* Hours */}
            {/* <div className="flex items-center space-x-2">
              <Clock className="text-purple-600" size={22} />
              <div className="text-sm">
                <p className="font-semibold">Lundi – Dimanche</p>
                <p className="text-gray-600">08:00 – 20:00</p>
              </div>
            </div> */}

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
                <a
                  href={item.href}
                  className="text-gray-700 text-lg font-medium hover:text-purple-600 transition"
                >
                  {item.label}
                </a>
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

            {/* Appointment */}
            {/* <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 text-lg rounded-lg">
              Appointment
            </Button> */}
          </div>
        </div>

        {/* MOBILE NAV */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 py-4 space-y-3 border-t">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.label}
                className="block text-gray-700 text-lg py-2 border-b"
              >
                {item.label}
              </a>
            ))}

            <input
              type="text"
              placeholder="Search..."
              className="border rounded-lg px-4 py-2 w-full mt-2"
            />

            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 mt-2">
              Appointment
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
