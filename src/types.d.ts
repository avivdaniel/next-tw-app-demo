export interface Product {
    name: string
    description: string
    price: number
    category: string
    shop: number
    _id: string
    imageUrl?:string
}

export interface Shop {
    name: string
    description: string
    products: Product[],
    ownerID: string,
    coverImg: string
}