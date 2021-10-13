import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserHttpService } from 'src/app/core/services';
import { User } from 'src/app/shared/models';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private userHttp: UserHttpService) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.params.id;
    this.userHttp.getSingleUserById(+userId).subscribe(
      (response) => {
        this.user = response.data;
      }
    );
  }
}
