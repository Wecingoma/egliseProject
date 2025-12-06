import React from "react";
import { useLocation } from "react-router-dom";
import { Calendar, MapPin, Clock, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const EventsPage = () => {
  const location = useLocation();
  const showFooter = location.pathname === "/events"; // condition

  const events = [
    {
      id: 1,
      title: "Culte de Louange & Adoration",
      date: "Dimanche 04 Février 2025",
      time: "08h30 – 12h00",
      location: "Église Cité de Refuge / Kintambo",
      image: "/images/68.jpg"
    },
    {
      id: 2,
      title: "Journée de Jeûne & Prière",
      date: "Vendredi 09 Février 2025",
      time: "07h00 – 14h00",
      location: "Salle de prière",
      image: "/images/images/jeune.jpeg"
    },
    {
      id: 3,
      title: "Conférence Biblique : Vie en Christ",
      date: "Samedi 17 Février 2025",
      time: "14h00 – 17h30",
      location: "Grand Auditorium",
      image: "/images/images/conference.jpeg"
    }
  ];

  return (
    <div>
        {showFooter && <Navbar />}
    <section className="bg-gray-50 min-h-screen pb-20 pt-10">

      {/* HERO SECTION */}
      <div className="relative h-[350px] w-full overflow-hidden">
        <img
          src="/images/images/eglise.jpg"
          className="w-full h-full object-cover brightness-[0.55]"
          alt="Événements Eglise"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Événements & Programmes
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Découvrez les prochains événements organisés par la Communauté Chrétienne Cité de Refuge.
          </p>
        </div>
      </div>

      {/* EVENTS LIST */}
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">À venir</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map(event => (
            <Card key={event.id} className="shadow-sm hover:shadow-lg transition">
              <div className="h-48 w-full overflow-hidden rounded-t-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardContent className="p-5 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {event.title}
                </h3>

                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <button className="mt-4 w-full flex items-center justify-center gap-2 text-primary font-medium hover:underline">
                  Voir les détails <ChevronRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </section>
    {showFooter && <Footer />}
    </div>
  );
};

export default EventsPage;
