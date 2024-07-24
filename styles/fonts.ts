import { Hind, Rozha_One, Playfair, Hubballi } from "next/font/google";

const hind = Hind({ weight: ["300", "500", "700"], subsets: ["latin"] });
const rozhaOne = Rozha_One({ weight: ["400"], subsets: ["latin"] });
const playfair = Playfair({
  weight: ["500", "700"],
  subsets: ["latin"],
  style: ["italic"],
});
const hubballi = Hubballi({
  weight: ["400"],
  subsets: ["latin"],
});

const fonts = {
  hind: hind.className,
  rozhaOne: rozhaOne.className,
  playfair: playfair.className,
  hubballi: hubballi.className,
};
export default fonts;
