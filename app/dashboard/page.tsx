"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/app/config/config";
import axios from "axios";
import Users from "./components/users/Users";
import { useAuth } from "../context/authContext";

const page = () => {
  const { state } = useAuth();
  const { user } = state;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        const response = await axios.get(`${BASE_URL}api/users`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
    return () => {};
  }, []);
  return (
    <section className="w-[78%] px-[2%] pb-[2%]">
      <div className="flex py-[1%] justify-end">
        <p className="text-[1rem]">
          Welcome to the dashboard!
          <span className="font-semibold pl-1">{user?.username}</span>
        </p>
      </div>
      <section className="w-full">
        <div className="flex flex-wrap justify-between w-full">
          <div className="products flex flex-col justify-center items-center rounded-lg border-2 border-gray-400 w-[30%] py-[2%] bg-white shadow-lg">
            <h1 className="text-2xl font-bold font-garamond text-gray-800 mb-2">
              Products:
            </h1>
            <p className="text-lg font-semibold text-gray-700">23</p>
          </div>
          <div className="users flex flex-col justify-center items-center rounded-lg border-2 border-gray-400 w-[30%] py-[2%] bg-white shadow-lg">
            <h1 className="text-2xl font-bold font-garamond text-gray-800 mb-2">
              Total Users:
            </h1>
            <p className="text-lg font-semibold text-gray-700">
              {users.length}
            </p>
          </div>
          <div className="orders flex flex-col justify-center items-center rounded-lg border-2 border-gray-400 w-[30%] py-[5%] bg-white shadow-lg">
            <h1 className="text-2xl font-bold font-garamond text-gray-800 mb-2">
              Orders Placed:
            </h1>
            <p className="text-lg font-semibold text-gray-700">21</p>
          </div>
        </div>
      </section>
      <section className="py-[2%]">
        <div className="users">{users && <Users userList={users} />}</div>
      </section>
    </section>
  );
};

export default page;
