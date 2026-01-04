"use server";

import friendsData from "@/db/friends.json";
import couplesData from "@/db/couples.json";

interface QuestionData {
    questions: string[];
}

const friends = friendsData as QuestionData;
const couples = couplesData as QuestionData;

export async function generateQuestion(context: "friends" | "couples") {
    try {
        const questions = context === "friends" ? friends.questions : couples.questions;
        
        // Get random question
        const randomIndex = Math.floor(Math.random() * questions.length);
        const question = questions[randomIndex];
        
        return question || "Maaf, pertanyaan tidak ditemukan. Coba lagi ya!";
    } catch (error) {
        console.error("Error getting question:", error);
        return "Maaf, ada gangguan. Coba lagi nanti!";
    }
}
