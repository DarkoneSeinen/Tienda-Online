'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { CartIcon } from './icons';
import { getCart } from '@/app/cart/cart.api';

interface User {
  name: string;
  email: string;
}

export function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        setUser(JSON.parse(userStr));
        try {
          const cart = await getCart();
          setCartItemsCount(cart.items.length);
        } catch (error) {
          console.error('Failed to load cart:', error);
        }
      } else {
        setUser(null);
        setCartItemsCount(0);
      }
    };

    // Check initial state
    checkUser();

    // Listen for storage changes
    window.addEventListener('storage', checkUser);
    
    // Custom events for auth and cart changes
    window.addEventListener('authStateChange', checkUser);
    window.addEventListener('cartUpdate', checkUser);

    return () => {
      window.removeEventListener('storage', checkUser);
      window.removeEventListener('authStateChange', checkUser);
      window.removeEventListener('cartUpdate', checkUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    router.push('/auth/login');
  };

  if (!user) {
    return null;
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">Tienda Online</span>
            </Link>
          </div>              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Welcome, {user.name}</span>
                <Link href="/cart" className="relative">
                  <Button variant="ghost" className="p-2">
                    <CartIcon className="w-6 h-6" />
                    {cartItemsCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {cartItemsCount}
                      </span>
                    )}
                  </Button>
                </Link>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
        </div>
      </div>
    </nav>
  );
}
