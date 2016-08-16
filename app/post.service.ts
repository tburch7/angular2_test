import { Injectable } from '@angular/core';
import { Posts } from './post';

//http stuff
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';

@Injectable()
export class PostService {

	private postsUrl = 'app/posts';  // URL to web api

  //private postsUrl = ''; // URL to web api

  constructor(private http: Http) { }

  private handleError(error: any) {
  	console.error('An error occurred', error);
  	return Promise.reject(error.message || error);
	}

	getPosts() {
  return this.http.get(this.postsUrl)
             .toPromise()
             .then(response => response.json().data as Posts[])
             .catch(this.handleError);
	}

	getPost(id: number){
		return this.getPosts().then(posts=> posts.find(post => post.id===id));
	}

	// Add new Post
	private post(post: Posts): Promise<Posts> {
  	let headers = new Headers({
    'Content-Type': 'application/json'});

  	return this.http
             .post(this.postsUrl, JSON.stringify(post), {headers: headers})
             .toPromise()
             .then(res => res.json().data)
             .catch(this.handleError);
	}

	// Update existing Post
	private put(post: Posts) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');

  	let url = `${this.postsUrl}/${post.id}`;

  	return this.http
             .put(url, JSON.stringify(post), {headers: headers})
             .toPromise()
             .then(() => post)
             .catch(this.handleError);
	}

	//Delete existing Post
	delete(post: Posts) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');

  	let url = `${this.postsUrl}/${post.id}`;

  	return this.http
             .delete(url, {headers: headers})
             .toPromise()
             .catch(this.handleError);
	}

	save(post: Posts): Promise<Posts>  {
  	if (post.id) {
    	return this.put(post);
  	}
 	 	return this.post(post);
	}
}



