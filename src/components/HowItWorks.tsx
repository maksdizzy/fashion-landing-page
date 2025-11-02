import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface StepProps {
  icon: string;
  title: string;
  description: string;
  tip: string;
}

const steps: StepProps[] = [
  {
    icon: "📸",
    title: "Upload Your Product Photo",
    description:
      "Even a simple photo on a hanger or flat lay works. No special preparation needed.",
    tip: "💡 Pro tip: Use a clean background for best results",
  },
  {
    icon: "👤",
    title: "Choose Your AI Model",
    description:
      "Male and female models of various types and ethnicities. Pick the model that best represents your target audience.",
    tip: "✨ 10+ models to choose from",
  },
  {
    icon: "🎬",
    title: "Select the Environment",
    description:
      "Studio, street, cafe, nature — pick the atmosphere that matches your brand style.",
    tip: "🌍 6+ scenes for any style",
  },
  {
    icon: "🎵",
    title: "Add Sound (Optional)",
    description:
      "Choose from our music library or upload your own. Create an atmosphere that sells.",
    tip: "🎼 Royalty-free music included",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        From Product Photo to Professional Video in{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          4 Steps
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        No technical experience required. Just upload, choose, and get results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map(({ icon, title, description, tip }, index) => (
          <Card key={title} className="bg-muted/50 relative">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                <div className="text-6xl">{icon}</div>
                <div className="text-lg font-bold">{title}</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{description}</p>
              <Badge variant="outline" className="text-xs">
                {tip}
              </Badge>
            </CardContent>
            {/* Step number badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
              {index + 1}
            </div>
          </Card>
        ))}
      </div>

      {/* Result Callout */}
      <div className="mt-16 max-w-3xl mx-auto">
        <Card className="bg-primary/5 border-primary">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">
              ✨ Get 5 Videos to Choose From for $4.99
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left mb-6">
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span>⚡</span>
                  <span>Results ready in 5 minutes</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>📱</span>
                  <span>Vertical 9:16 format (perfect for Stories, Reels, TikTok)</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>🎥</span>
                  <span>HD quality (1080p)</span>
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Ready to upload to Etsy, Instagram, TikTok</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>🛡️</span>
                  <span>Full commercial rights</span>
                </p>
              </div>
            </div>
            <Button size="lg" className="w-full md:w-auto">
              Try It Now →
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
