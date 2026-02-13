import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [total, setTotal] = useState(0);

  // Recalcul du total à chaque modification du panier
  useEffect(() => {
    const sum = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    setTotal(sum);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Supprimer un article avec animation (fade out)
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Modifier quantité avec boutons + et -
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  if (cartItems.length === 0) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Votre panier est vide 😢</h2>
        <Link to="/products">
          <Button variant="default" size="lg" className="rounded-2xl px-8 py-3">
            Retourner aux produits
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
        Mon Panier
      </h1>

      <div className="flex flex-col gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-xl hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center gap-4 w-full md:w-2/3">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-lg font-bold mt-2">{item.price} $ / unité</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4 md:mt-0">
              {/* Boutons quantité */}
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-4 py-1">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Sous-total */}
              <p className="font-bold w-24 text-right">
                {(item.price * item.quantity).toFixed(2)} $
              </p>

              {/* Supprimer */}
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeItem(item.id)}
              >
                Supprimer
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer du panier */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <Button
          variant="destructive"
          size="lg"
          onClick={clearCart}
          className="rounded-2xl"
        >
          Vider le panier
        </Button>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <h2 className="text-2xl font-bold">Total : {total.toFixed(2)} $</h2>
          <Button variant="default" size="lg" className="rounded-2xl">
            Passer la commande
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
