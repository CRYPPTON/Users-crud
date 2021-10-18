import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrls: ['./delete-user-dialog.component.scss']
})
export class DeleteUserDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<boolean>
  ) { }

  ngOnInit(): void {
  }

  public close(param: any) {
    this.dialogRef.close(param);
  }

}
