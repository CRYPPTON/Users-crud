import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService, LanguageServiceService, ThemeService } from 'src/app/core/services';
import { Language } from '../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public selectedLanguage: Language;
  public otherLanguages: Language[];
  public languages = this.languageService.getLanguages();
  isAuth: boolean;
  public isDark: boolean;
  public title: string | undefined;
  @Output() openSideBarEvant = new EventEmitter<boolean>();

  constructor(
    private languageService: LanguageServiceService,
    private authService: AuthService,
    private router: Router,
    public themeService: ThemeService,
    private translateService: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        const titleFromRouter = val.state.root.firstChild?.routeConfig?.path?.toUpperCase();
        const key = `title.${titleFromRouter}`;
        this.title = this.translateService.instant(key);
      }
    });

    this.authService.isAuth.subscribe(
      (res) => {
        this.isAuth = res;
      }
    );
    this.languageService.setLanguage('sr');
    this.selectedLanguage = this.languageService.getSelectedLanguage();
    this.otherLanguages = this.languageService.getUnselectedLanguages();
  }

  public langChanged(language: Language) {
    this.selectedLanguage = language;
    this.languageService.setLanguage(this.selectedLanguage.code);
    this.otherLanguages = this.languageService.getUnselectedLanguages();
  }

  onLogout() {
    this.router.navigate(['/auth']);
    this.isAuth = false;
    this.authService.logout();
  }

  openSideBar() {
    this.openSideBarEvant.emit(true);
  }


}
