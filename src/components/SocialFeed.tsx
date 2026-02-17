import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "I've never seen anything like this. The visuals literally took my breath away. It felt like dancing on Mars.",
    name: "Sarah Jenkins",
    title: "Verified Guest",
    image: "/images/dj1.png",
  },
  {
    quote: "The sound system is unreal. You can feel the bass in your soul without your ears ringing. 10/10.",
    name: "Marcus Chen",
    title: "Music Producer",
    image: "/images/dj2.png",
  },
  {
    quote: "Retro-futurism done right. The vibe was immaculate, from the cocktails to the crowd.",
    name: "Elena Rodriguez",
    title: "Travel Blogger",
    image: "/images/dj3.png",
  },
  {
    quote: "Best night of my life in Vegas. The Orbiting Lineup concept is genius.",
    name: "David Smith",
    title: "Club Regular",
    image: "/images/dj4.png",
  },
];

export const SocialFeed = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="font-display text-4xl text-white mb-4">Transmission Feed</h2>
        <p className="text-neutral-400">Live signals from our guests.</p>
      </div>
      <div className="h-[25rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default SocialFeed;
