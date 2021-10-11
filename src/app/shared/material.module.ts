import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        MatSliderModule,
        MatTableModule,
        MatButtonModule
    ],
    exports: [
        MatSliderModule,
        MatTableModule,
        MatButtonModule
    ]
})

export class MaterialModule { }
