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
  model: any = {}


  constructor(private http: HttpClient, private inventoryService : InventoryService) {}

  ngOnInit() {
  }

  loadBatches() {
    console.log("LOADED");
    this.http.get('https://localhost:5001/api/batches').subscribe({
      next: response => this.batches = response,
     })
    }

    orderBatches(){
      console.log("ORDERED");
      this.http.get('https://localhost:5001/api/batches/order').subscribe({
      next: response => this.batches = response,
      })
    }

    search() {
      //this.inventoryService.search(this.model).subscribe;
    }
  
    create() {
      //this.inventoryService.search(this.model).subscribe;
    
    }
    sort() {
      this.http.get('https://localhost:5001/api/batches/order').subscribe({
        next: response => this.batches = response,
        error: error => console.log(error),
        complete: () => console.log('Request has completed')
    })
  }
  
    seeAll() {
      this.http.get('https://localhost:5001/api/batches').subscribe({
        next: response => this.batches = response,
        error: error => console.log(error),
        complete: () => console.log('Request has completed')
    })
  }
  
    seeHistory() {
     // this.inventoryService.search(this.model).subscribe
    }
}
