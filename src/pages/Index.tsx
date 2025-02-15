
import { MessageSquare, Sparkles, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "AI-Powered Conversations",
      description: "Engage in meaningful dialogue with your personal startup companion",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Strategic Insights",
      description: "Get valuable feedback and ideas for your solo venture",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Your startup buddy is always there when you need guidance",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Private",
      description: "Your conversations and data are always protected",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fadeIn opacity-0" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Your AI Startup Companion
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Navigate your solo founder journey with an intelligent chat companion powered by advanced AI
            </p>
            <Button size="lg" className="hover-lift">
              Start Chatting
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Everything You Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="glass-card p-6 hover-lift"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary/5 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Preview Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Experience Intelligent Conversations
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our AI understands the unique challenges of solo founders and provides
                  tailored guidance for your startup journey.
                </p>
                <Button variant="secondary" size="lg" className="hover-lift">
                  Try Demo
                </Button>
              </div>
              <div className="bg-secondary/30 p-6 rounded-xl animate-float">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-4 rounded-lg max-w-[80%]">
                      <p className="text-sm">How should I prioritize my tasks as a solo founder?</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start justify-end">
                    <div className="bg-primary p-4 rounded-lg text-primary-foreground max-w-[80%]">
                      <p className="text-sm">
                        Let's break this down into three key areas: urgent customer needs, product development, and business operations. What's currently taking up most of your time?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of solo founders who are building better startups with AI assistance
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="hover-lift"
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
