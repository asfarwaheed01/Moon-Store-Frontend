import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-[#3A3845] w-[20%] min-h-[90vh] p-5 border-b-2 border-gray-400">
      <h1 className="text-[1.2rem] text-white mb-6 font-bold">
        Admin Dashboard
      </h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className="text-white hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/products"
              className="text-white hover:text-gray-300"
            >
              All Products
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/addproduct"
              className="text-white hover:text-gray-300"
            >
              Add Product
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
