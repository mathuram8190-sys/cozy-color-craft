import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hotel-exterior.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-light via-background to-muted overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-bold text-xl">
                  R
                </div>
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                  N
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                RELIABLE
                <span className="block text-primary">STAY</span>
              </h1>
              
              <p className="text-xl text-accent font-semibold">
                Big Comfort at Affordable Price
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <span className="font-medium">Free WiFi</span>
              </div>
              
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <span className="font-medium">AC Rooms</span>
              </div>
              
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <span className="font-medium">CCTV Security</span>
              </div>
              
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <span className="font-medium">Luxury Comfort</span>
              </div>
            </div>
            
            <div className="pt-4">
              <a
                href="tel:9344112403"
                className="inline-block bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                Book Your Stay
              </a>
            </div>
          </div>
          
          {/* Hotel Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="R Reliable Stay Hotel Exterior" 
                className="w-full h-[600px] object-cover"
              />
            </Card>
            
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
              {/* <div className="text-2xl font-bold">₹999</div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;