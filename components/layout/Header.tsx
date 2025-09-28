// components/layout/Header.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const isActive = (pathname: string) => {
    return router.pathname === pathname;
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link href="/">MyApp</Link>
          </div>
          
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/home" 
                className={`hover:text-blue-200 transition-colors ${
                  isActive('/home') ? 'text-yellow-300 font-semibold' : ''
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`hover:text-blue-200 transition-colors ${
                  isActive('/about') ? 'text-yellow-300 font-semibold' : ''
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/posts" 
                className={`hover:text-blue-200 transition-colors ${
                  isActive('/posts') ? 'text-yellow-300 font-semibold' : ''
                }`}
              >
                Posts
              </Link>
            </li>
            <li>
              <Link 
                href="/users" 
                className={`hover:text-blue-200 transition-colors ${
                  isActive('/users') ? 'text-yellow-300 font-semibold' : ''
                }`}
              >
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;