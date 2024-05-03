import { InputLabel, Link, NativeSelect } from "@mui/material";
import React from "react";
import Product from "@/app/components/bestsellers/product.type";
import Container from "@/app/components/Container";

interface ShopHeaderProps {
  products?: Product[];
}

const ShopHeader: React.FC<ShopHeaderProps> = ({ products }) => {
  const productsCount = products?.length ?? 0;
  return (
    <section>
      <Container>
        <section>
          <div className="shop-links mb-[2%]">
            <p className="text-[#807F86] text-[0.875rem]">
              <Link
                href="/"
                className="text-[#807F86] text-[0.875rem] no-underline"
              >
                Home
              </Link>
              <span className="mx-1">/</span>Shop
            </p>
          </div>
          <div className="products-length relative">
            <div className="flex justify-between">
              <div className="w-[20%]">
                <p className="text-[#374151] text-[1rem] font-sans pb-4">
                  <span className="font-semibold">Showing:</span>
                  <span className="mx-1">{products?.length}</span>
                  <span>items</span>
                </p>
                <div className="md:block hidden">
                  <p className="w-[100%] border-b-[1px] border-[#807F86]"></p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native"
                  className="text-[#3A3845] text-[0.875rem]"
                >
                  Sort by:
                </InputLabel>
                <NativeSelect
                  defaultValue="name"
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                  sx={{
                    ":hover": { border: "none" },
                    ":focus": { border: "none" },
                    width: "120px",
                    fontSize: "14px",
                  }}
                >
                  <option value={10}>name</option>
                  <option value={20}>price</option>
                  <option value={30}>category</option>
                </NativeSelect>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default ShopHeader;
