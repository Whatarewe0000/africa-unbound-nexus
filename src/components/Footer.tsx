import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Twitter, 
  Github, 
  Heart, 
  Shield, 
  Zap,
  Mail,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'African Legends', href: '#legends' },
    { name: 'Rebel Sound', href: '#music' },
    { name: 'Cosmic Knowledge', href: '#cosmic' },
    { name: 'Digital Scrolls', href: '#scrolls' },
  ];

  const communityLinks = [
    { name: 'Join Discord', href: '#', icon: Twitter },
    { name: 'Contribute Code', href: '#', icon: Github },
    { name: 'Support Network', href: '#support', icon: Heart },
    { name: 'Contact Us', href: '#contact', icon: Mail },
  ];

  const principles = [
    'Decentralized & Free',
    '100% Anonymous',
    'Censorship Resistant',
    'Pan-African Unity',
  ];

  return (
    <footer className="bg-gradient-earth border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center animate-bronze-pulse">
                <Globe className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-sunset bg-clip-text text-transparent">
                  One Africa Network
                </h3>
                <p className="text-sm text-muted-foreground">Pan-African Unity Platform</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              The revolutionary decentralized social platform connecting Africa's 54 nations 
              through culture, technology, and shared vision. Built by Africans, for Africans.
            </p>
            
            {/* Principles */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground mb-3">Our Principles</h4>
              {principles.map((principle, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Shield className="w-3 h-3 text-primary" />
                  <span className="text-xs text-muted-foreground">{principle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Platform Modules</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Community</h4>
            <div className="space-y-3">
              {communityLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="pan-african-card p-8">
            <h3 className="text-xl font-bold mb-4">Join the Revolution</h3>
            <p className="text-muted-foreground mb-6">
              Be the first to know when One Africa Network launches. Join thousands of 
              Pan-Africans building the future of decentralized social networking.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-input border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="afro-hero-btn">
                Notify Me
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'African Nations', value: '54', icon: MapPin },
            { label: 'Cultural Modules', value: '8+', icon: Heart },
            { label: 'Languages', value: '20+', icon: Globe },
            { label: 'Security First', value: '100%', icon: Shield },
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex justify-center mb-2">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold bg-gradient-bronze bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 One Africa Network. Built with ❤️ for Pan-African Unity.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Zap className="w-3 h-3 text-primary" />
                <span>Powered by Web3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;