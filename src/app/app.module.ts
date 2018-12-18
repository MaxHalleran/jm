import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdToHtmlPipe } from './pipes/md-to-html.pipe';
import { PostsComponent } from './components/posts/posts.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectShortListComponent } from './components/project-short-list/project-short-list.component';
import { ProjectSummaryComponent } from './components/project-summary/project-summary.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MdToHtmlPipe,
    PostsComponent,
    ContactComponent,
    AboutComponent,
    NavbarComponent,
    ProjectShortListComponent,
    ProjectSummaryComponent,
    ProjectDetailComponent,
    ProjectsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
