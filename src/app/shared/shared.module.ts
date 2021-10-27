import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { SnackBarMessageComponent } from './components/snack-bar-message/snack-bar-message.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  exports: [
    MaterialModule,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    TranslateModule
  ],
  declarations: [
    SnackBarMessageComponent,
     HeaderComponent,
     FooterComponent
  ]
})
export class SharedModule { }
