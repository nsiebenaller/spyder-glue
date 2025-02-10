export const NODE_ENV = String(process.env.NODE_ENV);
export const IS_PRODUCTION = NODE_ENV === "production";
export const IS_GITHUB_PAGES = Boolean(process.env.GITHUB_PAGES);
