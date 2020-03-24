import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToasterService } from '../services/toaster.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router , private toast : ToasterService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.toast.error('Please log in first ' , ' ' ,10000);
<<<<<<< HEAD
      return  this.router.parseUrl('/client/login')
    
=======
      return  this.router.parseUrl('/client/login');
>>>>>>> 8324438bf09703e1e701952cc6fb92f2378a3ab8
  }
}
