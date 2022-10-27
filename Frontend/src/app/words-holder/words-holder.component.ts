import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  WordsService,
  WordI,
  RankI,
  ScoreI,
} from './../services/words.service';

@Component({
  selector: 'app-words-holder',
  templateUrl: './words-holder.component.html',
  styleUrls: ['./words-holder.component.css'],
})
export class WordsHolderComponent implements OnInit {
  words: any[] = [{ id: 1, word: 'word', pos: 'pos' }];
  poses: string[] = ['verb', 'adverb', 'adjective', 'noun'];
  score: ScoreI = { clientScore: 0 };
  rank: RankI = { clientRank: 0 };
  currentIndex: number = 0;
  currentClass: string = ' ';
  isOver: boolean = false;
  @Output() testOver = new EventEmitter();

  constructor(service: WordsService) {
    service.getWords().subscribe((res: any[]) => {
      this.words = [...res];
    });
  }

  ngOnInit(): void {}

  public checkWord(condition: boolean): void {
    let timeout: any;
    let currentWord: any = this.currentIndex + 1;
    if (condition) {
      this.score.clientScore += 10;
      this.currentClass = 'right-answer';
      timeout = setTimeout(() => {
        if (this.currentIndex === currentWord) this.currentClass = ' ';
        clearTimeout(timeout);
      }, 1000);
    } else {
      this.currentClass = 'wrong-answer';
      timeout = setTimeout(() => {
        if (this.currentIndex === currentWord) this.currentClass = ' ';
        clearTimeout(timeout);
      }, 1000);
    }
    if (this.currentIndex > this.words.length - 2) {
      this.isOver = true;
      this.onComplete();
      this.currentIndex++;
      return;
    }
    this.currentIndex++;
  }

  public skip(): void {
    if (this.currentIndex > this.words.length - 2) {
      this.isOver = true;
      this.onComplete();
      return;
    } else {
      let currentWord: any = this.currentIndex + 1;
      let timeout = setTimeout(() => {
        if (this.currentIndex === currentWord) this.currentClass = ' ';
        clearTimeout(timeout);
      }, 1000);
      this.currentIndex++;
    }
  }

  onComplete() {
    let timeout: any;
    timeout = setTimeout(() => {
      this.isOver = true;
      this.testOver.emit({ ...this.score });
      clearTimeout(timeout);
    }, 1000);
  }
}
