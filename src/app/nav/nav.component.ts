import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../_services/Inventory.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  batches: any;

  //constructor(private inventoryService: InventoryService) { }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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
   // this.inventoryService.search(this.model).subscribe;
  }
}