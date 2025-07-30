import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => (
  <svg
    className={cn("h-8 w-8", className)}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2.5" />
    <path
      d="M20 10V20L27.0711 27.0711"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6"
    />
  </svg>
);

export default Logo;
