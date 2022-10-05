import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ProductDetails() {
  const { state } = useLocation();
  const item = state || [];

  return item ? (
    <div>
      <p> {item.name} </p>
    </div>
  ) : (
    "salut"
  );
}

export default ProductDetails;
