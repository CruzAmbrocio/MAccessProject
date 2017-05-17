import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {MainComponent} from './main/main.component';


const routes: Routes = [
  {
    path: 'main',
    component : MainComponent
  },
   // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
