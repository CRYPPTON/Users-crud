import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    let response;
    const email = this.form.controls.email.value;
    const password = this.form.controls.password.value;

    this.authService.login(email, password)
      .subscribe(
        (u) => {
          response = u;
          if (response) {
            this.router.navigate(['/users']);
            console.log('success login');
          } else {
            console.log('no login');
            return;
          }
        }
      );
  }
}
