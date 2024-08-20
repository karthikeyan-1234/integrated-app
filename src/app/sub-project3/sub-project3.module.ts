import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubProject3RoutingModule } from './sub-project3-routing.module';
import { SubProject3Component } from './sub-project3.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { LicensePopupComponent } from './components/license-popup/license-popup.component';  // Import MatIconModule for icons
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatOptionModule } from '@angular/material/core';
import { MatSelect,MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    SubProject3Component,
    LicensePopupComponent,
  ],
  imports: [
    CommonModule,
    SubProject3RoutingModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class SubProject3Module { }
