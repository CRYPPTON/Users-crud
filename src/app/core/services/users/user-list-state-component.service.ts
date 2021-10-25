import { Injectable } from '@angular/core';
import {  UserListStateParams } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class UserListStateComponentService {

  params: UserListStateParams = {
    search: '',
    direction: '',
    order: '',
    page: 1,
    pageSize: 10
  };

  constructor() { }
}
