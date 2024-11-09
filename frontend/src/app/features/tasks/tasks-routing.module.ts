import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

const routes: Routes = [
  { path: '', component: TasksListComponent },
  {
    path: 'add', component: TaskDetailComponent
  },
  {
    path: 'edit/:slug', component: TaskDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
