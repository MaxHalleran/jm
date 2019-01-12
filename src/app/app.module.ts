import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdToHtmlPipe } from './pipes/md-to-html.pipe';
import { CleanNavComponent } from './components/clean-nav/clean-nav.component';
import { CleanHamburgerComponent } from './components/clean-hamburger/clean-hamburger.component';
import { CleanHomeComponent } from './components/clean-home/clean-home.component';
import { CleanProjectListComponent } from './components/clean-project-list/clean-project-list.component';
import { CleanProjectComponent } from './components/clean-project/clean-project.component';

@NgModule({
  declarations: [
    AppComponent,
    MdToHtmlPipe,
    CleanNavComponent,
    CleanHamburgerComponent,
    CleanHomeComponent,
    CleanProjectListComponent,
    CleanProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
