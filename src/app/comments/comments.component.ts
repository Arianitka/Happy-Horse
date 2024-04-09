import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  posts: Post[] = [];
  isLoading: boolean = true;
  
  constructor (private api : ApiService) {}
  
  ngOnInit(): void {
    this.api.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    })
    
  }

}

// import { Component } from '@angular/core';

// interface Comment {
//   id: number;
//   user: string;
//   text: string;
// }

// @Component({
//   selector: 'app-comments',
//   templateUrl: './comments.component.html',
//   styleUrls: ['./comments.component.css']
// })
// export class CommentsComponent {
//   newComment: string = '';
//   comments: Comment[] = []; 
//   nextCommentId: number = 1; // Initialize a counter for comment IDs

 
// }
