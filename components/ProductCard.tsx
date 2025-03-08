'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { Product } from '@/lib/types';
import { addToCart } from '@/lib/store/cartSlice';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity,setQuantity] = useState(1)
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity
    }));
  };

  return (
    <div className="product-card">
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={280}
          height={200}
          className="product-card__image"
        />
      </Link>
      <div className="product-card__content">
        <Link href={`/product/${product.id}`}>
          <h3 className="product-card__title" style={{textDecoration:"none"}}>{product.title}</h3>
        </Link>
        <p className="product-card__category">{product.category}</p>
        <p className="product-card__price">${product.price.toFixed(2)}</p>
      </div>
      <div className="product-card__actions">
        <button onClick={handleAddToCart} className="btn btn--primary">
          Add to Cart
        </button>
      </div>
    </div>
  );
}