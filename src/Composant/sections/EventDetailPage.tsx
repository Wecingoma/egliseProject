import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EventDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 🔥 Simulation d'événements — plus tard tu pourras remplacer par une API ou base de données
  const events = [
    {
      id: "1",
      title: "Culte de Louange & Adoration",
      date: "Dimanche 04 Février 2025",
      time: "08h30 – 12h00",
      location: "Église Cité de Refuge / Kintambo",
      image: "/images/68.jpg",
      description:
        "Un moment spécial de louange, d’adoration et d’édification dans la présence du Seigneur. Venez en famille et avec vos amis pour célébrer la fidélité de Dieu.",
      gallery: ["/images/ensembler3.jpeg", "/images/ensembler2.jpeg"]
    },
    {
      id: "2",
      title: "Journée de Jeûne & Prière",
      date: "Vendredi 09 Février 2025",
      time: "07h00 – 14h00",
      location: "Salle de prière",
      image: "/images/images/jeune.jpg",
      description:
        "Une journée dédiée au jeûne et à la prière pour rechercher la face de Dieu et intercéder pour nos familles et la nation.",
      gallery: []
    },
  ];

  const event = events.find((e) => e.id === id);

  if (!event) {
    return <div className="text-center py-20">Événement introuvable.</div>;
  }

  return (
    <section className="bg-gray-50 pb-20 min-h-screen pt-32">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Bouton retour */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 text-primary hover:underline"
        >
          <ArrowLeft size={18} /> Retour
        </button>

        {/* Image principale */}
        <div className="w-full h-[350px] rounded-xl overflow-hidden mb-8 shadow">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Titre */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          {event.title}
        </h1>

        {/* Infos */}
        <Card className="mb-8">
          <CardContent className="p-6 space-y-4">

            <div className="flex items-center gap-3 text-gray-700">
              <Calendar className="h-5 w-5 text-primary" />
              <span>{event.date}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Clock className="h-5 w-5 text-primary" />
              <span>{event.time}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{event.location}</span>
            </div>

          </CardContent>
        </Card>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          {event.description}
        </p>

        {/* Galerie (si existante) */}
        {event.gallery.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Galerie photos</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {event.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square overflow-hidden rounded-lg shadow"
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt={`Gallery ${idx}`}
                  />
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default EventDetailPage;
