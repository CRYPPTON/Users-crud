import { Component, Inject, OnInit } from '@angular/core';
import { UserFormService, UserHttpService } from 'src/app/core/services';
import { User } from 'src/app/shared/models';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})

export class UserUpdateComponent implements OnInit {

  updateUserForm: FormGroup;

  constructor(
    private userHttp: UserHttpService,
    private dialogRef: MatDialogRef<boolean>,
    private userFormService: UserFormService,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) {
    this.updateUserForm = this.userFormService.getEmptyForm();
  }

  ngOnInit(): void {
    this.updateUserForm.patchValue(this.data);
  }

  onUpdate() {
    this.userHttp.updateUser(this.data.id, this.updateUserForm.value).subscribe(
      () => {
        this.dialogRef.close(true);
      },
      (err) => {
        this.updateUserForm.controls.email.setErrors({ ExistingEmail: err.error.message });
      }
    );
  }

}
