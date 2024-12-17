declare global {
  var ShopifyBuy:
    | { UI: { onReady: (params: any) => Promise<any> }; buildClient: any }
    | undefined;
}

const ShopifyScriptURL =
  "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

export function loadBuyButton({
  domain,
  storefrontAccessToken,
  node,
  productId,
}: {
  domain: string;
  storefrontAccessToken: string;
  node: HTMLElement;
  productId: string;
}) {
  function ShopifyBuyInit() {
    if (!ShopifyBuy) return;
    const client = ShopifyBuy.buildClient({
      domain,
      storefrontAccessToken,
    });
    ShopifyBuy.UI.onReady(client).then((ui) => {
      ui.createComponent("product", {
        id: productId,
        node,
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              title: {
                color: "#FFF",
              },
              price: {
                color: "#FFF",
              },
              compareAt: {
                color: "#ffffff",
              },
              unitPrice: {
                color: "#ffffff",
              },
              description: {
                color: "#ffffff",
              },
              button: {
                "background-color": "#7FFC41",
                color: "#236B08",
                "font-weight": "bold",
                ":hover": {
                  "background-color": "#75E93B",
                },
              },
            },
            text: {
              button: "Add to cart",
            },
            layout: "horizontal",
            contents: {
              img: false,
              imgWithCarousel: true,
              description: true,
            },
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
            },
            text: {
              button: "Add to cart",
            },
          },
          option: {},
          cart: {
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
          },
          toggle: {},
        },
      });
    });
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = ShopifyScriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  // Check if Shopify script has been loaded
  if (window.ShopifyBuy && window.ShopifyBuy.UI) {
    ShopifyBuyInit();
  }
  // Load Shopify script and initialize
  loadScript();
}
