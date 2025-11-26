import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Users, MessageSquare, Bell, Settings, Star, Target, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const DISCORD_OAUTH_URL = "https://discord.com/oauth2/authorize?client_id=1437785611455959060&permissions=4292493394837495&response_type=code&redirect_uri=https%3A%2F%2Fecho-bot-starter-production.up.railway.app%2F&integration_type=0&scope=bot+applications.commands+messages.read+activities.write+relationships.read+activities.read+guilds+guilds.members.read+gdm.join+guilds.join+guilds.channels.read";

  const features = [
    {
      icon: Zap,
      title: "⭐ AI Engagement",
      description: "Responds automatically when enabled. Can create polls, events, and interactive moments. Start/stop engagement anytime. Fully controlled through slash commands—no dashboard required.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "⭐ AI Personality System",
      description: "/personality-set lets server owners define how the bot speaks. Affects engagement, rephrasing, and welcome messages.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "⭐ AI Polite Rephrase",
      description: "Detects toxic or rude messages. Automatically rewrites them politely (toggleable).",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "⭐ Strike & Auto-Ban System",
      description: "No cussing, trolling, or spam. AI-powered detection. Customizable strikes, warnings, and bans.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "⭐ Custom AI Welcome Messages",
      description: "Personalized greetings created by AI. Supports images or text.",
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      icon: Bell,
      title: "⭐ Logging & Moderation Tools",
      description: "Private logging channel recommended. /moderation commands for strikes, logs, bans, unbans. Owner logs disabled during /quicksetup to prevent clutter.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Target,
      title: "⭐ Leveling & Auto-Role System",
      description: "XP leveling system (toggleable). Auto-assign roles to new members.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Bot,
      title: "⭐ Full Owner Control",
      description: "Every feature can be enabled or disabled. No complex dashboard: everything runs via slash commands. Perfect for beginners and experienced admins.",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  const benefits = [
    "100% free during beta",
    "AI that keeps your server calm, clean, and active",
    "Moderation + entertainment in one package",
    "Designed for community servers and private servers alike"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-blue-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-block animate-float">
              <div className="px-6 py-3 rounded-full glass-card border border-primary/30 text-sm mb-8 bg-primary/5">
                🎯 Professional Discord Bot Management
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Bring Calm, Clean, and Smart AI{" "}
              <span className="gradient-text">Moderation to Your Discord</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              MyHarmony — The all-in-one AI engagement and moderation system.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-primary group text-lg px-8 py-6" asChild>
                <a href={DISCORD_OAUTH_URL} target="_blank" rel="noopener noreferrer">
                  Invite Harmony
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-6">
                Join Support Server
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to keep your Discord server safe, active, and engaging
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-8 group hover:scale-105 transition-all duration-300 hover:glow-primary cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 gradient-text">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Setup Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="glass-card p-12 max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 rounded-full bg-primary/10 mb-6">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quick <span className="gradient-text">Setup</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Highlight simplicity: <br />
              <code className="bg-primary/10 px-3 py-1 rounded-lg font-mono">/quicksetup</code> instantly configures all essential bot features. <br />
              Creates channels, sets permissions, initializes moderation tools. <br />
              <span className="text-sm text-primary font-semibold">Owner logs remain off by default — you can enable them after setup.</span>
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 glow-primary" asChild>
              <a href={DISCORD_OAUTH_URL} target="_blank" rel="noopener noreferrer">
                Try Quick Setup
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose MyHarmony */}
      <section className="py-24 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">MyHarmony?</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Star className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to <span className="gradient-text">Transform Your Server?</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience the perfect blend of AI moderation and community engagement
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 glow-primary" asChild>
                  <a href={DISCORD_OAUTH_URL} target="_blank" rel="noopener noreferrer">
                    Invite Harmony
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  Join Support Server
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 bg-background/80">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold gradient-text mb-2">MyHarmony</h3>
              <p className="text-sm text-muted-foreground">© 2025 MyHarmony AI Bot</p>
            </div>

            <nav className="flex flex-wrap justify-center gap-6">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary" asChild>
                <a href={DISCORD_OAUTH_URL} target="_blank" rel="noopener noreferrer">Invite</a>
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary" asChild>
                <Link to="/commands">Commands</Link>
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary" asChild>
                <Link to="/privacy">Privacy</Link>
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary" asChild>
                <Link to="/terms">Terms</Link>
              </Button>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
