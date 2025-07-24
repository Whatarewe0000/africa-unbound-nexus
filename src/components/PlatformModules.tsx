import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ShoppingBag, 
  Users, 
  Heart, 
  Zap, 
  BookOpen, 
  Handshake,
  Shield,
  Globe
} from 'lucide-react';

const PlatformModules = () => {
  const modules = [
    {
      title: 'African Marketplace',
      description: 'Decentralized marketplace for goods, services, art, and culture. Direct connections, no middlemen.',
      icon: ShoppingBag,
      color: 'from-emerald-500 to-green-600',
      features: ['Crypto Payments', 'Direct Trading', 'Cultural Goods', 'Art & Crafts'],
      status: 'Available'
    },
    {
      title: 'Voices of the People',
      description: 'Real-time social feed on African issues, events, and movements. Your voice, amplified.',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      features: ['Live Updates', 'Social Movements', 'Community Voice', 'Event Coverage'],
      status: 'Available'
    },
    {
      title: 'Nature Heals',
      description: 'Wellness corner for African holistic medicine, organic farming, and traditional healing.',
      icon: Heart,
      color: 'from-green-500 to-teal-600',
      features: ['Traditional Medicine', 'Organic Farming', 'Healing Practices', 'Wellness Guides'],
      status: 'Available'
    },
    {
      title: 'Skill Swap',
      description: 'Pan-African knowledge exchange. Teach and learn coding, crypto, farming, and wellness.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      features: ['Peer Learning', 'Skill Exchange', 'Virtual Tutoring', 'Resource Sharing'],
      status: 'Available'
    },
    {
      title: 'Digital Scrolls',
      description: 'Open-access library of African literature, sacred texts, and oral traditions.',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-600',
      features: ['Literature Archive', 'Sacred Texts', 'Oral Traditions', 'Digital Preservation'],
      status: 'Available'
    },
    {
      title: 'Community Help',
      description: 'Pan-African solidarity network for emergencies, health challenges, and crowdfunding.',
      icon: Handshake,
      color: 'from-red-500 to-rose-600',
      features: ['Emergency Aid', 'Health Support', 'Crowdfunding', 'Resource Network'],
      status: 'Available'
    },
    {
      title: 'Privacy Shield',
      description: 'Advanced security features ensuring 100% anonymity and protection from surveillance.',
      icon: Shield,
      color: 'from-gray-600 to-slate-700',
      features: ['End-to-End Encryption', 'Anonymous Auth', 'No Tracking', 'Secure Storage'],
      status: 'Core Feature'
    },
    {
      title: 'Country Portals',
      description: 'Dedicated spaces for each African nation with localized content and communities.',
      icon: Globe,
      color: 'from-cyan-500 to-blue-600',
      features: ['54 Nation Portals', 'Local Content', 'Cultural Heritage', 'National Communities'],
      status: 'Expanding'
    }
  ];

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Platform Modules
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            One Africa Network is built with modular architecture, designed to grow with our community. 
            Each module operates independently while contributing to the unified Pan-African experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <Card 
              key={index} 
              className="pan-african-card group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center">
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      module.status === 'Available' ? 'bg-green-500/20 text-green-400' :
                      module.status === 'Core Feature' ? 'bg-primary/20 text-primary' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {module.status}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${module.color} rounded-full flex items-center justify-center shadow-glow`}>
                    <module.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed min-h-[3rem]">
                    {module.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1 mb-6">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-xs text-primary bg-primary/10 rounded px-2 py-1">
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    {module.status === 'Available' ? 'Explore Module' : 'Learn More'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Modules */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <Card className="pan-african-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Growing Ecosystem</h3>
              <p className="text-muted-foreground mb-6">
                One Africa Network is designed to evolve. New modules will be added based on community needs, 
                technological advances, and the vision of Pan-African unity. Every addition strengthens our network.
              </p>
              <Button className="afro-hero-btn">
                Propose New Module
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlatformModules;