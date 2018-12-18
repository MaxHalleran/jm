import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ContentfulService } from '../../services/contentful.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about$: Observable<any>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.about$ = from(this.contentful.getContact());
  }

}
