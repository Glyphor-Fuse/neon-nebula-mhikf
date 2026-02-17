import React from "react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-display text-2xl text-white font-bold tracking-tighter">NEON NEBULA</h3>
          <p className="text-neutral-500 text-sm mt-2">© 2024 Sphere Residency. All rights reserved.</p>
        </div>
        <div className="flex gap-8 text-neutral-400 text-sm">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
