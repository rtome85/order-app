export type SellerOrderStatus = 'new' | 'preparing' | 'ready'

export interface SellerOrder {
  id: string
  number: string
  placedAt: string
  items: { name: string; quantity: number }[]
  status: SellerOrderStatus
}
