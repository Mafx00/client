import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Batch } from './models/Batch';
import { InventoryService } from './_services/Inventory.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  batches: any;
  logs: any;
  editBatch: any;
  model: any = {}

  createMode = false;
  historyMode = false;
  batchesMode = false;
  editMode = false  

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

    onEditProduct(id: number) {
      console.log("edit " + id);
      this.batchesMode = false;
      this.editMode = true;  

      this.http.get('https://localhost:5001/api/batches/' + id).subscribe({
        next: response => this.editBatch = response,
        error: error => console.log(error),
        complete: () => console.log('Request has completed')
    })      
      console.log(this.editBatch)
    }

    onDeleteProduct(id: number ) {
      this.http.delete('https://localhost:5001/api/batches/delete/' + id).subscribe({
        next: response => this.batches = response,
        error: error => console.log(error),
        complete: () => console.log('Request has completed')
    })
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
  cancelEditMode(event: boolean)
  {
    this.editMode = event;
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
