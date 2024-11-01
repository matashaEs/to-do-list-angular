import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../../core/services/item.service';
import { ItemInterface } from '../../../core/interfaces/models/item.interceptor';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss'
})
export class ItemDetailComponent {
  route = inject(ActivatedRoute);
  itemService = inject(ItemService);
  item?: ItemInterface;

  constructor() {
    this.route.params.subscribe(params => {
      let slug = params['item'];

      this.loadItem(slug);
    });
  }

  loadItem(slug: string) {
    this.itemService.getItemBySug(slug).subscribe((data) => {
      this.item = data;
    })
  }
}
