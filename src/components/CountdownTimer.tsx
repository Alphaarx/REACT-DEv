import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Event date: August 23, 2025, 11:00 AM
    const eventDate = new Date('2025-09-07T11:00:00+05:30').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days, color: "text-primary" },
    { label: "Hours", value: timeLeft.hours, color: "text-secondary" },
    { label: "Minutes", value: timeLeft.minutes, color: "text-accent" },
    { label: "Seconds", value: timeLeft.seconds, color: "text-lego-green" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient-cosmic mb-8">
          Mission Launch Countdown
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Prepare for liftoff! Time until space exploration begins:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {timeUnits.map((unit, index) => (
            <Card 
              key={index}
              className="bg-card/80 backdrop-blur-lg border border-border shadow-cosmic hover-lift p-6"
            >
              <div className={`text-4xl md:text-6xl font-bold ${unit.color} mb-2`}>
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="text-muted-foreground font-medium uppercase tracking-wide">
                {unit.label}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <div className="bg-gradient-cosmic p-6 rounded-xl shadow-glow max-w-2xl mx-auto">
            <p className="text-white font-semibold text-lg">
              🚀 The countdown has begun! Prepare your creative engines for the ultimate space building adventure!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;