import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Posts }           from './post';

@Injectable()
export class PostSearchService {

  constructor(private http: Http) {}

  search(term: string) {
    return this.http
               .get(`app/posts/?name=${term}+`)
               .map((r: Response) => r.json().data as Posts[]);
  }
}