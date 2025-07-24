import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Globe, Users } from 'lucide-react';
import heroImage from '@/assets/hero-africa-network.jpg';

const HeroSection = () => {
  const features = [
    { icon: Shield, text: '100% Anonymous & Secure' },
    { icon: Globe, text: 'Decentralized Pan-African Network' },
    { icon: Users, text: 'Censorship-Free Community' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      </div>

      {/* Animated Sacred Geometry Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-sunset rounded-full animate-cosmic-drift" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-cosmic rounded-full animate-bronze-pulse" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-bronze rounded-full animate-ancestral-glow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              One Africa
            </span>
            <br />
            <span className="text-foreground">Network</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The revolutionary <span className="text-primary font-semibold">decentralized</span> Pan-African social platform. 
            <br className="hidden md:block" />
            Rooted in culture, powered by Web3, united by freedom.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="afro-hero-btn text-lg px-8 py-6 animate-scale-in"
              style={{ animationDelay: '0.6s' }}
            >
              Join the Revolution
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-primary/30 hover:border-primary hover:bg-primary/10 animate-scale-in"
              style={{ animationDelay: '0.8s' }}
            >
              Explore the Vision
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            {[
              { label: 'African Nations', value: '54' },
              { label: 'Languages Supported', value: '20+' },
              { label: 'Cultural Modules', value: '8' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${1 + index * 0.2}s` }}
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-bronze bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;