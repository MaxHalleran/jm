import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from './services/contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  project$: Observable<any>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.contentful.logContent('4qUevblqBawaEYSOkIUsYi');

    this.contentful.getEntries();

    this.project$ = this.contentful.getContent('4qUevblqBawaEYSOkIUsYi');
  }
}
