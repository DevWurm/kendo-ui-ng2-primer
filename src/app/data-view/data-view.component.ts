import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit {
  private gridData: {number: number}[] = [];

  constructor() { }

  ngOnInit() {
  }

  addItem(n: number) {
    this.gridData = this.gridData.concat({number: n});
  }

  removeItem(i: number) {
    console.log(i);
   this.gridData = this.gridData.slice(0, i).concat(this.gridData.slice(i+1));
   console.log(this.gridData);
  }

}
