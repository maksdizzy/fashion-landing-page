import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Will this work for my handmade items?",
    answer:
      "Yes, absolutely! Our technology works with any clothing — from vintage to avant-garde, from handmade to mass production. If it can be worn, we can create a video. Moreover, handmade items especially benefit from video, as it allows you to showcase unique details and quality of craftsmanship in motion.",
    value: "item-1",
  },
  {
    question: "Doesn't this violate Etsy rules?",
    answer:
      "No, it's completely legal. You own full rights to the generated content — it's your marketing material. It's like using stock photos or graphic design, only much better and more personalized. Etsy allows the use of marketing materials to present your products.",
    value: "item-2",
  },
  {
    question: "Won't it be obvious it's AI?",
    answer:
      "Our videos are created with cinematic quality and realistic fabric physics. Most viewers can't tell the difference from a real shoot. And remember: this is marketing content, the goal is to showcase your product beautifully and professionally. Just like product photography uses studio lighting and editing for better presentation.",
    value: "item-3",
  },
  {
    question: "Why do I get 5 videos instead of just one?",
    answer:
      "Because we understand that creativity and marketing require options! With 5 different videos, you get: multiple angles and movements, testing opportunities, A/B testing capabilities, variety for multi-platform use, insurance if you don't love one option, and incredible value at just $0.99 per video. Most customers use 2-3 videos from each generation across different listings and platforms.",
    value: "item-4",
  },
  {
    question: "What if I don't like any of the 5 videos?",
    answer:
      "You have several options: Try different settings by running generation again with different parameters (model, environment, angle) for another $4.99, or contact our support team who is here to help you get the result you want. But in 95% of cases, customers are happy with at least 2-3 videos out of five!",
    value: "item-5",
  },
  {
    question: "How quickly will I get results?",
    answer:
      "Generation takes 3-7 minutes depending on complexity and current system load. You'll receive an email notification when your videos are ready to download. Results are saved in your account, and you can download them anytime.",
    value: "item-6",
  },
  {
    question: "What video format will I receive?",
    answer:
      "You receive 5 unique videos in vertical 9:16 format, optimized for modern social media and mobile viewing. MP4 format, 1080p quality, vertical 9:16 orientation, 5-15 seconds duration. Ready to upload to Etsy, Instagram Stories/Reels, TikTok, Pinterest, Facebook, and any other platform.",
    value: "item-7",
  },
  {
    question: "Can I use one video multiple times?",
    answer:
      "Yes, absolutely! You have full commercial rights to the generated videos. Use videos on Etsy listings (as many products as you want), on Instagram, TikTok, Facebook, Pinterest, on your own website, in paid advertising (Facebook Ads, Instagram Ads, etc.), in email marketing — anywhere, as many times as you want, with no additional fees or restrictions.",
    value: "item-8",
  },
  {
    question: "What are the product photo requirements?",
    answer:
      "We work with any photos, but for best results: use a clean background (white, neutral, or solid color), ensure good lighting (natural or studio), make sure details are visible with a clear image, minimum resolution of 800x800px (bigger is better), and use JPG, PNG, or HEIC format. Even photos on a hanger or flat lay work — our technology adapts!",
    value: "item-9",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <p className="text-xl text-center text-muted-foreground mb-8">
        Everything you need to know about creating AI videos for your clothing
      </p>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full AccordionRoot">
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-8 bg-muted/50 rounded-lg">
          <h3 className="text-xl font-bold mb-2">
            Didn't find an answer to your question?
          </h3>
          <p className="text-muted-foreground mb-4">
            Our support team is ready to help you 24/7
          </p>
          <Button variant="outline" asChild>
            <a
              href="https://wa.me/66951645820"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
