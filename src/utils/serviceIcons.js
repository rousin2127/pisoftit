import {
  Layout,
  ShoppingCart,
  Globe,
  Monitor,
  Cpu,
  Terminal,
  Code,
} from 'lucide-react';

const iconMap = {
  Layout,
  ShoppingCart,
  Globe,
  Monitor,
  Cpu,
  Terminal,
};

export const getServiceIcon = (name) => iconMap[name] || Code;
