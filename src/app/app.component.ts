import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Batch } from './models/Batch';
import { InventoryService } from './_services/Inventory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  batches: any;
  logs: any;
  model: any = {}

  createMode = false;
  historyMode = false;
  batchesMode = false;
  

  constructor(private http: HttpClient, private inventoryService : InventoryService) {}

  ngOnInit() {
  }

  loadBatches() {
    this.http.get('https://localhost:5001/api/batches').subscribe({
      next: response => this.batches = response,
     })
    }

    orderBatches(){
      this.batchesMode = !this.batchesMode;
      if(!this.batchesMode) return;

      this.http.get('https://localhost:5001/api/batches/order').subscribe({
      next: response => this.batches = response,
      })
    }

    search() {
      //this.inventoryService.search(this.model).subscribe;
    }
  
    openCreate() {
      this.createMode = true;    
    }
  
    seeAll() {
      this.batchesMode = !this.batchesMode;
      if(!this.batchesMode) return;

      this.http.get('https://localhost:5001/api/batches').subscribe({
        next: response => this.batches = response,
        error: error => console.log(error),
        complete: () => console.log('Request has completed')
    })
  }

    cancelCreateMode(event: boolean)
    {
      this.createMode = event;
  }
  
    seeHistory() {
      this.historyMode = !this.historyMode;
      if(!this.historyMode) return;

      this.http.get('https://localhost:5001/api/batches/history').subscribe({
        next: response => this.logs = response,
        error: error => console.log(error),
        complete: () => console.log('Request has completed')
    })    
  }
}
