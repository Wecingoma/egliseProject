import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function LoginPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  if (password === "1234") {

    toast.success("Connexion réussie 🎉", {
      description: "Bienvenue dans l'administration.",
    });
    

    localStorage.setItem("auth", "true");

    setTimeout(() => navigate("/admin"), 1200);

  } else {
    toast.error("Mot de passe incorrect ❌", {
      description: "Veuillez réessayer.",
    });
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock /> Connexion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <input
            type="password"
            placeholder="Mot de passe"
            className="input w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-primary mt-4 w-full" onClick={handleLogin}>
            Se connecter
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
