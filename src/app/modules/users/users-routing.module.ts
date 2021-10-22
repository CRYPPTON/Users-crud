import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { CreateUserComponent } from './components/create-user/create-user.component';

import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {
    path: '', component: UsersListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: CreateUserComponent
  },
  {
    path: ':id',
    component: UserUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
