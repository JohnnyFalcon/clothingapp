import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const remove = (cartItems, objectToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== objectToRemove.id);
};

const removeElement = (cartItems, objectToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === objectToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== objectToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === objectToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  basketCount: 0,
  removeAll: () => {},
  removeOne: () => {}
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [basketCount, setBasketCount] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const newBasketCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setBasketCount(newBasketCount);
  }, [cartItems]);

  useEffect(() => {
    const sum = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotal(sum);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeAll = (objectToRemove) => {
    setCartItems(remove(cartItems, objectToRemove));
  };

  const removeOne = (objectToRemove) => {
    setCartItems(removeElement(cartItems, objectToRemove));
  };
  const value = {
    addItemToCart,
    cartItems,
    basketCount,
    setCartItems,
    removeAll,
    removeOne,
    total
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
