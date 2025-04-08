import Navigation from './Navigation';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex items-center justify-between h-14">
        <div className="flex items-center gap-6 pl-4">
          <Link className="flex items-center space-x-2" href="/">
            <span className="font-bold">
              WebNest
            </span>
          </Link>
          <Navigation />
        </div>
        <div className="flex items-center gap-2 pr-4">
          <ThemeToggle />
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button size="sm">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header; 