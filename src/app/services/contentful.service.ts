import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../../environments/environment';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import * as marked from 'marked';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  })

  constructor() { }

  logContent(contentId) {
    this.client.getEntry(contentId)
      .then((entry) => console.log(entry))
      .catch(console.error)
  }

  getContent(contentId) {
    const promise = this.client.getEntry(contentId);
    return from(promise).pipe(map(entry => entry.fields));
  }

  /** Returns contact information.
  */
  async getContact() {
    return await this.client.getEntry('5nHFYoD7jyQYaKGs26Gua0')
      .then((entry) => entry.fields)
      .catch(console.error)
  }

  /** Returns the bio for the about you section
  */
  async getBio() {
    return await this.client.getEntry('post_id')
      .then((entry) => entry.fields)
      .catch(console.error)
  }

  getEntries(type: any) {
    this.client.getEntries()
      .then((response) => console.log(response.items))
      .catch(console.error)
  }

  getProjectEntries() {
    return this.client.getEntries({content_type: 'project'})
      .then((response) => {
        console.log(response.items);
        return response.items;
      })
      .catch(console.error)
  }

  getSpace() {
    this.client.getSpace()
      .then((space) => console.log(space))
      .catch(console.error)
  }

  /** Returns an array containing content of a specified type
  */
  async getContentType(type) {
    return await this.client.getContentType(type)
      .then((contentType) => {
        console.log(contentType.fields);
        return contentType.fields;
      })
      .catch(console.error)
  }

  /** Turns a markdown string into an html string
  */
  markdownToHtml(md: string) {
    return marked(md);
  }
}
