import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const STORE_DOMAIN = String(process.env.NEXT_PUBLIC_STORE_DOMAIN);
const SHOPIFY_BLOG_ACCESS_TOKEN = String(
  process.env.NEXT_PUBLIC_SHOPIFY_BLOG_ACCESS_TOKEN,
);
const SHOPIFY_STORE_ACCESS_TOKEN = String(
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_ACCESS_TOKEN,
);

const ShopifyScriptURL =
  "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

export function loadBuyButton({
  node,
  productId,
}: {
  node: HTMLElement;
  productId: string;
}) {
  async function ShopifyBuyInit() {
    if (!ShopifyBuy) return;
    const client = ShopifyBuy.buildClient({
      domain: STORE_DOMAIN,
      storefrontAccessToken: SHOPIFY_STORE_ACCESS_TOKEN,
    });
    const ui = await ShopifyBuy.UI.onReady(client);
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
    return;
  }
  // Load Shopify script and initialize
  loadScript();
}

const client = createStorefrontApiClient({
  storeDomain: STORE_DOMAIN,
  apiVersion: "2025-04",
  publicAccessToken: SHOPIFY_BLOG_ACCESS_TOKEN,
});

export default client;

export type BlogPost = {
  id: string;
  handle: string;
  contentHtml: string;
  image: {
    url: string | null;
    altText: string | null;
  } | null;
  title: string;
};
export function getBlogPosts() {
  const blogPostsQuery = `
    query {
      articles(first: 100) {
        nodes {
          id
          handle
          contentHtml
          image {
            url
            altText
          }
          title
        }  
      }
    }
  `;
  return client.request<{ articles: { nodes: BlogPost[] } }>(blogPostsQuery);
}

export function getBlogPost(handle: string) {
  const blogPostsQuery = `
    query {
      blog(handle: "main") {
        articleByHandle(handle: "${handle}") {
          id
          handle
          contentHtml
          image {
            url
            altText
          }
          title
        }
      }
    }
  `;
  return client.request<{ blog: { articleByHandle: BlogPost } }>(
    blogPostsQuery,
  );
}

export function getOurStory() {
  const blogPostsQuery = `
    query {
      blog(handle: "homepage") {
        articleByHandle(handle: "our-story") {
          id
          handle
          contentHtml
          image {
            url
            altText
          }
          title
        }
      }
    }
  `;
  return client.request<{ blog: { articleByHandle: BlogPost } }>(
    blogPostsQuery,
  );
}
