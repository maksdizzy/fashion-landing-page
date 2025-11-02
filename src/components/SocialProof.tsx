import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

// Import before/after assets
import before1 from "../assets/social-proof/1-before.jpg";
import after1 from "../assets/social-proof/1-after.mp4";
import before2 from "../assets/social-proof/2-before.jpg";
import after2 from "../assets/social-proof/2-after.mp4";
import before3 from "../assets/social-proof/3-before.jpg";
import after3 from "../assets/social-proof/3-after.mp4";
import before4 from "../assets/social-proof/4-before.jpg";
import after4 from "../assets/social-proof/4-after.mp4";
import before5 from "../assets/social-proof/5-before.jpg";
import after5 from "../assets/social-proof/5-after.mp4";
import before6 from "../assets/social-proof/6-before.jpg";
import after6 from "../assets/social-proof/6-after.mp4";

interface ExampleProps {
  before: string;
  after: string;
  testimonial: string;
  attribution: string;
}

const examples: ExampleProps[] = [
  {
    before: before1,
    after: after1,
    testimonial: "My Etsy views tripled!",
    attribution: "— Sarah K., Vintage Clothing",
  },
  {
    before: before2,
    after: after2,
    testimonial: "First sale happened 2 hours after adding the video",
    attribution: "— Michael R., Streetwear Designer",
  },
  {
    before: before3,
    after: after3,
    testimonial: "Best $5 I've spent on my business!",
    attribution: "— Emma L., Handmade Fashion",
  },
  {
    before: before4,
    after: after4,
    testimonial: "The quality is unbelievable for the price",
    attribution: "— Jessica M., Boutique Owner",
  },
  {
    before: before5,
    after: after5,
    testimonial: "My customers love seeing how items move and fit",
    attribution: "— David P., Accessories Shop",
  },
  {
    before: before6,
    after: after6,
    testimonial: "Finally found a way to show fabric quality without expensive shoots",
    attribution: "— Lisa M., Accessories Designer",
  },
];

export const SocialProof = () => {
  return (
    <section id="social-proof" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          From Simple Photos to Sales-Boosting Videos
        </h2>
        <p className="text-xl text-muted-foreground mt-4 mb-8">
          Over 1,000 Etsy sellers have already boosted their sales with AI videos
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            10,000+
          </h3>
          <p className="text-muted-foreground mt-2">Videos Created</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            +2.8x
          </h3>
          <p className="text-muted-foreground mt-2">Higher Conversion Rate</p>
          <p className="text-xs text-muted-foreground">(listings with video)</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            73%
          </h3>
          <p className="text-muted-foreground mt-2">More Favorites</p>
          <p className="text-xs text-muted-foreground">(increased engagement)</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            +156%
          </h3>
          <p className="text-muted-foreground mt-2">Sales Growth</p>
          <p className="text-xs text-muted-foreground">(after adding video)</p>
        </div>
      </div>

      {/* Before/After Carousel */}
      <div className="max-w-5xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {examples.map((example, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {/* Before */}
                      <div className="space-y-2">
                        <Badge variant="outline" className="mb-2 text-sm py-1.5 px-3">
                          Uploaded
                        </Badge>
                        <div className="rounded-lg overflow-hidden border">
                          <img
                            src={example.before}
                            alt="Before - Product photo"
                            className="w-full h-auto object-cover aspect-[9/16]"
                          />
                        </div>
                      </div>

                      {/* After */}
                      <div className="space-y-2">
                        <Badge variant="outline" className="mb-2 text-sm py-1.5 px-3">
                          Result
                        </Badge>
                        <div className="rounded-lg overflow-hidden border">
                          <video
                            src={example.after}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto object-cover aspect-[9/16]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="text-center">
                      <p className="text-lg italic mb-2">
                        "{example.testimonial}"
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {example.attribution}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Carousel Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {examples.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-muted"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
