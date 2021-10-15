import { Component, OnInit } from '@angular/core';
import { UserFromService, UserHttpService } from 'src/app/core/services';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  createUserForm: FormGroup;

  constructor(private userHttp: UserHttpService, private router: Router, private userFormService: UserFromService) {
    this.createUserForm = this.userFormService.getEmptyForm();
  }

  ngOnInit(): void {
  }

  onCreateUser() {
    if (this.createUserForm.valid) {
      this.userHttp.createUser(this.createUserForm.value).subscribe(
        (res) => {
          this.router.navigate(['/users']);
        },
        (err) => {
          this.createUserForm.controls.email.setErrors({ ExistingEmail: err.error.message });
        }
      );
    }
  }
}
