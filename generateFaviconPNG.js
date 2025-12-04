import fs from "fs";
import sharp from "sharp";
import { Church } from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";

// Générer le SVG de l'icône Church
const svgString = renderToStaticMarkup(
  <Church size={64} color="black" />
);

const svgContent = `<?xml version="1.0" encoding="UTF-8"?>\n${svgString}`;

// Convertir le SVG en PNG avec Sharp
sharp(Buffer.from(svgContent))
  .resize(64, 64) // taille du favicon
  .png()
  .toFile("public/church.png")
  .then(() => {
    console.log("Favicon PNG généré !");
  })
  .catch(err => {
    console.error("Erreur lors de la génération du PNG :", err);
  });
