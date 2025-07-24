import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Menu, X, Zap, Globe, Users, Music, BookOpen, Heart } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'African Legends', icon: Users, href: '#legends' },
    { name: 'Rebel Sound', icon: Music, href: '#music' },
    { name: 'Digital Scrolls', icon: BookOpen, href: '#scrolls' },
    { name: 'Cosmic Knowledge', icon: Zap, href: '#cosmic' },
    { name: 'Nature Heals', icon: Heart, href: '#nature' },
    { name: 'Pan-African Unity', icon: Globe, href: '#unity' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-sunset rounded-full flex items-center justify-center animate-bronze-pulse">
              <Globe className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-sunset bg-clip-text text-transparent">
                One Africa Network
              </h1>
              <p className="text-xs text-muted-foreground">Pan-African Unity</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                className="text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300"
                asChild
              >
                <a href={item.href} className="flex items-center space-x-2">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.name}</span>
                </a>
              </Button>
            ))}
          </div>

          {/* Connect Wallet Button */}
          <div className="hidden md:block">
            <ConnectButton />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="justify-start text-left"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <a href={item.href} className="flex items-center space-x-3">
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </a>
                </Button>
              ))}
              <div className="pt-2">
                <ConnectButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;