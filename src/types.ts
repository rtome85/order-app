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

export type OrderStatus = 'preparing' | 'ready' | 'delivered'

export interface Order {
  id: string
  number: string
  date: string
  items: string
  total: string
  status: OrderStatus
}
