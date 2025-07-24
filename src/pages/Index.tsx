import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AfricanLegends from '@/components/AfricanLegends';
import RebelSound from '@/components/RebelSound';
import CosmicKnowledge from '@/components/CosmicKnowledge';
import PlatformModules from '@/components/PlatformModules';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />
        <AfricanLegends />
        <RebelSound />
        <CosmicKnowledge />
        <PlatformModules />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
