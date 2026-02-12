import { useEffect, useState } from "react";
import { getAllProducts } from "@/services/productService";

export default function useBestSeller() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchBestSellers = async () => {
            try {
                const data = await getAllProducts();
                // prendre les 4 produits les plus vendus 
                const bestSellers = data.sort((a, b) => b.sales - a.sales).slice(0, 4); setProducts(bestSellers);
            }
            catch (error) {
                console.error("Error loading best sellers", error);
            }
            finally { setLoading(false); }
        };
        fetchBestSellers();
    }, []);
    return { products, loading };
}
