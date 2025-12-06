'use client';

import React, { useState } from 'react';
import { toast } from "sonner";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Image as ImageIcon, Trash2, Eye, Save, LogOut } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const AdminPage = () => {
  const navigate = useNavigate();

  // Upload image state
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  // Form data
  const [photoTitle, setPhotoTitle] = useState('');
  const [photoDescription, setPhotoDescription] = useState('');
  const [category, setCategory] = useState('events');

  // Event modal form
  const [showEventModal, setShowEventModal] = useState(false);
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const categories = [
    { value: 'events', label: 'Événements' },
    { value: 'worship', label: 'Culte' },
    { value: 'activities', label: 'Activités' },
    { value: 'construction', label: 'Construction' },
    { value: 'community', label: 'Communauté' },
  ];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files);
    setSelectedFiles(prev => [...prev, ...newFiles]);

    const newPreviews = newFiles.map(file => URL.createObjectURL(file));
    setPreviews(prev => [...prev, ...newPreviews]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
  if (selectedFiles.length === 0) {
    toast.error("Aucune photo sélectionnée", {
      description: "Veuillez choisir au moins une photo avant de publier.",
    });
    return;
  }

  if (category === "events" && (!eventDate || !eventTime || !eventLocation)) {
    toast.error("Informations manquantes", {
      description: "Veuillez compléter tous les champs de l’événement.",
    });
    setShowEventModal(true);
    return;
  }

  toast.loading("Publication en cours...");

  setIsUploading(true);

  try {
    setTimeout(() => {
      toast.dismiss(); // enlève le loading
      toast.success("Publication réussie 🎉", {
        description: `${selectedFiles.length} photo(s) publiée(s) avec succès !`,
      });

      setSelectedFiles([]);
      setPreviews([]);
      setPhotoTitle('');
      setPhotoDescription('');
      setEventDate('');
      setEventTime('');
      setEventLocation('');
      setIsUploading(false);
    }, 1500);

  } catch (error) {
    toast.dismiss();
    toast.error("Erreur lors de la publication", {
      description: "Une erreur inattendue est survenue.",
    });
    setIsUploading(false);
  }
};


  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/login');
  };

  const existingPhotos = [
    { id: 1, title: 'Culte du dimanche', category: 'worship', date: '2024-01-15' },
    { id: 2, title: 'Construction église', category: 'construction', date: '2024-01-10' },
    { id: 3, title: 'Activité jeunesse', category: 'activities', date: '2024-01-05' }
  ];

  return (
    <section>
      <Navbar />

      <div className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-10">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Administration</h1>
                <p className="text-gray-600">Gestion des photos & événements</p>
              </div>

              <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
                <LogOut size={18} /> Déconnexion
              </Button>
            </div>

            {/* MESSAGE */}
            {message && (
              <Alert className={`mb-6 ${message.type === 'success'
                ? 'bg-green-50 border-green-200'
                : 'bg-red-50 border-red-200'
                }`}>
                <AlertDescription className={
                  message.type === 'success' ? 'text-green-800' : 'text-red-800'
                }>
                  {message.text}
                </AlertDescription>
              </Alert>
            )}

            <Tabs defaultValue="upload" className="space-y-6">
              <TabsList className="w-full md:w-auto grid grid-cols-2 mx-auto mb-4">
                <TabsTrigger value="upload">Publier des photos</TabsTrigger>
                <TabsTrigger value="manage">Gérer les photos</TabsTrigger>
              </TabsList>

              {/* UPLOAD TAB */}
              <TabsContent value="upload">
                <Card className="max-w-3xl mx-auto">
                  <CardHeader>
                    <CardTitle>Publier de nouvelles photos</CardTitle>
                    <CardDescription>Ajoutez des photos ou créez un événement</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-8">

                    {/* FORM */}
                    <div className="space-y-6">

                      <div>
                        <Label>Titre</Label>
                        <Input value={photoTitle} onChange={e => setPhotoTitle(e.target.value)} />
                      </div>

                      <div>
                        <Label>Description</Label>
                        <Textarea
                          rows={3}
                          value={photoDescription}
                          onChange={e => setPhotoDescription(e.target.value)}
                        />
                      </div>

                      <div>
                        <Label>Catégorie</Label>
                        <select
                          className="w-full px-3 py-2 border rounded-md"
                          value={category}
                          onChange={(e) => {
                            setCategory(e.target.value);
                            if (e.target.value === "events") setShowEventModal(true);
                          }}
                        >
                          {categories.map(c => (
                            <option key={c.value} value={c.value}>{c.label}</option>
                          ))}
                        </select>
                      </div>

                    </div>

                    {/* FILE UPLOAD */}
                    <div className="space-y-4">
                      <Label>Photos</Label>

                      <div className="border-2 border-dashed rounded-lg p-8 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                        <p className="text-gray-600 mb-2">Glissez vos photos ici</p>

                        <Input
                          type="file"
                          accept="image/*"
                          multiple
                          id="photo-upload"
                          className="hidden"
                          onChange={handleFileSelect}
                        />

                        <Button
                          variant="outline"
                          onClick={() => document.getElementById("photo-upload")?.click()}
                          className="w-full md:w-auto text-black bg-gray-200 hover:bg-gray-300"

                        >
                          <ImageIcon className="mr-2 h-4 w-4" /> Sélectionner
                        </Button>
                      </div>

                      {/* PREVIEW */}
                      {previews.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                          {previews.map((p, i) => (
                            <div key={i} className="relative group">
                              <img src={p} className="w-full h-40 object-cover rounded-md" />
                              <button
                                onClick={() => removeFile(i)}
                                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <Button
                      onClick={handleUpload}
                      disabled={isUploading || selectedFiles.length === 0}
                      className="w-full md:w-auto text-black bg-gray-200 hover:bg-gray-300"

                    >
                      {isUploading ? (
                        "Publication..."
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" /> Publier
                        </>
                      )}
                    </Button>


                  </CardContent>
                </Card>
              </TabsContent>

              {/* MANAGE TAB */}
              <TabsContent value="manage">
                <Card className="max-w-4xl mx-auto">
                  <CardHeader>
                    <CardTitle>Photos publiées</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th>ID</th>
                            <th>Titre</th>
                            <th>Catégorie</th>
                            <th>Date</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {existingPhotos.map(photo => (
                            <tr key={photo.id} className="border-b">
                              <td>{photo.id}</td>
                              <td>{photo.title}</td>
                              <td>{photo.category}</td>
                              <td>{photo.date}</td>
                              <td>
                                <Button size="sm" variant="outline" className="w-full md:w-auto text-black bg-gray-200 hover:bg-gray-300"><Eye size={14} /></Button>
                                <Button size="sm" variant="destructive" className="w-full md:w-auto text-black bg-gray-200 hover:bg-gray-300"><Trash2 size={14} /></Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

            </Tabs>

          </div>
        </div>
      </div>

      {/* 🔥 EVENT MODAL */}
      {showEventModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">

            <h2 className="text-xl font-semibold mb-6">Créer un événement</h2>

            <div className="space-y-4">
              <div>
                <Label>Date</Label>
                <Input type="date" value={eventDate} onChange={e => setEventDate(e.target.value)} />
              </div>

              <div>
                <Label>Heure</Label>
                <Input type="time" value={eventTime} onChange={e => setEventTime(e.target.value)} />
              </div>

              <div>
                <Label>Lieu</Label>
                <Input
                  placeholder="Ex : Église Cité de Refuge / Kintambo"
                  value={eventLocation}
                  onChange={e => setEventLocation(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline" onClick={() => setShowEventModal(false)}>
                Annuler
              </Button>
              <Button
                onClick={() => {
                  if (!eventDate || !eventTime || !eventLocation) {
                    setMessage({ type: "error", text: "Complétez tous les champs événement." });
                    return;
                  }

                  setShowEventModal(false);
                  setMessage({ type: "success", text: "Événement enregistré !" });
                }}
                className="w-full md:w-auto text-black bg-gray-200 hover:bg-gray-300"

              >
                Enregistrer
              </Button>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </section>
  );
};

export default AdminPage;
