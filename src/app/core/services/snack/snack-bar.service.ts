import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarMessageComponent } from 'src/app/shared/components/snack-bar-message/snack-bar-message.component';
import { SnackDataModel } from 'src/app/shared/models/snack-message/snack-data-model';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(public snackBar: MatSnackBar) { }

  openSnack(data: SnackDataModel) {
    const snackClass = this.setSnackClass(data.status);
    const message = data.message;

    this.snackBar.openFromComponent(SnackBarMessageComponent, {
      data: message,
      panelClass: snackClass,
      duration: 5000,
    });
  }

  setSnackClass(status: boolean): string {
    return status? 'success-snackbar' : 'error-snackbar';
  }
}
