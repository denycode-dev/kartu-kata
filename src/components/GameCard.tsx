"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Sparkles, MessageCircleHeart, Users } from "lucide-react";
import { generateQuestion } from "@/lib/gemini";
import { cn } from "@/lib/utils";

interface GameCardProps {
    mode: "friends" | "couples";
    onBack: () => void;
}

export default function GameCard({ mode, onBack }: GameCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [question, setQuestion] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const handleCardClick = async () => {
        if (loading) return;

        if (!isFlipped) {
            setIsFlipped(true);
            setLoading(true);
            const q = await generateQuestion(mode);
            setQuestion(q);
            setLoading(false);
        }
    };

    const handleReset = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsFlipped(false);
        setQuestion("");
    };

    const isFriends = mode === "friends";

    return (
        <div className="flex flex-col items-center justify-center gap-8 w-full max-w-md mx-auto p-4">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="self-start text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2"
            >
                ← Ganti Mode
            </button>

            {/* The Card */}
            <div
                className="relative w-full aspect-[3/4] cursor-pointer perspective-1000 group"
                onClick={handleCardClick}
            >
                <motion.div
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                    className="w-full h-full preserve-3d relative"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* FRONT (Face Down) */}
                    <div
                        className={cn(
                            "absolute inset-0 backface-hidden rounded-[32px] p-1.5",
                            "bg-gradient-to-br shadow-2xl transition-colors duration-500",
                            isFriends ? "from-lime-400 via-green-500 to-emerald-600" : "from-pink-400 via-rose-500 to-red-500"
                        )}
                    >
                        <div className="w-full h-full bg-black/20 backdrop-blur-md rounded-[26px] flex flex-col items-center justify-center border border-white/20 relative overflow-hidden">
                            {/* Micro-interaction: Moving sheen */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-6 animate-pulse ring-4 ring-white/5">
                                {isFriends ? (
                                    <Users className="w-12 h-12 text-lime-200" />
                                ) : (
                                    <MessageCircleHeart className="w-12 h-12 text-pink-200" />
                                )}
                            </div>
                            <h3 className="text-3xl font-black text-white tracking-widest uppercase text-center px-4 drop-shadow-lg">
                                {isFriends ? "Teman" : "Pasangan"}
                            </h3>
                            <p className="text-white/80 mt-2 font-medium bg-black/20 px-4 py-1 rounded-full text-xs backdrop-blur-sm">
                                Klik kartu
                            </p>
                        </div>
                    </div>

                    {/* BACK (Face Up - Question) */}
                    <div
                        className={cn(
                            "absolute inset-0 backface-hidden rounded-[32px] p-1.5 rotate-y-180",
                            "bg-gradient-to-br shadow-2xl",
                            isFriends ? "from-emerald-600 via-green-500 to-lime-400" : "from-red-600 via-rose-500 to-pink-400"
                        )}
                        style={{ transform: "rotateY(180deg)" }}
                    >
                        <div className="w-full h-full bg-black/90 backdrop-blur-xl rounded-[26px] flex flex-col items-center justify-center p-6 sm:p-8 text-center relative overflow-hidden border border-white/20">
                            {/* Background Glow */}
                            <div className={cn(
                                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-[80px] opacity-40 pointer-events-none animate-pulse",
                                isFriends ? "bg-lime-500" : "bg-pink-500"
                            )} />

                            {loading ? (
                                <div className="flex flex-col items-center gap-4 z-10">
                                    <div className={cn("p-4 rounded-full bg-white/5", isFriends ? "text-lime-400" : "text-pink-400")}>
                                        <Loader2 className="w-10 h-10 animate-spin" />
                                    </div>
                                    <p className="text-white/80 font-medium animate-pulse">Meracik pertanyaan...</p>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="z-10 flex flex-col h-full justify-between py-4"
                                >
                                    <Sparkles className={cn(
                                        "w-8 h-8 mx-auto",
                                        isFriends ? "text-lime-400" : "text-pink-400"
                                    )} />

                                    <div className="flex-1 flex items-center justify-center my-4 overflow-y-auto custom-scrollbar">
                                        <p className="text-xl md:text-2xl font-bold text-white leading-relaxed drop-shadow-md">
                                            "{question}"
                                        </p>
                                    </div>

                                    <button
                                        onClick={handleReset}
                                        className={cn(
                                            "px-6 py-2.5 rounded-full text-white font-bold tracking-wide shadow-lg hover:shadow-xl transition-all active:scale-95 text-sm uppercase",
                                            isFriends ? "bg-gradient-friends text-black" : "bg-gradient-couples"
                                        )}
                                    >
                                        Pertanyaan Lain
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>

            <p className="text-white/30 text-xs">Powered by Gemini AI</p>
        </div>
    );
}
