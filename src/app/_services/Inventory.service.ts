import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, map } from 'rxjs';
import { Batch } from '../models/Batch';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  baseUrl = 'https://localhost:5001/api/batches/'
  private currentBatchSource = new ReplaySubject<Batch>(1);
  currentBatches = this.currentBatchSource.asObservable();
  newBatch = new Batch();

  constructor(private http: HttpClient) { }

  public getAllBatches() : Observable<Batch[]> {
    return this.http.get<Batch[]>(this.baseUrl + 'branches/');
  }

  create(model: any)
  {
    console.log("started");
  
    return this.http.post<Batch>(this.baseUrl +'create', model).pipe(
      map((batch: Batch) => {
        if (batch) {
          localStorage.setItem('batch', JSON.stringify(batch));
          this.currentBatchSource.next(batch);
        }
        else
        console.log("reached far");
      })
    )
  }

  create2(batch:Batch): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(batch);
    console.log(body)
    console.log("id" + batch.id )
    return this.http.post(this.baseUrl + 'create', body)
  }

  search(model: any)
  {
    return this.http.get(this.baseUrl + 'branches/', model);
  }
}
