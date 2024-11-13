import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ItemInterface } from '../interfaces/models/item.interceptor';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = environment.BACKEND_API_URL+'/api/items';
  httpClient = inject(HttpClient);

  constructor() { }

  getItemBySlug(slug: string) {
    return this.httpClient.get<ItemInterface>(`${this.baseUrl}/slug/${slug}`);
  }

  getItems() {
    return this.httpClient.get<ItemInterface[]>(this.baseUrl);
  }

  deleteItem(id: number) {
    return this.httpClient.delete(`${this.baseUrl}`, {
      body: {id}
    });
  }

  addItem({title}:{title: string}) {
    return this.httpClient.post<ItemInterface>(this.baseUrl, {title})
  }

  updateItem({id, title}: {id: number, title: string}) {
    return this.httpClient.put<ItemInterface>(this.baseUrl, {id, title});
  }
}
