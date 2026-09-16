import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Беспроводные наушники",
    description: "Компактные наушники с шумоподавлением и зарядным кейсом.",
    price: 4990,
    category: "Электроника",
    categoryId: 'electronics'
  },
  {
    id: 2,
    name: "Городской рюкзак",
    description: "Водостойкий рюкзак с отделением для ноутбука.",
    price: 3490,
    category: "Аксессуары",
    categoryId: 'accessories'
  },
  {
    id: 3,
    name: "Умная лампа",
    description: "LED-лампа с регулировкой яркости и цвета через приложение.",
    price: 2190,
    category: "Для дома",
    categoryId: 'home'
  },
]