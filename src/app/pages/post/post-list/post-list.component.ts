import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DialogComponent } from '../../ui/dialog/dialog.component';
import { PostListService } from '../post-list.service';

export interface postDetails {
  id: string;
  owner: {
    id: string;
    firstName: string;
    lastName: string;
  };
  publishDate: string;
  image: string;
  likes: number;
  tag: any[];
  text: string
  updatedDate: string;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  constructor(private datalist: PostListService, public dialog: MatDialog, private router: Router, private http: HttpClient) {

    this.datalist.getPostList().subscribe((data: any) => this.employeePostList = data.data)
  }
  public employeePostList: postDetails[] = [];
  displayedColumns: string[] = ['id', 'tags', 'likes', 'text', 'owner', 'publishDate', 'updatedDate', 'view', 'edit', 'delete'];
  dataSource = this.employeePostList;
  status = '';

  ngOnInit(): void { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id: any): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      data: { 'id': id },
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  onDetails(id: any) {
    this.router.navigate([`app/post/${id}`])
  }

  onEdit(id: any) {
    this.router.navigate([`app/edit-post/${id}`])
  }

  onChange(event: PageEvent) {
    console.log(event)
    this.datalist.paginationLimit(event.pageSize, event.pageIndex).subscribe((data: any) => this.employeePostList = data.data)
  }
}
