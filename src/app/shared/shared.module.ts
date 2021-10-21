import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { SnackBarMessageComponent } from './components/snack-bar-message/snack-bar-message.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [MaterialModule, CommonModule],
  exports: [MaterialModule, CommonModule],
  declarations: [

    SnackBarMessageComponent
  ]
})
export class SharedModule { }
