import React from "react";
import { Truck, DollarSign, ShieldCheck, Headphones } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Shipping", desc: "On all orders over $50" },
  {
    icon: DollarSign,
    title: "Money Back Guarantee",
    desc: "30-day money back guarantee",
  },
  { icon: ShieldCheck, title: "Secure Payment", desc: "100% secure payment" },
  { icon: Headphones, title: "24/7 Support", desc: "We are here to help you" },
];
function FeaturesBar() {
  return (
    <section className="bg-secondary/50 py-8 mt-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-6 px-4 ">
        {features.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <item.icon className="h-8 w-8 text-accent shrink-0" />
            <div>
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default FeaturesBar;
