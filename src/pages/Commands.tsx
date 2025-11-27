import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Terminal, Shield, Settings, Users, MessageSquare, Zap, Bell, Target, Wand2, Smile, Scroll } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Commands = () => {
  const DISCORD_OAUTH_URL = "https://discord.com/oauth2/authorize?client_id=1437785611455959060&permissions=4292492855868919&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.com%2Foauth2%2Fauthorized&integration_type=0&scope=bot+applications.commands+messages.read+guilds+guilds.members.read+guilds.join+guilds.channels.read";

  const [searchTerm, setSearchTerm] = useState("");

  const commandCategories = [
    {
      title: "🎨 Basic Commands",
      description: "Essential bot commands",
      icon: MessageSquare,
      color: "text-blue-500",
      commands: [
        { name: "/help", description: "Show all available commands", usage: "/help", permission: "Everyone" },
        { name: "/ping", description: "Check bot latency", usage: "/ping", permission: "Everyone" },
        { name: "/info", description: "Bot information and stats", usage: "/info", permission: "Everyone" },
        { name: "/serverinfo", description: "Server information", usage: "/serverinfo", permission: "Everyone" },
        { name: "/userinfo", description: "User information", usage: "/userinfo [@user]", permission: "Everyone" },
      ]
    },
    {
      title: "⚙️ Settings & Configuration",
      description: "Configure server settings",
      icon: Settings,
      color: "text-blue-500",
      commands: [
        { name: "/settings", description: "View current server settings", usage: "/settings", permission: "Server Owner" },
        { name: "/dashboard", description: "View AI engagement dashboard", usage: "/dashboard", permission: "Server Owner" },
        { name: "/quicksetup", description: "Quick setup wizard for new servers", usage: "/quicksetup", permission: "Server Owner" },
      ]
    },
    {
      title: "🧠 Personality System",
      description: "Manage bot personality and responses",
      icon: Wand2,
      color: "text-purple-500",
      commands: [
        { name: "/personality_set", description: "Set server personality (Owner only)", usage: "/personality_set <style>", permission: "Server Owner" },
        { name: "/personality_view", description: "View current server personality", usage: "/personality_view", permission: "Everyone" },
      ]
    },
    {
      title: "🤖 AI Engagement",
      description: "Control AI engagement features",
      icon: Zap,
      color: "text-yellow-500",
      commands: [
        { name: "/engagement enable", description: "Enable AI engagement", usage: "/engagement enable", permission: "Server Owner" },
        { name: "/engagement disable", description: "Disable AI engagement", usage: "/engagement disable", permission: "Server Owner" },
        { name: "/engagement channel", description: "Set engagement channel", usage: "/engagement channel #ch", permission: "Server Owner" },
        { name: "/engagement test", description: "Test AI response", usage: "/engagement test", permission: "Moderator+" },
        { name: "/engagement cooldown", description: "Set user cooldown (30-120s)", usage: "/engagement cooldown", permission: "Server Owner" },
        { name: "/engagement speed", description: "Set response delay (0-30s)", usage: "/engagement speed", permission: "Server Owner" },
        { name: "/engagement blacklist", description: "Block a channel from AI", usage: "/engagement blacklist", permission: "Server Owner" },
        { name: "/engagement unblacklist", description: "Unblock a channel", usage: "/engagement unblacklist", permission: "Server Owner" },
        { name: "/engagement quiet", description: "Set quiet hours (0-23)", usage: "/engagement quiet", permission: "Server Owner" },
        { name: "/engagement unquiet", description: "Remove quiet hours", usage: "/engagement unquiet", permission: "Server Owner" },
        { name: "/engagement resetstats", description: "Reset statistics (Owner only)", usage: "/engagement resetstats", permission: "Server Owner" },
      ]
    },
    {
      title: "👋 Welcome System",
      description: "Customize welcome messages",
      icon: Users,
      color: "text-green-500",
      commands: [
        { name: "/welcome test", description: "Test welcome message", usage: "/welcome test", permission: "Server Owner" },
        { name: "/welcome enable", description: "Enable welcome messages", usage: "/welcome enable", permission: "Server Owner" },
        { name: "/welcome disable", description: "Disable welcome messages", usage: "/welcome disable", permission: "Server Owner" },
        { name: "/welcome channel", description: "Set welcome channel", usage: "/welcome channel #ch", permission: "Server Owner" },
      ]
    },
    {
      title: "🛡️ Moderation",
      description: "Server moderation tools",
      icon: Shield,
      color: "text-red-500",
      commands: [
        { name: "/ban", description: "Ban a user", usage: "/ban @user [reason]", permission: "Moderator+" },
        { name: "/kick", description: "Kick a user", usage: "/kick @user [reason]", permission: "Moderator+" },
        { name: "/timeout", description: "Timeout a user", usage: "/timeout @user [time]", permission: "Moderator+" },
        { name: "/warn", description: "Warn a user", usage: "/warn @user [reason]", permission: "Moderator+" },
        { name: "/warnings", description: "View user warnings", usage: "/warnings @user", permission: "Moderator+" },
        { name: "/clearwarnings", description: "Clear user warnings", usage: "/clearwarnings @user", permission: "Moderator+" },
        { name: "/purge", description: "Delete messages (1-100)", usage: "/purge <amount>", permission: "Moderator+" },
      ]
    },
    {
      title: "📊 Leveling System",
      description: "Manage XP and ranks",
      icon: Target,
      color: "text-purple-500",
      commands: [
        { name: "/rank", description: "View rank card", usage: "/rank [@user]", permission: "Everyone" },
        { name: "/leaderboard", description: "Server leaderboard", usage: "/leaderboard", permission: "Everyone" },
        { name: "/setlevel", description: "Set user level (Admin)", usage: "/setlevel @user <level>", permission: "Moderator+" },
        { name: "/addxp", description: "Add XP to user (Admin)", usage: "/addxp @user <amount>", permission: "Moderator+" },
      ]
    },
    {
      title: "🎭 Auto Roles",
      description: "Automatic role assignment",
      icon: Users,
      color: "text-blue-500",
      commands: [
        { name: "/autorole add", description: "Add role on join", usage: "/autorole add", permission: "Server Owner" },
        { name: "/autorole remove", description: "Remove auto role", usage: "/autorole remove", permission: "Server Owner" },
        { name: "/autorole list", description: "List auto roles", usage: "/autorole list", permission: "Everyone" },
      ]
    },
    {
      title: "📊 Polls",
      description: "Create and manage polls",
      icon: Bell,
      color: "text-orange-500",
      commands: [
        { name: "/poll create", description: "Create a poll", usage: "/poll create", permission: "Moderator+" },
        { name: "/poll end", description: "End a poll", usage: "/poll end <id>", permission: "Moderator+" },
        { name: "/poll results", description: "View poll results", usage: "/poll results <id>", permission: "Everyone" },
      ]
    },
    {
      title: "🎮 Entertainment",
      description: "Fun and entertainment commands",
      icon: Smile,
      color: "text-pink-500",
      commands: [
        { name: "/8ball", description: "Magic 8-ball", usage: "/8ball <question>", permission: "Everyone" },
        { name: "/coinflip", description: "Flip a coin", usage: "/coinflip", permission: "Everyone" },
        { name: "/dice", description: "Roll dice", usage: "/dice [sides]", permission: "Everyone" },
        { name: "/joke", description: "Random joke", usage: "/joke", permission: "Everyone" },
        { name: "/meme", description: "Random meme", usage: "/meme", permission: "Everyone" },
      ]
    },
    {
      title: "✍️ AI Assistance",
      description: "AI-powered text assistance",
      icon: Wand2,
      color: "text-cyan-500",
      commands: [
        { name: "!rewrite", description: "AI rewrite message (calmer tone)", usage: "!rewrite <message>", permission: "Everyone" },
        { name: "!assist", description: "Ask AI for help", usage: "!assist <question>", permission: "Everyone" },
      ]
    },
    {
      title: "📝 Logging",
      description: "View moderation logs",
      icon: Scroll,
      color: "text-gray-500",
      commands: [
        { name: "/logs view", description: "View moderation logs", usage: "/logs view", permission: "Moderator+" },
        { name: "/logs search", description: "Search logs", usage: "/logs search <query>", permission: "Moderator+" },
        { name: "/logs user", description: "User moderation history", usage: "/logs user @user", permission: "Moderator+" },
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
            Complete list of Harmony Bot commands organized by category.
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
              Add Harmony Bot to your Discord server and start using these powerful commands today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-primary" asChild>
                <a href={DISCORD_OAUTH_URL} target="_blank" rel="noopener noreferrer">
                  Invite Harmony Bot
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