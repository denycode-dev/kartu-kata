"use server";

import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set");
}

const ai = new GoogleGenAI({ apiKey });

export async function generateQuestion(context: "friends" | "couples") {
    const prompt = context === "friends"
        ? "Buatlah 1 pertanyaan seru, unik, dan memancing diskusi untuk teman nongkrong. Pertanyaan harus singkat, santai, dan dalam bahasa Indonesia gaul. Jangan berikan penjelasan, hanya pertanyaannya saja."
        : "Buatlah 1 pertanyaan deep talk untuk pasangan yang bisa mempererat hubungan, romantis namun menantang kejujuran. Pertanyaan harus singkat dan dalam bahasa Indonesia yang menyentuh hati. Jangan berikan penjelasan, hanya pertanyaannya saja.";

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-lite",
            contents: prompt,
        });
        return response.text || "Maaf, lagi gak ada ide nih. Coba lagi ya!";
    } catch (error) {
        console.error("Error generating question:", error);
        return "Maaf, ada gangguan koneksi. Coba lagi nanti!";
    }
}
