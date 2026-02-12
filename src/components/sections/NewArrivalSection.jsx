import ProductCard from "@/components/ui/productCard";
import useNewArrivals from "@/hooks/useNewArrivals";

function NewArrivalSection() {
  const { products, loading } = useNewArrivals();

  if (loading)
    return (
      <section className="py-12 text-center">
        <p>Loading new arrivals...</p>
      </section>
    );

  return (
    <section className="py-12 px-8 md:px-56">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">New Arrival</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewArrivalSection;
