import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Terminal, Shield, Settings, Users, MessageSquare, Zap, Bell, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Commands = () => {
  const DISCORD_OAUTH_URL = "https://discord.com/oauth2/authorize?client_id=1437785611455959060&permissions=4292493394837495&response_type=code&redirect_uri=https%3A%2F%2Fecho-bot-starter-production.up.railway.app%2F&integration_type=0&scope=bot+applications.commands+messages.read+activities.write+relationships.read+activities.read+guilds+guilds.members.read+gdm.join+guilds.join+guilds.channels.read";

  const [searchTerm, setSearchTerm] = useState("");

  const commandCategories = [
    {
      title: "Setup Commands",
      description: "Configure and manage your bot settings",
      icon: Settings,
      color: "text-blue-500",
      commands: [
        { name: "/quicksetup", description: "Instantly configure all essential bot features", usage: "/quicksetup", permission: "Server Owner" },
        { name: "/personality-set", description: "Define how the bot speaks and responds", usage: "/personality-set [personality]", permission: "Server Owner" },
        { name: "/reset", description: "Clear all server settings and start fresh", usage: "/reset", permission: "Server Owner" },
        { name: "/wipe-config", description: "Remove all configuration data", usage: "/wipe-config", permission: "Server Owner" },
      ]
    },
    {
      title: "Moderation Commands",
      description: "Manage server rules and user actions",
      icon: Shield,
      color: "text-red-500",
      commands: [
        { name: "/strike", description: "Issue a warning strike to a user", usage: "/strike @user [reason]", permission: "Moderator+" },
        { name: "/ban", description: "Ban a user from the server", usage: "/ban @user [reason]", permission: "Moderator+" },
        { name: "/unban", description: "Unban a previously banned user", usage: "/unban @user", permission: "Moderator+" },
        { name: "/warnings", description: "View a user's warning history", usage: "/warnings @user", permission: "Moderator+" },
        { name: "/moderation-log", description: "View moderation action logs", usage: "/moderation-log [limit]", permission: "Moderator+" },
      ]
    },
    {
      title: "Engagement Commands",
      description: "Create polls, events, and interactive content",
      icon: Zap,
      color: "text-yellow-500",
      commands: [
        { name: "/poll", description: "Create a server poll", usage: "/poll \"Question\" [option1] [option2]", permission: "Moderator+" },
        { name: "/event", description: "Schedule a server event", usage: "/event \"Event Name\" [date/time]", permission: "Moderator+" },
        { name: "/engagement-toggle", description: "Enable/disable AI engagement", usage: "/engagement-toggle [on/off]", permission: "Server Owner" },
        { name: "/interactive-moment", description: "Trigger an interactive community moment", usage: "/interactive-moment [type]", permission: "Moderator+" },
      ]
    },
    {
      title: "Welcome Commands",
      description: "Customize member greetings and onboarding",
      icon: Users,
      color: "text-green-500",
      commands: [
        { name: "/welcome-message", description: "Set custom welcome message", usage: "/welcome-message \"Your message\"", permission: "Server Owner" },
        { name: "/welcome-image", description: "Set welcome image banner", usage: "/welcome-image [image_url]", permission: "Server Owner" },
        { name: "/welcome-channel", description: "Set welcome message channel", usage: "/welcome-channel #channel", permission: "Server Owner" },
        { name: "/goodbye-message", description: "Set custom goodbye message", usage: "/goodbye-message \"Your message\"", permission: "Server Owner" },
      ]
    },
    {
      title: "Leveling System",
      description: "Manage XP, roles, and member progression",
      icon: Target,
      color: "text-purple-500",
      commands: [
        { name: "/leveling-toggle", description: "Enable/disable XP leveling system", usage: "/leveling-toggle [on/off]", permission: "Server Owner" },
        { name: "/auto-role", description: "Configure automatic role assignments", usage: "/auto-role @role [level]", permission: "Server Owner" },
        { name: "/rank", description: "Check your or another user's rank", usage: "/rank [@user]", permission: "Everyone" },
        { name: "/leaderboard", description: "View server XP leaderboard", usage: "/leaderboard", permission: "Everyone" },
        { name: "/xp-add", description: "Manually add XP to a user", usage: "/xp-add @user [amount]", permission: "Moderator+" },
      ]
    },
    {
      title: "Rule System",
      description: "Configure and enforce server rules",
      icon: Bell,
      color: "text-orange-500",
      commands: [
        { name: "/rule-add", description: "Add a new server rule", usage: "/rule-add [rule_text]", permission: "Server Owner" },
        { name: "/rule-remove", description: "Remove an existing rule", usage: "/rule-remove [rule_number]", permission: "Server Owner" },
        { name: "/rule-list", description: "Display all server rules", usage: "/rule-list", permission: "Everyone" },
        { name: "/rules-channel", description: "Set rules announcement channel", usage: "/rules-channel #channel", permission: "Server Owner" },
      ]
    },
    {
      title: "Utility Commands",
      description: "General bot and server utilities",
      icon: Terminal,
      color: "text-gray-500",
      commands: [
        { name: "/help", description: "Show all available commands", usage: "/help", permission: "Everyone" },
        { name: "/stats", description: "Display server statistics", usage: "/stats", permission: "Everyone" },
        { name: "/bot-info", description: "Show bot information and status", usage: "/bot-info", permission: "Everyone" },
        { name: "/rephrase", description: "Rephrase a rude message politely", usage: "/rephrase [message]", permission: "Moderator+" },
        { name: "/ping", description: "Check bot response time", usage: "/ping", permission: "Everyone" },
      ]
    }
  ];

  const filteredCategories = commandCategories.map(category => ({
    ...category,
    commands: category.commands.filter(command =>
      command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      command.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.commands.length > 0);

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Bot Commands</span> Reference
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete list of MyHarmony bot commands organized by category.
            Filter commands to find exactly what you need.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search commands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Command Categories */}
        <div className="grid gap-8">
          {filteredCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="p-6 glass-card">
                <div className="flex items-center mb-4">
                  <Icon className={`h-6 w-6 mr-3 ${category.color}`} />
                  <div>
                    <h2 className="text-2xl font-semibold">{category.title}</h2>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {category.commands.map((command, cmdIndex) => (
                    <div key={cmdIndex} className="bg-background/50 p-4 rounded-lg border">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-mono font-semibold text-primary">{command.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {command.permission}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{command.description}</p>
                      <div className="bg-background p-2 rounded text-xs font-mono text-muted-foreground">
                        Usage: {command.usage}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Permission Legend */}
        <Card className="p-6 glass-card mt-8">
          <h3 className="text-xl font-semibold mb-4">Permission Levels</h3>
          <div className="grid gap-2 md:grid-cols-3 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span><strong>Everyone:</strong> All server members can use</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <span><strong>Moderator+:</strong> Requires moderator permissions</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span><strong>Server Owner:</strong> Only server owner can use</span>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to <span className="gradient-text">Enhance Your Server?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Add MyHarmony to your Discord server and start using these powerful commands today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-primary" asChild>
                <a href={DISCORD_OAUTH_URL} target="_blank" rel="noopener noreferrer">
                  Invite MyHarmony
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10" asChild>
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commands;