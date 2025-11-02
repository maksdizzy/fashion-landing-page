import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export const ProblemAgitation = () => {
  return (
    <section id="problem" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          The Real Cost of Professional Video Shoots
        </h2>
        <p className="text-xl text-muted-foreground mt-4">
          (Hint: It's Not Just Money)
        </p>
      </div>

      {/* Comparison Cards for Mobile */}
      <div className="md:hidden grid gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Traditional Shoot</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold">💰 Cost</p>
              <p className="text-muted-foreground">$2,000 - $5,000</p>
              <p className="text-sm text-muted-foreground">Per single shoot</p>
            </div>
            <div>
              <p className="font-semibold">⏱️ Time</p>
              <p className="text-muted-foreground">2-4 weeks</p>
              <p className="text-sm text-muted-foreground">To organize everything</p>
            </div>
            <div>
              <p className="font-semibold">🔧 Complexity</p>
              <p className="text-muted-foreground">Hire model, photographer, location</p>
              <p className="text-sm text-muted-foreground">Complex logistics</p>
            </div>
            <div>
              <p className="font-semibold">📸 Results</p>
              <p className="text-muted-foreground">One result</p>
              <p className="text-sm text-muted-foreground">What if you don't like it?</p>
            </div>
            <div>
              <p className="font-semibold">🌍 Availability</p>
              <p className="text-muted-foreground">Geographic limitations</p>
              <p className="text-sm text-muted-foreground">Not available everywhere</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary">
          <CardHeader>
            <div className="flex justify-center mb-2">
              <Badge>Recommended</Badge>
            </div>
            <CardTitle className="text-center">Our AI Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold">💰 Cost</p>
              <p className="text-primary font-bold">$4.99</p>
              <p className="text-sm text-muted-foreground">For 5 videos</p>
            </div>
            <div>
              <p className="font-semibold">⏱️ Time</p>
              <p className="text-primary font-bold">5 minutes</p>
              <p className="text-sm text-muted-foreground">Until results ready</p>
            </div>
            <div>
              <p className="font-semibold">🔧 Complexity</p>
              <p className="text-primary font-bold">4 simple steps</p>
              <p className="text-sm text-muted-foreground">No complexity</p>
            </div>
            <div>
              <p className="font-semibold">📸 Results</p>
              <p className="text-primary font-bold">5 videos to choose from</p>
              <p className="text-sm text-muted-foreground">Pick your favorite</p>
            </div>
            <div>
              <p className="font-semibold">🌍 Availability</p>
              <p className="text-primary font-bold">Works from anywhere</p>
              <p className="text-sm text-muted-foreground">24/7 access</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Comparison Table for Desktop */}
      <div className="hidden md:block max-w-5xl mx-auto mb-12">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Criteria</TableHead>
              <TableHead>Traditional Shoot</TableHead>
              <TableHead className="bg-primary/5">
                <div className="flex items-center justify-between">
                  Our AI Service
                  <Badge variant="default" className="ml-2">Recommended</Badge>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-semibold">💰 Cost</TableCell>
              <TableCell>
                <div>$2,000 - $5,000</div>
                <div className="text-sm text-muted-foreground">Per single shoot</div>
              </TableCell>
              <TableCell className="bg-primary/5">
                <div className="font-bold text-primary">$4.99</div>
                <div className="text-sm text-muted-foreground">For 5 videos</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">⏱️ Time</TableCell>
              <TableCell>
                <div>2-4 weeks</div>
                <div className="text-sm text-muted-foreground">To organize everything</div>
              </TableCell>
              <TableCell className="bg-primary/5">
                <div className="font-bold text-primary">5 minutes</div>
                <div className="text-sm text-muted-foreground">Until results ready</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">🔧 Complexity</TableCell>
              <TableCell>
                <div>Hire model, photographer, location</div>
                <div className="text-sm text-muted-foreground">Complex logistics</div>
              </TableCell>
              <TableCell className="bg-primary/5">
                <div className="font-bold text-primary">4 simple steps</div>
                <div className="text-sm text-muted-foreground">No complexity</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">📸 Results</TableCell>
              <TableCell>
                <div>One result</div>
                <div className="text-sm text-muted-foreground">What if you don't like it?</div>
              </TableCell>
              <TableCell className="bg-primary/5">
                <div className="font-bold text-primary">5 videos to choose from</div>
                <div className="text-sm text-muted-foreground">Pick your favorite</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">🌍 Availability</TableCell>
              <TableCell>
                <div>Geographic limitations</div>
                <div className="text-sm text-muted-foreground">Not available everywhere</div>
              </TableCell>
              <TableCell className="bg-primary/5">
                <div className="font-bold text-primary">Works from anywhere</div>
                <div className="text-sm text-muted-foreground">24/7 access</div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Emotional Appeal */}
      <div className="max-w-3xl mx-auto text-center space-y-6 text-lg text-muted-foreground">
        <p>
          You know video sells. But $2,000-$5,000 for a professional shoot?
          That's not realistic when you're bootstrapping or testing new products.
        </p>
        <p>
          You're competing with 4+ million Etsy sellers. The ones winning have
          professional videos. You don't have the budget, and you can't risk
          thousands on something that might not work.
        </p>
        <p className="font-semibold text-foreground text-xl">
          Now there's a better way.
        </p>
      </div>
    </section>
  );
};
