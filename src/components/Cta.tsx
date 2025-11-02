import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container text-center space-y-8">
        {/* Eyebrow */}
        <Badge variant="secondary" className="text-base py-2.5 px-5">
          JOIN 1,000+ ETSY SELLERS
        </Badge>

        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto">
          Ready to Turn Photos Into Sales?
        </h2>

        {/* Subheadline */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Create professional videos for your products in 5 minutes.
          Boost sales from your very first listing.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <span className="flex items-center gap-2">
            ⚡ Results in 5 minutes
          </span>
          <span className="flex items-center gap-2">
            💰 Only $4.99
          </span>
          <span className="flex items-center gap-2">
            🛡️ Satisfaction guaranteed
          </span>
        </div>

        {/* Hero CTA Button */}
        <div className="flex flex-col items-center gap-2">
          <Button size="lg" className="text-lg px-8 py-6">
            Create My First Video →
          </Button>
          <p className="text-sm text-muted-foreground">
            Get 5 videos instantly • Only $4.99
          </p>
        </div>

        {/* Social Proof */}
        <p className="text-muted-foreground pt-4">
          Join Sarah, Emma, Michael and 1,000+ other sellers
        </p>

        {/* Bottom Badges */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground pt-4">
          <span>🔒 Secure Payment</span>
          <span>⚡ Instant Access</span>
          <span>💳 All Cards Accepted</span>
        </div>
      </div>
    </section>
  );
};
