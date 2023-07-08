import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolutionComponent } from './pages/solution/solution.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProblemComponent } from './pages/problem/problem.component';

const routes: Routes = [
  {path:'', component:HomeComponent}, 
  {path:'solution', component:SolutionComponent},
  {path:'contact', component:ContactComponent},
  {path:'problem', component:ProblemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
