import { Card, CardContent } from "@/components/ui/card";
import { Code2, Cloud, Wallet, Blocks } from "lucide-react";

const interests = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["Vue.js", "Nuxt", "Tailwind CSS"],
    color: "text-green-500"
  },
  {
    category: "Backend & Cloud",
    icon: Cloud,
    items: ["Laravel", "AWS Cloud", "Terraform", "Crossplane"],
    color: "text-blue-500"
  },
  {
    category: "Fintech",
    icon: Wallet,
    items: ["Banking", "Payment Solutions", "Financial Services"],
    color: "text-purple-500"
  },
  {
    category: "Infrastructure",
    icon: Blocks,
    items: ["Cloud Architecture", "IaC", "DevOps"],
    color: "text-orange-500"
  }
];

const TechStack = () => {
  return (
    <section id="interests" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Areas of <span className="text-gradient">Interest</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From web development to cloud infrastructure and fintech innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <Card 
                key={interest.category}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center ${interest.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{interest.category}</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {interest.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
