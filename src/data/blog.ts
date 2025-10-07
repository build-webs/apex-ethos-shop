export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Top 10 Smart Gadgets to Elevate Your Lifestyle in 2025",
    excerpt: "Discover the latest smart gadgets that will transform your daily routine and boost productivity.",
    content: `# Top 10 Smart Gadgets to Elevate Your Lifestyle in 2025

In today's fast-paced world, smart gadgets have become essential companions in our daily lives. From health tracking to home automation, technology continues to evolve and make our lives easier. Here are the top 10 smart gadgets you need in 2025.

## 1. Smart Watches with Advanced Health Monitoring

The latest smartwatches go beyond step counting. They now feature ECG monitoring, blood oxygen sensors, and even stress tracking. These devices have become essential health companions.

## 2. Wireless Earbuds with AI Noise Cancellation

Modern wireless earbuds use artificial intelligence to adapt noise cancellation to your environment, providing the perfect audio experience whether you're commuting or working from home.

## 3. Smart Home Security Systems

Protect your home with AI-powered security cameras that can distinguish between family members, pets, and potential threats, sending you intelligent alerts.

## 4. Portable Power Banks with Fast Charging

Never run out of battery again with the new generation of power banks that can charge your devices at lightning speed while being compact enough to fit in your pocket.

## 5. Smart Water Bottles

Stay hydrated with smart bottles that track your water intake and remind you to drink throughout the day, syncing with your fitness apps.

## 6. Wireless Charging Stations

Declutter your space with multi-device wireless charging stations that can power your phone, watch, and earbuds simultaneously.

## 7. Smart Air Purifiers

Breathe easier with AI-powered air purifiers that automatically adjust their settings based on air quality sensors.

## 8. Portable Bluetooth Speakers

Take your music anywhere with waterproof speakers that deliver impressive sound quality in a compact package.

## 9. Smart LED Bulbs

Transform your home ambiance with LED bulbs that can change colors and brightness through voice commands or smartphone apps.

## 10. Laptop Accessories for Remote Work

Upgrade your work-from-home setup with ergonomic laptop stands, wireless keyboards, and premium webcams.

## Conclusion

These smart gadgets represent the perfect blend of innovation and practicality. Whether you're looking to improve your health, boost productivity, or simply enjoy better entertainment, there's a smart gadget for everyone in 2025.`,
    image: "/src/assets/hero-banner.jpg",
    author: "Sarah Johnson",
    date: "2025-01-15",
    category: "Technology",
    readTime: "5 min read"
  },
  {
    id: "2",
    title: "How to Choose the Perfect Running Shoes: A Complete Guide",
    excerpt: "Find the ideal running shoes for your foot type and running style with our comprehensive guide.",
    content: `# How to Choose the Perfect Running Shoes: A Complete Guide

Choosing the right running shoes can make or break your running experience. With so many options available, it can be overwhelming. This guide will help you find the perfect pair.

## Understanding Your Foot Type

The first step is understanding your foot type: neutral, overpronated, or supinated. This determines the type of support you need.

## Consider Your Running Surface

Different surfaces require different shoe features. Road running shoes differ from trail running shoes in terms of traction and cushioning.

## The Importance of Proper Fit

Always get your feet measured and try shoes in the afternoon when your feet are slightly swollen, mimicking their state during runs.

## Replace Your Shoes Regularly

Running shoes typically last 300-500 miles. Keep track of your mileage and replace them when needed to prevent injuries.`,
    image: "/src/assets/product-smartwatch.jpg",
    author: "Mike Chen",
    date: "2025-01-12",
    category: "Fitness",
    readTime: "7 min read"
  },
  {
    id: "3",
    title: "Wireless vs Wired: Which Earbuds Are Right for You?",
    excerpt: "Compare the pros and cons of wireless and wired earbuds to make an informed decision.",
    content: `# Wireless vs Wired: Which Earbuds Are Right for You?

The debate between wireless and wired earbuds continues. Let's break down the advantages and disadvantages of each.

## Wireless Earbuds Advantages

Freedom of movement, no tangled cables, and modern features like active noise cancellation make wireless earbuds popular.

## Wired Earbuds Advantages

Superior audio quality, no battery concerns, and lower price points are key benefits of wired options.

## Sound Quality Comparison

While the gap is closing, wired earbuds still generally offer better audio quality due to direct connection.

## Battery Life Considerations

Wireless earbuds require charging, but modern models offer 20-30 hours of total playtime with their charging cases.

## Making Your Choice

Consider your lifestyle, budget, and priorities to choose the right option for you.`,
    image: "/src/assets/product-earbuds.jpg",
    author: "Emily Rodriguez",
    date: "2025-01-10",
    category: "Audio",
    readTime: "6 min read"
  },
  {
    id: "4",
    title: "Essential Tech Accessories for Remote Workers in 2025",
    excerpt: "Boost your productivity with these must-have accessories for working from home.",
    content: `# Essential Tech Accessories for Remote Workers in 2025

Remote work is here to stay. Here are the essential accessories that will make your home office more productive and comfortable.

## Ergonomic Setup

Invest in an adjustable laptop stand, external keyboard, and mouse to maintain good posture and prevent strain.

## Quality Webcam and Microphone

Professional video calls require quality equipment. A 4K webcam and noise-canceling microphone are worth the investment.

## Desk Organization

Cable management solutions and desk organizers keep your workspace tidy and professional.

## Lighting Solutions

Good lighting is crucial for video calls. Ring lights or LED desk lamps can dramatically improve your appearance on camera.

## Backup Power Solutions

Protect against power outages with UPS systems and ensure your work is never interrupted.`,
    image: "/src/assets/product-backpack.jpg",
    author: "David Park",
    date: "2025-01-08",
    category: "Productivity",
    readTime: "5 min read"
  },
  {
    id: "5",
    title: "The Future of Wearable Technology: What to Expect",
    excerpt: "Explore upcoming innovations in wearable tech that will change how we interact with technology.",
    content: `# The Future of Wearable Technology: What to Expect

Wearable technology is evolving rapidly. Here's what the future holds for smartwatches, fitness trackers, and other wearable devices.

## Advanced Health Monitoring

Future wearables will offer non-invasive blood glucose monitoring, blood pressure tracking, and early disease detection.

## Extended Battery Life

New battery technologies promise weeks of use on a single charge, eliminating daily charging routines.

## Seamless Integration

Wearables will become more integrated with our digital lives, serving as universal keys, payment devices, and health monitors.

## Fashion Forward Design

The line between fashion and technology continues to blur with luxury brands entering the wearable space.

## Privacy and Security

As wearables collect more personal data, companies are developing better encryption and privacy features.`,
    image: "/src/assets/product-smartwatch.jpg",
    author: "Lisa Wong",
    date: "2025-01-05",
    category: "Technology",
    readTime: "8 min read"
  }
];
