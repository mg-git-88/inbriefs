import { Http, HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { RequestModel } from './news-model';

@Injectable()
export class NewsAPIService {
    private apiUrl = 'https://newsapi.org/v2/'; // top-headlines?' + 'country=in&' + 'apiKey=' + environment.newsApiKey;
    
    constructor(private http: HttpClient) { }

    getNewsFeed(requestParams: RequestModel) {
        return requestParams.q ? (this.http.get(this.apiUrl 
            + requestParams.endpointType
            + "?q="
            + requestParams.q
            + "&language="
            + requestParams.language
            + "&apiKey="
            + environment.newsApiKey)) 
            : 
            (this.http.get(this.apiUrl 
            + requestParams.endpointType
            + "?country="
            + requestParams.country
            + "&category="
            + requestParams.category
            + "&apiKey="
            + environment.newsApiKey)
            );
    }
}