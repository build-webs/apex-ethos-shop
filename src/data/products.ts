export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
  features: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Earbuds Pro",
    price: 149.99,
    image: "/src/assets/product-earbuds.jpg",
    rating: 4.8,
    reviews: 342,
    category: "Audio",
    description: "Experience crystal-clear sound with our flagship wireless earbuds featuring active noise cancellation and 30-hour battery life.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "IPX7 Water Resistance",
      "Touch controls",
      "Fast charging support"
    ],
    inStock: true
  },
  {
    id: "2",
    name: "Smart Fitness Watch Ultra",
    price: 299.99,
    image: "/src/assets/product-smartwatch.jpg",
    rating: 4.6,
    reviews: 218,
    category: "Wearables",
    description: "Track your fitness goals with precision. Features heart rate monitoring, GPS tracking, and 7-day battery life.",
    features: [
      "Heart rate monitoring",
      "Built-in GPS",
      "7-day battery life",
      "Water resistant",
      "Sleep tracking"
    ],
    inStock: true
  },
  {
    id: "3",
    name: "Tech Pro Laptop Backpack",
    price: 79.99,
    image: "/src/assets/product-backpack.jpg",
    rating: 4.7,
    reviews: 156,
    category: "Accessories",
    description: "Protect your tech in style with our premium laptop backpack featuring multiple compartments and USB charging port.",
    features: [
      "Fits up to 17-inch laptops",
      "USB charging port",
      "Water-resistant material",
      "Anti-theft design",
      "Ergonomic design"
    ],
    inStock: true
  },
  {
    id: "4",
    name: "Portable Bluetooth Speaker Max",
    price: 129.99,
    image: "/src/assets/product-speaker.jpg",
    rating: 4.9,
    reviews: 428,
    category: "Audio",
    description: "Take your music anywhere with powerful 360-degree sound and 20-hour playtime.",
    features: [
      "360-degree sound",
      "20-hour playtime",
      "IPX6 waterproof",
      "Bluetooth 5.0",
      "Built-in microphone"
    ],
    inStock: true
  },
  {
    id: "5",
    name: "Wireless Charging Pad Elite",
    price: 39.99,
    image: "/src/assets/product-earbuds.jpg",
    rating: 4.5,
    reviews: 89,
    category: "Accessories",
    description: "Fast wireless charging for all your Qi-compatible devices with intelligent temperature control.",
    features: [
      "15W fast charging",
      "Qi-compatible",
      "LED indicator",
      "Non-slip surface",
      "Overheating protection"
    ],
    inStock: true
  },
  {
    id: "6",
    name: "4K Webcam Pro",
    price: 189.99,
    image: "/src/assets/product-smartwatch.jpg",
    rating: 4.7,
    reviews: 134,
    category: "Tech",
    description: "Professional-grade 4K webcam with autofocus and built-in ring light for perfect video calls.",
    features: [
      "4K resolution",
      "Autofocus",
      "Built-in ring light",
      "Noise-canceling mic",
      "Wide angle lens"
    ],
    inStock: true
  }
];

export const categories = [
  "All",
  "Audio",
  "Wearables",
  "Accessories",
  "Tech"
];
