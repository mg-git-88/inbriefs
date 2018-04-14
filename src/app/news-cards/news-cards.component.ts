import { Component, OnInit } from '@angular/core';
import { NewsAPIService } from '../news.apiservice';
import { NewsFeedModel, RequestModel } from '../news-model';

declare const M: any;

@Component({
  selector: 'app-news-cards',
  templateUrl: './news-cards.component.html',
  styleUrls: ['./news-cards.component.css']
})
export class NewsCardsComponent implements OnInit {

  spinner: boolean = false;
  requestParams: RequestModel;
  newsFeed: NewsFeedModel;
  searchTxt: string;
  elem: any;
  instance: any;
  constructor(private newsApiService: NewsAPIService) {
    this.newsFeed = new NewsFeedModel();
    this.requestParams = new RequestModel();
  }

  ngOnInit() {
    this.fetchNews("");
    this.elem = document.querySelector('.sidenav');
    this.instance = M.Sidenav.init(this.elem);
  }

  fetchNews(category) {
    this.spinner = true;
    if (!this.requestParams.q) {
      this.requestParams.endpointType = "top-headlines";
      this.requestParams.pageSize = 30;
      this.requestParams.category = category;
      this.requestParams.country = "in";
    }
    else {
      this.requestParams.endpointType = "everything";
    }
    this.newsApiService.getNewsFeed(this.requestParams).subscribe((data) => {
      this.newsFeed.status = data['status'];
      this.newsFeed.totalResults = data['totalResults'];
      this.newsFeed.articles = data['articles'];
      this.spinner = false;
      this.requestParams.q = null;
    });
  }

  getCategory(category) {
    this.fetchNews(category);
    this.instance.close();
  }

  resetSearch() {
    this.searchTxt = "";
  }

  getSearchResult() {
    this.requestParams.q = this.searchTxt;
    this.fetchNews("");
    this.resetSearch();
    this.instance.close();
  }
}
