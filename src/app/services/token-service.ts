import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  _jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private _atuh: AccountService) { }


  isValidToken(): boolean {
    let token = localStorage.getItem("token");

    if (token && !this._jwtHelper.isTokenExpired(token)) {
      this._atuh.isLoginSubject.next(true);

      return true;
    } else {
      localStorage.removeItem("token");

      this._atuh.isLoginSubject.next(false);
      return false;
    }
  }
}
