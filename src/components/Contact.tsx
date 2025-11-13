import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>
        
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Get in Touch</h3>
                  <p className="text-muted-foreground">
                    Whether you're looking for a developer for your next project, 
                    want to collaborate, or just have a question - feel free to reach out.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <span>Berlin, Germany</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <a 
                      href="mailto:m.troesken@mail.de"
                      className="hover:text-accent transition-colors"
                    >
                      m.troesken@mail.de
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Github className="w-5 h-5 text-accent" />
                    </div>
                    <a 
                      href="https://github.com/marctroesken"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      github.com/marctroesken
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <p className="text-lg">
                    I typically respond within 24 hours. Looking forward to hearing from you!
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground accent-glow"
                    asChild
                  >
                    <a href="mailto:m.troesken@mail.de" className="flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      Send me an Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
