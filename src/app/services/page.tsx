import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
          Our Coaching Services
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-foreground/80">
          Tailored programs designed to help you thrive in every area of your life.
        </p>
      </div>

      <div className="space-y-16">
        {SERVICES.map((service, index) => (
          <div 
            key={service.title} 
            className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            <div className={index % 2 === 1 ? 'md:order-last' : ''}>
              <Image
                src={service.image}
                width={600}
                height={400}
                alt={service.title}
                data-ai-hint={service.imageHint}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <div className="bg-primary/20 p-3 rounded-full">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold font-headline">{service.title}</h2>
              </div>
              <p className="text-foreground/80 text-lg">{service.description}</p>
              <p className="text-foreground/70">{service.details}</p>
              <Button asChild variant="link" className="px-0">
                <Link href="/contact">
                  Inquire About {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 md:mt-24 text-center bg-primary/10 p-8 md:p-12 rounded-lg">
        <h2 className="text-3xl font-bold font-headline">Not Sure Where to Start?</h2>
        <p className="max-w-xl mx-auto mt-4 text-lg text-foreground/80">
          Let's talk. A free, no-obligation discovery call can help us determine the best path forward for you.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/contact">Book a Free Discovery Call</Link>
        </Button>
      </div>
    </div>
  );
}
