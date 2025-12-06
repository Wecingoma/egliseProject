'use client';

import React, { useState } from 'react';
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

const AdminPage = () => {
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [photoTitle, setPhotoTitle] = useState('');
  const [photoDescription, setPhotoDescription] = useState('');
  const [category, setCategory] = useState('events');
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

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

    // Créer des prévisualisations
    const newPreviews = newFiles.map(file => URL.createObjectURL(file));
    setPreviews(prev => [...prev, ...newPreviews]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setMessage({ type: 'error', text: 'Veuillez sélectionner au moins une photo' });
      return;
    }

    setIsUploading(true);
    
    try {
      // Simuler l'upload
      setTimeout(() => {
        setMessage({ 
          type: 'success', 
          text: `${selectedFiles.length} photo(s) publiée(s) avec succès!` 
        });
        setSelectedFiles([]);
        setPreviews([]);
        setPhotoTitle('');
        setPhotoDescription('');
        setIsUploading(false);
      }, 1500);

    } catch (error) {
      setMessage({ type: 'error', text: 'Erreur lors de l\'upload' });
      setIsUploading(false);
    }
  };

  const handleLogout = () => {
    // Supprimer le token d'authentification
    localStorage.removeItem('admin_token');
    navigate('/login');
  };

  // Photos existantes (simulées)
  const existingPhotos = [
    { id: 1, title: 'Culte du dimanche', category: 'worship', date: '2024-01-15' },
    { id: 2, title: 'Construction église', category: 'construction', date: '2024-01-10' },
    { id: 3, title: 'Activité jeunesse', category: 'activities', date: '2024-01-05' },
  ];

  return (
    <section>
        <Navbar/>
      
    
    <div className="min-h-screen bg-gray-50 pt-35 pb-10">
      <div className="container mx-auto px-4">
        {/* En-tête Admin */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Administration</h1>
            <p className="text-gray-600">Gestion des photos et contenu</p>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut size={18} />
            Déconnexion
          </Button>
        </div>

        {message && (
          <Alert className={`mb-6 ${message.type === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            <AlertDescription className={message.type === 'success' ? 'text-green-800' : 'text-red-800'}>
              {message.text}
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList className="grid w-full md:w-auto grid-cols-2">
            <TabsTrigger value="upload">Publier des photos</TabsTrigger>
            <TabsTrigger value="manage">Gérer les photos</TabsTrigger>
          </TabsList>

          {/* Onglet Upload */}
          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle>Publier de nouvelles photos</CardTitle>
                <CardDescription>
                  Ajoutez des photos pour partager avec la communauté
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Informations de la photo */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Titre des photos</Label>
                    <Input
                      id="title"
                      placeholder="Ex: Culte du dimanche 15 janvier"
                      value={photoTitle}
                      onChange={(e) => setPhotoTitle(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Description des photos..."
                      rows={3}
                      value={photoDescription}
                      onChange={(e) => setPhotoDescription(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Catégorie</Label>
                    <select
                      id="category"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      {categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Zone de téléchargement */}
                <div className="space-y-4">
                  <Label>Photos à publier</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-2">
                      Glissez-déposez vos photos ou cliquez pour sélectionner
                    </p>
                    <Input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      id="photo-upload"
                      onChange={handleFileSelect}
                    />
                    <Button
                      variant="outline"
                      onClick={() => document.getElementById('photo-upload')?.click()}
                    >
                      <ImageIcon className="mr-2 h-4 w-4" />
                      Sélectionner des photos
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">
                      Formats supportés: JPG, PNG, WebP (Max 5MB par photo)
                    </p>
                  </div>

                  {/* Prévisualisation */}
                  {previews.length > 0 && (
                    <div className="mt-6">
                      <h3 className="font-medium mb-4">
                        {selectedFiles.length} photo(s) sélectionnée(s)
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {previews.map((preview, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={preview}
                              alt={`Preview ${index}`}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            <button
                              onClick={() => removeFile(index)}
                              className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Trash2 size={16} />
                            </button>
                            <div className="text-xs text-gray-500 mt-1 truncate">
                              {selectedFiles[index].name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bouton de publication */}
                <div className="pt-4">
                  <Button
                    onClick={handleUpload}
                    disabled={isUploading || selectedFiles.length === 0}
                    className="w-full md:w-auto"
                  >
                    {isUploading ? (
                      <>Publication en cours...</>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Publier les photos
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Gestion */}
          <TabsContent value="manage">
            <Card>
              <CardHeader>
                <CardTitle>Photos publiées</CardTitle>
                <CardDescription>
                  Gérez les photos existantes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">ID</th>
                        <th className="text-left py-3 px-4">Titre</th>
                        <th className="text-left py-3 px-4">Catégorie</th>
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {existingPhotos.map((photo) => (
                        <tr key={photo.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{photo.id}</td>
                          <td className="py-3 px-4 font-medium">{photo.title}</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                              {categories.find(c => c.value === photo.category)?.label}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-500">{photo.date}</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Eye size={14} className="mr-1" />
                                Voir
                              </Button>
                              <Button size="sm" variant="destructive">
                                <Trash2 size={14} className="mr-1" />
                                Supprimer
                              </Button>
                            </div>
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
    </section>
  );
};

export default AdminPage;