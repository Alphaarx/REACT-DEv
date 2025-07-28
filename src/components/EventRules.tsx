import { CheckCircle, Users, Clock, Building2, Star, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const rules = [
  {
    icon: Users,
    title: "Team Formation",
    description: "Participants can form teams of 2–4 members",
    color: "text-primary"
  },
  {
    icon: Clock,
    title: "Time Limit",
    description: "90 minutes to build your space-themed design",
    color: "text-secondary"
  },
  {
    icon: Building2,
    title: "LEGO Bricks Only",
    description: "Only LEGO bricks provided by organizers are allowed",
    color: "text-accent"
  },
  {
    icon: Shield,
    title: "No External Components",
    description: "No pre-built components or external accessories",
    color: "text-lego-green"
  },
  {
    icon: Star,
    title: "Space Theme Required",
    description: "Theme must align with 'Space Exploration or Future in Space'",
    color: "text-primary"
  },
  {
    icon: CheckCircle,
    title: "Judging Criteria",
    description: "Evaluated on creativity, structural stability, and thematic relevance",
    color: "text-secondary"
  }
];

const EventRules = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-cosmic mb-6">
            Rules & Guidelines
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these mission protocols to ensure a fair and exciting space exploration experience
          </p>
          <div className="w-24 h-1 bg-gradient-lego mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, index) => {
            const IconComponent = rule.icon;
            return (
              <Card 
                key={index}
                className="bg-card/70 backdrop-blur-lg border-border shadow-cosmic hover-lift transition-space group"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-muted/50">
                    <IconComponent className={`w-8 h-8 ${rule.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <CardTitle className="text-lg font-bold">{rule.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {rule.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Fair Play Message */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-lego p-8 rounded-2xl shadow-glow max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-background mb-4">
              🚀 Remember: Fair Play & Originality are Key! 🚀
            </h3>
            <p className="text-background/90 text-lg">
              Let your creativity soar among the stars while respecting fellow space explorers. 
              The universe of possibilities awaits your unique vision!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventRules;