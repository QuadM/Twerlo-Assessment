import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-init-display',
  templateUrl: './init-display.component.html',
  styleUrls: ['./init-display.component.css'],
})
export class InitDisplayComponent implements OnInit {
  @Input() isInit: boolean | undefined;
  @Input() rank: any;
  @Output() startTest: any = new EventEmitter();

  onStart() {
    this.startTest.emit('true');
  }
  ngOnInit(): void {}
}
