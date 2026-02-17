"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const DJs = [
  {
    id: 1,
    name: "Stardust Crusader",
    genre: "Nu-Disco / French House",
    image: "/images/dj1.png",
    color: "#FF6B35",
  },
  {
    id: 2,
    name: "Velvet Void",
    genre: "Deep Space Funk",
    image: "/images/dj2.png",
    color: "#B026FF",
  },
  {
    id: 3,
    name: "Cyber Chic",
    genre: "Synthwave / Italo",
    image: "/images/dj3.png",
    color: "#00F0FF",
  },
  {
    id: 4,
    name: "Retro Rocket",
    genre: "Classic 70s Remixes",
    image: "/images/dj4.png",
    color: "#FF007F",
  },
];

export const OrbitingLineup = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-24 overflow-hidden relative bg-black">
        {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-black to-black pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">The Rotation</h2>
          <p className="text-neutral-400 max-w-lg mx-auto">
            World-class selectors orbiting the Sphere every weekend.
          </p>
        </div>

        <div className="relative h-[500px] w-full flex items-center justify-center">
            {/* The Orbit Path Visual */}
            <div className="absolute w-[120%] h-[120%] rounded-[100%] border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute w-[80%] h-[80%] rounded-[100%] border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="flex gap-4 md:gap-8 items-center justify-center w-full z-20">
                {DJs.map((dj, idx) => (
                    <motion.div
                        key={dj.id}
                        onClick={() => setActiveIdx(idx)}
                        className={cn(
                            "relative cursor-pointer transition-all duration-500",
                            activeIdx === idx ? "w-64 md:w-80 z-30 scale-110" : "w-20 md:w-24 grayscale opacity-50 hover:opacity-80"
                        )}
                        layout
                    >
                        <div className={cn(
                            "rounded-2xl overflow-hidden border-2 transition-colors duration-300 relative aspect-[3/4]",
                            activeIdx === idx ? "border-primary shadow-[0_0_30px_rgba(176,38,255,0.4)]" : "border-white/10"
                        )}>
                            <img src={dj.image} alt={dj.name} className="object-cover w-full h-full" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                            
                            {activeIdx === idx && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute bottom-0 left-0 w-full p-6 text-left"
                                >
                                    <h3 className="font-display text-2xl text-white leading-none mb-1">{dj.name}</h3>
                                    <p className="text-primary text-sm font-medium">{dj.genre}</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default OrbitingLineup;
