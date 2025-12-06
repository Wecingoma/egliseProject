import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const AboutSection = () => {
  const beliefs = [
    "Nous croyons en la Bible, Parole inspirée de Dieu, infaillible et suffisante",
    "Nous croyons en un seul Dieu existant éternellement en trois personnes",
    "Nous croyons dans le salut en Jésus-Christ, Dieu véritable et Homme parfait"
  ];

  return (
    <div>
      <Navbar />
    
    <section id="about" className="py-30 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <img
              src="/images/68.jpg"
              alt="Église Cité de Refuge"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bienvenue à la communauté <span className="text-primary">Cité de Refuge/Kintambo</span>
            </h2>
            
            <Card className="mb-8">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-6">
                  La doctrine de la « CCCR » est celle de la Bible. Interprétée dans son Esprit et 
                  reconnue et acceptée par toute la Communauté, tel que illustré.
                </p>
                
                <div className="space-y-4">
                  {beliefs.map((belief, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{belief}</p>
                    </div>
                  ))}
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

export default AboutSection;