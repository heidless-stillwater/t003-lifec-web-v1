import Link from 'next/link';
import Logo from './logo';
import { NAV_LINKS } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 text-xl font-bold mb-4">
              <Logo className="text-primary" />
              <span className="font-headline">Life Coach</span>
            </Link>
            <p className="text-sm text-foreground/70">Your partner in growth and fulfillment.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground/90">Navigate</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
               <li>
                  <Link href="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground/90">Contact</h3>
            <address className="space-y-2 text-sm text-foreground/70 not-italic">
              <p>123 Wellness St, Serenity City, 12345</p>
              <p><a href="mailto:contact@lifecoach.com" className="hover:text-primary transition-colors">contact@lifecoach.com</a></p>
              <p><a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a></p>
            </address>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground/90">Legal</h3>
            <ul className="space-y-2">
               <li><Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Privacy Policy</Link></li>
               <li><Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Life Coach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
