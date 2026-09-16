export type Product = {
  id: number
  name: string
  description: string
  price: number
  category: string
  categoryId: ProductCategory
}

export type ProductCategory =
  | 'electronics'
  | 'accessories'
  | 'home'