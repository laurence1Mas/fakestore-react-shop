import React from "react";
import { Truck, DollarSign, ShieldCheck, Headphones } from "lucide-react";
import { FaCreditCard, FaShippingFast } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const features = [
  {
    icon: MdLocalShipping,
    title: "Free Shipping",
    desc: "On all orders over $50",
  },
  {
    icon: RiMoneyDollarCircleLine,
    title: "Money Back Guarantee",
    desc: "30-day money back guarantee",
  },
  { icon: FaCreditCard, title: "Secure Payment", desc: "100% secure payment" },
  { icon: FaUserGear, title: "24/7 Support", desc: "We are here to help you" },
];
function FeaturesBar() {
  return (
    <section className="bg-secondary/50 py-12 px-4 md:px-52">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-4 md:gap-7 px-4 ">
        {features.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-center gap-3"
          >
            <item.icon className="h-9 w-9 text-accent shrink-0" />
            <div>
              <h3 className="text-xs font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default FeaturesBar;
