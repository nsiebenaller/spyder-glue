import { Hind, Rozha_One, Playfair } from "next/font/google";

export const hind = Hind({ weight: ["300", "500"], subsets: ["latin"] });
export const rozhaOne = Rozha_One({ weight: ["400"], subsets: ["latin"] });
export const playfair = Playfair({
  weight: ["500", "700"],
  subsets: ["latin"],
  style: ["italic"],
});
