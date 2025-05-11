import { Sprout, HandHeart, Leaf, MoonStar, LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Sprout,
    title: "Signature Candles",
    description: "Hand-poured soy wax candles with premium essential oil blends for lasting fragrance"
  },
  {
    icon: Leaf,
    title: "Eco Materials",
    description: "100% natural ingredients - soy wax, cotton wicks, and recyclable packaging"
  },
  {
    icon: HandHeart,
    title: "Custom Creations",
    description: "Personalized candles for special occasions with custom scents and labels"
  },
  {
    icon: MoonStar,
    title: "Mindfulness Kits",
    description: "Curated sets combining candles with meditation guides for complete relaxation"
  }]
