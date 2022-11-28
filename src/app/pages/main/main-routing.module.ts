import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PostDetailsComponent } from '../post/post-details/post-details.component';
import { PostListComponent } from '../post/post-list/post-list.component';
import { UpdatePostComponent } from '../post/update-post/update-post.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'post', component: PostListComponent },
      { path: 'post/:id', component: PostDetailsComponent },
      { path: 'create-post', component: UpdatePostComponent },
      { path: 'edit-post/:id', component: UpdatePostComponent },
      { path: '', redirectTo: '/app/home', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
