// import { useQuery } from "@tanstack/react-query";
// import Product from "../components/bestsellers/product.type";
// import { api } from "./api";

// export const useFindProducts = (searchTerm: string) => {
//   return useQuery({
//     queryKey: ["findProducts"],
//     queryFn: async () => {
//       const response = await api.get<Product[]>(
//         `/products/search/${searchTerm}`
//       );
//       return response.data;
//     },
//   });
// };

import { useQuery } from "@tanstack/react-query";
import Product from "../components/bestsellers/product.type";
import { api } from "./api";

export const useFindProducts = (searchTerm: string) => {
  const minLength = 2;

  return useQuery(
    ["findProducts", searchTerm],
    async () => {
      if (searchTerm.length >= minLength) {
        const response = await api.get<Product[]>(
          `/products/search/${searchTerm}`
        );
        return response.data;
      }
      return [];
    },
    { enabled: searchTerm.length >= minLength }
  );
};
