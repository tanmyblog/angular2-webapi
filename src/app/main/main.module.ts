import { AuthenService } from './../core/services/authen.service';
import { UtilityService } from './../core/services/utility.service';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './main.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    CommonModule,
    UserModule,
    HomeModule,
    RouterModule.forChild(mainRoutes)
  ],
  providers: [UtilityService, AuthenService],
  declarations: [MainComponent]
})
export class MainModule { }
