import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { WordCardComponent } from './word-card/word-card.component';
import { PosCardComponent } from './pos-card/pos-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { InitDisplayComponent } from './init-display/init-display.component';
import { WordsHolderComponent } from './words-holder/words-holder.component';

import { WordsService } from './services/words.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContentComponent,
    WordCardComponent,
    PosCardComponent,
    ProgressBarComponent,
    WordsHolderComponent,
    InitDisplayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [WordsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
