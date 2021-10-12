import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UserHttpService } from '@app-services';
import { User } from '@app-models';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, AfterViewInit {

  constructor(private userHttp: UserHttpService) { }

  users: User[] = [];
  displayedColumns: string[] = ['name', 'email', 'created', 'action'];
  dataSource = new MatTableDataSource<User>(this.users);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.userHttp.getUsers().subscribe(
      (res) => {
        console.log(res);
        this.users = res.data;
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
