import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ContentfulService } from '../../services/contentful.service';

@Component({
  selector: 'app-project-short-list',
  templateUrl: './project-short-list.component.html',
  styleUrls: ['./project-short-list.component.scss']
})
export class ProjectShortListComponent implements OnInit {

  projects$: Observable<any>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.projects$ = from(this.contentful.getProjectEntries());
  }

}
