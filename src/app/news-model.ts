export class NewsFeedModel {
    status: string;
    totalResults: number;
    articles: ArticleModel[];
}

export class ArticleSource {
    id: string;
    name: string;
}

export class ArticleModel {
    source: ArticleSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
}
