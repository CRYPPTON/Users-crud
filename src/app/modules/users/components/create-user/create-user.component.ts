import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserHttpService } from 'src/app/core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  createUserForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'),
    ]),
  });

  constructor(private userHttp: UserHttpService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreateUser() {

    if (this.createUserForm.valid) {
      const userName = this.createUserForm.controls.name.value;
      const userEmail = this.createUserForm.controls.email.value;
      this.userHttp.createUser(userName, userEmail).subscribe(
        (res) => {
          this.router.navigate(['/users']);
        },
        (err) => {
          this.createUserForm.controls.email.setErrors({ ExistingEmail: err.error.message });
        }
      );
      console.log(this.createUserForm.controls.name.value);
      console.log(this.createUserForm.controls.email.value);
    } else {
      console.log('invalid from');
    }
  }
}
