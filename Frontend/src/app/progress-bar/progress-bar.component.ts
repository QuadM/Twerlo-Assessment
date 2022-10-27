import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  inputs: [
    'currentValue',
    'callback',
    'isPercent',
    'isTimer',
    'maxValue',
    'skip',
    'isOver',
  ],
})
export class ProgressBarComponent implements OnInit {
  currentValue: number = 0;
  isPercent: boolean = false;
  isTimer: boolean = false;
  maxValue: number = 0;
  interval: any = [];
  callback: any;
  skip: any;
  isOver: boolean = false;
  @Output() timeover: any = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    if (this.callback) {
      this.callback(this.currentValue, this.maxValue);
    }
    if (this.isOver) {
      clearInterval(this.interval);
    }
    if (this.isTimer) {
      this.currentValue = this.maxValue;
      this.interval = setInterval(() => {
        if (this.currentValue > 0 && !this.isOver) {
          this.currentValue--;
        } else {
          this.timeover.emit('true');
          clearInterval(this.interval);
        }
      }, 1000);
    }
  }
}
