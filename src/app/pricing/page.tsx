import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PRICING_PACKAGES } from '@/lib/constants';
import { Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
          Invest in Yourself
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-foreground/80">
          Choose a package that aligns with your goals. All programs are designed to provide maximum value and transformative results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {PRICING_PACKAGES.map((pkg) => (
          <Card key={pkg.title} className={cn("flex flex-col h-full", pkg.popular && "border-2 border-primary shadow-lg")}>
            {pkg.popular && (
              <div className="bg-primary text-primary-foreground py-1 px-4 text-sm font-semibold rounded-t-lg -mt-px flex items-center justify-center gap-2">
                <Star className="w-4 h-4" /> Most Popular
              </div>
            )}
            <CardHeader className="items-center text-center">
              <CardTitle className="text-2xl font-headline">{pkg.title}</CardTitle>
              <div className="text-4xl font-bold">{pkg.price}</div>
              {pkg.title === "Discovery Call" && <CardDescription>No-obligation chat</CardDescription>}
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
                <Link href="/contact">
                  {pkg.title === "Discovery Call" ? "Book Now" : "Get Started"}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
