import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const PastorsSection = () => {
  const pastors = [
    {
      name: 'Pasteur Claude KABALA Christian',
      role: 'Pasteur titulaire',
      image: '/images/Pasteuer53.JPG',
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        email: 'kabalacluaude@gmail.com'
      }
    },
    {
      name: 'Pasteur Jean Tshibangu',
      role: 'Pasteur',
      image: '/images/pasteurJean2.JPG',
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        email: '#'
      }
    }
  ];

  return (
    <section id="pastors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos Pasteurs
          </h2>
          <p className="text-gray-600">
            La représentation du corps pastoral de la communauté Charismatique cité de Refuge
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pastors.map((pastor, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-64">
                <img
                  src={pastor.image}
                  alt={pastor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{pastor.name}</h3>
                <p className="text-primary font-semibold mb-4">{pastor.role}</p>
                
                <div className="flex justify-center space-x-4">
                  <a href={pastor.social.twitter} className="text-gray-500 hover:text-blue-400">
                    <Twitter size={20} />
                  </a>
                  <a href={pastor.social.facebook} className="text-gray-500 hover:text-blue-600">
                    <Facebook size={20} />
                  </a>
                  <a href={pastor.social.instagram} className="text-gray-500 hover:text-pink-600">
                    <Instagram size={20} />
                  </a>
                  <a href={`mailto:${pastor.social.email}`} className="text-gray-500 hover:text-red-600">
                    <Mail size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastorsSection;