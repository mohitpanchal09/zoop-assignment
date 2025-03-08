'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar__container container">
        <Link href="/" className="navbar__logo">
          ShopNext
        </Link>
        <Link href="/cart" className="navbar__cart">
          <ShoppingCart size={24} />
          {itemCount > 0 && <span className="navbar__cart-count">{itemCount}</span>}
        </Link>
      </div>
    </nav>
  );
}