import { GoogleGenAI, Type } from "@google/genai";
import { PassportData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeBatchQuality = async (batchId: string, variety: string): Promise<PassportData> => {
  const model = "gemini-2.5-flash";

  // Prompt adapté au contexte marocain (Agadir, Berkane, etc.) et en français
  const prompt = `
    Analysez les paramètres de qualité pour un lot d'agrumes de variété ${variety} (ID Lot: ${batchId}).
    Simulez un rapport de contrôle qualité agricole professionnel pour une station de conditionnement au Maroc.
    Générez des données réalistes et de haute qualité pour un lot destiné à l'export (UE/Russie/USA).
    
    Répondez en JSON uniquement.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.INTEGER, description: "Score de qualité sur 100 (ex: 92-98)" },
            grade: { type: Type.STRING, description: "Classification (ex: Maroc Late Extra, Clémentine Berkane Premium)" },
            tastingNotes: { type: Type.STRING, description: "Brève description du profil sensoriel en français (max 20 mots)" },
            marketReadiness: { type: Type.STRING, description: "Justification du statut d'export en français" },
            certificationId: { type: Type.STRING, description: "Code de certification alphanumérique unique" }
          },
          required: ["score", "grade", "tastingNotes", "marketReadiness", "certificationId"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Aucune donnée retournée par Gemini");
    }

    return JSON.parse(text) as PassportData;

  } catch (error) {
    console.error("Échec de l'analyse Gemini:", error);
    // Données de repli (Fallback) localisées pour le Maroc
    return {
      score: 94,
      grade: "Sélection Prime Agadir",
      tastingNotes: "Douceur exceptionnelle avec un profil aromatique vibrant et une acidité équilibrée.",
      marketReadiness: "Expédition immédiate approuvée pour les marchés de l'UE.",
      certificationId: "ONSSA-2024-8892X"
    };
  }
};