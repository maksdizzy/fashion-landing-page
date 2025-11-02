import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Fair Pricing.{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          No Surprises.
        </span>
      </h2>
      <p className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Pay only for what you generate. No subscriptions. No hidden fees.
      </p>

      <div className="max-w-2xl mx-auto">
        <Card className="border-primary shadow-xl">
          <CardHeader className="text-center">
            <Badge variant="secondary" className="mb-4 text-base py-2 px-4">
              ✨ Launch Pricing
            </Badge>
            <CardTitle className="text-xl text-muted-foreground">
              One-Time Payment
            </CardTitle>
            <div>
              <span className="text-5xl font-bold">$4.99</span>
              <span className="text-muted-foreground text-xl"> /generation</span>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Value Anchor */}
            <div className="flex items-center justify-center gap-4 text-center">
              <span className="text-muted-foreground line-through">
                Traditional shoot: $2,000+
              </span>
              <Badge variant="destructive" className="text-lg px-5 py-2">
                Save 99%
              </Badge>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">What's included:</h3>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    5 different videos per generation — choose your favorite or use
                    them all
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Full commercial rights</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>HD quality (1080p) broadcast-level</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>No watermarks ever</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div>Vertical 9:16 format</div>
                    <div className="text-sm text-muted-foreground">
                      Perfect for Stories, Reels, TikTok, Etsy
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Ready in 5 minutes or faster</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>10+ AI models to choose from</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>6+ environments for any style</span>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button size="lg" className="w-full text-lg">
              Create My First Video →
            </Button>

            {/* Guarantee */}
            <div className="text-center">
              <p className="font-semibold mb-1">🛡️ 100% Satisfaction Guaranteed</p>
              <p className="text-sm text-muted-foreground">
                Not satisfied? We'll make it right.
              </p>
            </div>
          </CardFooter>
        </Card>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 gap-8 mt-12 text-center">
          <div>
            <h3 className="text-3xl font-bold">1,000+</h3>
            <p className="text-muted-foreground">Happy Sellers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">4.9/5</h3>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg italic">"Best $5 I've spent on my business!"</p>
          <p className="text-sm text-muted-foreground">— Sarah K.</p>
        </div>

        {/* Payment Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-muted-foreground">
          <span>🔒 Secure Payment</span>
          <span>💳 All Cards Accepted</span>
          <span>⚡ Instant Access</span>
        </div>
      </div>
    </section>
  );
};
