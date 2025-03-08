import ProductGrid from '@/components/ProductGrid';
import { getProducts } from '@/lib/api';

export default async function Home() {
  const products = await getProducts();
  
  return <ProductGrid initialProducts={products} />;
}