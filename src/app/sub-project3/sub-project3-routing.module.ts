import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SubProject3Component } from '../sub-project3/sub-project3.component';

const routes: Routes = [{ path: '', component: SubProject3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubProject3RoutingModule { }
