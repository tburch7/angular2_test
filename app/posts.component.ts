import { Component, OnInit } from '@angular/core';
import { Posts } from './post';
import { PostDetailComponent } from './post-detail.component';
import { PostService } from './post.service';
import { Router }            from '@angular/router';


@Component({
  selector: 'my-posts',
  templateUrl: `app/post.component.html`,
  styleUrls: [`app/post.component.css`],
  directives: [PostDetailComponent],
})
export class PostsComponent implements OnInit {
  title = 'Tom Blog';
  error: any;
  selectedPost: Posts;
  array_posts: Posts[];
  addingPost = false;
  //postService = new PostService(); //don't do this BAD
  constructor(private router: Router, private postService: PostService){}

  getPosts() {
    this.postService.getPosts()
    .then(array_posts => this.array_posts = array_posts)
    .catch(error => this.error = error);
  }
  
  ngOnInit() {
    this.getPosts();
  }

  onSelect(post: Posts){
  	this.selectedPost = post;
    this.addingPost = false;
  }

  gotoDetail(){
    this.router.navigate(['detail', this.selectedPost.id]);
  }

  addPost() {
  this.addingPost = true;
  this.selectedPost = null;
  }

  close(savedPost: Posts) {
  this.addingPost = false;
  if (savedPost) { this.getPosts(); }
  }

  deletePost(post: Posts, event: any) {
  event.stopPropagation();
  this.postService
      .delete(post)
      .then(res => {
        this.array_posts = this.array_posts.filter(h => h !== post);
        if (this.selectedPost === post) { this.selectedPost = null; }
      })
      .catch(error => this.error = error);
  }
  
}



