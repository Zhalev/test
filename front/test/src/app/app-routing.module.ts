import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SumComponent} from "./components/sum/sum.component";

const routes: Routes = [
  {path: '', component: SumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
