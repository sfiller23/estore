import React from "react";
import { useAppSelector } from "../../Redux/hooks/reduxHooks";
import EmptyCart from "./EmptyyCart/EmptyCart";
import FilledCart from "./FilledCart/FilledCart";

const Cart = () => {
  const cart = useAppSelector((state) => state.cr);
  return (
    <div>{cart.cartItems.length === 0 ? <EmptyCart /> : <FilledCart />}</div>
  );
};

export default Cart;
