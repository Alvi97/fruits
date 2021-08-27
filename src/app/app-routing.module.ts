import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphsComponent } from './layout/graphs/graphs.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'graphs/:name', component: GraphsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
