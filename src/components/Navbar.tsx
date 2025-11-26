import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal, MessageSquare, Shield, FileText } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const DISCORD_OAUTH_URL = "https://discord.com/oauth2/authorize?client_id=1437785611455959060&permissions=4292493394837495&response_type=code&redirect_uri=https%3A%2F%2Fecho-bot-starter-production.up.railway.app%2F&integration_type=0&scope=bot+applications.commands+messages.read+activities.write+relationships.read+activities.read+guilds+guilds.members.read+gdm.join+guilds.join+guilds.channels.read";

  const navLinks = [
    { path: "/", label: "Home", icon: MessageSquare },
    { path: "/commands", label: "Commands", icon: Terminal },
    { path: "/privacy", label: "Privacy", icon: Shield },
    { path: "/terms", label: "Terms", icon: FileText },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <MessageSquare className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-xl gradient-text">MyHarmony</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Invite Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-primary hover:bg-primary/90 glow-primary" asChild>
              <a href={DISCORD_OAUTH_URL} target="_blank" rel="noopener noreferrer">
                Invite MyHarmony
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <Button className="w-full bg-primary hover:bg-primary/90" asChild>
              <a href={DISCORD_OAUTH_URL} target="_blank" rel="noopener noreferrer">
                Invite MyHarmony
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
