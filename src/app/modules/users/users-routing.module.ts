import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {
    path: '', component: UsersListComponent
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
