import { LoggedInUser } from './../domain/loggedin.user';
import { SystemConstants } from './../common/system.constants';
import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private _http: Http) { }

  login(username: string, password: string) {
    let body = "userName=" + encodeURIComponent(username) +
      "&password=" + encodeURIComponent(password) +
      "&grant_type=password";
    let headers = new Headers();
    headers.append("Content-type", "application/x-www-form-urlencoded");
    let options = new RequestOptions({ headers: headers });

    var promise = new Promise((resolve, reject) => {
      this._http.post(SystemConstants.BASE_API + '/api/oauth/token', body, options)
        .subscribe((response: any) => {
          let user: LoggedInUser = response.json();
          if (user && user.access_token) {
            localStorage.removeItem(SystemConstants.CURRENT_USER);
            localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(user));
            resolve(true);
          }
          else {
            reject(false);
          }
        }, error => {
          reject(error);
        });
    });
    return promise;
  }
  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);

  }

  isUserAuthenticated(): boolean {
    let user = localStorage.getItem(SystemConstants.CURRENT_USER);
    if (user != null)
      return true;
    else
      return false;
  }

  getLoggedInUser(): LoggedInUser {
    let user: LoggedInUser;
    if (this.isUserAuthenticated()) {
      var userData = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
      user = new LoggedInUser(userData.access_token, userData.username, userData.fullname, userData.email, userData.avartar);
    }
    else
      user = null;
    return user;
  }
}
