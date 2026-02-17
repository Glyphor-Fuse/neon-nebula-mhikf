import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Hero } from "@/components/Hero";
import { OrbitingLineup } from "@/components/OrbitingLineup";
import { Features } from "@/components/Features";
import { VIPPackages } from "@/components/VIPPackages";
import { SocialFeed } from "@/components/SocialFeed";
import { VisitorInfo } from "@/components/VisitorInfo";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground font-body selection:bg-primary selection:text-white">
          <Hero />
          <Features />
          <OrbitingLineup />
          <VIPPackages />
          <SocialFeed />
          <VisitorInfo />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
