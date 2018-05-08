import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ModelComponent } from './model/model.component';

const routes: Routes = [
  {
   path: '',
   component: HomeComponent
 },
 {
   path: 'about',
   component: AboutComponent
 },
 {
   path: 'work',
   component: WorkComponent
 },
 {
   path: 'model/:id',
   component: ModelComponent
 }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
