import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map, share, tap } from 'rxjs/operators'
import { Observable, BehaviorSubject } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpBaseService } from './http-base.service';
import { ApiEndPoints, avatarThumbnail } from './../models/constants';
import { HttpSetup } from './../models/common';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends HttpBaseService {
  accountEndPoints = ApiEndPoints.Account;

  constructor(private http: HttpClient, private router: Router) {
    super(http, new HttpSetup("", ApiEndPoints.ApiRoot));
  }

  //#region get roles
  // get filterd roles with pagination.
  public getRoles = (page = null, pageSize = null, searchQry = ''): Observable<any> => {
    let options = {
      pageNo: page,
      pageSize: pageSize,
      searchQuery: searchQry
    };

    return this.list(options, this.accountEndPoints.GetRoles);
  };

  // get all existing roles.
  public getRolesForUser = (): Observable<any> => {
    return this.list(null, this.accountEndPoints.GetRolesForNewUser);
  };

  // create new role.
  public createRole = (roleModel: any): Observable<any> => {
    return this.create(roleModel, this.accountEndPoints.CreateRole);
  }

  // update existing role.
  public updateRole = (roleModel: any): Observable<any> => {
    return this.update(roleModel, this.accountEndPoints.UpdateRole);
  }

  // get role detail by id.
  public getSingleRole = (id: any): Observable<any> => {
    return this.get(id, this.accountEndPoints.GetSingleRole);
  }

  // delete role by id.
  public deleteRole = (id: any): Observable<any> => {
    return this.delete(id, this.accountEndPoints.DeleteRole);
  }
  //#endregion

  //#region  User
  // get filterd and paginated users.
  public getUsers = (page = null, pageSize = null, searchQry = ''): Observable<any> => {
    let options = {
      pageNo: page,
      pageSize: pageSize,
      searchQuery: searchQry
    };

    return this.list(options, this.accountEndPoints.GetUsers);
  };

  // create new user.
  public createUser = (userModel: any): Observable<any> => {
    let req = this.create(userModel, this.accountEndPoints.CreateUser);

    return req;
  }

  // update user image/avatar.
  public updateAvatar = (userModel: any): Observable<any> => {
    const requestHeader = {
      'no-intercept': 'true'
    };

    let url = `${ApiEndPoints.ApiRoot}/${this.accountEndPoints.UpdateAvatar}`;
    return this.http.put(url, userModel, { headers: new HttpHeaders(requestHeader), reportProgress: true, observe: 'events' });
  }

  // update user profile.
  public updateProfile = (userModel: any): Observable<any> => {
    return this.update(userModel, this.accountEndPoints.UpdateProfile);
  }

  // update existing user.
  public updateUser = (userModel: any): Observable<any> => {
    userModel.claims = null;

    return this.update(userModel, this.accountEndPoints.UpdateUser);
  }

  // get user detail by id.
  public getSingleUser = (id: any): Observable<any> => {
    let req$ = this.get(id, this.accountEndPoints.GetSingleUser);

    req$ = req$.pipe(
      tap(user => console.log(user)),
      map(user => {
        if (!user.data.avatarURL) {
          user.data.avatarURL = avatarThumbnail;
        } else {
          user.data.avatarURL = `${ApiEndPoints.ApiRoot}/${user.data.avatarURL}`;
        }

        return user;
      }));

    return req$;
  }

  // get current user.
  public getCurrentUser = (): Observable<any> => {
    let req = this.list(null, this.accountEndPoints.GetCurrentUser);
    req = req.pipe(
      map(user => {
        user.images.forEach(img => {
          img.imageURL = `${ApiEndPoints.ApiRoot}/${img.imageURL}`;
        });

        return user;
      }));

    return req;
  }

  // delete user by id.
  public deleteUser = (id: any): Observable<any> => {
    return this.delete(id, this.accountEndPoints.DeleteUser);
  }
  //#endregion

  // get all permissions/claims.
  public getAllPermission = (): Observable<any> => {
    let req = this.list(null, this.accountEndPoints.GetAllPermissions);

    req = req.pipe(
      map((resp: any) => {
        let data = resp.data;
        let dataWithClass = [];
        let item: any;

        data.forEach(ele => {
          let clsName = ele.group.split(" ")[0].toLowerCase();
          item = ele;
          item.class = clsName;

          dataWithClass.push(item);
        });

        return dataWithClass;
      })
    );

    return req;
  };

  updateCurrentUser(isRedirect = false): any {
    let req = this.list(null, ApiEndPoints.Account.GetCurrentUser);

    req.subscribe((user: any) => {
      // assets/img/avatars/avatar.png
      if (user.avatarURL == "null") user.avatarURL = "assets/img/avatars/avatar.png";
      if (!user.avatarURL) user.avatarURL = "assets/img/avatars/avatar.png";

      localStorage.setItem('avatar', `${ApiEndPoints.ApiRoot}/${user.avatarURL}`);
      localStorage.setItem('email', user.email);
      localStorage.setItem('userName', user.userName);
      localStorage.setItem('firstName', user.firstName);
      localStorage.setItem('lastName', user.lastName);

      if (isRedirect) this.router.navigate(["/"]);
    }),
      (err) => this.router.navigate(["/"])
  }

  // Authentication
  isInvalidLogin: boolean = false;

  public isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn(): Observable<boolean> {
    let islogin$ = this.isLoginSubject.asObservable().pipe(share());

    return islogin$;
  }

  login(form: NgForm): Observable<any> {
    let account = ApiEndPoints.Account;

    let credentials = JSON.stringify(form.value);
    return this.create(credentials, account.Login);
  }

  logout(): void {
    localStorage.clear();
    this.isLoginSubject.next(false);

    this.router.navigate(["/login"]);
  }

  private hasToken(): boolean {
    var token = localStorage.getItem("token");
    if (token) return true;

    localStorage.removeItem("token");
    return false;
  }

}
