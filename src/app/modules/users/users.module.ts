import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DeleteUserDialogComponent } from './components/delete-user-dialog/delete-user-dialog.component';


@NgModule({
  declarations: [
    UsersListComponent,
    UserUpdateComponent,
    CreateUserComponent,
    UserFormComponent,
    DeleteUserDialogComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UsersModule { }
