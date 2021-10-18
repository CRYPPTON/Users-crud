import { Component, OnInit } from '@angular/core';
import { UserFormService, UserHttpService } from 'src/app/core/services';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  createUserForm: FormGroup;

  constructor(
    private userHttp: UserHttpService, private userFormService: UserFormService,
    private dialogRef: MatDialogRef<boolean>
  ) {
    this.createUserForm = this.userFormService.getEmptyForm();
  }

  ngOnInit(): void {
  }

  onCreateUser() {
    if (this.createUserForm.valid) {
      this.userHttp.createUser(this.createUserForm.value).subscribe(
        () => {
          this.dialogRef.close(true);
        }
      );
    }
  }
}
