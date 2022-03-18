import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private userService:UserService, private router: Router) {

  }  
  canActivate() {
    if (this.userService.loggedIn()) return true
    this.router.navigate(['/login']) 
    return false

  }
  
}
