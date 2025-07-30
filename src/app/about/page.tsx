import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const qualifications = [
    'Certified Professional Coach (CPC)',
    'Member of International Coach Federation (ICF)',
    '10+ Years of Experience in Personal Development',
    'M.S. in Organizational Psychology',
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
          Your Partner in Personal Transformation
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-foreground/80">
          I believe everyone has the potential to live a joyful and fulfilling life. My mission is to empower you with the tools and insights to unlock that potential.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-headline">My Philosophy</h2>
          <p className="text-foreground/80">
            My coaching approach is a collaborative partnership. I don't give advice or tell you what to do. Instead, I create a supportive and non-judgmental space where you can explore your thoughts, challenge your assumptions, and discover your own answers. I combine proven coaching methodologies with empathy and intuition to guide you on your unique journey of growth.
          </p>
          <h2 className="text-3xl font-bold font-headline">My Story</h2>
          <p className="text-foreground/80">
            Like many of my clients, I once felt adrift, unsure of my path. A career in a high-stress corporate environment left me feeling unfulfilled and disconnected from my true self. It was through my own journey with a life coach that I discovered my passion for helping others navigate their own challenges. This personal experience fuels my dedication and understanding as I guide you to find your own clarity and purpose.
          </p>
        </div>
        <div>
          <Image
            src="https://placehold.co/600x700.png"
            width={600}
            height={700}
            alt="Life Coach Portrait"
            data-ai-hint="woman smiling"
            className="rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        <div className="bg-secondary rounded-lg p-8">
            <h2 className="text-3xl font-bold font-headline text-center mb-8">Qualifications & Experience</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {qualifications.map((q, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-primary" />
                        <span className="font-medium">{q}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      <div className="mt-16 md:mt-24 text-center">
        <h2 className="text-3xl font-bold font-headline">Ready to Begin?</h2>
        <p className="max-w-xl mx-auto mt-4 text-lg text-foreground/80">
          If you're ready to invest in yourself and create lasting change, I'm here to support you every step of the way.
        </p>
        <Button asChild size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/contact">Book Your Free Consultation</Link>
        </Button>
      </div>
    </div>
  );
}
