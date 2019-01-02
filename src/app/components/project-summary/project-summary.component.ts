import { Component, OnInit, Input } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ContentfulService } from '../../services/contentful.service';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.scss']
})
export class ProjectSummaryComponent implements OnInit {

  @Input('project') project: any;

  /** Returns the url as a progressive jpeg with a height and width of 200 each.
  */
  fetchPic(url) {
    return `${url}?fm=jpg&fl=progressive&fit=pad&w=200&h=200`;
  }

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    // console.log(this.project);
    // console.log((this.project.pictures ? this.project.pictures : "No pictures"));
    // console.log((this.project.pictures ? this.project.pictures[0] : "No pictures"));
    if (this.project.pictures) {
      console.log(this.project.title);
      this.project.pictures.forEach((picture) => {
        console.log(picture.fields.file.url);
      })
    }
  }

}
