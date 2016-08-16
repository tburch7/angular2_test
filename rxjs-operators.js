// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
"use strict";
// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.
// Statics
require('rxjs/add/observable/throw');
// Operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
// // Observable class extensions
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';
// // Observable operators
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap'; 
//# sourceMappingURL=rxjs-operators.js.map