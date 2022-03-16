export interface Order {
  _id: string,
  saleID: number,
  address: string,
  city: string,
  state: string,
  status: boolean,
  created: string,
}
export interface NewOrder {
  saleID: number,
  address: string,
  city: string,
  state: string,
  status: boolean,
  created: string,
}
