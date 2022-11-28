import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostListService } from '../post-list.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  public stag = [
    {
      key: "IT", value: "INFORMATION TECHNOLOGY"
    },
    {
      key: "CS", value: "COMPUTER SCIENCE AND ENGINEERING"
    },
    {
      key: "ME", value: "MECHANICAL ENGINEERING"
    },
    {
      key: "BT", value: "BIO-TECHNOLOGY (SS)"
    },
    {
      key: "AU", value: "AUTOMOBILE ENGINEERING"
    },
    {
      key: "BM(SS)", value: "BIO-MEDICAL ENGINEERING (SS)"
    },
    {
      key: "FT", value: "FASHION TECHNOLOGY"
    }
  ]
  registarationForm: FormGroup;
  getName: any;
  postData: any;
  demo: any;

  constructor(
    private fb: FormBuilder,
    private postName: PostListService,
    private router: Router
  ) {
    this.registarationForm = fb.group({
      text: ["", Validators.required],
      likes: ["", Validators.required],
      tags: ["", Validators.required],
      owner: ["", Validators.required]
    })
  }


  ngOnInit() {
    this.postName.getPostList().subscribe((data: any) => this.getName = data.data)
  }

  OnSubmit(data: any) {
    console.log(data)
    this.postName.createPost(this.registarationForm.value).subscribe((data) => "Create New Post")
    this.router.navigate(['/app/post'])
  }
}
