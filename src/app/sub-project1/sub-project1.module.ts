import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubProject1RoutingModule } from './sub-project1-routing.module';
import { SubProject1Component } from './sub-project1.component';


@NgModule({
  declarations: [
    SubProject1Component,
  ],
  imports: [
    CommonModule,
    SubProject1RoutingModule
  ]
})
export class SubProject1Module { }
