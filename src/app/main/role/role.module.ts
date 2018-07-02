import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DataService } from './../../core/services/data.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { NotificationService } from '../../core/services/notification.service';
import { ModalModule } from 'ngx-bootstrap/modal';

const roleRoutes : Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: RoleComponent}
]

@NgModule({
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule,
    RouterModule.forChild(roleRoutes),
    ModalModule.forRoot()
  ],
  providers: [DataService, NotificationService],
  declarations: [RoleComponent]
})
export class RoleModule { }
