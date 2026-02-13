import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalPrice,
  } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Votre panier est vide 😢</h2>
        <Link to="/product">
          <Button>Retourner aux produits</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 px-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Mon Panier</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border p-4 rounded-xl"
        >
          <div className="flex items-center gap-4">
            <img src={item.image} className="w-20 h-20 object-contain" />
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>{item.price}$</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full transition-all duration-300 text-xl font-medium"
            >
              -
            </button>
            <span className="font-bold text-2xl m-4">{item.quantity}</span>
            <button
              onClick={() => increaseQuantity(item.id)}
              className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full transition-all duration-300 text-xl font-medium"
            >
              +
            </button>
          </div>

          <p className="font-bold">
            {(item.quantity * item.price).toFixed(2)}$
          </p>

          <Button variant="destructive" onClick={() => removeFromCart(item.id)}>
            Supprimer
          </Button>
        </div>
      ))}

      <div className="flex justify-between items-center mt-10">
        <Button variant="destructive" onClick={clearCart}>
          Vider le panier
        </Button>

        <div className="text-2xl font-bold">
          Total : {totalPrice.toFixed(2)}$
        </div>
      </div>

      <div className="mx-auto text-center">
        {" "}
        <Link to="/product">
          <Button>Retourner aux produits</Button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
