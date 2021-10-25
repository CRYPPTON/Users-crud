import { SortDirection } from '@angular/material/sort';

export interface UserListStateParams {
    search: string;
    direction: SortDirection;
    order: string;
    page: number;
    pageSize: number;
}
