import { Mail, Phone, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const coordinators = [
  {
    name: "Aarav Sen",
    phone: "+91 98765 43210",
    email: "aarav.sen@iem.edu.in",
    role: "Event Lead"
  },
  // {
  //   name: "Ritika Sharma", 
  //   phone: "+91 91234 56789",
  //   email: "ritika.sharma@iem.edu.in",
  //   role: "Technical Coordinator"
  // }
];

const EventCoordinators = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-cosmic mb-6">
            Mission Control
          </h2>
          <p className="text-xl text-muted-foreground">
            Need assistance for your space mission? Contact our expert coordinators!
          </p>
          <div className="w-24 h-1 bg-gradient-lego mx-auto rounded-full mt-6" />
        </div>

      <div className="flex justify-center">
         {coordinators.map((coordinator, index) => (
           <Card 
        key={index}
        className="bg-card/80 backdrop-blur-lg border-border shadow-cosmic hover-lift transition-space w-96" // Increased width
           >
        <CardHeader className="text-center">
          <div className="w-20 h-20 bg-gradient-cosmic rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">
              {coordinator.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <CardTitle className="text-2xl text-gradient-cosmic">{coordinator.name}</CardTitle>
          <p className="text-muted-foreground font-medium">{coordinator.role}</p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Phone */}
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">{coordinator.phone}</span>
          </div>
          
          {/* Email */}
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <Mail className="w-5 h-5 text-secondary" />
            <span className="text-foreground font-medium break-all">{coordinator.email}</span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-4">
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open(`https://wa.me/${coordinator.phone.replace(/\D/g, '')}`, '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            
            <Button 
              variant="outline"
              size="sm" 
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              onClick={() => window.open(`mailto:${coordinator.email}`, '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
          </div>
        </CardContent>
           </Card>
         ))}
       </div>

        {/* Emergency Contact Note */}
     {/*  <div className="mt-12 text-center">
          <div className="bg-accent/10 border border-accent/30 rounded-xl p-6">
            <p className="text-accent font-semibold mb-2">📞 Emergency Contact</p>
            <p className="text-muted-foreground">
              For urgent queries during the event, contact any coordinator directly. 
              We're here to make your space journey smooth and exciting!
            </p>
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default EventCoordinators;