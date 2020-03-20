import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToasterService } from '../services/toaster.service';
import { TokenService } from '../services/token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router , private toast : ToasterService,private token : TokenService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.token.getToken()) {
        return true;
      }

      this.toast.error('Please log in first ' , ' ' ,10000);
      return  this.router.parseUrl('/client/login');
  }
}
