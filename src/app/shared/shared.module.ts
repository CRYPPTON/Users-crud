import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { SnackBarMessageComponent } from './components/snack-bar-message/snack-bar-message.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    MaterialModule,
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  declarations: [
    SnackBarMessageComponent,
     HeaderComponent,
     FooterComponent
  ]
})
export class SharedModule { }
