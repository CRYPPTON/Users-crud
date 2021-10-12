import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    imports: [
        MatSliderModule,
        MatTableModule,
        MatButtonModule,
        MatPaginatorModule, 
    ],
    exports: [
        MatSliderModule,
        MatTableModule,
        MatButtonModule,
        MatPaginatorModule,
    ]
})

export class MaterialModule { }
