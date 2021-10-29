import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
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
  public title: string | undefined;
  isAuth: boolean;
  titleTranslationLabel: string | undefined;

  @Output() toggleSideBarEvant = new EventEmitter<boolean>();
  @Input() sideBar: MatDrawer;

  constructor(
    private languageService: LanguageServiceService,
    private authService: AuthService,
    private router: Router,
    public themeService: ThemeService,
    private translateService: TranslateService
  ) {
  }

  setTitle() {
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        const titleFromRouter = val.state.root.firstChild?.routeConfig?.path?.toUpperCase();
        this.titleTranslationLabel = titleFromRouter;
        this.title = this.translateService.instant(`title.${this.titleTranslationLabel}`);
      }
    });
  }

  onLangChangeSetTitle() {
    this.translateService.onLangChange.subscribe(lang => {
      this.title = lang.translations.title[`${this.titleTranslationLabel}`];
    });
  }

  ngOnInit(): void {
    this.authService.isAuth.subscribe(
      (res) => {
        this.isAuth = res;
      }
    );
    this.languageService.setLanguage('en');
    this.selectedLanguage = this.languageService.getSelectedLanguage();
    this.otherLanguages = this.languageService.getUnselectedLanguages();
    this.setTitle();
    this.onLangChangeSetTitle();
  }

  onLogout() {
    if(this.sideBar.opened) {
      this.sideBar.toggle();
    }
    this.router.navigate(['/auth']);
    this.authService.logout();
  }

  toggleSideBar() {
   this.toggleSideBarEvant.emit(true);
  }
}
