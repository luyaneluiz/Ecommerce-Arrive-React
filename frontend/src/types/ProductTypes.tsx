export interface ProductProps {
    _id: number
    title: string
    category: string
    price: number
    old_price?: number
    cover: string
    description: string
    type: string
    sold?: number
    avaliable?: number
}
