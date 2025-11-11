import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {/* Logo and Tagline */}
        <div className="col-span-full md:col-span-1">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center gap-2 mb-4"
          >
            <LogoIcon />
            FashionFactory
          </a>
          <p className="text-sm text-muted-foreground">
            Professional AI-generated videos for fashion sellers. Turn product
            photos into model videos in 5 minutes. Perfect for Etsy, Instagram,
            TikTok, and YouTube.
          </p>
        </div>

        {/* Product Column */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Product</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#social-proof"
              className="opacity-60 hover:opacity-100"
            >
              Examples
            </a>
          </div>
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
              Features
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
        </div>
      </section>

      {/* Social Links */}
      <section className="container pb-14">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a
              rel="noreferrer noopener"
              href="https://www.instagram.com/avatarlab.studio/"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
            <a
              rel="noreferrer noopener"
              href="https://www.tiktok.com/@avatarlab.fashion"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              TikTok
            </a>
            <a
              rel="noreferrer noopener"
              href="https://x.com/avatarlab_co"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
            <a
              rel="noreferrer noopener"
              href="https://www.youtube.com/@avatarlab_agency"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              YouTube
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 FashionFactory. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};
