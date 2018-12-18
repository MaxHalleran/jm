import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import the components to show
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectShortListComponent } from './components/project-short-list/project-short-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';

// the routes and their coresponding components
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: ProjectShortListComponent },
  { path: 'path/:id', component: ProjectDetailComponent },
  { path: 'projectsList', component:ProjectsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
