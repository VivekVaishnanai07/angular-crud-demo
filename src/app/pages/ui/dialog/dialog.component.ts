import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  public status = '';
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private http: HttpClient) {
    console.log(this.data.id)
  }
  ngOnInit() { }


  onDeletePost() {
    console.log("clicked")
    const header = {
      "content-type": "application/json; charset=UTF-8",
      "app-id": "627392069acddf4d5d7796f9"
    };
    this.http.delete(`https://dummyapi.io/data/v1/post/${this.data.id
      }`, { headers: header }).subscribe(() => this.status = 'Delete successful')
    this.router.navigate(['app/post'])
    window.location.reload()
  }
}
