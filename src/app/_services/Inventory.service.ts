import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, map, tap } from 'rxjs';
import { Batch } from '../models/Batch';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  baseUrl = 'https://localhost:5001/api/batches/'
  private currentBatchSource = new ReplaySubject<Batch>(1);
  currentBatches = this.currentBatchSource.asObservable();
  batches: Batch[] = [];

  private currentLogSource = new ReplaySubject<Log>(1);
  currentLogs = this.currentLogSource.asObservable();


  constructor(private http: HttpClient) { }

  public getAllBatches() : Observable<Batch[]> {
    return this.http.get<Batch[]>(this.baseUrl);
  }

  create(model: any)
  {  
    console.log(model);
    return this.http.post<Batch>(this.baseUrl +'create', model).pipe(
      map((batch: Batch) => {
        if (batch) {
          localStorage.setItem('batch', JSON.stringify(batch));
          this.currentBatchSource.next(batch);          
        }
      })
    )
  }

  update(batch : Batch)
  {  
    console.log("updated batch");
     console.log(batch);  

      return this.http.put<Batch>(this.baseUrl + batch.id, batch).pipe(
        map((batch: Batch) => {
          if (batch) {
            localStorage.setItem('batch', JSON.stringify(batch));
            this.currentBatchSource.next(batch);          
          }
        })
      )
    }

  search(id: number)
  {
    return this.http.get(this.baseUrl + 'branches/' + id);
  }

  findBatch (id: number)
  {  
    return this.http.post<Batch>(this.baseUrl + id, id).pipe(
      map((batch: Batch) => {
        if (batch) {
          return batch;        
        }
        return batch;
      })
    )
  }

  /* updateBatch(batch: Batch):  Observable<Batch> {
    let observable = this.http.put(this.baseUrl + batch.id, batch).pipe(
        tap(result => {
            //this code is not executed, I do not understand why                
            this.lessonChange.emit(result);
            return result;
        })
    );    
    return observable;
}*/
}

