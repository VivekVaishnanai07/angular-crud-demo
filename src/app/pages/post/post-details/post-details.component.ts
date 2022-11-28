import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostListService } from '../post-list.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(private postList: PostListService, private route: ActivatedRoute) { }
  post: any;
  postId: any;

  ngOnInit(): void {
    this.route.params.subscribe((data: any) => this.postId = data)
    this.postList.getPost(this.postId).subscribe((data:any) => this.post = data)
  }
}