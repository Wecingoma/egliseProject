import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, Video } from 'lucide-react';

const SermonsSection = () => {
  const sermons = [
    {
      title: "Laissez le Saint-Esprit vous conduire",
      date: "11-03-2020",
      image: "/images/wwb.jpg",
      link: "https://web.facebook.com/francis.ngawala/videos/10209180022932647/?t=0"
    },
    {
      title: "Développer la mentalité spirituelle",
      date: "11-03-2020",
      image: "/images/RRRR.JPG",
      link: "https://web.facebook.com/francis.ngawala/videos/10209149581691635/?t=0"
    },
    {
      title: "Laissez la Bible vous motiver",
      date: "11-03-2020",
      image: "/images/Salle4.JPG",
      link: "https://youtu.be/jpe9_BhKZmU"
    }
  ];

  return (
    <section id="sermons" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Les vidéos de cultes
          </h2>
          <p className="text-gray-600">
            Selon le programme
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={sermon.image}
                  alt={sermon.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-16 w-16 rounded-full bg-white/20 hover:bg-white/30"
                    onClick={() => window.open(sermon.link, '_blank')}
                  >
                    <PlayCircle className="h-8 w-8 text-white" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 hover:text-primary cursor-pointer">
                  {sermon.title}
                </h3>
                {sermon.date && (
                  <div className="text-gray-500 text-sm mb-4">
                    {sermon.date}
                  </div>
                )}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open(sermon.link, '_blank')}
                >
                  <Video className="mr-2 h-4 w-4" />
                  Regarder maintenant
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SermonsSection;