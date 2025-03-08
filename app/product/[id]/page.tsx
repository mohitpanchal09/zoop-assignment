'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Star, ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '@/lib/api';
import { addToCart } from '@/lib/store/cartSlice';
import { RootState } from '@/lib/store/store';
import { Button } from '@/components/ui/button';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  return <ProductDetails product={product} />;
}

function ProductDetails({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const itemInCart = cartItems.find(item => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity
    }));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="product-page">
      <button className="back-button" onClick={() => router.back()}>
        <ArrowLeft size={24} className="icon" />
        <span>Back to Products</span>
      </button>

      <div className="product-container">
        <div className="product-image">
          <Image src={product.image} alt={product.title} width={500} height={500} priority />
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={22}
                className={i < Math.floor(product.rating.rate) ? 'filled-star' : 'empty-star'}
              />
            ))}
            <span className="review-count">({product.rating.count} reviews)</span>
          </div>

          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-description">{product.description}</p>

          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <Button onClick={handleAddToCart} className="add-to-cart" disabled={addedToCart}>
            {addedToCart ? (
              <div className="cart-status">
                <Check size={24} />
                <span>Added to Cart</span>
              </div>
            ) : (
              <div className="cart-status">
                <ShoppingCart size={24} />
                <span>Add to Cart</span>
              </div>
            )}
          </Button>

          {itemInCart && <p className="cart-info">{itemInCart.quantity} in cart</p>}
        </div>
      </div>
    </div>
  );
}
