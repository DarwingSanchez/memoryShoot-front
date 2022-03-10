export class User{
    _id: string;
    username:string;
    email: string;
    password: string;
    phone: string;
    permissions: any;
    isLogged: boolean;
    confirmPassword: string;

    constructor(
 _id = '',
 username = '',
 email = '',
 password = '',
 phone = '',
 permissions = {},
 isLogged = false,
 confirmPassword = ''
    ) {
        this._id = _id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.permissions = permissions;
        this.isLogged = isLogged;
        this.confirmPassword = confirmPassword;

    }

}