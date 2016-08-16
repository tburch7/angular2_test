export class InMemoryDataService {
  createDb() {
    let posts = [
      {id: 11, username: 'Mr. Nice', post_title: 'post title', post_content:'post content'},
      {id: 13, username: 'Test1', post_title: 'post title', post_content:'post content'},
      {id: 14, username: 'Test2', post_title: 'post title', post_content:'post content'},
      {id: 15, username: 'Test2', post_title: 'post title', post_content:'post content'}
    ];
    return {posts};
  }
}