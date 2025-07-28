import EventHero from "@/components/EventHero";
import EventPoster from "@/components/EventPoster";
import AboutEvent from "@/components/AboutEvent";
import CountdownTimer from "@/components/CountdownTimer";
import EventRules from "@/components/EventRules";
import EventCoordinators from "@/components/EventCoordinators";
import EventFooter from "@/components/EventFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <EventHero />
      <CountdownTimer />
      <EventPoster />
      <AboutEvent />
      <EventRules />
      <EventCoordinators />
      <EventFooter />
    </div>
  );
};

export default Index;
