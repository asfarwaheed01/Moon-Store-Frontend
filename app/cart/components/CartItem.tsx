"use client";
import React from "react";
import { useAuth } from "@/app/context/authContext";
import trash from "../../../public/assets/Trash.png";
import Image from "next/image";

const CartItem = () => {
  const { state, dispatch } = useAuth();
  const { cart } = state;

  const handleQuantityChange = (index: any, value: any) => {
    const updatedCart = [...cart];
    const updatedItem = { ...updatedCart[index] };
    updatedItem.quantity += value;
    if (updatedItem.quantity < 1) {
      updatedCart.splice(index, 1);
    } else {
      updatedCart[index] = updatedItem;
    }
    dispatch({ type: "SET_CART", payload: updatedCart });
  };

  const handleRemoveFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item.product._id !== productId);
    dispatch({ type: "SET_CART", payload: updatedCart });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className="bg-[#3A3845] text-white">
          <tr>
            <th className="px-2 py-2">
              <Image src={trash} alt="Delete" className="cursor-pointer" />{" "}
            </th>
            <th className="px-2 py-2">Photo</th>
            <th className="px-2 py-2">Product</th>
            <th className="px-2 py-2">Price</th>
            <th className="px-2 py-2">Quantity</th>
            <th className="px-2 py-2">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index} className="border-b border-black md:height-[300px]">
              <td
                className="px-4 py-2 text-black font-semibold cursor-pointer"
                onClick={() => handleRemoveFromCart(item.product._id)}
              >
                X
              </td>
              <td className="px-4 py-2 w-[20%]">
                <img
                  className="h-[200px] w-[300px]"
                  src={item.product.image}
                  alt={item.product.name}
                />
              </td>
              <td className="px-4 py-2">{item.product.name}</td>
              <td className="px-4 py-2">${item.product.price.toFixed(2)}</td>
              <td className="px-4 py-2">
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(index, -1)}
                    className="px-2 py-1 bg-gray-200 rounded-l"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(index, 1)}
                    className="px-2 py-1 bg-gray-200 rounded-r"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="px-4 py-2">
                ${(item.product.price * item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartItem;
