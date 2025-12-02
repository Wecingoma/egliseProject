import React, { useEffect, useRef } from 'react';
import { Users, User, DollarSign, Home } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: Users, value: 759, label: 'Membres', suffix: '' },
    { icon: User, value: 2, label: 'Pasteurs', suffix: '' },
    { icon: DollarSign, value: 1000, label: 'Donations', suffix: '+' },
    { icon: Home, value: 28, label: 'Églises dans le monde', suffix: '' }
  ];

  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target as HTMLSpanElement;
            const target = parseInt(counter.getAttribute('data-target') || '0');
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                counter.textContent = target.toString();
                clearInterval(timer);
              } else {
                counter.textContent = Math.floor(current).toString();
              }
            }, 16);

            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );

    countersRef.current.forEach((counter) => {
      if (counter) observer.observe(counter);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="h-12 w-12" />
              </div>
              <span 
                ref={el => countersRef.current[index] = el}
                data-target={stat.value}
                className="block text-4xl md:text-5xl font-bold mb-2"
              >
                0
              </span>
              <span className="text-lg">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;