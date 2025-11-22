import { Card } from "@/components/ui/card";
import meImage from "@/assets/me.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold">
                Hi there! I'm <span className="text-gradient">Marc</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                38 years old, based in Berlin, Germany
              </p>
            </div>
            
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                From full-stack web development to leading cloud engineering teams in fintech - 
                my journey has been driven by a passion for technology and innovation. Today, I 
                guide talented engineers in building resilient cloud infrastructure that powers 
                financial services at scale.
              </p>
              <p>
                My experience spans from crafting elegant web applications with Vue and Laravel 
                to architecting cloud solutions with AWS, Terraform, and Crossplane. I bring a 
                unique perspective that bridges development and infrastructure, ensuring teams 
                deliver robust, scalable solutions in the fast-paced world of fintech.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent/5 rounded-2xl blur-xl" />
            <Card className="relative p-8 bg-card/80 backdrop-blur-sm border-border/50">
              <div className="aspect-square rounded-xl overflow-hidden mb-6">
                <img
                  src={meImage}
                  alt="Marc Trösken"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3 text-center">
                <p className="text-sm text-muted-foreground">
                  Want to know more? Let's connect and chat about your next project!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
