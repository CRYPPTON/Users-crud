import { Component, OnInit, ViewChild } from '@angular/core';
import { UserHttpService, UserListStateComponentService } from '@app-services';
import { User } from '@app-models';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import { CreateUserComponent } from '../create-user/create-user.component';
import { UserUpdateComponent } from '../user-update/user-update.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {

  constructor(private userHttp: UserHttpService,
    private dialog: MatDialog,
    public userStateService: UserListStateComponentService,
    private router: Router) { }

  users: User[] = [];
  displayedColumns: string[] = ['name', 'email', 'created', 'action'];
  totalUsersNumber: number;
  dataUsers = new MatTableDataSource<User>(this.users);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  userListParam = this.userStateService.params;

  ngOnInit(): void {
    //this.getUsersFromServer();
  }

  setPage(event: PageEvent) {

    this.userListParam.page = ++event.pageIndex;
    this.userListParam.pageSize = event.pageSize;

    this.getUsersFromServer();
  }

  onDelete(event: MouseEvent, id: number) {

    event.stopPropagation();

    const dialogRef = this.dialog.open(DeleteUserDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userHttp.deleteUser(id).subscribe(
          () => {
            if (this.dataUsers.data.length === 1 && this.userListParam.page !== 1) {
              this.userListParam.page--;
            }
            this.getUsersFromServer();
          }
        );
      }
    });
  }

  onSearch() {
    if (this.userListParam.search !== this.userListParam.search.trim()) { return; };

    // set first page
    this.paginator.firstPage();
    this.getUsersFromServer();
  }

  onClear() {
    this.userListParam.search = '';
    this.paginator.firstPage();
    this.getUsersFromServer();
  }

  getUsersFromServer() {
    this.userHttp.getUsers(this.userListParam).subscribe(
      (request) => {
        this.totalUsersNumber = request.meta.total;
        this.dataUsers.data = [];
        this.dataUsers.data = request.data;
        this.paginator.pageIndex = this.userListParam.page - 1;
      }
    );
  }

  onUpdate(event: MouseEvent, user: User) {

    event.stopPropagation();

    const dialogRef = this.dialog.open(UserUpdateComponent, { data: user });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUsersFromServer();
      }
    });
    ;
  }

  onCreate() {
    const dialogRef = this.dialog.open(CreateUserComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUsersFromServer();
      }
    });
  }

  onSettings() {
    this.router.navigateByUrl('settings');
  }

  sortData(event: Sort) {

    this.userListParam.order = event.active;
    this.userListParam.direction = event.direction;

    if (this.userListParam.direction === '') {
      this.userListParam.order = '';
    }
    this.getUsersFromServer();
  }
}
