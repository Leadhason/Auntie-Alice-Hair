import { GoogleGenAI } from "@google/genai";

// This is a helper service if we want to centralize AI logic. 
// Currently the logic is contained within AIConsultant.tsx for direct access to state.

const API_KEY = process.env.API_KEY || '';

export const getGeminiClient = () => {
  if (!API_KEY) {
    console.warn("API_KEY is not defined.");
    return null;
  }
  return new GoogleGenAI({ apiKey: API_KEY });
};
