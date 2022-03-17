export class User {
  _id: string;
  user_id: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  permissions: any;
  isLogged: boolean;
  confirmPassword: string;
  created: string;
  image: string;

  constructor(
    _id = '',
    username = '',
    email = '',
    password = '',
    phone = '',
    permissions = {},
    isLogged = false,
    confirmPassword = '',
    created = '',
    image = '',
    user_id = ''
  ) {
    this._id = _id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.permissions = permissions;
    this.isLogged = isLogged;
    this.confirmPassword = confirmPassword;
    this.created = created;
    this.image = image;
    this.user_id = user_id;
  }
}
