import { Component } from '@angular/core';

interface Comment {
  id: number;
  user: string;
  text: string;
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  newComment: string = '';
  comments: Comment[] = []; // Initialize an empty array for comments
  nextCommentId: number = 1; // Initialize a counter for comment IDs

  postComment(): void {
    if (this.newComment.trim() === '') {
      return; // Don't post empty comments
    }


    const user = 'JohnDoe';
    
    // Add the new comment to the comments array
    this.comments.push({
      id: this.nextCommentId++,
      user: user,
      text: this.newComment
    });

    // Clear the comment input field
    this.newComment = '';
  }

  deleteComment(comment: any): void {
    // Find the index of the comment in the array and remove it
    const index = this.comments.indexOf(comment);
    if (index !== -1) {
      this.comments.splice(index, 1);
    }
  }
  editComment(comment: any): void {
    // Implement logic to edit the comment
  }
}
