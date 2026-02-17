import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Orbital General",
    price: "$85",
    features: ["Entry to Sphere", "Main Floor Access", "Digital Souvenir"],
    color: "#9d00ff",
  },
  {
    name: "Stellar VIP",
    price: "$250",
    features: ["Expedited Entry", "VIP Lounge Access", "2 Premium Drinks", "Exclusive Merch"],
    color: "#FF6B35",
  },
  {
    name: "Galactic Table",
    price: "$2,000",
    features: ["Private Table for 6", "Bottle Service", "Personal Host", "Backstage Tour"],
    color: "#00F0FF",
  },
];

export const VIPPackages = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl text-white mb-4">Secure Your Orbit</h2>
          <p className="text-neutral-400">Select your tier for the upcoming voyage.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <div key={idx} className="h-full">
                <CardSpotlight className="flex flex-col items-start p-8 h-full" color={pkg.color}>
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-4xl font-display text-primary mb-6">{pkg.price}</div>
                <ul className="space-y-4 mb-8 flex-1 w-full">
                    {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-neutral-300">
                        <Check className="h-5 w-5 text-primary" />
                        {feat}
                    </li>
                    ))}
                </ul>
                <Button className="w-full bg-white text-black hover:bg-neutral-200">
                    Select Package
                </Button>
                </CardSpotlight>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VIPPackages;
