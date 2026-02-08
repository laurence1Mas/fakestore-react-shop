import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react"


export default function ProductCard({ product }) {
  return (
    <Card className="group overflow-hidden border hover:shadow-md transition">

      {/* IMAGE */}
      <div className="relative bg-gray-100">
        <img
          src={`https://picsum.photos/${product.img}`}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
        />

        {/* BADGE */}
        {product.badge && (
          <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-500">
            {product.badge}
          </Badge>
        )}
      </div>

      {/* CONTENT */}
      <CardContent className="p-4 text-center">
        <h3 className="text-sm font-medium mb-2 hover:text-orange-500 cursor-pointer">
          {product.name}
        </h3>

        {/* PRICE */}
        <p className="font-semibold mb-2">${product.price}</p>

        {/* STARS */}
        <div className="flex justify-center gap-1 mb-3">
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


        {/* BUTTON */}
        <Button className="w-full bg-orange-500 hover:bg-orange-600">
          Add to cart
        </Button>
      </CardContent>
    </Card>
  )
}
