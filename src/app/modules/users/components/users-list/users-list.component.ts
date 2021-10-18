import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UserHttpService } from '@app-services';
import { User } from '@app-models';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ParamForReqSource } from '@app-models';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import { CreateUserComponent } from '../create-user/create-user.component';
import { UserUpdateComponent } from '../user-update/user-update.component';

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, AfterViewInit {

  constructor(private userHttp: UserHttpService, private dialog: MatDialog) { }

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

  onDelete(event: MouseEvent, id: number) {

    event.stopPropagation();

    const dialogRef = this.dialog.open(DeleteUserDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userHttp.deleteUser(id).subscribe(
          () => {
            if (this.dataUsers.data.length === 1 && this.params.page !== 1) {
              this.params.page--;
            }
            this.getUsersFromServer();
          }
        );
      }
    });
  }

  onSearch() {
    if (this.params.search !== this.params.search.trim()) { return; };

    // set first page
    this.paginator.firstPage();
    this.getUsersFromServer();
  }

  onClear() {
    this.params.search = '';
    this.paginator.firstPage();
    this.getUsersFromServer();
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

  onUpdate(user: User) {
    const dialogRef = this.dialog.open(UserUpdateComponent, { data: user });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUsersFromServer();
      }
    });
  }

  onCreate() {
    const dialogRef = this.dialog.open(CreateUserComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUsersFromServer();
      }
    });
  }
}
