import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

// icons
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

// properties data
export const PROPERTIES = [
  {
    title: "Cassava Lot A - Dry Roots",
    image: img1,
    category: "Cassava",
    address: "Ikenne Farm, Ogun State",
    country: "Nigeria",
    state: "Ogun",
    city: "Ikenne",
    price: 85000,
    description:
      "High-quality cassava roots suitable for garri production. Low moisture, cleaned and graded.",
    details: {
      weight_kg: 1000,
      moisture_percent: 12,
      grade: "A",
    },
  },
  {
    title: "Cassava Lot B - Wet Roots",
    image: img2,
    category: "Cassava",
    address: "Aba Farmland, Abia State",
    country: "Nigeria",
    state: "Abia",
    city: "Aba",
    price: 65000,
    description:
      "Freshly harvested cassava roots; ideal for processing into garri after drying.",
    details: {
      weight_kg: 1200,
      moisture_percent: 18,
      grade: "B",
    },
  },
  {
    title: "Processed Garri - Fine Grade",
    image: img3,
    category: "Garri",
    address: "Makurdi Processing Unit",
    country: "Nigeria",
    state: "Benue",
    city: "Makurdi",
    price: 120000,
    description:
      "Ready-to-sell fine-grade garri processed from tested cassava batches.",
    details: {
      weight_kg: 50,
      moisture_percent: 5,
      grade: "Fine",
    },
  },
  {
    title: "Cassava Lot C - Organic",
    image: img4,
    category: "Cassava",
    address: "Ondo Organic Farm",
    country: "Nigeria",
    state: "Ondo",
    city: "Ondo",
    price: 98000,
    description:
      "Organically grown cassava, no chemical fertilisers used. Suitable for premium garri.",
    details: {
      weight_kg: 800,
      moisture_percent: 11,
      grade: "Organic",
    },
  },
  {
    title: "Processed Garri - Coarse",
    image: img5,
    category: "Garri",
    address: "Lagos Trading Depot",
    country: "Nigeria",
    state: "Lagos",
    city: "Lagos",
    price: 90000,
    description:
      "Coarse garri, traditionally processed. Bulk quantities available.",
    details: {
      weight_kg: 25,
      moisture_percent: 6,
      grade: "Coarse",
    },
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Us",
      "Latest Items",
      "Hot Offers",
      "Popular residencies",
      "FAQ",
      "Privacy Policy",
    ],
  },
  {
    title: "Our Community",
    links: ["Terms and Conditions", "Special Offers", "Customer Reviews"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Contact Number", value: "08027928841 / 08073433054" },
    { label: "Email Address", value: "speelixidealhome@gmail.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    { icon: <FaFacebook />, id: "facebook" },
    { icon: <FaInstagram />, id: "instagram" },
    { icon: <FaTwitter />, id: "twitter" },
    { icon: <FaYoutube />, id: "youtube" },
    { icon: <FaLinkedin />, id: "linkedin" },
  ],
};
