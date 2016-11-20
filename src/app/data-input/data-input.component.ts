import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.scss']
})
export class DataInputComponent implements OnInit {
  private value = 0;

  @Output()
  onNewData = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  emitData() {
    this.onNewData.emit(this.value);
  }
}
