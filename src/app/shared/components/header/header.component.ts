import { Component, OnInit } from '@angular/core';
import { LanguageServiceService } from 'src/app/core/services';
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

  constructor(
    private languageService: LanguageServiceService
  ) { }

  ngOnInit(): void {
    this.languageService.setLanguage('sr');
    this.selectedLanguage = this.languageService.getSelectedLanguage();
    this.otherLanguages = this.languageService.getUnselectedLanguages();
  }

  public langChanged(event: any) {
    const selectedValue = event.value;
    this.selectedLanguage = selectedValue;
    this.languageService.setLanguage(this.selectedLanguage.code);
    this.otherLanguages = this.languageService.getUnselectedLanguages();
  }

}
