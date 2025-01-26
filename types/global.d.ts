declare global {
  var ShopifyBuy:
    | { UI: { onReady: (params: any) => Promise<any> }; buildClient: any }
    | undefined;
}

export {};
