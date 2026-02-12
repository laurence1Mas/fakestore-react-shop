import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, HeartHandshake, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground pt-28 pb-16 px-4 md:px-12">
      {/* Hero */}
      <section className="max-w-6xl mx-auto text-center space-y-6 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          About FastShop
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          FastShop is a modern e‑commerce experience designed to make shopping
          simple, fast and enjoyable. We focus on accessibility, speed and a
          clean user experience for everyone.
        </p>
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600">Explore Products</Button>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our mission is to simplify online shopping by combining elegant
            design with powerful technology. We believe buying online should be
            fast, secure and intuitive regardless of device or location.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            FastShop aims to empower businesses and customers by providing a
            platform that removes friction from discovery to checkout.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <InfoCard icon={<Target />} title="Innovation" text="We continuously improve performance and usability." />
          <InfoCard icon={<HeartHandshake />} title="Trust" text="Secure transactions and transparent processes." />
          <InfoCard icon={<Users />} title="Community" text="We build products people actually enjoy using." />
          <InfoCard icon={<Globe />} title="Accessibility" text="Available everywhere, on every device." />
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ValueCard title="Customer First" text="Every decision we make starts with improving user experience." />
          <ValueCard title="Performance" text="Speed is not a feature — it's a requirement." />
          <ValueCard title="Simplicity" text="We remove complexity so shopping feels natural." />
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {['Alex','Laurence','Delphin','Sarah'].map((name,i)=> (
            <Card key={i} className="rounded-2xl shadow-sm hover:shadow-md transition">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-20 h-20 mx-auto rounded-full bg-muted" />
                <h3 className="font-medium">{name}</h3>
                <p className="text-sm text-muted-foreground">Frontend Developer</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-semibold">Join our journey</h2>
        <p className="text-muted-foreground">
          We are constantly improving FastShop. Be part of our growing platform
          and experience a new way to shop online.
        </p>
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600">Start Shopping</Button>
      </section>
    </div>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
      <CardContent className="p-6 space-y-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}

function ValueCard({ title, text }) {
  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
      <CardContent className="p-8 text-center space-y-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}
