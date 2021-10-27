import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
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
  isDark: boolean;

  constructor(
    private languageService: LanguageServiceService,
    private authService: AuthService,
    private router: Router,
    public themeService: ThemeService
  ) { }

  ngOnInit(): void {
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

}
