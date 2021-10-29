import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageServiceService as LanguageService, ThemeService } from 'src/app/core/services';
import { Language } from 'src/app/shared/models';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public selectedLanguage: Language;
  public otherLanguages: Language[];
  public languages = this.languageService.getLanguages();

  constructor(private router: Router,
              public themeService: ThemeService,
              private languageService: LanguageService
              ) { }

  ngOnInit(): void {
    this.selectedLanguage = this.languageService.getSelectedLanguage();
    this.otherLanguages = this.languageService.getUnselectedLanguages();
  }

  onBack() {
    this.router.navigateByUrl('users');
  }

  public langChanged(event: any) {
    const selectedValue = event.value;
    this.selectedLanguage = selectedValue;
    this.languageService.setLanguage(this.selectedLanguage.code);
    this.otherLanguages = this.languageService.getUnselectedLanguages();
  }

}
