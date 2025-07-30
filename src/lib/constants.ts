import { Heart, TrendingUp, Briefcase, BrainCircuit, UserCheck, Star } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/testimonials', label: 'Testimonials' },
];

export const SERVICES = [
  {
    icon: TrendingUp,
    title: 'Personal Growth Coaching',
    description: 'Unlock your full potential and create a life you love with personalized guidance and support.',
    details: 'This program focuses on identifying your core values, setting meaningful goals, and developing habits for long-term success and fulfillment. We will work together to overcome limiting beliefs and build self-awareness.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'abstract growth',
  },
  {
    icon: Briefcase,
    title: 'Career Transition Coaching',
    description: 'Navigate career changes with confidence. We\'ll help you identify your passion and create a strategic plan.',
    details: 'Whether you\'re looking for a promotion, changing industries, or starting your own business, this program provides the tools and support you need. We cover resume building, interview skills, networking strategies, and more.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'office career',
  },
  {
    icon: Heart,
    title: 'Relationship Coaching',
    description: 'Improve communication, build stronger connections, and foster healthier, more fulfilling relationships.',
    details: 'For individuals and couples, this coaching helps improve communication patterns, resolve conflicts constructively, and deepen emotional intimacy. Learn to build a foundation of trust and mutual respect.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'couple talking',
  },
  {
    icon: BrainCircuit,
    title: 'Mindfulness & Stress Management',
    description: 'Learn techniques to reduce stress, increase focus, and cultivate a sense of inner peace and well-being.',
    details: 'This program introduces you to mindfulness practices, meditation, and stress-reduction techniques to help you manage the pressures of daily life. Cultivate resilience and improve your overall mental and emotional health.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'calm meditation',
  },
  {
    icon: UserCheck,
    title: 'Leadership & Performance Coaching',
    description: 'Enhance your leadership skills, boost team performance, and achieve your professional goals.',
    details: 'Designed for professionals and executives, this coaching focuses on developing key leadership qualities such as strategic thinking, effective communication, team motivation, and decision-making under pressure.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'team meeting',
  },
  {
    icon: Star,
    title: 'Custom Coaching Programs',
    description: 'Don\'t see what you need? We can create a custom coaching program tailored to your unique goals.',
    details: 'We can design a bespoke coaching experience that addresses your specific challenges and aspirations. Contact us for a consultation to build your personalized program.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'unique design',
  },
];

export const PRICING_PACKAGES = [
  {
    title: 'Personal Growth',
    price: '$150 / session',
    features: ['3-month commitment', 'Weekly 60-minute sessions', 'Unlimited email support', 'Personalized action plan'],
    popular: false,
  },
  {
    title: 'Career Transition',
    price: '$650 / month',
    features: ['3-month program', 'Bi-weekly 90-minute sessions', 'Resume & LinkedIn review', 'Interview preparation'],
    popular: true,
  },
  {
    title: 'Relationship Coaching',
    price: '$200 / session',
    features: ['For individuals or couples', 'Weekly 75-minute sessions', 'Communication exercises', 'Conflict resolution strategies'],
    popular: false,
  },
  {
    title: 'Mindfulness & Stress',
    price: '$450 / 8-week program',
    features: ['8-week structured program', 'Weekly 60-minute sessions', 'Guided meditation recordings', 'Mindfulness toolkit'],
    popular: false,
  },
  {
    title: 'Leadership & Performance',
    price: '$900 / month',
    features: ['6-month engagement', 'Bi-weekly 90-minute sessions', '360-degree feedback assessment', 'Leadership development plan'],
    popular: false,
  },
  {
    title: 'Discovery Call',
    price: 'Free',
    features: ['30-minute consultation', 'Discuss your goals', 'See if we are a good fit', 'No commitment required'],
    popular: false,
  },
];

export const TESTIMONIALS = [
  {
    name: 'Jessica M.',
    title: 'Marketing Manager',
    quote: 'Working with my coach was a game-changer for my career. I gained clarity, confidence, and a promotion within six months. Truly invaluable!',
    avatar: 'https://placehold.co/100x100.png',
  },
  {
    name: 'David L.',
    title: 'Entrepreneur',
    quote: 'I was feeling stuck and overwhelmed. The mindfulness techniques I learned have completely transformed my approach to business and life.',
    avatar: 'https://placehold.co/100x100.png',
  },
  {
    name: 'Sarah & Tom P.',
    title: 'Couple',
    quote: 'Relationship coaching helped us break through communication barriers and rediscover our connection. We are happier than ever.',
    avatar: 'https://placehold.co/100x100.png',
  },
  {
    name: 'Michael B.',
    title: 'Software Engineer',
    quote: 'The career transition coaching was exactly what I needed to find a job that truly aligns with my values. I couldn\'t have done it alone.',
    avatar: 'https://placehold.co/100x100.png',
  },
    {
    name: 'Emily R.',
    title: 'Creative Director',
    quote: 'The leadership coaching helped me to become a more effective and empathetic leader for my team. The results have been phenomenal both for me and my company.',
    avatar: 'https://placehold.co/100x100.png',
  },
   {
    name: 'Alex Chen',
    title: 'Student',
    quote: 'As a student, I was struggling with focus and motivation. My coach helped me develop strategies that made a huge difference in my academic performance and personal life.',
    avatar: 'https://placehold.co/100x100.png',
  },
];
