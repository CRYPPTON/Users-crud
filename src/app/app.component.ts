import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  language = 'sr';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.language);
  }

}
