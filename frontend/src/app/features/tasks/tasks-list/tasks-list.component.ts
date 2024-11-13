import { Component, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { SelectionModel } from '@angular/cdk/collections';
import { RouterModule } from '@angular/router';
import { ItemInterface } from '../../../core/interfaces/models/item.interceptor';
import moment from 'moment';
import { ItemService } from '../../../core/services/item.service';
import { MatButtonModule } from '@angular/material/button';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    RouterModule,
    MatButtonModule
  ],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})

export class TasksListComponent {
  moment = moment;
  displayedColumns: string[] = ['select', 'title', 'status', 'createdAt', 'updatedAt', 'actions'];
  dataSource = new MatTableDataSource<ItemInterface>([]);
  selection = new SelectionModel<ItemInterface>(true, []);
  itemService = inject(ItemService);

  constructor() {
    this.loadTasks();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ItemInterface): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'}`;
  }

  loadTasks() {
    this.itemService.getItems().subscribe(tasks => {
      this.dataSource.data = tasks;
    });
  }

  deleteSelectedTasks() {
    const selectedTasks = this.selection.selected;
    const selectedTasksIds = selectedTasks.map(task => task.id);

    let promises = selectedTasksIds.map((id) => {
      let ob = this.itemService.deleteItem(id);

      return lastValueFrom(ob);
    });

    Promise.all(promises).then(() => {
      this.loadTasks();
    });
  }
}