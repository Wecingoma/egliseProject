import React from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const slides = [
    {
      image: '/images/images/ensembler3.jpeg',
      title: 'Jésus-Christ où que nous soyons',
      subtitle: 'Cité de Refuge C.C./Kintambo',
      description: 'Jésus-Christ est fidèle hier, aujourd\'hui et demain.',
    },
    {
      image: '/images/images/ensembler2.jpeg',
      title: 'Nous aimons Dieu, Nous croyons en Jésus-Christ',
      subtitle: 'Cité de Refuge C.C./Kintambo',
      description: 'Romains 10:8...',
    },
    {
      image: '/images/images/ensembler1.jpeg',
      title: 'Nous aimons Dieu, Nous croyons en Jésus-Christ',
      subtitle: 'Cité de Refuge C.C./Kintambo',
      description: 'Romains 10:8...',
    }
  ];

  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // ANIMATION VARIANTS
  const variants = {
    enter: {
      opacity: 0,
      x: 50,
    },
    center: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -50,
    },
  };

  const slide = slides[index];

  return (
    <section id="home" className="pt-40 relative h-[600px] overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* BACKGROUND */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* CONTENT */}
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <span className="text-primary font-semibold">
                {slide.subtitle}
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {slide.title}
              </h1>

              <p className="text-xl mt-10">{slide.description}</p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
