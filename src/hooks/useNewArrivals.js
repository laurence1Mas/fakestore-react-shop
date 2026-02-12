import { useEffect, useState } from "react";
import { getAllProducts } from "@/services/productService";

export default function useNewArrivals() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const data = await getAllProducts();

        // prendre les 4 derniers produits
        const lastProducts = data.slice(-4).reverse();

        setProducts(lastProducts);
      } catch (error) {
        console.error("Error loading new arrivals", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewArrivals();
  }, []);

  return { products, loading };
}
