import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { HeaderComponent } from '../header/header.component';
import { PostDetailsComponent } from '../post/post-details/post-details.component';
import { PostListComponent } from '../post/post-list/post-list.component';
import { UpdatePostComponent } from '../post/update-post/update-post.component';
import { DialogComponent } from '../ui/dialog/dialog.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    PostListComponent,
    UpdatePostComponent,
    PostDetailsComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
