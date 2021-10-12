import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UserHttpService } from '@app-services';
import { User } from '@app-models';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ParamForReqSource } from '@app-models';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, AfterViewInit {

  constructor(private userHttp: UserHttpService) { }

  users: User[] = [];
  displayedColumns: string[] = ['name', 'email', 'created', 'action'];
  totalUsersNumber: number;
  dataUsers = new MatTableDataSource<User>(this.users);
  params: ParamForReqSource = {
    search: '',
    direction: '',
    order: '',
    page: 1,
    pageSize: 10
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.getUsersFromServer();
  }

  ngAfterViewInit() {
    this.dataUsers.sort = this.sort;
  }

  setPage(event: PageEvent) {
    this.params.page = ++event.pageIndex;
    this.params.pageSize = event.pageSize;

    this.getUsersFromServer();
  }

  onSearch(searchText: string) {
    if (searchText.trim() !== this.params.search) {
      this.params.search = searchText.trim();

      this.getUsersFromServer();
    }
    return;
  }

  getUsersFromServer() {
    this.userHttp.getUsers(this.params).subscribe(
      (request) => {
        this.totalUsersNumber = request.meta.total;
        this.dataUsers.data = [];
        this.dataUsers.data = request.data;
      }
    );
  }
}
