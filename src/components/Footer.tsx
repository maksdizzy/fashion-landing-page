import { LogoIcon } from "./Icons";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        {/* Logo and Tagline */}
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center gap-2 mb-4"
          >
            <LogoIcon />
            ReelCraft
          </a>
          <p className="text-sm text-muted-foreground">
            Professional AI-generated videos for fashion sellers on Etsy. Turn
            product photos into model videos in 5 minutes.
          </p>
        </div>

        {/* Product Column */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Product</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#howItWorks"
              className="opacity-60 hover:opacity-100"
            >
              How It Works
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#features"
              className="opacity-60 hover:opacity-100"
            >
              Examples
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#pricing"
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Tutorials
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100 text-muted-foreground text-sm"
            >
              API (Coming Soon)
            </a>
          </div>
        </div>

        {/* Support Column */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Support</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Contact Us
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Help Center
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Terms of Service
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Privacy Policy
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Satisfaction Guarantee
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              System Status
            </a>
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="flex flex-col gap-2 col-span-2">
          <h3 className="font-bold text-lg">Fashion Video Tips</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Weekly tips to boost your Etsy sales with video
          </p>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="your@email.com"
              className="bg-muted/50"
            />
            <Button type="submit" size="icon">
              →
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-2">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Social Links */}
      <section className="container pb-14">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              TikTok
            </a>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 ReelCraft. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};
