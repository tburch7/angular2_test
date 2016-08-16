import { Component }       from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { PostService }     from './post.service';

// Add the RxJS Observable operators we need in this app.
//import './rxjs-operators';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


// import './rxjs-extensions';

@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
  styleUrls:['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    PostService
  ]
})
export class AppComponent {
  title = 'Angular2-Client Posts List';

}

