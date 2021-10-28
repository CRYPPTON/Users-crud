import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    imports: [
        MatSliderModule,
        MatTableModule,
        MatButtonModule,
        MatPaginatorModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSidenavModule
    ],
    exports: [
        MatSliderModule,
        MatTableModule,
        MatButtonModule,
        MatPaginatorModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSidenavModule
    ]
})

export class MaterialModule { }
