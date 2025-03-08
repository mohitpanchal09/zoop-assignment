'use client';

import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { RootState } from '@/lib/store/store';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '@/lib/store/cartSlice';

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600">Add some products to your cart to see them here.</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="cart">
        {cartItems.map((item) => (
          <div key={item.id} className="cart__item">
            <Image
              src={item.image}
              alt={item.title}
              width={80}
              height={80}
              className="cart__item-image"
            />
            <div className="cart__item-content">
              <h3 className="cart__item-title">{item.title}</h3>
              <p className="cart__item-price">${(item.price * item.quantity).toFixed(2)}</p>
              <div className="cart__item-quantity">
                <button
                  className="btn btn--quantity"
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  <Minus size={16} />
                </button>
                <span>{item.quantity}</span>
                <button
                  className="btn btn--quantity"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  <Plus size={16} />
                </button>
                <button
                  className="btn btn--quantity ml-4"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-xl font-bold">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}