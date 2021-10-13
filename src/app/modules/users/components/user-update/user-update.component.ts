import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserHttpService } from 'src/app/core/services';
import { User } from 'src/app/shared/models';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  user: User;
  newUserForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
  constructor(private route: ActivatedRoute, private userHttp: UserHttpService) { }

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
    console.log(this.user);
    this.userHttp.updateUser(this.user.id, this.user).subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

  setNewUserValue() {
    this.user.name = this.newUserForm.value.name;
    this.user.email = this.newUserForm.value.email;
  }

}
