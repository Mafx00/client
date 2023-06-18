import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {
  batches: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("BATCHES INITIATED");
  }


}
