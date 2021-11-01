import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards';
import { NoneAuthGuard } from './core/guards/none-auth.guard';
import { MyRoute } from './shared/models';

const routes: MyRoute[] = [
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
    icon: 'table_chart',
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    icon: 'account_circle',
    canActivate: [NoneAuthGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule),
    icon: 'settings',
    canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: '/auth', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
