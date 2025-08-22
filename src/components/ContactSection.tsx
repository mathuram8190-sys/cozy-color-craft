import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-muted-foreground">
              Get in touch for reservations and inquiries
            </p>
          </div>
          
          <Card className="p-8 lg:p-12 shadow-xl border-0 bg-gradient-to-br from-primary-light to-background">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Phone */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <a href="tel:+919344112403" className="text-primary font-semibold block">
                    +91 9344112403
                  </a>
                  <a href="tel:+917010216681" className="text-accent font-medium block">
                    +91 7010216681
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <a
                    href="mailto:rn.reliable.stay@gmail.com"
                    className="text-primary font-medium break-all block"
                  >
                    rn.reliable.stay@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Address */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    No.5, Andal Nagar,<br />
                    Second Street<br />
                    Kunnur Road, Krishnankoil
                  </p>
                </div>
              </div>
              
              {/* Website */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Website</h3>
                  <a
                    href="http://rnreliablestay.wordpress.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium break-all block"
                  >
                    rnreliablestay.wordpress.com
                  </a>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div className="bg-accent text-accent-foreground px-8 py-6 rounded-2xl inline-block shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Ready to Book?</h3>
                <p className="mb-4 opacity-90">Call us now for instant reservations</p>
                <a
                  href="tel:+919344112403"
                  className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 px-8 py-3 font-semibold rounded-xl inline-block"
                >
                  Call Now: +91 9344112403
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;