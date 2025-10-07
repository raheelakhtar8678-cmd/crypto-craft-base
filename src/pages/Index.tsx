import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-web3.jpg";

const Index = () => {
  const featuredProducts = [
    {
      title: "Crypto Genesis Collection",
      price: "2.5 ETH",
      category: "NFT",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
      vendor: "CryptoArtist",
    },
    {
      title: "DeFi Token Bundle",
      price: "1.2 ETH",
      category: "Crypto",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800",
      vendor: "TokenVault",
    },
    {
      title: "Metaverse Land Plot",
      price: "5.0 ETH",
      category: "Virtual Real Estate",
      image: "https://images.unsplash.com/photo-1635946179581-8a49d6d0e1b0?w=800",
      vendor: "MetaLands",
    },
    {
      title: "Rare Gaming NFT",
      price: "0.8 ETH",
      category: "NFT",
      image: "https://images.unsplash.com/photo-1622421804096-2fd6a10444db?w=800",
      vendor: "GameFi Pro",
    },
  ];

  const categories = [
    { icon: Zap, title: "NFTs", desc: "Unique digital collectibles" },
    { icon: Shield, title: "DeFi", desc: "Decentralized finance tokens" },
    { icon: TrendingUp, title: "Crypto Assets", desc: "Trade digital currencies" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Web3 Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block animate-float">
              <div className="px-4 py-2 rounded-full glass-card border border-primary/30 text-sm mb-6">
                🚀 Welcome to the Future of Commerce
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Discover the Best{" "}
              <span className="gradient-text">Web3 Marketplace</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Buy, sell, and trade NFTs, crypto assets, and digital collectibles from verified vendors worldwide
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="bg-primary hover:bg-primary/90 glow-primary group">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our diverse collection of Web3 assets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="glass-card p-8 text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:glow-primary"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Products</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked premium items from our top vendors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-30" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Start Your <span className="gradient-text">Web3 Journey?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of vendors and collectors in the most secure multivendor marketplace
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 glow-primary">
                    Get Started
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  Become a Vendor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
