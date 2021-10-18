import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  getEmptyForm(): FormGroup {
    const userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'),
      ]),
    });

    return userForm;
  }

  constructor() { }
}
