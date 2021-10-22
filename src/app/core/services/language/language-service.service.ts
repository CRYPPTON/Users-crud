import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {

  private languages: Language[];
  private selectedLanguage: Language;


  constructor(
    private translate: TranslateService
  ) {
    this.initLangs();
  }

  private initLangs() {
    this.languages = [
      { id: 1, code: 'sr', name: 'Srpski', selected: false } as Language,
      { id: 2, code: 'en', name: 'English', selected: false } as Language,
      { id: 3, code: 'de', name: 'Deutch', selected: false } as Language
    ];
  }

  public setLanguage(lang: string) {
    const selected = this.languages.find(language => language.code === lang);
    if (selected) {
      this.languages.map(x => x.selected = false);
      this.selectedLanguage = selected;
      this.selectedLanguage.selected = true;
      this.translate.use(lang);
    }
  }

  public getSelectedLanguage(): Language {
    return this.selectedLanguage;
  }

  public getUnselectedLanguages(): Language[] {
    return this.languages.filter(lang => !lang.selected);
  }

  public getLanguages(): Language[] {
    return this.languages;
  }

}
