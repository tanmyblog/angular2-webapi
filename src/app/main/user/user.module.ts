import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DataService } from './../../core/services/data.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { NotificationService } from '../../core/services/notification.service';
import { ModalModule } from 'ngx-bootstrap/modal';

const userRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: UserComponent }
]

@NgModule({
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule,
    RouterModule.forChild(userRoutes),
    ModalModule.forRoot()
  ],
  providers: [DataService, NotificationService],
  declarations: [UserComponent]
})
export class UserModule { }
