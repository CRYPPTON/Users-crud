import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error-messages-from-server',
  templateUrl: './error-messages-from-server.component.html',
  styleUrls: ['./error-messages-from-server.component.scss']
})
export class ErrorMessagesFromServerComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) { }

  ngOnInit(): void {
  }

}
