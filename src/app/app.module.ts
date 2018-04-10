import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsCardsComponent } from './news-cards/news-cards.component';
import { NewsCardComponent } from './news-cards/news-card/news-card.component';
import { NewsAPIService } from './news.apiservice';


@NgModule({
  declarations: [
    AppComponent,
    NewsCardsComponent,
    NewsCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [NewsAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
