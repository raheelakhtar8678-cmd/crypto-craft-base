import { Card } from "@/components/ui/card";
import { Shield, Users, Zap, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Built on blockchain technology with multi-signature wallets and smart contract security",
    },
    {
      icon: Users,
      title: "Verified Vendors",
      description: "All vendors undergo strict verification to ensure authenticity and quality",
    },
    {
      icon: Zap,
      title: "Instant Settlement",
      description: "Lightning-fast transactions powered by cutting-edge blockchain infrastructure",
    },
    {
      icon: Globe,
      title: "Global Marketplace",
      description: "Connect with vendors and buyers from around the world in a decentralized ecosystem",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Web3 Market</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The leading multivendor marketplace for NFTs, crypto assets, and digital collectibles
          </p>
        </div>

        {/* Mission Section */}
        <div className="glass-card p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-20" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We're building the future of digital commerce by creating a secure, transparent, 
              and decentralized marketplace where vendors and collectors can connect directly 
              without intermediaries.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our platform leverages blockchain technology to ensure every transaction is 
              secure, transparent, and immutable, giving you complete control over your 
              digital assets.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="gradient-text">Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="glass-card p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">10K+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">500+</div>
            <div className="text-muted-foreground">Verified Vendors</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">$50M+</div>
            <div className="text-muted-foreground">Trading Volume</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
