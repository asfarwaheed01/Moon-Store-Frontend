"use client";
import React, { useContext } from "react";
import Container from "../components/Container";
import axios from "axios";
import { BASE_URL } from "../config/config";
import { AuthContext } from "../context/authContext";
import { useQuery } from "@tanstack/react-query";
import OrderCard from "./components/OrderCard";

const Page = () => {
  const { state } = useContext(AuthContext);
  const { user } = state;

  const fetchOrders = async () => {
    const id = user?._id;
    if (!id) throw new Error("User ID is not available");
    try {
      const response = await axios.get(`${BASE_URL}order/${id}`);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch orders");
      throw new Error("Failed to fetch orders");
    }
  };

  const {
    data: orders,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>No Orders Found.</p>;

  return (
    <section>
      <Container>
        <div className="py-[5%]">
          <h1 className="text-[2rem] mb-4 font-garamond text-center font-bold">
            Orders
          </h1>
          <div className="md:flex flex-wrap justify-center gap-5">
            {orders &&
              orders.map((order: any) => (
                <OrderCard
                  key={order._id}
                  _id={order._id}
                  totalAmount={order.totalAmount}
                  products={order.products}
                  status={order.status}
                />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Page;
