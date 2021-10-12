import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
