export interface MenuItem {
  id: string
  name: string
  description: string
  price: string
}

export interface Category {
  id: string
  label: string
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}
