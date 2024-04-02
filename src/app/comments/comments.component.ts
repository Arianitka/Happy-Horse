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

    // Assuming 'user' is the currently logged-in user's username
    const user = 'JohnDoe'; // Replace with actual username or retrieve from authentication service

    // Add the new comment to the comments array
    this.comments.push({
      id: this.nextCommentId++,
      user: user,
      text: this.newComment
    });

    // Clear the comment input field
    this.newComment = '';
  }

  deleteComment(commentId: number): void {
    // Find the index of the comment with the specified ID
    const index = this.comments.findIndex(comment => comment.id === commentId);

    if (index !== -1) {
      // Remove the comment from the array
      this.comments.splice(index, 1);
    }
  }
}
