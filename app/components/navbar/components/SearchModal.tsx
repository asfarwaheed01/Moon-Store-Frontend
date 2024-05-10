"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import Product from "../../bestsellers/product.type";
import { api } from "@/app/hooks/api";
import { useDebounce } from "@/app/hooks/useDebounce";
import Link from "next/link";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  //   const debouncedSearchTerm = useDebounce(searchTerm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async (searchTerm: any) => {
    try {
      setLoading(true);
      const response = await api.get<Product[]>(
        `/products/search/${searchTerm}`
      );
      setSearchResults(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  const search = () => {
    handleSearch(searchTerm);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Search Products
          <CloseIcon onClick={onClose} sx={{ cursor: "pointer" }} />
        </Typography>
      </DialogTitle>
      <DialogContent>
        <div className="search-container flex">
          <TextField
            variant="outlined"
            value={searchTerm}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <IconButton
            onClick={search}
            disabled={loading}
            sx={{
              backgroundColor: "#f4f4f4",
              width: "40px",
              height: "55px",
              borderRadius: "0px",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
        <div className="search-results">
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <Link href={`/products/${product._id}`}>
                <div
                  key={product._id}
                  className="product flex items-center mb-2"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 mr-2 rounded-lg"
                  />
                  <Typography variant="body1">{product.name}</Typography>
                </div>
              </Link>
            ))
          ) : (
            <Typography variant="body1">No products found.</Typography>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
