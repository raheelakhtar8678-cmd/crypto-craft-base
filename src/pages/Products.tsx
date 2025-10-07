import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const products = [
    {
      title: "Ethereum Genesis NFT",
      price: "3.2 ETH",
      category: "NFT",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
      vendor: "CryptoKings",
    },
    {
      title: "Bitcoin Premium Pack",
      price: "2.1 BTC",
      category: "Crypto",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800",
      vendor: "CoinMaster",
    },
    {
      title: "Decentraland Estate",
      price: "8.5 ETH",
      category: "Virtual Real Estate",
      image: "https://images.unsplash.com/photo-1635946179581-8a49d6d0e1b0?w=800",
      vendor: "MetaWorld",
    },
    {
      title: "Rare CryptoPunk",
      price: "15.0 ETH",
      category: "NFT",
      image: "https://images.unsplash.com/photo-1622421804096-2fd6a10444db?w=800",
      vendor: "PunkCollector",
    },
    {
      title: "DeFi Governance Token",
      price: "1.5 ETH",
      category: "Crypto",
      image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=800",
      vendor: "DeFiHub",
    },
    {
      title: "Bored Ape Yacht Club",
      price: "45.0 ETH",
      category: "NFT",
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800",
      vendor: "ApeVault",
    },
    {
      title: "Solana Token Bundle",
      price: "120 SOL",
      category: "Crypto",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800",
      vendor: "SolTraders",
    },
    {
      title: "The Sandbox Land",
      price: "6.0 ETH",
      category: "Virtual Real Estate",
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800",
      vendor: "SandboxPro",
    },
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore <span className="gradient-text">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive collection of Web3 assets from verified vendors
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 glass-card">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="nft">NFTs</TabsTrigger>
              <TabsTrigger value="crypto">Crypto</TabsTrigger>
              <TabsTrigger value="virtual real estate">Virtual Land</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
