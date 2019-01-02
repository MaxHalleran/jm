import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';

import { ContentfulService } from '../../services/contentful.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact$: Observable<any>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.contact$ = from(this.contentful.getContact());
  }

}
