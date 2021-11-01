import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from './core/services';
import { MyRoute } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  routesList: MyRoute[];

  constructor(
    public themeService: ThemeService,
    private routes: Router
  ) {
    this.getRoutes();
  }

  getRoutes() {
    this.routesList = this.routes.config
    .filter(route => route.path && route.path !== 'auth');
  }
}
