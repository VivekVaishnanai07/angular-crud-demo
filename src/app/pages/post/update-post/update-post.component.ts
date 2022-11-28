import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostListService } from '../post-list.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  postData: any;
  name: any;
  registarationForm: FormGroup;
  getName: any;
  postId: any;
  post: any;
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

  constructor(
    private fb: FormBuilder,
    private postList: PostListService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((data: any) => this.postId = data)
    this.registarationForm = fb.group({
      text: ['', Validators.required],
      likes: ['', Validators.required],
      tags: ['', Validators.required],
      owner: [{ value: '', disabled: this.postId.id ? true : false }, Validators.required]
    })
  }



  ngOnInit(): void {
    this.postList.getPostList().subscribe((data: any) => this.getName = data.data)
    if (this.postId.id) {
      this.postList.getPost(this.postId).subscribe((data: any) => {
        this.post = data
        if (this.post) {
          this.name = this.post.owner.id
          this.demo()
        }
      })
    }
  }

  demo() {
    this.postId.id ?
      this.registarationForm.setValue({
        text: this.post.text,
        likes: this.post.likes,
        tags: this.post.tags,
        owner: this.name
      }) : ""
  }


  onSubmit(data: any) {
    if (this.postId.id) {
      this.postList.editPost(data, this.postId).subscribe((data) => console.log("Update Data", data))
      this.router.navigate(['app/post'])
    } else {
      this.postList.createPost(this.registarationForm.value).subscribe((data) => "Create New Post")
      this.router.navigate(['app/post'])
    }
  }

}
