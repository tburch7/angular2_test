import { provideRouter, RouterConfig }  from '@angular/router';
import { PostsComponent } from './posts.component';
import { DashboardComponent } from './dashboard.component';
import { PostDetailComponent } from './post-detail.component';

const routes: RouterConfig = [
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: PostDetailComponent
  },

];

export const appRouterProviders = [
  provideRouter(routes)
];

