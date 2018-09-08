import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UrlConstants } from './../core/common/url.constants';
import { MessageConstants } from './../core/common/message.constants';
import { AuthenService } from './../core/services/authen.service';
import { NotificationService } from './../core/services/notification.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  model: any = {};
  returnUrl: string;

  constructor(
    private authenService: AuthenService,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.authenService.login(this.model.username, this.model.password).then(data => {
      this.router.navigate([UrlConstants.HOME]);
    }).catch(error => {
      this.notificationService.printErrorMessage(MessageConstants.SYSTEM_ERROR_MSG);
      this.loading = false;
    });
  }

}
