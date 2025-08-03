"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-xl font-bold transition-transform hover:scale-105">
            <Logo className="text-primary" />
            <span className="hidden sm:inline font-headline">Life Coach</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
                href="/contact"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/contact" ? "text-primary" : "text-foreground/80"
                )}
              >
                Contact
              </Link>
          </nav>
          
          <div className="hidden items-center gap-4 md:flex">
            <a href="tel:+1234567890" className="text-sm font-medium hover:text-primary transition-colors">+1 (234) 567-890</a>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Start Here</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm pb-4 absolute top-20 left-0 w-full border-b">
          <nav className="container mx-auto flex flex-col items-center gap-4 px-4 pt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary w-full text-center py-2",
                  pathname === link.href ? "text-primary bg-primary/10 rounded-md" : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
                href="/contact"
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary w-full text-center py-2",
                  pathname === "/contact" ? "text-primary bg-primary/10 rounded-md" : "text-foreground/80"
                )}
              >
                Contact
              </Link>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a href="tel:+1234567890" className="text-base font-medium hover:text-primary transition-colors">+1 (234) 567-890</a>
            </div>
            <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2">
              <Link href="/contact">Start Here</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
