import React from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  price?: number;
}

interface ProductCardProps {
  product: Product;
  handleDelete: (productId: string) => void;
  openEditModal: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  handleDelete,
  openEditModal,
}) => {
  return (
    <div className="w-full h-[150px] flex m-4 bg-white border border-black rounded-lg shadow-lg overflow-hidden pb-2">
      <img
        className="w-1/3 h-40 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="flex flex-col justify-between w-2/3 p-4">
        <div>
          <h3 className="text-xl text-black font-semibold mb-2">
            {product.name}
          </h3>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-gray-700">Price: ${product.price}</p>
        </div>
        <div className="flex space-x-4">
          <Button
            onClick={() => handleDelete(product._id)}
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            onClick={() => openEditModal(product._id)}
            variant="contained"
            color="success"
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
