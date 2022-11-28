import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostListService {
  constructor(private http: HttpClient) { }

  getPostList() {
    const header = {
      "content-type": "application/json; charset=UTF-8",
      "app-id": "627392069acddf4d5d7796f9"
    };
    return this.http.get('https://dummyapi.io/data/v1/post', { headers: header })
  }
  getPost(id: any) {
    const header = {
      "content-type": "application/json; charset=UTF-8",
      "app-id": "627392069acddf4d5d7796f9"
    };
    return this.http.get(`https://dummyapi.io/data/v1/post/${id.id}`, { headers: header })
  }

  createPost(data: any) {
    const header = {
      "app-id": "627392069acddf4d5d7796f9"
    };
    return this.http.post('https://dummyapi.io/data/v1/post/create', data, { headers: header })
  }

  editPost(data: any, id: any) {
    console.log(data, id)
    const header = {
      "app-id": "627392069acddf4d5d7796f9"
    };
    return this.http.put(`https://dummyapi.io/data/v1/post/${id.id}`, data, { headers: header })
  }
}
