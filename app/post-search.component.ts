import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { PostSearchService } from './post-search.service';
import { Posts } from './post';

@Component({
  selector: 'post-search',
  templateUrl: 'app/post-search.component.html',
  providers: [PostSearchService]
})
export class HeroSearchComponent implements OnInit {
  posts: Observable<Posts[]>;
  searchSubject = new Subject<string>();
  constructor(
    private postSearchService: PostSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string) { this.searchSubject.next(term); }
  ngOnInit() {
    this.posts = this.searchSubject
      .asObservable()           // cast as Observable
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.postSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Posts[]>([]))
      .catch(error => {
        // Todo: real error handling
        console.log(error);
        return Observable.of<Posts[]>([]);
      });
  }
  gotoDetail(post: Posts) {
    let link = ['/detail', post.id];
    this.router.navigate(link);
  }
}