import { Component, Input, Output, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Posts } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'my-post-detail',
  templateUrl: 'app/post-detail.component.html',
  styleUrls: ['app/post-detail.component.css']

})

export class PostDetailComponent implements OnInit, OnDestroy{
  @Input() post: Posts;

  @Output() close = new EventEmitter();
  sub: any;
  error: any;
  navigated = false; // true if navigated here

  constructor(
  private postService: PostService,
  private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    if (params['id'] !== undefined) {
      let id = +params['id'];
      this.navigated = true;
      this.postService.getPost(id)
          .then(post => this.post = post);
    } else {
      this.navigated = false;
      this.post = new Posts();
    }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack(savedPosts: Posts = null) {
  this.close.emit(savedPosts);
  if (this.navigated) { 
    window.history.back();
  }
  }

  save() {
  this.postService
      .save(this.post)
      .then(post => {
        this.post = post; // saved hero, w/ id if new
        this.goBack(post);
      })
      .catch(error => this.error = error); // TODO: Display error message
}
}
 
