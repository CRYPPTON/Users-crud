import { Component, OnInit } from '@angular/core';
import { UserHttpService } from '@app-services';
import { User } from 'src/app/shared/models';

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(private userHttp: UserHttpService) { }

  users: User[] = [];
  displayedColumns: string[] = ['name', 'email', 'created', 'action'];

  ngOnInit(): void {
    this.userHttp.getUsers().subscribe(
      (res) => {
        this.users = res.data;
      }
    );
  }

}
