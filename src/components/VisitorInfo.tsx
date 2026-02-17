import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const VisitorInfo = () => {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-4xl text-white mb-12 text-center">Flight Manual</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-primary hover:no-underline">What is the dress code?</AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              We encourage "Cyber-Disco Chic". Think metallic fabrics, sequins, LED accessories, and retro silhouettes. No athletic wear or flip-flops.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-primary hover:no-underline">Is there an age restriction?</AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              Yes, Neon Nebula is strictly 21+. Valid government-issued ID is required for entry.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-primary hover:no-underline">Can I take photos?</AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              Phone cameras are welcome. Professional photography equipment (DSLRs, tripods) requires a media pass.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-primary hover:no-underline">What time do doors open?</AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              Doors open at 9:00 PM. The main visual show begins at 10:30 PM. We recommend arriving early for the full experience.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default VisitorInfo;
