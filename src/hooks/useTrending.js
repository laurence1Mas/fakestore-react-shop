import { useEffect, useState } from "react";
import { getAllProducts } from "@/services/productService";

export default function useTrending() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const data = await getAllProducts();

        // score popularité
        const trendingProducts = data
          .map(p => ({
            ...p,
            score: p.rating * p.reviews
          }))
          .sort((a, b) => b.score - a.score)
          .slice(0, 4);

        setProducts(trendingProducts);
      } catch (error) {
        console.error("Error loading trending products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return { products, loading };
}
