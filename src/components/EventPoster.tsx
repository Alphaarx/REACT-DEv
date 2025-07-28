import eventPoster from "@/assets/event-poster.jpg";

const EventPoster = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-grey-900 font-sans mb-12">
          Official Event Poster
        </h2>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-lego rounded-2xl blur-2xl opacity-30 animate-pulse" />
          <div className="relative bg-card/90 backdrop-blur-lg p-8 rounded-2xl border border-border shadow-cosmic hover-lift">
            <img 
              src={eventPoster}
              alt="The LEGO Land - Up Event Poster"
              className="w-full max-w-md mx-auto rounded-xl shadow-glow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPoster;