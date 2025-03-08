'use client';

import { useDispatch } from 'react-redux';
import { Product } from '@/lib/types';
import { addToCart } from '@/lib/store/cartSlice';
import { useState } from 'react';

export default function AddToCartButton({ product }: { product: Product }) {
  const [quantity,setQuantity] = useState(1)
  const dispatch = useDispatch();
  

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity:quantity
    }));
  };

  return (
    <button onClick={handleAddToCart} className="btn btn--primary">
      Add to Cart
    </button>
  );
}