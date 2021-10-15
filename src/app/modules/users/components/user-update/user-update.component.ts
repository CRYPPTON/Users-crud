import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserHttpService } from 'src/app/core/services';
import { User } from 'src/app/shared/models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})

export class UserUpdateComponent implements OnInit {

  user: User;
  errorMessageFromServer = '';

  newUserForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'),
    ]),
  });
  constructor(private route: ActivatedRoute, private userHttp: UserHttpService, private router: Router) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.params.id;
    this.userHttp.getSingleUserById(+userId).subscribe(
      (response) => {
        this.newUserForm.controls.name.setValue(response.data.name);
        this.newUserForm.controls.email.setValue(response.data.email);
        this.user = response.data;
      }
    );
  }

  onUpdate() {
    this.setNewUserValue();
    this.userHttp.updateUser(this.user.id, this.user).subscribe(
      (res) => {
        this.router.navigate(['/users']);
        // console.log('')
      },
      (err) => {
        this.newUserForm.controls.email.setErrors({ ExistingEmail: err.error.message });
      }
    );
  }

  setNewUserValue() {
    this.user.name = this.newUserForm.value.name;
    this.user.email = this.newUserForm.value.email;
  }
}
