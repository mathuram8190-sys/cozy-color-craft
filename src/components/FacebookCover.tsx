import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hotel-exterior.jpg";

const FacebookCover = () => {
  return (
    <div className="max-w-[851px] mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
      {/* Cover Photo Section */}
      <div className="relative h-[315px] bg-gradient-to-br from-primary-light via-background to-muted overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        
        {/* Hotel Image Background */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="R Reliable Stay Hotel Cover" 
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        </div>
        
        {/* Cover Content */}
        <div className="relative z-10 h-full flex items-center justify-between px-8">
          <div className="flex items-center gap-6">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-accent-foreground font-bold text-2xl shadow-lg">
                R
              </div>
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                N
              </div>
            </div>
            
            {/* Hotel Info */}
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-2">R RELIABLE STAY</h1>
              <p className="text-xl opacity-90">Big Comfort at Affordable Price</p>
              <div className="flex gap-2 mt-3">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Budget Hotel
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  AC Rooms
                </Badge>
              </div>
            </div>
          </div>
          
          {/* Price Display */}
          <div className="bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
            <div className="text-3xl font-bold">₹999</div>
            <div className="text-sm opacity-90">per night</div>
          </div>
        </div>
      </div>
      
      {/* Profile Info Section */}
      <div className="p-6 bg-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Profile Picture */}
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl border-4 border-background shadow-lg -mt-10 relative z-20">
              RS
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-foreground">R Reliable Stay</h2>
              <p className="text-muted-foreground">Hotel • Budget Accommodation</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <span>⭐ 4.2 (245 reviews)</span>
                <span>📍 City Center Location</span>
                <span>📞 +91 98765 43210</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" size="lg">
              📧 Message
            </Button>
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
              📞 Call Now
            </Button>
          </div>
        </div>
        
        {/* Quick Features */}
        <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
            <p className="text-sm font-medium text-foreground">Free WiFi</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-foreground">AC Rooms</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-foreground">Security</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-foreground">Comfort</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookCover;