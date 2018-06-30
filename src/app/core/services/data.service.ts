import { UtilityService } from './utility.service';
import { MessageConstants } from './../common/message.constants';
import { NotificationService } from './notification.service';
import { AuthenService } from './authen.service';
import { SystemConstants } from './../common/system.constants';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { Injectable, RootRenderer } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private headers: Headers;
  constructor(private _http: Http, private _router: Router, private _authenService: AuthenService,
    private _notificationService: NotificationService, private _utilityService: UtilityService) { }

  get(uri: string) {
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer" + this._authenService.getLoggedInUser().access_token);
    return this._http.get(SystemConstants.BASE_API + uri, { headers: this.headers }).map(this.extractData);
  }
  post(uri: string, data?: any) {
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer" + this._authenService.getLoggedInUser().access_token);
    return this._http.post(SystemConstants.BASE_API + uri, data, { headers: this.headers }).map(this.extractData);
  }
  put(uri: string, data?: any) {
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer" + this._authenService.getLoggedInUser().access_token);
    return this._http.put(SystemConstants.BASE_API + uri, data, { headers: this.headers }).map(this.extractData);
  }
  delete(uri: string, key: string, id: string) {
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer" + this._authenService.getLoggedInUser().access_token);
    return this._http.delete(SystemConstants.BASE_API + uri + '/?' + key + '=' + id, { headers: this.headers }).map(this.extractData);
  }
  postFile(uri: string, data?: any) {
    let newHeader = new Headers();
    newHeader.append("Authorization", "Bearer" + this._authenService.getLoggedInUser().access_token);
    return this._http.post(SystemConstants.BASE_API + uri, data, { headers: this.headers }).map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  /* tra ve loi */
  public handleError(error: any) {
    if (error.status == 401) {
      localStorage.removeItem(SystemConstants.CURRENT_USER);
      this._notificationService.printErrorMessage(MessageConstants.LOGIN_AGAIN_MSG);
      this._utilityService.navigateToLogin();
    }
    else {
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Lỗi hệ thống';
      this._notificationService.printErrorMessage(errMsg);

      return Observable.throw(errMsg);
    }
  }
}

