import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureProps {
  icon: string;
  title: string;
  badge?: string;
  features: string[];
}

const features: FeatureProps[] = [
  {
    icon: "🎥",
    title: "Broadcast Quality",
    features: [
      "HD resolution (1080p)",
      "Optimized 9:16 vertical format",
      "Perfect 5-15 second duration (Etsy compliant)",
      "Cinematic camera movements",
      "Professional color grading",
    ],
  },
  {
    icon: "🎨",
    title: "Endless Creativity",
    features: [
      "5 different videos per generation — choose your favorite or use them all",
      "10+ diverse AI models to choose from",
      "6+ environments (studio, outdoor, urban, etc.)",
      "Audio library or upload your own track",
      "Realistic fabric physics with natural lighting and movement",
    ],
  },
  {
    icon: "🛡️",
    title: "100% Yours",
    badge: "Most Popular",
    features: [
      "Full commercial usage rights",
      "No watermarks ever",
      "Use anywhere: Etsy, Instagram, TikTok, ads",
      "No recurring fees",
      "Unlimited views and replays",
    ],
  },
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        Professional Quality.{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Full Control.
        </span>{" "}
        Your Rights.
      </h2>

      <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
        Studio-quality videos without the studio price
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map(({ icon, title, badge, features: featureList }) => (
          <Card key={title} className={badge ? "border-primary shadow-lg" : ""}>
            <CardHeader>
              {badge && (
                <div className="flex justify-center mb-2">
                  <Badge variant="default">{badge}</Badge>
                </div>
              )}
              <CardTitle className="flex flex-col items-center gap-4">
                <div className="text-6xl">{icon}</div>
                <div className="text-xl">{title}</div>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3">
                {featureList.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
