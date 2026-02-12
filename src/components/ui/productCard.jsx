import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react"

const badgeStyles = {
  SALE: "bg-red-500 text-white",
  NEW: "bg-green-500 text-white",
  BEST: "bg-blue-500 text-white",
  HOT: "bg-pink-500 text-white",
  POPULAR: "bg-purple-500 text-white",
};

export default function ProductCard({ product }) {
  return (
    <Card className="group overflow-hidden border hover:shadow-md transition z-0">
      <CardHeader className="p-4 text-left">
        <CardTitle className="text-sm font-semibold mb-1 hover:text-orange-500 cursor-pointer">
          {product.name}
        </CardTitle>
        <CardDescription className="text-xs text-gray-500">
          {product.shortdescription}
        </CardDescription>
      </CardHeader>
      {/* IMAGE */}
      <div className="relative bg-gray-100">
        <img src={product.img} alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* BADGE */}
        {product.badge && (
          <div className="absolute top-3 left-0">
            <span
              className={`
        relative text-white text-xs font-semibold px-3 py-1 pl-4
        ${badgeStyles[product.badge] || "bg-gray-500"}
      `}
            >
              {product.badge}
            </span>
          </div>
        )}

      </div>

      {/* CONTENT */}
      <CardContent className="p-4 text-justify mt-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-y-2 mb-3">

          {/* PRICE */}
          <p className="font-semibold text-left sm:text-left">
            ${product.price}
          </p>

          {/* RATING BLOCK */}
          <div className="flex flex-col sm:items-end items-start">

            {/* STARS */}
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className={`${star <= (product.rating || 4)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                    }`}
                />
              ))}
            </div>

            {/* REVIEWS */}
            <span className="text-xs text-gray-500 mt-1">
              ({product.reviews} reviews)
            </span>


          </div>
        </div>

        {/* BUTTON */}
        <Button className="w-full bg-orange-500 hover:bg-orange-600">
          Add to cart
        </Button>
      </CardContent>
    </Card>
  )
}
