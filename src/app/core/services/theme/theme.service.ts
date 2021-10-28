import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDark: boolean;
  matchMediaDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    if (this.isDark === undefined) {
      this.setInitMode();
    }
    this.onChangeMode();
  }

  setInitMode() {
    this.isMatched(this.matchMediaDarkMode.matches);
  }

  onChangeMode() {
    this.matchMediaDarkMode.addEventListener('change', e => {
      this.isMatched(e.matches);
    });
  }


  isMatched(match: any) {
    if (match) {
      this.isDark = true;
    } else {
      this.isDark = false;
    }
  }

}

