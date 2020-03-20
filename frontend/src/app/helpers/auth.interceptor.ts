import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenService } from '../services/token.service';


const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable({
    providedIn: 'root'
  })
export class AuthInterceptor implements HttpInterceptor {

constructor(private injector: Injector) { }

  // Function to intercept requests made to backend
  intercept(req, next) {
    const authService = this.injector.get(TokenService);
    const tokenizedReq = req.clone({
      setHeaders: {
        authorization: `Bearer ${authService.getToken().replace(/['"]+/g, '')}`
      }
    });

    return next.handle(tokenizedReq);
  }
}

// export const authInterceptorProviders = [
//   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
// ];