import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Batch } from '../models/Batch';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  baseUrl = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  public getAllBatches() : Observable<Batch[]> {
    return this.http.get<Batch[]>(this.baseUrl + 'branches/');
  }

  search(model: any)
  {
    return this.http.get(this.baseUrl + 'branches/', model);
  }
}
