

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Zap, ShieldCheck, Truck, Heart, Smartphone } from "lucide-react";


function Feature({ icon, title, text }) {
  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
      <CardContent className="p-6 space-y-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-muted">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm">{text}</p>
      </CardContent>
    </Card>
  );
}

function Row({ name, fast, other }) {
  return (
    <tr className="border-t">
      <td className="p-4 font-medium">{name}</td>
      <td className="p-4">{fast}</td>
      <td className="p-4 text-muted-foreground">{other}</td>
    </tr>
  );
}
export default function Features() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground pt-28 pb-20 px-4 md:px-12">
      {/* Hero */}
      <section className="max-w-5xl mx-auto text-center space-y-6 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold">Powerful Features</h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          FastShop is built to deliver speed, security and simplicity in every
          step of your shopping experience.
        </p>
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600">Start Shopping</Button>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24">
        <Feature icon={<Search />} title="Smart Search" text="Find products instantly with intelligent suggestions." />
        <Feature icon={<Zap />} title="Fast Checkout" text="Complete your order in seconds without complexity." />
        <Feature icon={<ShieldCheck />} title="Secure Payment" text="All transactions are encrypted and protected." />
        <Feature icon={<Truck />} title="Order Tracking" text="Track your delivery in real time from dashboard." />
        <Feature icon={<Heart />} title="Wishlist" text="Save your favorite products for later purchase." />
        <Feature icon={<Smartphone />} title="Mobile Optimized" text="Perfect experience on every screen size." />
      </section>

      {/* Comparison */}
      <section className="max-w-5xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Choose FastShop</h2>
        <div className="rounded-2xl border overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-muted">
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4">FastShop</th>
                <th className="p-4">Others</th>
              </tr>
            </thead>
            <tbody>
              <Row name="Speed" fast="Instant" other="Slow" />
              <Row name="Checkout" fast="1 Step" other="Multiple steps" />
              <Row name="Mobile UX" fast="Optimized" other="Limited" />
              <Row name="Security" fast="Encrypted" other="Basic" />
              <Row name="Navigation" fast="Simple" other="Complex" />
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}


