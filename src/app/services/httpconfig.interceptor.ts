import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AccountService } from './account.service';
import { TokenService } from './token-service';

@Injectable(
  {
    providedIn: "root",
  }
)

export class HttpConfigInterceptor implements HttpInterceptor {
  _jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private _router: Router, private _atuh: AccountService, private tokenServic: TokenService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');

    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }

    if (!request.headers.has('Content-Type')) {
      if (!request.headers.has('no-intercept')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
      }
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // log event etc.
        }

        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          this.tokenServic.isValidToken();

          this._atuh.handleError(error);
          this._router.navigate(['/login'])
        }

        if (error.status == 403) {
          this._atuh.handleError(error);
          this._router.navigate(['/account/forbidden']);
        }

        let data = {};
        data = {
          reason: error && error.error.reason ? error.error.reason : '',
          status: error.status
        };

        console.log(data);
        return throwError(error);
      }));
  }
}
