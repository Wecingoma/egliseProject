import React from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const HeroSection = () => {
  const slides = [
    {
      image: '/images/68.jpg',
      title: 'Jésus-Christ où que nous soyons',
      subtitle: 'Cité de Refuge C.C./Kintambo',
      description: 'Jésus-Christ est fidèle hier, aujourd\'hui et demain.',
      buttons: [
        { label: 'Donation', href: '#donation' },
        { label: 'Construction', href: '#construction' }
      ]
    },
    {
      image: '/images/IMG_1768.JPG',
      title: 'Nous aimons Dieu, Nous croyons en Jésus-Christ',
      subtitle: 'Cité de Refuge C.C./Kintambo',
      description: 'Romains 10:8, Que dit-elle donc? la parole est près de toi, dans ta bouche et dans ton cœur.',
      buttons: [
        { label: 'Donation', href: '#donation' },
        { label: 'Construction', href: '#construction' }
      ]
    }
  ];

  return (
    <section id="home" className="pt-16">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div 
                className="relative h-[600px] bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative container mx-auto px-4 h-full flex items-center">
                  <div className="max-w-2xl text-white">
                    <div className="mb-4">
                      <span className="text-primary font-semibold">{slide.subtitle}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl mb-8">{slide.description}</p>
                    <div className="flex flex-wrap gap-4">
                      {slide.buttons.map((button, idx) => (
                        <Button
                          key={idx}
                          size="lg"
                          className={idx === 0 ? "bg-primary hover:bg-primary/90" : "bg-transparent border-2 border-white hover:bg-white/10"}
                        >
                          {button.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default HeroSection;