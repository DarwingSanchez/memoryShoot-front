export interface User {
  _id:string,
  username: string,
  email: string,
  password: string,
  phone: string,
  permissions: {
    admin: boolean,
    client: boolean,
    verified: boolean,
  },
  created: string,
}
