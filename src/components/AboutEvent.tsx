import { Rocket, Building, Users, Trophy } from "lucide-react";
import legoSpaceBuilds from "@/assets/lego-space-builds.jpg";

const AboutEvent = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-cosmic mb-6">
            About the Event
          </h2>
          <div className="w-24 h-1 bg-gradient-lego mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground">
              <span className="text-secondary font-bold">Blast off into your imagination!</span> 
              {" "}'The LEGO Land - Up' is where builders become{" "}
              <span className="text-primary font-semibold">astronauts</span>,{" "}
              <span className="text-accent font-semibold">engineers</span>, and{" "}
              <span className="text-lego-green font-semibold">dreamers</span>.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Participants will design and construct futuristic structures, spacecraft, 
              or space habitats using LEGO bricks. Whether you're building moon bases 
              or Martian colonies, it's time to lift off into the world of creativity!
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-card/60 backdrop-blur-lg p-6 rounded-xl border border-border hover-lift">
                <Rocket className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Space Exploration</h3>
                <p className="text-sm text-muted-foreground">Build spacecraft and exploration vehicles</p>
              </div>
              
              <div className="bg-card/60 backdrop-blur-lg p-6 rounded-xl border border-border hover-lift">
                <Building className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-bold text-lg mb-2">Future Habitats</h3>
                <p className="text-sm text-muted-foreground">Design bases for moon and Mars colonies</p>
              </div>
              
              <div className="bg-card/60 backdrop-blur-lg p-6 rounded-xl border border-border hover-lift">
                <Users className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-bold text-lg mb-2">Team Building</h3>
                <p className="text-sm text-muted-foreground">Collaborate with 2-4 team members</p>
              </div>
              
              <div className="bg-card/60 backdrop-blur-lg p-6 rounded-xl border border-border hover-lift">
                <Trophy className="w-8 h-8 text-lego-green mb-3" />
                <h3 className="font-bold text-lg mb-2">Competition</h3>
                <p className="text-sm text-muted-foreground">Compete for creativity and innovation</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-cosmic rounded-2xl blur-xl opacity-50" />
            <img 
              src={legoSpaceBuilds}
              alt="LEGO Space Builds"
              className="relative w-full rounded-2xl shadow-glow hover-lift"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;