import React from 'react';
import { Church, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Colonne 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Church className="h-8 w-8" />
              <span className="text-xl font-bold">C.C. Cité de Refuge Church</span>
            </div>
            <p className="text-gray-400 mb-6">
              D'autres paroles seront mises à jours après.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Colonne 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">À propos</h3>
            <ul className="space-y-2">
              {['Staff', 'Croyances', 'Histoire', 'Mission'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connexion</h3>
            <ul className="space-y-2">
              {['Groupes familiaux', 'Groupes de récupération', 'Adhésions', 'Bénévoles'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Heures de services</h3>
            <div className="space-y-2 text-gray-400">
              <p>Dimanche: <span className="block">08:00 - 10:00 & 10:30 - 12:30</span></p>
              <p>Mercredi: <span className="block">17:00 - 19:00</span></p>
              <p>Vendredi: <span className="block">17:00 - 19:00</span></p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} C.C. Cité de Refuge Church. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
