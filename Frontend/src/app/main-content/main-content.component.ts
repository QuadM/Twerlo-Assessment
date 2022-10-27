import { Component, OnInit } from '@angular/core';
import { WordsService } from '../services/words.service';
import { ScoreI } from './../services/words.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
  isTestOn: boolean = false;
  isInit: boolean = true;
  score: any;
  rank: number | undefined;

  constructor(public service: WordsService) {}

  scoreClaimed(score: ScoreI) {
    this.service.postRank(score).subscribe((res) => {
      this.rank = res.body.clientRank;
    });
  }

  ngOnInit(): void {}
}
