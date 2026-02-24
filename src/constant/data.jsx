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
    title: "palm Oil",
    image: img1,
    category: "oil",
    country: "Nigeria",
    description:
      "High-quality palm oil roots suitable for  production.  cleaned and graded.",
    details: {
      grade: "A",
    },
  },
  {
    title: "Palm Oil",
    image: img2,
    category: "Palm Oil",
    address: "Aba Farmland, Abia State",
    country: "Nigeria",
    state: "Abia",
    city: "Aba",
    price: 65000,
    description:
      "Freshly harvested Palm Oil ; ideal for production.",
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
    description:
      "Ready-to-sell fine-grade garri processed from tested cassava batches.",
    details: {
      weight_kg: 50,
      moisture_percent: 5,
      grade: "Fine",
    },
  },
  {
    title: "palm Oil - Organic",
    image: img4,
    category: "Palm Oil",
    description:
      "no chemical fertilisers used. Suitable for premium Production.",
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
    { label: "Contact Number", value: "" },
    { label: "Email Address", value: "irohbest@gmail.com" },

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
