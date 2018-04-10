import { Http, HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewsAPIService {
    private apiUrl = 'https://newsapi.org/v2/top-headlines?' + 'country=in&' + 'apiKey=67a5f10a0e5543c78aa786902c18a9df';
    constructor(private http: HttpClient) {

    }

    getNewsFeed() {
        return this.http.get(this.apiUrl);
    }
}