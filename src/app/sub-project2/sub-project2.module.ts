import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubProject2RoutingModule } from './sub-project2-routing.module';
import { SubProject2Component } from './sub-project2.component';
import { HomeComponent } from './components/home/home.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    SubProject2Component,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SubProject2RoutingModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule
  ]
})
export class SubProject2Module { }
