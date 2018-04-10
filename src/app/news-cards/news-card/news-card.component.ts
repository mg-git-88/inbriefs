import { Component, OnInit, Input } from '@angular/core';
import { ArticleModel } from '../../news-model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  @Input() NewsCard: ArticleModel;
  constructor() { }

  ngOnInit() {
  }

}
