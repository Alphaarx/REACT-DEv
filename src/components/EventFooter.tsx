import { Rocket, Heart, ExternalLink } from "lucide-react";

const EventFooter = () => {
  return (
    <footer className="py-16 px-4 relative border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
           {/* Event Info  */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Rocket className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-gradient-cosmic">The LEGO Land - Up</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Where imagination meets innovation in the vast expanse of space. 
              Build the future, one LEGO brick at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Navigation</h4>
            <div className="space-y-2">
              <button className="block mx-auto text-muted-foreground hover:text-primary transition-colors">
                About Event
              </button>
              <button className="block mx-auto text-muted-foreground hover:text-secondary transition-colors">
                Rules & Guidelines
              </button>
              <button className="block mx-auto text-muted-foreground hover:text-accent transition-colors">
                Contact Coordinators
              </button>
            </div>
          </div>
                

          {/* Social & Hashtags */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-foreground mb-4">Join the Conversation</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <span className="text-muted-foreground">#LEGOUpIEM</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <span className="text-muted-foreground">#SMF2025</span>
              </div>
              {/*<div className="flex items-center justify-center md:justify-end gap-2">
                <span className="text-muted-foreground">#SpaceInnovation</span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Logos Section */}
        <div className="border-t border-border/30 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-foreground mb-6">Organized By</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              {/* SMF Logo Placeholder */}
              <div className="bg-gradient-cosmic p-6 rounded-xl shadow-cosmic">
                <div className="text-white font-bold text-lg">SMF</div>
                <div className="text-white/80 text-sm">Smart Maker Festival</div>
              </div>
              
              {/* IEM Logo Placeholder */}
              <div className="bg-gradient-lego p-2 rounded-xl shadow-cosmic">
                <img src="./public/iem-logo.png" alt="IEM Logo"className="w-20 h-20"/>
                {/* <div className="text-background font-bold text-lg">IEM</div>
                <div className="text-background/80 text-sm">Institute of Engineering</div>
                <div className="text-background/80 text-sm">& Management</div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Final Message 
        <div className="bg-card/50 backdrop-blur-lg rounded-2xl p-8 border border-border shadow-cosmic">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gradient-cosmic mb-4">
              Ready for an Out-of-This-World Experience?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Brought to you by the innovation-driven minds at IEM. 
              Join us for a cosmic journey of creativity and discovery!
            </p>
            <div className="flex items-center justify-center gap-2 text-accent">
              <span>Made with</span>
              <Heart className="w-5 h-5 text-accent animate-pulse" />
              <span>for future space explorers</span>
            </div>
          </div>
        </div>
              */}

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-border/30">
          <p className="text-muted-foreground text-sm">
            © 2025 IEM - Institute of Engineering and Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default EventFooter;