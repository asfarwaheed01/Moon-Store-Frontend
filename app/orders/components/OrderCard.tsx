import React from "react";
import Image from "next/image";
import ordered from "../../../public/assets/ordered.png";

interface Product {
  product: {
    name: string;
    price: number;
  }[];
  quantity: number;
}

interface Order {
  _id: string;
  totalAmount: number;
  products: Product[];
  status: string;
}

const OrderCard: React.FC<Order> = ({ _id, totalAmount, products, status }) => {
  return (
    <div className="bg-white shadow-md border-[1px] border-[#3A3845] rounded-lg p-6 mb-4 md:w-[30%] mx-[5%] md:mx-0">
      <div className="flex items-center justify-between">
        <Image src={ordered} alt="ordered" width={50} height={50} />
        <span
          className={`text-sm font-semibold ${
            status === "pending" ? "text-yellow-500" : "text-green-500"
          }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      <h2 className="text-lg font-bold mt-4">Order ID: {_id}</h2>
      <div className="mt-4">
        {products.map((item, index) => (
          <div key={index} className="border-b py-2">
            {item.product.map((prod, i) => (
              <div key={i} className="flex justify-between">
                <span>{prod.name}</span>
                <span>
                  {item.quantity} x ${prod.price}
                </span>
              </div>
            ))}
            <div className="flex justify-between mt-1">
              <span className="font-semibold">Total</span>
              <span>${(item.quantity * item.product[0].price).toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <span className="font-bold">
          Sub Total <span className="font-normal">(includes shipping)</span>
        </span>
        <span className="font-bold">${totalAmount}</span>
      </div>
    </div>
  );
};

export default OrderCard;
