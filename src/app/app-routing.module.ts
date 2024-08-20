import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/sub-project1', pathMatch: 'full' },
  { path: 'sub-project1', loadChildren: () => import('./sub-project1/sub-project1.module').then(m => m.SubProject1Module) }, 
  { path: 'sub-project2', loadChildren: () => import('./sub-project2/sub-project2.module').then(m => m.SubProject2Module) }, 
  { path: 'sub-project3', loadChildren: () => import('./sub-project3/sub-project3.module').then(m => m.SubProject3Module) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
