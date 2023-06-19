import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Batch } from '../models/Batch';
import { InventoryService } from '../_services/Inventory.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  @Input() batchToEdit: any;
  @Output() cancelEdit = new EventEmitter();
  model: any = {}

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.model = this.batchToEdit;
  }

  edit() {
    this.inventoryService.update(this.model).subscribe();

    this.cancel();
  }

  cancel() {
    this.cancelEdit.emit(false);
    console.log("cancel");
  }
}
