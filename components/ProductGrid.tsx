'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Product } from '@/lib/types';
import { addToCart } from '@/lib/store/cartSlice';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';

interface ProductGridProps {
  initialProducts: Product[];
}

export default function ProductGrid({ initialProducts }: ProductGridProps) {
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  //@ts-ignore
  const categories = ['all', ...new Set(initialProducts.map(p => p.category))];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterAndSortProducts(category, sortBy);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    filterAndSortProducts(selectedCategory, sort);
  };

  const filterAndSortProducts = (category: string, sort: string) => {
    let filtered = [...initialProducts];
    
    if (category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }

    switch (sort) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    setProducts(filtered);
  };

  return (
    <div>
      <ProductFilters
        categories={categories}
        selectedCategory={selectedCategory}
        sortBy={sortBy}
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChange}
      />
      <div className="products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}