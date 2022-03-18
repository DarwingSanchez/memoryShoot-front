import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userService:UserService, private router: Router) {

  }  
  canActivate() {
    if (this.userService.loggedIn()&& this.userService.isAdmin()) return true
    this.router.navigate(['/home']) 
    return false

  }
  
}
