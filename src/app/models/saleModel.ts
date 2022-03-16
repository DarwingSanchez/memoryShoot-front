export interface Sale {
    _id: string,
    productID: number,
    totalPrice: number,
    created: string,
  }

export interface NewSale {
  productID: number,
  totalPrice: number,
  created: string,
}
