// pages/products/[productId].jsx or app/products/[productId]/page.jsx
import ProductDetail from "@/components/ProductDetail";
import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query; // Get the productId from the URL

  if (!productId) return <p>Loading...</p>;

  return <ProductDetail productId={productId} />;
};

export default ProductPage;
