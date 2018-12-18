import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../../services/contentful.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  project$: Observable<any>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.contentful.logContent('4qUevblqBawaEYSOkIUsYi');

    // this.contentful.getEntries();

    this.contentful.getProjectEntries();

    this.contentful.getSpace();

    // this.contentful.getContentType();

    this.project$ = this.contentful.getContent('4qUevblqBawaEYSOkIUsYi');
  }
}
