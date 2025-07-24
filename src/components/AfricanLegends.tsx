import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, Heart, Zap, Globe } from 'lucide-react';

const AfricanLegends = () => {
  const legends = [
    {
      name: 'Nelson Mandela',
      title: 'Icon of Freedom',
      country: 'South Africa',
      description: 'Revolutionary leader who fought against apartheid and became a symbol of reconciliation and unity.',
      icon: Crown,
      color: 'from-yellow-500 to-orange-600',
    },
    {
      name: 'Wangari Maathai',
      title: 'Environmental Champion',
      country: 'Kenya',
      description: 'Nobel Peace Prize winner who championed environmental conservation and womens rights.',
      icon: Heart,
      color: 'from-green-500 to-emerald-600',
    },
    {
      name: 'Thomas Sankara',
      title: 'African Revolutionary',
      country: 'Burkina Faso',
      description: 'Visionary leader who promoted African dignity, self-reliance, and social justice.',
      icon: Zap,
      color: 'from-red-500 to-pink-600',
    },
    {
      name: 'Kwame Nkrumah',
      title: 'Pan-African Pioneer',
      country: 'Ghana',
      description: 'First President of Ghana and champion of African unity and independence.',
      icon: Globe,
      color: 'from-blue-500 to-purple-600',
    },
  ];

  return (
    <section id="legends" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-bronze bg-clip-text text-transparent">
              African Legends
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Honoring the heroes, visionaries, and leaders who shaped Africa's destiny. 
            Connect with their wisdom and legacy in our interactive digital space.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {legends.map((legend, index) => (
            <Card 
              key={index} 
              className="pan-african-card group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${legend.color} rounded-full flex items-center justify-center shadow-glow`}>
                    <legend.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Name & Title */}
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {legend.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-1">
                    {legend.title}
                  </p>
                  <p className="text-muted-foreground text-xs mb-4">
                    {legend.country}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {legend.description}
                  </p>

                  {/* CTA Button */}
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    Explore Legacy
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="afro-hero-btn px-8"
          >
            Discover All African Legends
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AfricanLegends;