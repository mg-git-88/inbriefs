import { Component, OnInit } from '@angular/core';
import { NewsAPIService } from '../news.apiservice';
import { NewsFeedModel } from '../news-model';

declare const M: any;

@Component({
  selector: 'app-news-cards',
  templateUrl: './news-cards.component.html',
  styleUrls: ['./news-cards.component.css']
})
export class NewsCardsComponent implements OnInit {
  newsFeed: NewsFeedModel = new NewsFeedModel();
  constructor(private newsApiService: NewsAPIService) { }

  ngOnInit() {
    this.fetchNews();
    const elem = document.querySelector('.sidenav');
    const instance = M.Sidenav.init(elem);
  }

  fetchNews() {
    this.newsApiService.getNewsFeed()
      .subscribe(data => {
        this.newsFeed.status = data['status'],
          this.newsFeed.totalResults = data['totalResults'],
          this.newsFeed.articles = data['articles']
      });
  }

}
