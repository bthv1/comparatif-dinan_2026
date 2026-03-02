import type { LucideIcon } from "lucide-react";
import {
  House, Bike, Leaf, GraduationCap, Heart, Shield,
  Store, Landmark, Music, Vote, Wallet, Users, PawPrint,
  Apple, Ban, KeyRound, Languages, Home,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  House, Bike, Leaf, GraduationCap, Heart, Shield,
  Store, Landmark, Music, Vote, Wallet, Users, PawPrint,
  Apple, Ban, KeyRound, Languages, Home,
};

export default function ThemeIcon({
  name,
  className,
  size = 20,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} size={size} />;
}
