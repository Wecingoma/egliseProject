import React from 'react';
// Icônes DE BASE qui existent TOUJOURS dans lucide-react
import { Home, Book, Heart, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,          // Pour "maison de prière"
      title: 'Prières quotidiennes',
      description: 'La parole de Dieu nous oblige de prier sans cesse'
    },
    {
      icon: Book,          // Pour enseignement/bible
      title: 'Enseignement continu',
      description: 'Notre page web et Facebook nous permettent de rester en continu dans nos enseignements'
    },
    {
      icon: Heart,         // Pour mariage/amour
      title: 'Mariage',
      description: 'Un programme spécial est prévu pour les fiancés pendant le processus du mariage'
    },
    {
      icon: Users,         // Pour communauté
      title: 'Différentes communautés',
      description: 'Nous avons une très grande communauté en RDC et partout dans le monde'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Programme de l'église
          </h2>
          <p className="text-gray-600 text-lg">
            Les portes de l'église restent grandement ouvertes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <service.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;