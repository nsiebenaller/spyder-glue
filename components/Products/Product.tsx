"use client";
import React from "react";
import { loadBuyButton } from "@/lib/shopify";

const Product: React.FC<{
  productId: string;
}> = ({ productId }) => {
  return <BuyButton productId={productId} />;
};

export default Product;

const BuyButton: React.FC<{ productId: string }> = ({ productId }) => {
  const loadedRef = React.useRef<boolean>(false);
  const buttonRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!buttonRef.current) return;
    if (loadedRef.current) return;
    if (buttonRef.current.dataset.loaded === "true") return;
    loadedRef.current = true;
    buttonRef.current.dataset.loaded = "true";
    loadBuyButton({
      node: buttonRef.current,
      productId,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={buttonRef} />;
};
