import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  openSideNav: boolean = true;
  showFiller = false;
  constructor(
    public themeService: ThemeService,
  ) { }

}
