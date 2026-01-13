
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService, Post } from '../../service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  postForm: FormGroup;

  constructor(private postService: PostsService, private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data.slice(0, 10); 
    });
  }

  addPost() {
    if (this.postForm.valid) {
      this.postService.addPost(this.postForm.value).subscribe((newPost) => {
        this.posts.unshift(newPost);
        this.postForm.reset();
      });
    }
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id);
    });
  }
}
