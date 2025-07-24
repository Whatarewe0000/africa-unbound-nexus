import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Star, BookOpen, Zap, Moon, Sun } from 'lucide-react';

const CosmicKnowledge = () => {
  const knowledgeAreas = [
    {
      title: 'Sacred Geometry',
      description: 'Ancient African mathematical principles and geometric patterns used in architecture and art',
      icon: Star,
      gradient: 'from-purple-600 to-indigo-600',
      topics: ['Dogon Cosmology', 'Egyptian Mathematics', 'Ethiopian Architecture'],
    },
    {
      title: 'Ancestral Wisdom',
      description: 'Traditional knowledge systems passed down through generations of African elders',
      icon: Eye,
      gradient: 'from-amber-600 to-orange-600',
      topics: ['Oral Traditions', 'Elder Teachings', 'Cultural Practices'],
    },
    {
      title: 'African Astronomy',
      description: 'Indigenous understanding of celestial movements and cosmic connections',
      icon: Moon,
      gradient: 'from-blue-600 to-purple-600',
      topics: ['Star Maps', 'Lunar Calendars', 'Celestial Navigation'],
    },
    {
      title: 'Metaphysical Sciences',
      description: 'Spiritual sciences and energy work practiced across African traditions',
      icon: Zap,
      gradient: 'from-green-600 to-teal-600',
      topics: ['Energy Healing', 'Spiritual Practices', 'Consciousness Studies'],
    },
  ];

  return (
    <section id="cosmic" className="py-20 bg-gradient-cosmic/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              Cosmic Knowledge Hub
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the profound connection between African wisdom and cosmic understanding. 
            Discover sacred sciences, ancestral knowledge, and the metaphysical traditions 
            that connect us to the universe.
          </p>
        </div>

        {/* Sacred Symbol Animation */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <div className="w-32 h-32 mx-auto border-2 border-cosmic/30 rounded-full animate-sacred-geometry">
              <div className="w-full h-full flex items-center justify-center">
                <Sun className="w-12 h-12 text-cosmic animate-ancestral-glow" />
              </div>
            </div>
            <div className="absolute inset-0 w-32 h-32 border border-primary/20 rounded-full animate-cosmic-drift" />
          </div>
        </div>

        {/* Knowledge Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {knowledgeAreas.map((area, index) => (
            <Card 
              key={index} 
              className="pan-african-card group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${area.gradient} rounded-full flex items-center justify-center shadow-cosmic`}>
                    <area.icon className="w-8 h-8 text-white animate-ancestral-glow" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-cosmic transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Topics */}
                  <div className="space-y-1 mb-6">
                    {area.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="text-xs text-cosmic bg-cosmic/10 rounded px-2 py-1">
                        {topic}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="w-full border-cosmic/30 hover:border-cosmic hover:bg-cosmic/10 transition-all duration-300"
                  >
                    Explore Wisdom
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Learning Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="pan-african-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Interactive Learning Experience</h3>
                  <p className="text-muted-foreground mb-6">
                    Immerse yourself in African cosmology through AR visualization, 
                    virtual workshops with elders, and interactive sacred geometry patterns.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span className="text-sm">Digital Archive of Ancient Texts</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Eye className="w-5 h-5 text-primary" />
                      <span className="text-sm">AR Sacred Geometry Experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-primary" />
                      <span className="text-sm">Virtual Elder Workshops</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative">
                    <div className="w-48 h-48 mx-auto bg-gradient-cosmic/20 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-cosmic/30 rounded-full flex items-center justify-center animate-cosmic-drift">
                        <BookOpen className="w-16 h-16 text-cosmic" />
                      </div>
                    </div>
                    <Button 
                      className="afro-hero-btn mt-6"
                    >
                      Begin Cosmic Journey
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CosmicKnowledge;