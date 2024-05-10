"use client";
import React from "react";
import { useAuth } from "@/app/context/authContext";
import trash from "../../../public/assets/Trash.png";
import Image from "next/image";

const tableHeaders = [
  { title: "", key: "delete" },
  { title: "Photo", key: "photo" },
  { title: "Product", key: "product" },
  { title: "Price", key: "price" },
  { title: "Quantity", key: "quantity" },
  { title: "Subtotal", key: "subtotal" },
];

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
      <table className="md:block hidden min-w-full table-auto">
        <thead className="bg-[#3A3845] text-white">
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index} className="px-2 py-2">
                {header.key === "delete" ? (
                  <Image src={trash} alt="Delete" className="cursor-pointer" />
                ) : (
                  header.title
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index} className="border-b border-black md:height-[300px]">
              <td
                className="px-4 py-2 text-[#E54335] cursor-pointer"
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
              <td className="w-[20%] text-center py-2">{item.product.name}</td>
              <td className="px-4 text-center py-2">
                ${item.product.price.toFixed(2)}
              </td>
              <td className="px-4 py-2">
                <div className="flex items-center justify-center">
                  <div className="border-black border-[1px]">
                    <button
                      onClick={() => handleQuantityChange(index, -1)}
                      className="px-2 py-1 rounded-l"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(index, 1)}
                      className="px-2 py-1  rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
              </td>
              <td className="px-4 py-2 text-center">
                ${(item.product.price * item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <section className="md:hidden">
        {cart.map((item, index) => (
          <div className="mobile-cart mx-[4%] flex flex-col gap-2 mb-2">
            <div className="cross-button">
              <p
                className=" text-[#E54335] cursor-pointer"
                onClick={() => handleRemoveFromCart(item.product._id)}
              >
                X
              </p>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <img
                  className="h-[141px] w-[120px]"
                  src={item.product.image}
                  alt={item.product.name}
                />
              </div>
              <div>
                <p className="font-semibold text-[0.875rem]">
                  {item.product.name}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[0.875rem]">PRICE:</p>
              <p className="text-[0.875rem] font-semibold">
                ${item.product.price.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="text-[0.875rem]">QUANTITY:</div>
              <div className="flex items-center justify-center">
                <div className="border-black border-[1px]">
                  <button
                    onClick={() => handleQuantityChange(index, -1)}
                    className="px-2 py-1 rounded-l"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(index, 1)}
                    className="px-2 py-1  rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div>
                <p className="text-[0.875rem]">SUBTOTAL:</p>
              </div>
              <div>
                <p className="text-[#C69B7B] text-[0.875rem] font-semibold">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="border-b-[1px] border-black" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default CartItem;
