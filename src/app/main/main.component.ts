import { LoggedInUser } from './../core/domain/loggedin.user';
import { AuthenService } from './../core/services/authen.service';
import { UtilityService } from './../core/services/utility.service';
import { UrlConstants } from './../core/common/url.constants';
import { SystemConstants } from './../core/common/system.constants';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public user: LoggedInUser;

  constructor(
    private utilityService: UtilityService,
    private authenService: AuthenService
  ) { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
  }

  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    this.utilityService.navigate(UrlConstants.LOGIN);
  }
}
