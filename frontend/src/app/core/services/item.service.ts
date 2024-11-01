import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ItemInterface } from '../interfaces/models/item.interceptor';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = environment.BACKEND_API_URL+'/api/tasks';
  httpClient = inject(HttpClient);

  constructor() { }

  getItemBySug(slug: string) {
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

  addItem({name}:{name: string}) {
    return this.httpClient.post<ItemInterface>(this.baseUrl, {name})
  }

  updateItem({id, name}: {id: number, name: string}) {
    return this.httpClient.put<ItemInterface>(this.baseUrl, {id, name});
  }
}
