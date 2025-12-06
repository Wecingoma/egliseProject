import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const ContactSection = () => {
  return (
    <div>
      <Navbar />
    <section id="contact" className="py-40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contactez-nous
          </h2>
          <p className="text-gray-600">
            Vous pouvez nous joindre par nos coordonnées
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="space-y-4">
                    <Input placeholder="Votre nom" />
                    <Input type="email" placeholder="Votre email" />
                    <Input placeholder="Sujet" />
                    <Textarea 
                      placeholder="Votre message" 
                      rows={6}
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Adresse</h3>
                    <p className="text-gray-600">6A, avenue Luadi commune/Kintambo</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Téléphone</h3>
                    <a href="tel:+243825555757" className="text-gray-600 hover:text-primary">
                      +243 825 555 757
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a href="mailto:kabalacluaude@gmail.com" className="text-gray-600 hover:text-primary">
                      kabalacluaude@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
};
export default ContactSection;