export interface Product {
    id: number
    name: string
    price: number
}

export interface Order {
    id: number
    createdDate: Date
}

export interface OrderItem {
    productId: string
    quantity: number
}