"use client";

import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import GameCard from "@/components/GameCard";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Users, Heart } from "lucide-react";

export default function Home() {
  const [gameMode, setGameMode] = useState<"friends" | "couples" | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleModeSelect = useCallback((mode: "friends" | "couples") => {
    setGameMode(mode);
  }, []);

  const handleBackToLanding = useCallback(() => {
    setGameMode(null);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">

      {/* Decorative Orbs */}
      <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px] pointer-events-none" />

      <AnimatePresence mode="wait">
        {!gameMode ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={shouldReduceMotion 
              ? { opacity: 0 } 
              : { opacity: 0, scale: 1.1, filter: "blur(10px)" }
            }
            transition={shouldReduceMotion ? { duration: 0.01 } : { duration: 0.3 }}
            className="z-10 flex flex-col items-center gap-12 w-full max-w-2xl text-center"
          >
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 tracking-tighter">
                KARTU <br /> KATA
              </h1>
              <p className="text-lg md:text-xl text-indigo-200/80 font-light max-w-md mx-auto">
                Temukan topik obrolan seru untuk mencairkan suasana atau memperdalam hubungan.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full px-4 max-w-4xl">
              <button
                onClick={() => handleModeSelect("friends")}
                className="group relative h-48 md:h-64 rounded-3xl overflow-hidden glass-card transition-all duration-500 hover:scale-[1.02] active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-friends opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 p-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-friends flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-black/70" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-white mb-1 drop-shadow-md">Teman</h2>
                    <p className="text-xs md:text-sm text-lime-200 font-medium">Nongkrong & Seru</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleModeSelect("couples")}
                className="group relative h-48 md:h-64 rounded-3xl overflow-hidden glass-card transition-all duration-500 hover:scale-[1.02] active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-couples opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 p-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-couples flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-white mb-1 drop-shadow-md">Pasangan</h2>
                    <p className="text-xs md:text-sm text-pink-200 font-medium">Deep Talk & Love</p>
                  </div>
                </div>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="game"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
            transition={shouldReduceMotion ? { duration: 0.01 } : { duration: 0.4 }}
            className="w-full z-10"
          >
            <GameCard mode={gameMode} onBack={handleBackToLanding} />
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="fixed bottom-4 w-full text-center z-10">
        <p className="text-white/40 text-[10px] md:text-xs">
          &copy; {new Date().getFullYear()} Deni Irawan Nugraha
        </p>
      </footer>
    </main>
  );
}

