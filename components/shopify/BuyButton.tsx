"use client";
import React from "react";
import { loadBuyButton } from "@/lib/shopify";

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
      domain: "1ezzbp-t5.myshopify.com",
      storefrontAccessToken: "f233627e70e40f0d4deac23adae373b4",
      node: buttonRef.current,
      productId,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={buttonRef} />;
};

export default BuyButton;
