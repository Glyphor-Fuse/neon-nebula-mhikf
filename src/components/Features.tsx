import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { MoveRight } from "lucide-react";

const items = [
  {
    title: "The Visuals",
    description: "16K resolution visuals that wrap around your reality.",
    header: <img src="/images/visuals1.png" alt="Sphere Visuals" className="w-full h-40 object-cover rounded-lg" />,
    icon: <MoveRight className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
  {
    title: "Sonic Immersion",
    description: "Beam-forming audio technology for perfect sound.",
    header: <img src="/images/visuals4.png" alt="Audio Tech" className="w-full h-40 object-cover rounded-lg" />,
    icon: <MoveRight className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Interactive Floors",
    description: "The dancefloor reacts to your every step.",
    header: <img src="/images/visuals1.png" alt="Dancefloor" className="w-full h-40 object-cover rounded-lg" />,
    icon: <MoveRight className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Galactic Bar",
    description: "Cocktails crafted from molecular gastronomy.",
    header: <img src="/images/visuals4.png" alt="Bar" className="w-full h-40 object-cover rounded-lg" />,
    icon: <MoveRight className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
            <h2 className="font-display text-4xl text-white mb-4">The Experience</h2>
            <p className="text-neutral-400 max-w-2xl">
                More than a club. A journey into the heart of the Nebula.
            </p>
        </div>
        <BentoGrid className="max-w-6xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Features;
