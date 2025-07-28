import { Rocket, Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import spaceHero from "@/assets/space-hero.jpg";

const EventHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center starfield overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${spaceHero})` }}
      />
      
      {/* Cosmic Overlay */}
      <div className="absolute inset-0 bg-gradient-cosmic opacity-70" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <Rocket className="w-16 h-16 mx-auto mb-6 text-secondary animate-pulse" />
          <h1 className="text-7xl md:text-9xl font-bold  mb-4 tracking-tight">
            The LEGO Land
          </h1>
          <div className="text-5xl md:text-7xl font-bold text-secondary mb-6 tracking-wider">
            - UP -
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A Space-themed Innovation Event under{" "}
            <span className="text-primary font-semibold">Smart Maker Festival (SMF)</span>
            <br />
            hosted by{" "}
            <span className="text-accent font-semibold">IEM – Institute of Engineering and Management</span>
          </p>
        </div>

        {/* Quick Event Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
          <div className="bg-card/80 backdrop-blur-lg rounded-lg p-6 border border-border shadow-cosmic hover-lift">
            <Calendar className="w-8 h-8 text-secondary mx-auto mb-3" />
            <p className="text-lg font-semibold text-foreground">Septembar 07, 2025</p>
          </div>
          <div className="bg-card/80 backdrop-blur-lg rounded-lg p-6 border border-border shadow-cosmic hover-lift">
            <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-lg font-semibold text-foreground">11:00 AM – 2:00 PM</p>
          </div>
          <div className="bg-card/80 backdrop-blur-lg rounded-lg p-6 border border-border shadow-cosmic hover-lift">
            <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-lg font-semibold text-foreground">IEM Management Building</p>
            <p className="text-sm text-muted-foreground">Sector V, Kolkata</p>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-gradient-lego text-background font-bold text-xl px-8 py-6 rounded-xl shadow-glow hover:scale-105 transition-space"
          asChild
        >
          <a href="https://your-registration-link.com" target="_blank" rel="noopener noreferrer">
            Register Now 🚀
          </a>
        </Button>
      </div>
    </div>
  );
};

export default EventHero;