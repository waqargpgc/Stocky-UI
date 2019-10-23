import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from '@services/token-service';

@Injectable({
  providedIn: 'root'
})

export class OnlyLoggedInUsers implements CanActivate {
  constructor(private router: Router, private tokenService: TokenService) {
  }

  canActivate() {
    let isValidToken = this.tokenService.isValidToken();
    if (isValidToken) return isValidToken;

    this.router.navigate(["/login"]);
    return isValidToken;
  }
}
