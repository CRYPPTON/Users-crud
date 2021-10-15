import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderServiceService {

  public showLoader$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  public show() {
    this.showLoader$.next(true);
  }

  public hide() {
    this.showLoader$.next(false);
  }
}
