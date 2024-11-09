import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ItemService } from '../../../core/services/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemInterface } from '../../../core/interfaces/models/item.interceptor';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
  ],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent {
  fb = inject(FormBuilder);
  itemService = inject(ItemService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  item: ItemInterface | undefined; 
  
  form = this.fb.group({
    title: ['', Validators.required],
    id: ['']
  })

  constructor() {
    this.route.params.subscribe((data) => {
      const slug = data['slug'];
      if(slug) {
        this.itemService.getItemBySug(slug).subscribe((item) => {
          this.item = item;
          this.form.patchValue({
            id: item.id+'',
            title: item.title
          })
          this.form.updateValueAndValidity();
        });
      }
    })
  }

  create() {
    if(this.form.invalid) return

    this.itemService.addItem({title: this.form.value.title!}).subscribe(() => {
      this.router.navigate(['/items']);
    })
  }

  update() {
    if(this.form.invalid) return

    this.itemService.updateItem({
      id: parseInt(this.form.value.id!),
      title: this.form.value.title!
    }).subscribe(() => {
      alert('Item updated');
    })
  }
}
