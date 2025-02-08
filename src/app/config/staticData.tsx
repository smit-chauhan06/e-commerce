import { Images } from "./Files";

export const DrawerItems = [
  {
    id: 1,
    name: "Home",
    navigate: "/",
  },
  {
    id: 2,
    name: "Contact",
    navigate: "/",
  },
  {
    id: 3,
    name: "About",
    navigate: "/",
  },
  {
    id: 4,
    name: "Sign Up",
    navigate: "/",
  },
];

export const ProductDetails = [
  {
    id: 1,
    name: "HAVIT HV-92 Gamepad",
    price: 120,
    oldPrice: 160,
    rating: 5,
    noRating: 88,
    discount: 40,
    isAddedToCart: false,
    image: Images.gamePad,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1600,
    rating: 4,
    noRating: 75,
    discount: 35,
    isAddedToCart: true,
    image: Images.keyboard,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    rating: 5,
    noRating: 99,
    discount: 30,
    isAddedToCart: false,
    image: Images.screen,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    rating: 4,
    noRating: 99,
    discount: 35,
    isAddedToCart: false,
    image: Images.chair,
  },
];
