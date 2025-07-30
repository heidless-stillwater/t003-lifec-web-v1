import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
          Success Stories
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-foreground/80">
          Hear from individuals who have transformed their lives with our coaching.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <Card key={index} className="flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardContent className="pt-6">
              <blockquote className="border-l-4 border-primary pl-4">
                <p className="text-foreground/80 italic">
                  {testimonial.quote}
                </p>
              </blockquote>
            </CardContent>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatar} data-ai-hint="portrait professional" />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base font-bold">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.title}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
