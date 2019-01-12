import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import the components to show
import { CleanHomeComponent } from './components/clean-home/clean-home.component';
import { CleanProjectListComponent } from './components/clean-project-list/clean-project-list.component';
import { CleanProjectComponent } from './components/clean-project/clean-project.component';


// the routes and their coresponding components
const routes: Routes = [
  { path: '', component: CleanHomeComponent },
  { path: 'projects/:id', component: CleanProjectListComponent },
  { path: 'project/:id', component: CleanProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
