import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.css'],
})
export class WordCardComponent implements OnInit {
  poses: string[] = ['verb', 'adverb', 'adjective', 'noun'];

  @Input() word: any = { id: 1, word: 'word', pos: 'pos' };
  @Input() checkWord: any;
  @Input() skip: any;

  constructor() {}

  ngOnInit(): void {}

  onClick(s: string): void {
    console.log(s);
  }

  onPosSelect(pos: string): void {
    this.checkWord(this.word.word === pos);
  }

  onSkip(): void {
    this.skip();
  }

  // increaseProgress = (current: number, max: number) => {
  //   current < max && current++;
  // };
}
