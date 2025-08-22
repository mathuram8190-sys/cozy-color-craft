import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import luxuryRoom from "@/assets/luxury-room-1.jpg";

const LuxurySection = () => {
  return (
    <section className="py-20 bg-luxury-bg text-luxury-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,193,7,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content - applying 60-30-10 rule */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-luxury-foreground leading-tight">
                Luxurious Stay With
                <span className="block text-luxury-accent">Home Comfortable</span>
              </h2>
              
              <p className="text-xl text-luxury-foreground/80 leading-relaxed">
                Well Furnished AC Room • Luxury Bed & Matters • Study Table with Lamp & Fan
              </p>
            </div>
            
            {/* Feature highlights with 60-30-10 color distribution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-luxury-foreground/10 border-luxury-foreground/20 p-6 hover:bg-luxury-foreground/15 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-luxury-accent rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-luxury-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury-foreground">Premium AC</h3>
                    <p className="text-sm text-luxury-foreground/70">24/7 Climate Control</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-luxury-foreground/10 border-luxury-foreground/20 p-6 hover:bg-luxury-foreground/15 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-luxury-accent rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-luxury-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury-foreground">Study Space</h3>
                    <p className="text-sm text-luxury-foreground/70">Dedicated Work Area</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-luxury-foreground/10 border-luxury-foreground/20 p-6 hover:bg-luxury-foreground/15 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-luxury-accent rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-luxury-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury-foreground">Comfort Bed</h3>
                    <p className="text-sm text-luxury-foreground/70">Premium Mattress</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-luxury-foreground/10 border-luxury-foreground/20 p-6 hover:bg-luxury-foreground/15 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-luxury-accent rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-luxury-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury-foreground">Modern Lighting</h3>
                    <p className="text-sm text-luxury-foreground/70">Ambient & Task Lighting</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Room Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl border-luxury-foreground/20">
              <img 
                src={luxuryRoom} 
                alt="Luxury AC Room with Study Table" 
                className="w-full h-[700px] object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg/80 via-transparent to-transparent" />
              
              {/* Room features overlay */}
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <div className="bg-luxury-foreground/90 text-luxury-bg px-4 py-2 rounded-lg backdrop-blur-sm">
                  <div className="text-sm font-semibold">Premium Suite</div>
                  <div className="text-xs opacity-80">Fully Furnished • AC • Study Desk</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxurySection;