import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserFromService, UserHttpService } from 'src/app/core/services';
import { User } from 'src/app/shared/models';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})

export class UserUpdateComponent implements OnInit {

  userId: number;
  errorMessageFromServer = '';

  updateUserForm: FormGroup;

  constructor(private route: ActivatedRoute, private userHttp: UserHttpService, private router: Router,
    private userFormService: UserFromService) {
    this.updateUserForm = this.userFormService.getEmptyForm();
  }

  ngOnInit(): void {
    this.userId = +this.route.snapshot.params.id;
    this.userHttp.getSingleUserById(this.userId).subscribe(
      (response) => {
        this.updateUserForm.patchValue(response.data);
      }
    );
  }

  onUpdate() {
    this.userHttp.updateUser(this.userId, this.updateUserForm.value).subscribe(
      (res) => {
        this.router.navigate(['/users']);
      },
      (err) => {
        this.updateUserForm.controls.email.setErrors({ ExistingEmail: err.error.message });
      }
    );
  }

}
