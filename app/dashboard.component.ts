import { Component, OnInit } from '@angular/core';
import { Posts } from './post';
import { PostService } from './post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  posts: Posts[] = [];

  constructor(private router: Router,
    private postService: PostService){ }
  
  ngOnInit() {
    this.postService.getPosts()
    .then(posts => this.posts = posts.slice(0, 5));
  }
  gotoDetail(post: Posts) { /* not implemented yet */
      let link = ['/detail', post.id];
      this.router.navigate(link);
  }
}

