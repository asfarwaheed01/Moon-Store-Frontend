import { Pagination } from "@mui/material";
import React from "react";

const Pagenation = () => {
  return (
    <div className="flex justify-center mx-auto mt-4">
      <Pagination count={4} variant="outlined" shape="rounded" />
    </div>
  );
};

export default Pagenation;
