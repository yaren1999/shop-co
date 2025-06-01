"use client";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("cart");
      setCartItems(cart ? JSON.parse(cart) : []);
    }
  }, []);

  // Sepeti tamamen temizleme
  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  // Tek bir ürünü silme
  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  if (cartItems.length === 0) {
    return <p>Sepetin boş 😢</p>;
  }

  return (
    <div>
      <h2>Sepetiniz</h2>

      <button
        onClick={clearCart}
        style={{
          backgroundColor: "crimson",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Sepeti Temizle 🗑️
      </button>

      <ul>
        {cartItems.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <img src={item.image} alt={item.name} width={50} height={50} />
            <span style={{ marginLeft: "10px" }}>{item.name}</span> -{" "}
            <strong>{item.price} TL</strong>

            <button
              onClick={() => removeItem(index)}
              style={{
                marginLeft: "10px",
                background: "darkred",
                color: "white",
                border: "none",
                padding: "4px 8px",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Sil 🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;

