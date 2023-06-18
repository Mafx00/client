import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InventoryService } from '../_services/Inventory.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  @Output() cancerlResgister = new EventEmitter();
  model: any = {}

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
  }

  create() {
    console.log(this.model);

    this.inventoryService.create(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      //error: error => console.log(error)
    })
  }

  cancel() {
    this.cancerlResgister.emit(false);
    console.log("cancel");
  }
}
