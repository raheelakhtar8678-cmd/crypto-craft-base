import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Shield, Users, Database, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  const DISCORD_OAUTH_URL = "https://discord.com/oauth2/authorize?client_id=1437785611455959060&permissions=4292492855868919&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.com%2Foauth2%2Fauthorize&integration_type=0&scope=bot+applications.commands+messages.read";

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
            <span className="gradient-text">Privacy Policy</span> for MyHarmony
          </h1>
          <p className="text-muted-foreground">
            Last Updated: 26 Nov 2025
          </p>
        </div>

        {/* Privacy Content */}
        <div className="space-y-8">
          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Shield className="mr-3 h-6 w-6 text-primary" />
              1. Introduction
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              MyHarmony is a Discord bot designed to provide AI-powered moderation, engagement, and server automation.
              We respect your privacy and aim to be as transparent as possible about data usage.
              By inviting or using MyHarmony, you agree to this Privacy Policy.
            </p>
          </Card>

          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Database className="mr-3 h-6 w-6 text-primary" />
              2. What Data We Collect
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              MyHarmony collects only the minimum data required to operate correctly:
            </p>
            <div className="bg-background/50 p-4 rounded-lg border">
              <p className="text-sm mb-3">We may temporarily process:</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Message content (ONLY for moderation, rephrasing, and engagement features)</li>
                <li>User IDs (for strikes, warnings, bans, leveling system)</li>
                <li>Server IDs and channel IDs (to store server settings)</li>
                <li>Username & nickname (for welcome messages and logs)</li>
              </ul>
            </div>
            <div className="bg-background/50 p-4 rounded-lg border mt-4">
              <p className="text-sm mb-3">We do not store:</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Personal data outside Discord</li>
                <li>Direct Messages</li>
                <li>Login credentials</li>
                <li>Email addresses</li>
                <li>IP addresses</li>
                <li>Payment information</li>
                <li>Any data that Discord does not allow bots to access</li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Message data is not stored long-term. Moderation checks, rephrasing, and AI analysis happen in memory and are not saved permanently unless the server owner enables logging.
              If logging is enabled, then only the designated logging channel inside your server receives logged events.
            </p>
          </Card>

          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Settings className="mr-3 h-6 w-6 text-primary" />
              3. Why We Process Data
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We use temporary data processing ONLY for:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 bg-background/50 p-4 rounded-lg border">
              <li>AI moderation (anti-spam, anti-toxic, no-cussing enforcement)</li>
              <li>AI rephrase system</li>
              <li>AI engagement (polls, events, replies)</li>
              <li>Personality-based responses</li>
              <li>Auto-role and leveling system</li>
              <li>Welcome messages</li>
              <li>Strike, warning, and ban systems</li>
              <li>Server configuration</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              We never sell, share, or exchange data with any third parties.
            </p>
          </Card>

          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-4">4. Permissions</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              By adding the bot to your server, you grant MyHarmony the permissions shown in Discord's authorization screen.
              These permissions are required for:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 bg-background/50 p-4 rounded-lg border">
              <li>Moderation actions</li>
              <li>Reading messages to detect violations</li>
              <li>Sending welcome messages</li>
              <li>Creating polls and events</li>
              <li>Logging actions</li>
              <li>Running commands</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              MyHarmony does not use permissions beyond the bot's functionality.
            </p>
          </Card>

          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not permanently store message content. Any temporary data is processed securely and not shared externally.
              Only server owners control what is logged. Logging channels remain inside your server.
            </p>
          </Card>

          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-4">6. Removing Data</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              If you want MyHarmony to stop processing any of your data:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 bg-background/50 p-4 rounded-lg border">
              <li>Remove the bot from your server</li>
              <li>or</li>
              <li>Use /reset or /wipe-config (if enabled) to clear stored server settings.</li>
            </ul>
          </Card>

          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Users className="mr-3 h-6 w-6 text-primary" />
              7. Children's Privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              MyHarmony follows Discord's age requirements.
              We do not knowingly collect data from users under Discord's minimum age.
            </p>
          </Card>

          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              For questions or concerns:
              Join the Support Server (link on our landing page).
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

export default Privacy;