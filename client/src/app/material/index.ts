import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatCardModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  imports: [
    MatNativeDateModule,
  ]
})
export class MaterialModule { }
