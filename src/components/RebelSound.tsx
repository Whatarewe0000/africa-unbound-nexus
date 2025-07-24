import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Music, Headphones, Radio } from 'lucide-react';

const RebelSound = () => {
  const musicCategories = [
    {
      title: 'Revolutionary Anthems',
      description: 'Songs of freedom, resistance, and liberation from across Africa',
      icon: Music,
      gradient: 'from-red-600 to-orange-500',
      tracks: ['Zombie - Fela Kuti', 'Remember Me - Lucky Dube', 'Dem Belly Full - Bob Marley'],
    },
    {
      title: 'Spiritual Rhythms',
      description: 'Sacred music, traditional chants, and healing sounds',
      icon: Headphones,
      gradient: 'from-purple-600 to-blue-500',
      tracks: ['Traditional Drumming', 'Ancestral Chants', 'Healing Frequencies'],
    },
    {
      title: 'Contemporary Voices',
      description: 'Modern African artists carrying the torch of consciousness',
      icon: Radio,
      gradient: 'from-green-600 to-teal-500',
      tracks: ['Bobi Wine', 'Burna Boy', 'Angelique Kidjo'],
    },
    {
      title: 'Ancient Archives',
      description: 'Preserved recordings of traditional African music and oral traditions',
      icon: Play,
      gradient: 'from-yellow-600 to-amber-500',
      tracks: ['Griots Tales', 'Traditional Folk', 'Ancient Rhythms'],
    },
  ];

  return (
    <section id="music" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              Rebel Sound of Africa
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A living archive of revolutionary and spiritual African music. From Fela's rebellion to 
            ancient rhythms, discover the sounds that shaped our consciousness.
          </p>
        </div>

        {/* Featured Player */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="pan-african-card">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Now Playing</h3>
                  <p className="text-primary font-semibold">Fela Kuti - "Water No Get Enemy"</p>
                  <p className="text-muted-foreground text-sm">Revolutionary Anthems</p>
                </div>
                <Button size="lg" className="afro-hero-btn rounded-full w-16 h-16">
                  <Play className="w-6 h-6" />
                </Button>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2 mb-4">
                <div className="bg-gradient-sunset h-2 rounded-full w-1/3 animate-pulse" />
              </div>
              
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>2:34</span>
                <span>7:42</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Music Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {musicCategories.map((category, index) => (
            <Card 
              key={index} 
              className="pan-african-card group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center shadow-cosmic animate-bronze-pulse`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Track List */}
                  <div className="space-y-2 mb-6">
                    {category.tracks.map((track, trackIndex) => (
                      <div key={trackIndex} className="text-xs text-muted-foreground bg-muted/50 rounded px-2 py-1">
                        {track}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="w-full border-cosmic/30 hover:border-cosmic hover:bg-cosmic/10 transition-all duration-300"
                  >
                    Listen Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upload Section */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <Card className="pan-african-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Preserve Ancient Sounds</h3>
              <p className="text-muted-foreground mb-6">
                Help build the largest decentralized archive of African music. Upload traditional songs, 
                oral histories, and cultural recordings to preserve our heritage forever.
              </p>
              <Button className="afro-hero-btn">
                Upload Ancient Music
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RebelSound;