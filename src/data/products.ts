import kproduct from "@/assets/kproduct.jpg.asset.json";
import kabout from "@/assets/kabout.jpg.asset.json";
import khero from "@/assets/khero.jpg.asset.json";

export type Product = {
  id: string;
  litres: number;
  price: number | null;
  use: string;
  category: string;
  profile: string;
  leadTime: string;
  benefits: string[];
  badge?: string;
  image: string;
};

const img = (l: number) => {
  if (l <= 2000) return kproduct.url;
  if (l <= 8000) return kabout.url;
  return khero.url;
};

export const products: Product[] = [
  { litres: 500, price: null, use: "Plastic water storage tank for small homes, kiosks, and compact backup needs", category: "Domestic", profile: "Compact capacity", leadTime: "Confirm stock", benefits: ["Compact footprint", "Suitable for small backup storage", "Easy to position"] },
  { litres: 1000, price: 5500, use: "Plastic water storage tank for homes, kiosks, and small backup needs", category: "Domestic", profile: "Small capacity", leadTime: "Local dispatch available", benefits: ["UV-resistant plastic", "Food-grade water contact surface", "Compact footprint"] },
  { litres: 1500, price: 8250, use: "Plastic water tank for homes, rentals, and everyday backup storage", category: "Domestic", profile: "Small household", leadTime: "Local dispatch available", benefits: ["UV-resistant plastic", "Food-grade water contact surface", "Practical household capacity"] },
  { litres: 2000, price: 11000, use: "Plastic water tank for household water storage and rental units", category: "Residential", profile: "Household capacity", leadTime: "Local dispatch available", benefits: ["UV-resistant plastic", "Food-grade water contact surface", "Suitable for 5 to 8 people"], badge: "Household" },
  { litres: 2500, price: 13750, use: "Plastic storage tank for family homes and steady daily water reserve", category: "Residential", profile: "Growing household", leadTime: "Confirm stock", benefits: ["UV-stabilized shell", "Food-grade water contact surface", "Good balance of size and footprint"] },
  { litres: 3000, price: 16500, use: "Plastic storage tank for larger homes and daily reserve planning", category: "Residential", profile: "Medium capacity", leadTime: "Confirm stock", benefits: ["UV-stabilized shell", "Low maintenance finish", "Suitable for potable water storage"] },
  { litres: 4000, price: 22000, use: "Plastic water tank for rentals, staff housing, and shared compounds", category: "Rental", profile: "Shared use", leadTime: "Confirm stock", benefits: ["Ribbed wall design", "Food-grade water contact surface", "Made for repeated daily use"] },
  { litres: 5000, price: 27500, use: "Plastic water storage tank for busy homes, shops, and small businesses", category: "Commercial", profile: "Large household", leadTime: "Confirm stock", benefits: ["UV-resistant plastic", "Stable base design", "Good capacity for regular storage"], badge: "Common Size" },
  { litres: 6000, price: 33000, use: "Plastic water tank for businesses, institutions, and service yards", category: "Commercial", profile: "Business use", leadTime: "Planned dispatch", benefits: ["High-volume daily supply", "Food-grade water contact surface", "Suitable for schools and car washes"] },
  { litres: 8000, price: 42500, use: "Plastic water storage tank for compounds, campuses, and shared facilities", category: "Institutional", profile: "Institutional use", leadTime: "Planned dispatch", benefits: ["Large storage capacity", "UV-stabilized shell", "Low maintenance over time"] },
  { litres: 10000, price: 49500, use: "Plastic water tank for farms, irrigation support, and outdoor projects", category: "Agriculture", profile: "Farm use", leadTime: "Planned dispatch", benefits: ["Supports irrigation cycles", "Useful for livestock water storage", "Rugged outdoor shell"], badge: "Farm Use" },
  { litres: 16000, price: 69500, use: "Plastic water storage tank for estates, projects, and production sites", category: "Industrial", profile: "High capacity", leadTime: "Scheduled logistics", benefits: ["Large reserve capacity", "Thick ribbed walls", "Suitable for commercial storage planning"] },
  { litres: 20000, price: 98500, use: "Plastic water tank for estates, commercial backup, and high-demand sites", category: "Industrial", profile: "Estate use", leadTime: "Scheduled logistics", benefits: ["Estate-level storage", "Warranty support available", "Suitable for emergency reserve planning"] },
  { litres: 24000, price: 133500, use: "Plastic water storage tank for institutions, public projects, and bulk supply", category: "Industrial", profile: "Bulk capacity", leadTime: "Scheduled logistics", benefits: ["Large infrastructure reserve", "Heavy-duty ribbed walls", "Built for long-term storage projects"] },
].map((p) => ({ ...p, id: `kt-${p.litres}`, image: img(p.litres) }));

export const formatKES = (n: number) => `KSh ${n.toLocaleString()}`;

export const CATEGORIES = Array.from(new Set(products.map((p) => p.category)));
