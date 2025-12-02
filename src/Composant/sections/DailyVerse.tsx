import React from 'react';
import { Church } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DailyVerse = () => {
  return (
    <section className="py-20 bg-cover bg-center relative" style={{ backgroundImage: "url('/images/bg_4.jpg')" }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 p-6 rounded-full">
                    <Church className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <span className="text-primary font-semibold text-lg mb-2 block">
                    Jésus-Christ a dit :
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 italic">
                    "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle."
                  </h3>
                  <div className="text-gray-600">
                    <span className="font-bold">Bible :</span> Jean 3:16 (LSG)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DailyVerse;