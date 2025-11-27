import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, FileText, Shield, AlertTriangle, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  const DISCORD_OAUTH_URL = "https://discord.com/oauth2/authorize?client_id=1437785611455959060&permissions=4292492855868919&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.com%2Foauth2%2Fauthorized&integration_type=0&scope=bot+applications.commands+messages.read+guilds+guilds.members.read+guilds.join+guilds.channels.read";

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Terms of Service</span> for MyHarmony
          </h1>
          <p className="text-muted-foreground">
            Last Updated: 26 Nov 2025
          </p>
        </div>

        {/* Terms Content */}
        <div className="space-y-8">
          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FileText className="mr-3 h-6 w-6 text-primary" />
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By using MyHarmony, you agree to follow these Terms of Service. If you do not agree, do not invite or use the bot.
            </p>
          </Card>

          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-4">2. Bot Usage Requirements</h2>
            <p className="text-muted-foreground leading-relaxed">
              You must comply with Discord's Terms of Service and Community Guidelines.
              Server owners are responsible for enabling or disabling MyHarmony's features.
              MyHarmony is provided "as is," with no guarantee of performance or uptime.
            </p>
          </Card>

          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-4">3. Allowed Use</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              You may use the bot to:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 bg-background/50 p-4 rounded-lg border">
              <li>Moderate your server</li>
              <li>Automate server tasks</li>
              <li>Use AI engagement and personality features</li>
              <li>Generate polls and events</li>
              <li>Customize welcomes, rules, and leveling</li>
            </ul>
          </Card>

          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <AlertTriangle className="mr-3 h-6 w-6 text-destructive" />
              4. Prohibited Use
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              You agree NOT to:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 bg-background/50 p-4 rounded-lg border">
              <li>Use MyHarmony for illegal activities</li>
              <li>Exploit the bot, its AI systems, or security</li>
              <li>Attempt to harm the bot or its services</li>
              <li>Use it to bypass Discord rules</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              Using the bot to cause harm may result in removal or blacklist.
            </p>
          </Card>

          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Settings className="mr-3 h-6 w-6 text-primary" />
              5. AI Autonomy Disclaimer
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              MyHarmony is an AI-powered bot that automatically:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 bg-background/50 p-4 rounded-lg border">
              <li>Detects spam/toxic content</li>
              <li>Issues strikes/warnings/bans</li>
              <li>Rephrases rude messages</li>
              <li>Generates engagement content</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              The server owner fully controls these features.
              The bot's creators are not responsible for misuse or incorrect configurations.
            </p>
          </Card>

          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Shield className="mr-3 h-6 w-6 text-primary" />
              6. Data Usage
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              MyHarmony processes only the data required for functionality.
              No message content is permanently stored outside the Discord server unless logging is enabled by the server owner.
              By using the bot, you acknowledge and accept the bot's temporary data processing for moderation and AI systems.
            </p>
          </Card>

          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We may restrict bot access if:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 bg-background/50 p-4 rounded-lg border">
              <li>The bot is abused</li>
              <li>The bot is used for harmful activities</li>
              <li>Discord requires action</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              You may stop using the bot anytime by removing it from your server.
            </p>
          </Card>

          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-4">8. Liability</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We are not liable for:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 bg-background/50 p-4 rounded-lg border">
              <li>Loss of data</li>
              <li>Moderation errors</li>
              <li>Bans or strikes caused by AI detection</li>
              <li>Any damages from using or failing to use the bot</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              The bot is free during beta and comes with no warranty.
            </p>
          </Card>

          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms at any time. Continued use of the bot means you accept the new version.
            </p>
          </Card>

          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              For support or inquiries:
              Join the Support Server.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-primary" asChild>
                <a href={DISCORD_OAUTH_URL} target="_blank" rel="noopener noreferrer">
                  Invite MyHarmony
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10" asChild>
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;